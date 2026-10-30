'use client';

import React, { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    OrbitControls,
    useTexture,
    ContactShadows,
    Center,
    Bounds,
    RoundedBox,
    Environment,
    Lightformer,
    useProgress,
} from '@react-three/drei';
import * as THREE from 'three';

// Original 26ft box truck built from primitives (units are meters).
// +z is the front of the truck, +y is up, the ground is y = 0.
const BOX = { length: 7.92, width: 2.59, height: 2.55, floor: 1.12, rear: -5.2 };
BOX.front = BOX.rear + BOX.length;
BOX.centerZ = (BOX.rear + BOX.front) / 2;
BOX.top = BOX.floor + BOX.height;

const CAB = { length: 1.8, width: 2.35, bottom: 1.05, top: 2.9 };
CAB.back = BOX.front + 0.12;
CAB.front = CAB.back + CAB.length;
CAB.centerZ = (CAB.back + CAB.front) / 2;

const HOOD = { length: 1.6, width: 2.05, bottom: 1.0, top: 1.95 };
HOOD.front = CAB.front + HOOD.length;

const WHEEL = { radius: 0.5, width: 0.32 };
const AXLE = { front: CAB.front + 0.62, rear: BOX.rear + 3.2 };

// Liftgate platform angle: folded up against the door, or lowered to dock height.
const LIFTGATE_STOWED = Math.PI / 2;
const LIFTGATE_DEPLOYED = 0.02;

const PRESET_ROTATION = {
    front: 0.12,
    side: -Math.PI / 4,
    rear: Math.PI + 0.35,
};

function isWebGLSupported() {
    if (typeof window === 'undefined') return true;
    try {
        const canvas = document.createElement('canvas');
        return Boolean(
            window.WebGLRenderingContext &&
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl') || canvas.getContext('webgl2'))
        );
    } catch {
        return false;
    }
}

function CanvasLoader() {
    const { active, progress } = useProgress();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (!active && progress === 100) {
            const timer = setTimeout(() => setVisible(false), 450);
            return () => clearTimeout(timer);
        } else {
            setVisible(true);
        }
    }, [active, progress]);

    if (!visible) return null;

    return (
        <div
            className={`absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#080C10]/85 backdrop-blur-sm transition-opacity duration-500 pointer-events-none ${
                !active && progress === 100 ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <div className="w-56 flex flex-col items-center gap-2.5">
                <div className="flex items-center justify-between w-full text-xs font-mono tracking-wider text-slate-300">
                    <span className="text-sky-400 font-bold uppercase">Loading Fleet Assets</span>
                    <span className="font-semibold text-slate-200">{Math.round(progress)}%</span>
                </div>
                {/* Thin Cyan Progress Bar */}
                <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-sky-500 transition-all duration-200 ease-out rounded-full shadow-[0_0_10px_rgba(14,165,233,0.7)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}

function useTruckMaterials() {
    return useMemo(
        () => ({
            box: new THREE.MeshStandardMaterial({ color: '#EEF2F6', roughness: 0.5, metalness: 0.05 }),
            door: new THREE.MeshStandardMaterial({ color: '#DCE2E9', roughness: 0.45, metalness: 0.15 }),
            trim: new THREE.MeshStandardMaterial({ color: '#B9C2CC', roughness: 0.3, metalness: 0.85 }),
            paint: new THREE.MeshPhysicalMaterial({
                color: '#16365C',
                roughness: 0.35,
                metalness: 0.4,
                clearcoat: 1,
                clearcoatRoughness: 0.08,
            }),
            glass: new THREE.MeshPhysicalMaterial({ color: '#0A121B', roughness: 0.05, metalness: 0.2, clearcoat: 1 }),
            rubber: new THREE.MeshStandardMaterial({ color: '#16191D', roughness: 0.92 }),
            rim: new THREE.MeshStandardMaterial({ color: '#C4CBD3', roughness: 0.25, metalness: 0.9 }),
            chassis: new THREE.MeshStandardMaterial({ color: '#1F242B', roughness: 0.75, metalness: 0.3 }),
            chrome: new THREE.MeshStandardMaterial({ color: '#E2E8F0', roughness: 0.15, metalness: 1 }),
            groove: new THREE.MeshStandardMaterial({ color: '#8E99A5', roughness: 0.6 }),
            deck: new THREE.MeshStandardMaterial({ color: '#A3ADB8', roughness: 0.55, metalness: 0.7 }),
            headlight: new THREE.MeshStandardMaterial({ color: '#F1F8FF', emissive: '#DCEFFF', emissiveIntensity: 1.6 }),
            amber: new THREE.MeshStandardMaterial({ color: '#F59E0B', emissive: '#F59E0B', emissiveIntensity: 1.2 }),
            red: new THREE.MeshStandardMaterial({ color: '#DC2626', emissive: '#EF4444', emissiveIntensity: 1.3 }),
            hazard: new THREE.MeshStandardMaterial({ color: '#FACC15', roughness: 0.5 }),
        }),
        []
    );
}

function Part({ size, position, rotation, material }) {
    return (
        <mesh position={position} rotation={rotation} material={material}>
            <boxGeometry args={size} />
        </mesh>
    );
}

function Wheel({ position, side, mats }) {
    // Cylinder axis runs along local y; rotating about z maps it onto world x, so local -y faces outward on side +1.
    const out = -side;
    return (
        <group position={position} rotation={[0, 0, Math.PI / 2]}>
            <mesh material={mats.rubber}>
                <cylinderGeometry args={[WHEEL.radius, WHEEL.radius, WHEEL.width, 40]} />
            </mesh>
            <mesh material={mats.rim} position={[0, out * (WHEEL.width / 2 + 0.004), 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.02, 32]} />
            </mesh>
            <mesh material={mats.chrome} position={[0, out * (WHEEL.width / 2 + 0.03), 0]}>
                <cylinderGeometry args={[0.1, 0.12, 0.06, 20]} />
            </mesh>
        </group>
    );
}

function Wheels({ mats }) {
    const y = WHEEL.radius;
    return (
        <group>
            {[-1, 1].map((s) => (
                <group key={s}>
                    <Wheel side={s} mats={mats} position={[s * 1.0, y, AXLE.front]} />
                    <Wheel side={s} mats={mats} position={[s * 1.04, y, AXLE.rear]} />
                    <Wheel side={s} mats={mats} position={[s * 0.7, y, AXLE.rear]} />
                    {/* Front fender arch */}
                    <mesh material={mats.paint} position={[s * 1.0, y, AXLE.front]} rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.62, 0.62, 0.44, 32, 1, true, 0, Math.PI]} />
                    </mesh>
                    {/* Rear mud flap */}
                    <Part material={mats.chassis} size={[0.62, 0.62, 0.02]} position={[s * 0.88, 0.48, AXLE.rear - 0.72]} />
                </group>
            ))}
            {/* Axles and differential */}
            <mesh material={mats.chassis} position={[0, y, AXLE.front]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.07, 0.07, 1.9, 12]} />
            </mesh>
            <mesh material={mats.chassis} position={[0, y, AXLE.rear]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.08, 0.08, 1.9, 12]} />
            </mesh>
            <mesh material={mats.chassis} position={[0, y, AXLE.rear]}>
                <sphereGeometry args={[0.22, 20, 16]} />
            </mesh>
        </group>
    );
}

function Chassis({ mats }) {
    const railLength = HOOD.front - BOX.rear - 0.1;
    const railZ = (BOX.rear + HOOD.front) / 2;
    const sillHeight = BOX.floor - 0.88;
    const crossmembers = Array.from({ length: 19 }, (_, i) => BOX.rear + 0.2 + i * 0.42);

    return (
        <group>
            {[-1, 1].map((s) => (
                <group key={s}>
                    <Part material={mats.chassis} size={[0.12, 0.26, railLength]} position={[s * 0.48, 0.75, railZ]} />
                    <Part
                        material={mats.chassis}
                        size={[0.14, sillHeight, BOX.length]}
                        position={[s * 0.48, 0.88 + sillHeight / 2, BOX.centerZ]}
                    />
                </group>
            ))}
            {crossmembers.map((z) => (
                <Part key={z} material={mats.chassis} size={[BOX.width - 0.04, 0.07, 0.08]} position={[0, BOX.floor - 0.035, z]} />
            ))}

            {/* Fuel tank (driver side) and battery box (curb side) */}
            <mesh material={mats.trim} position={[-0.95, 0.75, BOX.front - 0.9]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.28, 0.28, 1.1, 28]} />
            </mesh>
            <Part material={mats.chassis} size={[0.45, 0.42, 0.7]} position={[0.95, 0.75, BOX.front - 0.8]} />
        </group>
    );
}

function Cab({ mats }) {
    const cabHeight = CAB.top - CAB.bottom;
    const hoodHeight = HOOD.top - HOOD.bottom;
    const hoodZ = (CAB.front + HOOD.front) / 2;
    const grilleY = 1.45;

    return (
        <group>
            <RoundedBox
                args={[CAB.width, cabHeight, CAB.length]}
                radius={0.14}
                smoothness={4}
                position={[0, CAB.bottom + cabHeight / 2, CAB.centerZ]}
                material={mats.paint}
            />

            {/* Windshield and side glass */}
            <Part material={mats.glass} size={[2.0, 0.78, 0.03]} position={[0, 2.38, CAB.front + 0.005]} rotation={[-0.08, 0, 0]} />
            {[-1, 1].map((s) => (
                <group key={s}>
                    <Part material={mats.glass} size={[0.03, 0.7, 1.0]} position={[s * (CAB.width / 2 + 0.005), 2.38, CAB.centerZ + 0.25]} />
                    {/* Door seams and handle */}
                    <Part material={mats.chassis} size={[0.012, 1.55, 0.015]} position={[s * (CAB.width / 2 + 0.003), 1.95, CAB.back + 0.22]} />
                    <Part material={mats.chassis} size={[0.012, 1.55, 0.015]} position={[s * (CAB.width / 2 + 0.003), 1.95, CAB.front - 0.12]} />
                    <Part material={mats.chrome} size={[0.02, 0.04, 0.2]} position={[s * (CAB.width / 2 + 0.01), 1.92, CAB.back + 0.42]} />
                    {/* Mirror arm and head */}
                    <Part material={mats.chassis} size={[0.36, 0.04, 0.04]} position={[s * (CAB.width / 2 + 0.17), 2.3, CAB.front - 0.15]} />
                    <Part material={mats.chassis} size={[0.07, 0.5, 0.2]} position={[s * (CAB.width / 2 + 0.37), 2.25, CAB.front - 0.15]} />
                    {/* Entry step */}
                    <Part material={mats.chassis} size={[0.3, 0.06, 0.55]} position={[s * 1.1, 0.72, CAB.centerZ + 0.2]} />
                </group>
            ))}

            {/* Roof clearance lights */}
            {[-0.4, -0.2, 0, 0.2, 0.4].map((x) => (
                <Part key={x} material={mats.amber} size={[0.1, 0.05, 0.05]} position={[x, CAB.top + 0.02, CAB.front - 0.14]} />
            ))}

            {/* Hood, engine bay and grille */}
            <RoundedBox
                args={[HOOD.width, hoodHeight, HOOD.length]}
                radius={0.12}
                smoothness={4}
                position={[0, HOOD.bottom + hoodHeight / 2, hoodZ]}
                rotation={[0.04, 0, 0]}
                material={mats.paint}
            />
            <Part material={mats.chassis} size={[1.6, 0.42, HOOD.length]} position={[0, 0.8, hoodZ]} />
            <Part material={mats.chrome} size={[1.3, 0.78, 0.05]} position={[0, grilleY, HOOD.front]} />
            <Part material={mats.chassis} size={[1.16, 0.64, 0.05]} position={[0, grilleY, HOOD.front + 0.012]} />
            {[-0.21, -0.07, 0.07, 0.21].map((dy) => (
                <Part key={dy} material={mats.chrome} size={[1.16, 0.035, 0.04]} position={[0, grilleY + dy, HOOD.front + 0.03]} />
            ))}
            {[-1, 1].map((s) => (
                <Part key={s} material={mats.headlight} size={[0.3, 0.16, 0.04]} position={[s * 0.8, 1.5, HOOD.front + 0.01]} />
            ))}

            {/* Front bumper */}
            <RoundedBox args={[2.45, 0.3, 0.3]} radius={0.06} position={[0, 0.75, HOOD.front + 0.1]} material={mats.chrome} />
        </group>
    );
}

function CargoBox({ mats }) {
    const doorHeight = BOX.height - 0.38;
    const doorWidth = BOX.width - 0.22;
    const doorBottom = BOX.floor + 0.16;
    const slats = Array.from({ length: 10 }, (_, i) => doorBottom + ((i + 1) * doorHeight) / 11);

    return (
        <group>
            <RoundedBox
                args={[BOX.width, BOX.height, BOX.length]}
                radius={0.035}
                smoothness={3}
                position={[0, BOX.floor + BOX.height / 2, BOX.centerZ]}
                material={mats.box}
            />

            {/* Aluminum rub rail, top rail and corner posts */}
            <Part material={mats.trim} size={[BOX.width + 0.04, 0.12, BOX.length + 0.02]} position={[0, BOX.floor + 0.06, BOX.centerZ]} />
            <Part material={mats.trim} size={[BOX.width + 0.03, 0.07, BOX.length + 0.02]} position={[0, BOX.top - 0.035, BOX.centerZ]} />
            {[-1, 1].map((s) => (
                <group key={s}>
                    <Part material={mats.trim} size={[0.06, BOX.height, 0.06]} position={[s * (BOX.width / 2), BOX.floor + BOX.height / 2, BOX.front]} />
                    <Part material={mats.trim} size={[0.1, BOX.height, 0.12]} position={[s * (BOX.width / 2 - 0.03), BOX.floor + BOX.height / 2, BOX.rear]} />
                    {/* Side marker lights */}
                    <Part material={mats.amber} size={[0.04, 0.08, 0.12]} position={[s * (BOX.width / 2 + 0.02), BOX.floor + 0.25, BOX.front - 0.18]} />
                    <Part material={mats.red} size={[0.04, 0.08, 0.12]} position={[s * (BOX.width / 2 + 0.02), BOX.floor + 0.25, BOX.rear + 0.18]} />
                </group>
            ))}

            {/* Rear frame, roll-up door and lights */}
            <Part material={mats.trim} size={[BOX.width, 0.22, 0.1]} position={[0, BOX.top - 0.11, BOX.rear - 0.01]} />
            <Part material={mats.trim} size={[BOX.width + 0.04, 0.16, 0.14]} position={[0, BOX.floor + 0.08, BOX.rear - 0.02]} />
            <Part material={mats.door} size={[doorWidth, doorHeight, 0.02]} position={[0, doorBottom + doorHeight / 2, BOX.rear - 0.02]} />
            {slats.map((y) => (
                <Part key={y} material={mats.groove} size={[doorWidth, 0.012, 0.025]} position={[0, y, BOX.rear - 0.032]} />
            ))}
            <Part material={mats.chrome} size={[0.3, 0.05, 0.05]} position={[0, doorBottom + 0.22, BOX.rear - 0.045]} />
            {[-0.25, 0, 0.25].map((x) => (
                <Part key={x} material={mats.red} size={[0.1, 0.05, 0.04]} position={[x, BOX.top - 0.11, BOX.rear - 0.07]} />
            ))}
            <Part material={mats.chassis} size={[BOX.width - 0.1, 0.16, 0.1]} position={[0, BOX.floor - 0.1, BOX.rear + 0.02]} />
            {[-1, 1].map((s) => (
                <Part key={s} material={mats.red} size={[0.24, 0.12, 0.03]} position={[s * (BOX.width / 2 - 0.25), BOX.floor - 0.1, BOX.rear - 0.04]} />
            ))}

            {/* Rear underride (ICC) bumper */}
            <Part material={mats.chassis} size={[2.2, 0.12, 0.12]} position={[0, 0.5, BOX.rear + 0.12]} />
            {[-0.6, 0.6].map((x) => (
                <Part key={x} material={mats.chassis} size={[0.08, 0.5, 0.08]} position={[x, 0.78, BOX.rear + 0.12]} />
            ))}
        </group>
    );
}

function Liftgate({ mats, deployed }) {
    const pivotRef = useRef();
    const depth = 1.6;

    useFrame((state, delta) => {
        if (!pivotRef.current) return;
        pivotRef.current.rotation.x = THREE.MathUtils.damp(
            pivotRef.current.rotation.x,
            deployed ? LIFTGATE_DEPLOYED : LIFTGATE_STOWED,
            3.0,
            delta
        );
    });

    return (
        <group>
            {/* Rail-gate columns */}
            {[-1, 1].map((s) => (
                <Part key={s} material={mats.chassis} size={[0.12, 0.95, 0.12]} position={[s * 1.2, 0.7, BOX.rear - 0.12]} />
            ))}
            <group ref={pivotRef} position={[0, BOX.floor, BOX.rear - 0.14]} rotation={[LIFTGATE_STOWED, 0, 0]}>
                <Part material={mats.deck} size={[2.3, 0.09, depth]} position={[0, 0, -depth / 2]} />
                <Part material={mats.hazard} size={[2.3, 0.1, 0.06]} position={[0, 0, -depth + 0.03]} />
            </group>
        </group>
    );
}

function useLetteringTexture(text) {
    const texture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 320;
        const tex = new THREE.CanvasTexture(canvas);
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = 8;
        return tex;
    }, []);

    useEffect(() => {
        let cancelled = false;
        const canvas = texture.image;
        const draw = () => {
            if (cancelled) return;
            const ctx = canvas.getContext('2d');
            // Use the page's own (self-hosted) font stack so no font is fetched from a CDN.
            const family = getComputedStyle(document.body).fontFamily || 'sans-serif';
            let size = 230;
            ctx.font = `800 ${size}px ${family}`;
            while (ctx.measureText(text).width > canvas.width * 0.96 && size > 40) {
                size -= 6;
                ctx.font = `800 ${size}px ${family}`;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0B1117';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);
            texture.needsUpdate = true;
        };
        draw();
        document.fonts?.ready.then(draw);
        return () => {
            cancelled = true;
        };
    }, [texture, text]);

    useEffect(() => () => texture.dispose(), [texture]);

    return texture;
}

function FrontEagleBanner() {
    const flagTexture = useTexture('/images/truck-flag-eagle.jpg');
    const y = (CAB.top + BOX.top) / 2 + 0.01;

    return (
        <group position={[0, y, BOX.front + 0.004]}>
            {/* American Flag & Bald Eagle Artwork Banner */}
            <mesh position={[0, 0, 0.002]}>
                <planeGeometry args={[2.34, 0.68]} />
                <meshStandardMaterial
                    map={flagTexture}
                    roughness={0.35}
                    metalness={0.1}
                    polygonOffset
                    polygonOffsetFactor={-2}
                    polygonOffsetUnits={-2}
                />
            </mesh>

            {/* Subtle Metallic Frame Bezel */}
            <mesh position={[0, 0, 0]}>
                <planeGeometry args={[2.37, 0.71]} />
                <meshStandardMaterial
                    color="#334155"
                    roughness={0.2}
                    metalness={0.8}
                    polygonOffset
                    polygonOffsetFactor={-1}
                    polygonOffsetUnits={-1}
                />
            </mesh>
        </group>
    );
}

function CargoBoxBranding() {
    const lettering = useLetteringTexture('UMAJA LOGISTICS');

    return (
        <group>
            {[-1, 1].map((s) => (
                <mesh
                    key={s}
                    position={[s * (BOX.width / 2 + 0.004), BOX.floor + BOX.height * 0.55, BOX.centerZ]}
                    rotation={[0, (s * Math.PI) / 2, 0]}
                >
                    <planeGeometry args={[6.4, 1.0]} />
                    <meshStandardMaterial
                        map={lettering}
                        transparent
                        roughness={0.5}
                        polygonOffset
                        polygonOffsetFactor={-2}
                        polygonOffsetUnits={-2}
                    />
                </mesh>
            ))}
        </group>
    );
}

function BoxTruck({ activePreset }) {
    const mats = useTruckMaterials();

    useEffect(() => () => Object.values(mats).forEach((m) => m.dispose()), [mats]);

    return (
        <group>
            <Chassis mats={mats} />
            <Wheels mats={mats} />
            <Cab mats={mats} />
            <CargoBox mats={mats} />
            <Liftgate mats={mats} deployed={activePreset === 'rear'} />
            <FrontEagleBanner />
            <CargoBoxBranding />
        </group>
    );
}

function Model({ activePreset }) {
    const groupRef = useRef();

    // Smooth lerp transition based on activePreset
    useFrame((state, delta) => {
        if (!groupRef.current) return;
        const targetRotation = PRESET_ROTATION[activePreset] ?? PRESET_ROTATION.front;

        groupRef.current.rotation.y = THREE.MathUtils.damp(
            groupRef.current.rotation.y,
            targetRotation,
            4.0,
            delta
        );
    });

    return (
        <group ref={groupRef} rotation={[0, PRESET_ROTATION.front, 0]}>
            <Center top>
                <BoxTruck activePreset={activePreset} />
            </Center>
        </group>
    );
}

useTexture.preload('/images/truck-flag-eagle.jpg');

export default function TruckCanvas({ activePreset = 'front' }) {
    const [hasWebGL, setHasWebGL] = useState(true);

    useEffect(() => {
        setHasWebGL(isWebGLSupported());
    }, []);

    if (!hasWebGL) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#080C10] border border-white/[0.08] rounded-xl p-6 text-center text-slate-300">
                <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                </div>
                <p className="text-sm font-bold text-white mb-1">3D Fleet Viewer Unavailable</p>
                <p className="text-xs text-slate-400 max-w-xs font-mono">
                    WebGL hardware acceleration is disabled or blocked in your browser environment.
                </p>
            </div>
        );
    }

    return (
        <div
            className="relative w-full h-full cursor-grab active:cursor-grabbing select-none pointer-events-auto"
            role="img"
            aria-label="Interactive 3D model of a 26 ft box truck with a hydraulic liftgate. Drag to rotate."
        >
            {/* Sleek Minimalist Progress Loader */}
            <CanvasLoader />

            <Canvas
                camera={{ position: [5.2, 1.9, 5.6], fov: 36 }}
                dpr={[1, 1.5]}
                gl={{
                    antialias: true,
                    alpha: true,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.2,
                    powerPreference: 'high-performance',
                }}
            >
                {/* 100% Self-Contained Studio Lighting Rig (Zero External CDN Calls) */}
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 15, 10]} intensity={2.0} />
                <directionalLight position={[-10, 10, -10]} intensity={0.9} color="#E0F2FE" />
                <directionalLight position={[0, -10, 0]} intensity={0.3} />
                <hemisphereLight skyColor="#FFFFFF" groundColor="#0F172A" intensity={0.6} />

                {/* Local light-former environment for reflections (rendered in-scene, no HDR download) */}
                <Environment resolution={256} frames={1}>
                    <Lightformer intensity={2} position={[0, 6, -9]} scale={[12, 6, 1]} />
                    <Lightformer intensity={1.4} rotation-y={Math.PI / 2} position={[-8, 2, 0]} scale={[20, 1.2, 1]} />
                    <Lightformer intensity={1.4} rotation-y={-Math.PI / 2} position={[8, 2, 0]} scale={[20, 1.2, 1]} />
                    <Lightformer intensity={1.2} rotation-x={Math.PI / 2} position={[0, 8, 0]} scale={[10, 10, 1]} />
                    <Lightformer form="ring" color="#38BDF8" intensity={2.5} scale={3} position={[-10, 3, -12]} />
                </Environment>

                <Suspense fallback={null}>
                    {/* Auto-scaling and Centering Bounds */}
                    <Bounds fit clip observe margin={1.1}>
                        <Model activePreset={activePreset} />
                    </Bounds>

                    <ContactShadows
                        position={[0, 0, 0]}
                        opacity={0.85}
                        scale={22}
                        blur={2.4}
                        far={4.5}
                        color="#000000"
                    />
                </Suspense>

                <OrbitControls
                    makeDefault
                    enableZoom={false}
                    enablePan={false}
                    enableDamping={true}
                    dampingFactor={0.05}
                    maxPolarAngle={Math.PI / 2 - 0.05}
                    minPolarAngle={Math.PI / 4.2}
                    rotateSpeed={0.8}
                />
            </Canvas>
        </div>
    );
}

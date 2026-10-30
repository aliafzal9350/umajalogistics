import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

export const alt = `${SITE.legalName}: 26ft box truck and expedited freight carrier`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '72px 80px',
                    background: 'linear-gradient(135deg, #080C10 0%, #0B1622 60%, #0C2236 100%)',
                    color: '#F8FAFC',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: 30, fontWeight: 700, color: '#38BDF8', letterSpacing: 4 }}>
                        {`MC# ${SITE.mcNumber}`}
                    </div>
                    <div style={{ fontSize: 96, fontWeight: 900, marginTop: 16, letterSpacing: -2 }}>UMAJA LOGISTICS</div>
                    <div style={{ fontSize: 44, fontWeight: 700, marginTop: 8, color: '#CBD5E1' }}>{SITE.tagline}</div>
                </div>
                <div style={{ display: 'flex', fontSize: 30, color: '#94A3B8' }}>
                    26ft dock-high box trucks • Maxon liftgates • Expedited USA • Daily JFK air cargo
                </div>
            </div>
        ),
        size
    );
}

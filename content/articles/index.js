// Registry of Resources articles. To publish a new article, add a file in this folder that exports
// `meta` and a default component, then list it here (newest first).
import Article26ft, { meta as meta26ft } from './26ft-box-truck-capacity';
import ArticleLiftgate, { meta as metaLiftgate } from './liftgate-delivery-guide';
import ArticlePallets, { meta as metaPallets } from './prepare-palletized-freight';
import ArticleExpedited, { meta as metaExpedited } from './expedited-vs-ltl';
import ArticleJfk, { meta as metaJfk } from './jfk-air-cargo-trucking';
import ArticleCredentials, { meta as metaCredentials } from './twic-tsa-credentials-explained';
import ArticleVerify, { meta as metaVerify } from './verify-motor-carrier';
import ArticlePaperwork, { meta as metaPaperwork } from './bol-rate-confirmation-pod';

export const ARTICLES = [
    { ...metaJfk, Body: ArticleJfk },
    { ...meta26ft, Body: Article26ft },
    { ...metaLiftgate, Body: ArticleLiftgate },
    { ...metaExpedited, Body: ArticleExpedited },
    { ...metaVerify, Body: ArticleVerify },
    { ...metaCredentials, Body: ArticleCredentials },
    { ...metaPallets, Body: ArticlePallets },
    { ...metaPaperwork, Body: ArticlePaperwork },
];

export function getArticle(slug) {
    return ARTICLES.find((article) => article.slug === slug) ?? null;
}

export function formatDate(isoDate) {
    return new Date(`${isoDate}T12:00:00Z`).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
    });
}

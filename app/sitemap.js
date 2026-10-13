const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://zehavah.sites.diamantsolutions.co.uk';
export default function sitemap() {
  return ['/', '/your-therapy', '/about-me', '/insomnia-healing', '/fees', '/articles', '/contact'].map(path => ({ url: origin + (path === '/' ? '' : path), changeFrequency: 'monthly' }));
}

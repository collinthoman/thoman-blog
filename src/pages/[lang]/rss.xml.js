import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

const supportedLangs = ['en', 'nl'];

export function getStaticPaths() {
  return supportedLangs.map((lang) => ({ params: { lang } }));
}

export async function GET(context) {
  const lang = context.params.lang;
  const allPosts = await getCollection('blog');

  // For English: only English posts. For Dutch: prefer Dutch, fall back to English.
  let posts;
  if (lang === 'nl') {
    const byKey = new Map();
    for (const post of allPosts) {
      const key = post.data.translationKey ?? post.id;
      const existing = byKey.get(key);
      if (!existing || (post.data.lang ?? 'en') === 'nl') {
        byKey.set(key, post);
      }
    }
    posts = [...byKey.values()];
  } else {
    posts = allPosts.filter((p) => (p.data.lang ?? 'en') === 'en');
  }

  const titles = { en: 'Collin Thoman', nl: 'Collin Thoman' };
  const descriptions = {
    en: 'Welcome to my personal blog!',
    nl: 'Welkom op mijn persoonlijke blog!',
  };

  return rss({
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${lang}/blog/${post.id}/`,
    })),
  });
}

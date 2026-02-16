export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Only handle the root path
  if (url.pathname !== '/') {
    return context.next();
  }

  const acceptLanguage = context.request.headers.get('Accept-Language') || '';
  const lang = acceptLanguage.toLowerCase().includes('nl') ? 'nl' : 'en';

  return new Response(null, {
    status: 302,
    headers: { Location: `/${lang}/` },
  });
}

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'la'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/(la|en)/:path*'],
};

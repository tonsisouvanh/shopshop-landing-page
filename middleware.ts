import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'la'],
  defaultLocale: 'la',
});

export const config = {
  matcher: ['/', '/(la|en)/:path*'],
};

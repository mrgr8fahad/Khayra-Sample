// Absolute site origin. On Vercel this is the production domain (the custom
// domain once one is added); locally it falls back to localhost.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

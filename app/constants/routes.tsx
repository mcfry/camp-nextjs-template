export const DOMAIN =
  process.env.NODE_ENV === "production"
    ? "https://camp-strapi.onrender.com"
    : "http://localhost:1337"

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "camp-strapi.onrender.com",
      "camp-nextjs.up.railway.app",
      "res.cloudinary.com",
      "cloudinary.com"
    ]
  }
}

module.exports = nextConfig

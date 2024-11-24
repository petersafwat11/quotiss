/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // FRONTEND_SERVER: "http://localhost:3000",
    // BACKEND_SERVER: "http://localhost:5000/api",
    // STATIC_SERVER: "http://localhost:5000",

    FRONTEND_SERVER: "https://quotsis-backend-production.up.railway.app/",
    BACKEND_SERVER: "https://quotsis-backend-production.up.railway.app//api",
    STATIC_SERVER: "https://quotsis-backend-production.up.railway.app/",
  },
};

export default nextConfig;

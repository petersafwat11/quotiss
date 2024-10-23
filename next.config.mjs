/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FRONTEND_SERVER: "http://localhost:3000",
    BACKEND_SERVER: "http://localhost:5000/api",
    STATIC_SERVER: "http://localhost:5000",

    // FRONTEND_SERVER: "https://ajsports.ch",
    // BACKEND_SERVER: "https://ajsports.ch/api",
    // STATIC_SERVER: "https://ajsports.ch",
  },
};

export default nextConfig;

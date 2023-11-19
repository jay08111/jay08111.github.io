/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    basePath : isProd ? "/blog" : "",
    output: 'export',
    distDir: 'dist',
    images : { 
        unoptimized : true,
        domains: ["images.unsplash.com", "cdn.pixabay.com", "images.pexel.com"],
    }
  }
   
  module.exports = nextConfig
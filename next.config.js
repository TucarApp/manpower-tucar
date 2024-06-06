
module.exports = {
 
  enableSvg: true,
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_TUCAR_WEBSITE: process.env.NEXT_PUBLIC_TUCAR_WEBSITE,
    NEXT_PUBLIC_TUCAR_BLOG: process.env.NEXT_PUBLIC_TUCAR_BLOG,
    NEXT_PUBLIC_BLOG_TOKEN: process.env.NEXT_PUBLIC_BLOG_TOKEN,
    TUCAR_GRAPHQL: process.env.TUCAR_GRAPHQL,
    NEXT_PUBLIC_CDN: process.env.NEXT_PUBLIC_CDN,
  },
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
  webpack(config, options) {
    return config;
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  allowedDevOrigins: ["192.168.15.40"],
  

};

export default withMDX(nextConfig);
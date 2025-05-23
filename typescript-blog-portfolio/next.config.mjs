import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import matter from 'gray-matter';


/** @type {import('next').NextConfig} */
const nextConfig = {

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/PokeAPI/**",
      },
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm, matter],
    rehypePlugins: [],
  },
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)
/** @type {import('next').NextConfig} */
const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const nextConfig = {
  reactStrictMode: true,
  ...(githubPagesBasePath
    ? {
        output: 'export',
        basePath: githubPagesBasePath,
        assetPrefix: `${githubPagesBasePath}/`,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;

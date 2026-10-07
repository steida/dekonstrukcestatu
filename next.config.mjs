/** @type {import('next').NextConfig} */
export default {
  // A static site in out/, served by Cloudflare (see wrangler.jsonc).
  output: "export",
  // The export has no image optimizer.
  images: { unoptimized: true },
};

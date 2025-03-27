import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    webpack(config) {
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next/static/models/',
                        outputPath: 'static/models/',
                        name: '[name].[hash].[ext]',
                    },
                },
            ],
        })

        return config
    },
};

export default nextConfig;

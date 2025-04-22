// See https://nextjs.org/docs/pages/api-reference/config/next-config-js for more about configuration files.

import type { NextConfig } from "next";

const config = {
    reactStrictMode: true,
    webpack: (config) => {
        config.infrastructureLogging = { level: "verbose" };
        return config;
    },
    headers: async () => [
        {
            source: "/(.*)",
            headers: [
                {
                    key: "X-Content-Type-Options",
                    value: "nosniff",
                },
                {
                    key: "X-Frame-Options",
                    value: "DENY",
                },
                {
                    key: "Referrer-Policy",
                    value: "strict-origin-when-cross-origin",
                },
            ],
        },
        {
            source: "/service-worker.js",
            headers: [
                {
                    key: "Content-Type",
                    value: "application/javascript; charset=utf-8",
                },
                {
                    key: "Cache-Control",
                    value: "no-cache, no-store, must-revalidate",
                },
                {
                    key: "Content-Security-Policy",
                    value: "default-src 'self'; script-src 'self' https://storage.googleapis.com/workbox-cdn/releases/; worker-src 'self';",
                },
            ],
        },
    ],
} satisfies NextConfig;

export default config;

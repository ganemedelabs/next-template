import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        short_name: "Next Template",
        name: "Next Template",
        description: "",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "64x64 32x32 24x24 16x16",
                type: "image/x-icon",
            },
            {
                src: "/images/favicons/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/images/favicons/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        scope: "/",
        start_url: "/",
        display: "standalone",
        orientation: "portrait",
        theme_color: "#000",
        background_color: "#000",
    };
}

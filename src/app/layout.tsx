import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Next Template",
    description:
        "A Next.js template featuring TypeScript, Jest, TailwindCSS, ESLint, Prettier, Docker, PWA (Workbox), and Vercel deployment action configured to work with organization-owned repositories.",
    manifest: "/manifest.json",
    icons: {
        icon: [
            { rel: "icon", type: "image/png", sizes: "96x96", url: "/images/favicons/favicon-96x96.png" },
            { rel: "icon", type: "image/png", sizes: "32x32", url: "/images/favicons/favicon-32x32.png" },
            { rel: "icon", type: "image/png", sizes: "16x16", url: "/images/favicons/favicon-16x16.png" },
        ],
        apple: "/images/favicons/apple-touch-icon.png",
    },
};

export const viewport: Viewport = {
    themeColor: "#000",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="h-screen bg-black text-white antialiased">{children}</body>
        </html>
    );
}

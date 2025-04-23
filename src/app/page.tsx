"use client";

import Logo from "@/components/logo";
import { useEffect } from "react";
import * as serviceWorkerRegistration from "@/utils/serviceWorkerRegistration";

export default function Home() {
    useEffect(() => {
        serviceWorkerRegistration.register();
    }, []);

    return (
        <main className="relative flex h-screen items-center justify-center font-sans">
            <div className="bg-secondary absolute h-80 w-80 blur-[10rem]" />
            <div className="z-10 flex flex-col gap-3">
                <Logo />
                <h1 className="text-center">Next Template</h1>
                <p className="text-center text-lg">
                    Created by <a href="https://github.com/ganemedelabs">Ganemede Labs</a>
                </p>
                <p className="text-center text-sm">
                    <a href="https://github.com/ganemedelabs/next-template">View on GitHub</a>
                </p>
            </div>
        </main>
    );
}

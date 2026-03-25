"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-black text-white pt-24">

            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-6">

                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Earn While You{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Play & Learn
                        </span>
                    </h1>

                    <p className="text-gray-400 text-sm md:text-base">
                        Stuward is a smart gaming platform where students can compete in
                        skill-based games like Atlas, Aptitude, Reasoning, and Coding —
                        invest a small amount and win big rewards based on your performance.
                    </p>

                    {/* CTA BUTTONS */}
                    <div className="flex gap-4">

                        <button className="px-6 py-3 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition">
                            Play Now
                        </button>

                        <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
                            Explore Games
                        </button>

                    </div>

                    {/* STATS */}
                    <div className="flex gap-6 pt-4 text-sm text-gray-400">
                        <div>
                            <p className="text-white font-bold text-lg">10K+</p>
                            Players
                        </div>
                        <div>
                            <p className="text-white font-bold text-lg">₹1L+</p>
                            Rewards Won
                        </div>
                        <div>
                            <p className="text-white font-bold text-lg">4+</p>
                            Game Modes
                        </div>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="relative w-full h-62.5 md:h-100 rounded-2xl overflow-hidden border border-white/10">

                    <Image
                        src="/baner.png" // 👈 replace with your image
                        alt="Stuward Banner"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Overlay Glow */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                </div>

            </div>
        </section>
    );
}
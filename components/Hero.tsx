"use client";

import Image from "next/image";

export default function Hero() {
    // Array of symbols representing Math, Logic, Money, and the World
    const backgroundSymbols = [
        { char: "₹", left: "10%", delay: "0s", duration: "15s", size: "text-4xl", color: "text-green-500/20" },
        { char: "∑", left: "25%", delay: "2s", duration: "18s", size: "text-5xl", color: "text-cyan-500/20" },
        { char: "</>", left: "40%", delay: "5s", duration: "20s", size: "text-2xl", color: "text-blue-500/20" },
        { char: "🧠", left: "55%", delay: "1s", duration: "14s", size: "text-3xl", color: "opacity-20" },
        { char: "π", left: "70%", delay: "7s", duration: "16s", size: "text-4xl", color: "text-purple-500/20" },
        { char: "🌎", left: "85%", delay: "3s", duration: "19s", size: "text-5xl", color: "opacity-20" },
        { char: "∫", left: "15%", delay: "8s", duration: "17s", size: "text-6xl", color: "text-cyan-400/10" },
        { char: "💡", left: "80%", delay: "6s", duration: "15s", size: "text-3xl", color: "opacity-20" },
        { char: "∞", left: "45%", delay: "9s", duration: "22s", size: "text-5xl", color: "text-blue-400/20" },
        { char: "{ }", left: "5%", delay: "4s", duration: "16s", size: "text-3xl", color: "text-emerald-500/20" },
        { char: "₹", left: "95%", delay: "10s", duration: "14s", size: "text-2xl", color: "text-green-400/20" },
    ];

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-black text-white pt-24 pb-12 overflow-hidden">

            {/* 🔥 CSS ANIMATIONS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes floatUp {
                    0% { transform: translateY(100vh) rotate(0deg) scale(0.8); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-20vh) rotate(360deg) scale(1.2); opacity: 0; }
                }
                .symbol-float {
                    position: absolute;
                    bottom: -10%;
                    animation-name: floatUp;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-slide-in {
                    animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />

            {/* 🔥 ANIMATED LOGICAL BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Ambient Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-500/10 blur-[120px] rounded-full" />

                {/* Floating Symbols */}
                {backgroundSymbols.map((sym, index) => (
                    <div
                        key={index}
                        className={`symbol-float font-bold select-none ${sym.size} ${sym.color}`}
                        style={{
                            left: sym.left,
                            animationDelay: sym.delay,
                            animationDuration: sym.duration,
                        }}
                    >
                        {sym.char}
                    </div>
                ))}
            </div>

            {/* 🔥 FOREGROUND CONTENT */}
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 w-full">

                {/* LEFT CONTENT */}
                <div className="space-y-6 md:py-10">

                    {/* Badge */}
                    <div className="animate-slide-in opacity-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        Platform Live
                    </div>

                    <h1
                        className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight animate-slide-in opacity-0"
                        style={{ animationDelay: '100ms' }}
                    >
                        Earn While You{" "}
                        <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.2)] block mt-2">
                            Play & Learn
                        </span>
                    </h1>

                    <p
                        className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg animate-slide-in opacity-0"
                        style={{ animationDelay: '200ms' }}
                    >
                        Stuward is a smart gaming platform where students compete in
                        skill-based games like Atlas, Aptitude, Reasoning, and Coding.
                        Invest your intellect, and win real rewards based on performance.
                    </p>

                    {/* CTA BUTTONS */}
                    <div
                        className="flex flex-wrap gap-4 pt-2 animate-slide-in opacity-0"
                        style={{ animationDelay: '300ms' }}
                    >
                        <button className="relative group px-8 py-3.5 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all active:scale-95">
                            <span className="relative z-10">Play Now</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </button>

                        <button className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/40 transition-colors active:scale-95">
                            Explore Games
                        </button>
                    </div>

                    {/* STATS */}
                    <div
                        className="flex flex-wrap gap-8 pt-6 border-t border-white/10 mt-6 animate-slide-in opacity-0"
                        style={{ animationDelay: '400ms' }}
                    >
                        <div>
                            <p className="text-white font-black text-2xl tracking-tight">10K+</p>
                            <p className="text-cyan-400 text-sm font-medium mt-0.5">Active Players</p>
                        </div>
                        <div>
                            <p className="text-white font-black text-2xl tracking-tight">₹1L+</p>
                            <p className="text-green-400 text-sm font-medium mt-0.5">Rewards Won</p>
                        </div>
                        <div>
                            <p className="text-white font-black text-2xl tracking-tight">4+</p>
                            <p className="text-purple-400 text-sm font-medium mt-0.5">Game Modes</p>
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

                    {/* Overlay Glow & Gradients */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay" />

                    {/* Inner border for a glass effect */}
                    <div className="absolute inset-0 rounded-4xl ring-1 ring-inset ring-white/10 pointer-events-none" />

                </div>


            </div>
        </section>
    );
}
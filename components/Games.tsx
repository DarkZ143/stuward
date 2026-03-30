"use client";

import {
    Globe,
    Brain,
    Code,
    Lightbulb,
    ArrowRight
} from "lucide-react";
import { useRouter } from "next/navigation";

export function GameModesSection() {
    const router = useRouter();

    const games = [
        {
            title: "Atlas Game",
            desc: "Play word-chain games with countries, objects, places & more.",
            icon: <Globe size={32} />,
            path: "/AtlasGames",
            // Customizing colors for each card to give them unique personalities
            theme: {
                text: "text-cyan-400",
                bg: "bg-cyan-400/10",
                borderHover: "group-hover:border-cyan-400/50",
                shadowHover: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",
                iconGlow: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            }
        },
        {
            title: "Aptitude",
            desc: "Test your logical and numerical ability with real challenges.",
            icon: <Brain size={32} />,
            path: "/AptitudeGames",
            theme: {
                text: "text-emerald-400",
                bg: "bg-emerald-400/10",
                borderHover: "group-hover:border-emerald-400/50",
                shadowHover: "group-hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]",
                iconGlow: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"
            }
        },
        {
            title: "Coding",
            desc: "Compete in coding battles and solve real-world problems.",
            icon: <Code size={32} />,
            path: "/CodingGames",
            theme: {
                text: "text-amber-400",
                bg: "bg-amber-400/10",
                borderHover: "group-hover:border-amber-400/50",
                shadowHover: "group-hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]",
                iconGlow: "group-hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]"
            }
        },
        {
            title: "Reasoning",
            desc: "Boost your thinking with puzzles and reasoning games.",
            icon: <Lightbulb size={32} />,
            path: "/ReasoningGames",
            theme: {
                text: "text-purple-400",
                bg: "bg-purple-400/10",
                borderHover: "group-hover:border-purple-400/50",
                shadowHover: "group-hover:shadow-[0_0_40px_rgba(192,132,252,0.15)]",
                iconGlow: "group-hover:shadow-[0_0_20px_rgba(192,132,252,0.4)]"
            }
        },
    ];

    return (
        <section className="py-24 bg-linear-to-b from-black via-zinc-950 to-black text-white relative overflow-hidden">

            {/* Injecting CSS for staggered entrance animation so it works automatically */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    opacity: 0;
                }
            `}} />

            {/* Ambient background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-cyan-500/5 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* TITLE */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm mb-6 uppercase tracking-widest font-semibold">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Live Arenas
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Choose Your <span className="bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">Battleground</span>
                    </h2>
                    <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto">
                        Select a game mode, enter the arena, and outsmart your opponents to win real rewards.
                    </p>
                </div>

                {/* CARDS GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {games.map((game, index) => (
                        <div
                            key={index}
                            onClick={() => router.push(game.path)}
                            // Applying a dynamic delay to each card so they cascade in 1, 2, 3, 4
                            style={{ animationDelay: `${(index + 1) * 150}ms` }}
                            className={`animate-fade-in-up p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl cursor-pointer group transition-all duration-500 hover:-translate-y-3 ${game.theme.borderHover} ${game.theme.shadowHover} relative overflow-hidden`}
                        >
                            {/* Subtle gradient overlay that appears on hover */}
                            <div className="absolute inset-0 bg-linear-to-b from-white/0 to-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* ICON CONTAINER */}
                            <div className={`mb-6 inline-flex p-4 rounded-xl ${game.theme.bg} ${game.theme.text} transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 ${game.theme.iconGlow}`}>
                                {game.icon}
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                    {game.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    {game.desc}
                                </p>
                            </div>

                            {/* CTA FOOTER */}
                            <div className={`mt-auto flex items-center justify-between text-sm font-semibold transition-colors duration-300 text-gray-500 ${game.theme.text}`}>
                                <span>Enter Arena</span>
                                <ArrowRight className="w-5 h-5 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
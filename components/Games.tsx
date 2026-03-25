"use client";

import {
    Globe,
    Brain,
    Code,
    Lightbulb,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function GameModesSection() {
    const router = useRouter();

    const games = [
        {
            title: "Atlas Game",
            desc: "Play word-chain games with countries, objects, places & more.",
            icon: <Globe className="text-cyan-400" size={30} />,
            path: "/AtlasGames",
        },
        {
            title: "Aptitude",
            desc: "Test your logical and numerical ability with real challenges.",
            icon: <Brain className="text-green-400" size={30} />,
            path: "/AptitudeGames",
        },
        {
            title: "Coding",
            desc: "Compete in coding battles and solve real-world problems.",
            icon: <Code className="text-yellow-400" size={30} />,
            path: "/CodingGames",
        },
        {
            title: "Reasoning",
            desc: "Boost your thinking with puzzles and reasoning games.",
            icon: <Lightbulb className="text-purple-400" size={30} />,
            path: "/ReasoningGames",
        },
    ];

    return (
        <section className="py-20 bg-linear-to-b from-black to-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* TITLE */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        🎮 Game Modes
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                        Choose your game, join rooms, and win rewards based on your skills.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {games.map((game, index) => (
                        <div
                            key={index}
                            onClick={() => router.push(game.path)}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition cursor-pointer group"
                        >
                            {/* ICON */}
                            <div className="mb-4">
                                {game.icon}
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                                {game.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-gray-400 text-sm">
                                {game.desc}
                            </p>

                            {/* CTA */}
                            <div className="mt-4 text-sm text-white/60 group-hover:text-cyan-400 transition">
                                Explore →
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
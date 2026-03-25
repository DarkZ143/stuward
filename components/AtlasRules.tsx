"use client";

import { Users, Shuffle, Coins, Timer } from "lucide-react";

export function AtlasRules() {
    const rules = [
        {
            title: "Play With Friends",
            desc: "Create a room and invite your friends to compete together.(Free to play with friends)",
            icon: <Users className="text-cyan-400" size={26} />,
        },
        {
            title: "Random Matchmaking",
            desc: "Join public rooms and get matched with random players instantly. (Free and entry fee applies for competitive mode)",
            icon: <Shuffle className="text-green-400" size={26} />,
        },
        {
            title: "Entry Lock System",
            desc: "Match starts only after all players pay using Stuward (SW) coins.",
            icon: <Coins className="text-yellow-400" size={26} />,
        },
        {
            title: "Time Limit",
            desc: "Each player gets a maximum of 10 minutes to complete their turn.",
            icon: <Timer className="text-purple-400" size={26} />,
        },
    ];

    return (
        <section className="py-6 bg-linear-to-b from-[#0a0a0a] to-black text-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* TITLE */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        📜 Atlas Game Rules
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                        Understand how matches work before you start playing.
                    </p>
                </div>

                {/* RULE CARDS */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {rules.map((rule, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] transition"
                        >
                            {/* ICON */}
                            <div className="mb-4">{rule.icon}</div>

                            {/* TITLE */}
                            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                                {rule.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-gray-400 text-sm">
                                {rule.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* NOTE */}
                <div className="mt-10 text-center text-sm text-gray-500">
                    ⚠️ Make sure to follow rules strictly to ensure fair gameplay.
                </div>

            </div>
        </section>
    );
}
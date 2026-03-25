"use client";

import {
    Brain,
    Users,
    Wallet,
    Trophy,
    ShieldAlert,
    Timer,
} from "lucide-react";

export function RulesSection() {
    const rules = [
        {
            text: "All games are skill-based (no luck factor involved)",
            icon: <Brain className="text-cyan-400" size={26} />,
        },
        {
            text: "Each room starts only when required players join",
            icon: <Users className="text-blue-400" size={26} />,
        },
        {
            text: "Entry fee is deducted before game starts",
            icon: <Wallet className="text-green-400" size={26} />,
        },
        {
            text: "Winners are decided based on performance & score",
            icon: <Trophy className="text-yellow-400" size={26} />,
        },
        {
            text: "Each game is time-bound and must be completed within the limit",
            icon: <Timer className="text-purple-400" size={26} />,
        },
        {
            text: "Any misuse or cheating leads to account suspension",
            icon: <ShieldAlert className="text-red-400" size={26} />,
        },
    ];

    return (
        <section className="py-16 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4">

                <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center">
                    Game Rules
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {rules.map((rule, index) => (
                        <div
                            key={index}
                            className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition"
                        >
                            {/* ICON */}
                            <div className="mb-3">{rule.icon}</div>

                            {/* TEXT */}
                            <p className="text-gray-300 text-sm md:text-base">
                                {rule.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
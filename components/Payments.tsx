"use client";

import {
    ShieldCheck,
    Coins,
    ArrowRightLeft,
    Banknote,
    Lock,
} from "lucide-react";

export function PaymentSection() {
    const economyInfo = [
        {
            title: "Buy SW Coins Securely",
            desc: "Add funds via UPI or Cards to instantly receive SW Coins in your wallet.",
            icon: <ShieldCheck className="text-cyan-400" size={32} />,
            glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
        },
        {
            title: "Play & Earn Coins",
            desc: "Use your SW Coins to enter skill arenas. Win matches to multiply your coin balance.",
            icon: <Coins className="text-yellow-400" size={32} />,
            glow: "group-hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]",
        },
        {
            title: "Transparent Conversion",
            desc: "Simple and fair math: 1.5 SW Coins equal ₹1. No hidden exchange fees.",
            icon: <ArrowRightLeft className="text-purple-400" size={32} />,
            glow: "group-hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]",
        },
        {
            title: "Cash Out Anytime",
            desc: "Convert your earned SW Coins to real money. Withdraw limits: Min 100 SW to Max 1,000 SW per transaction.",
            icon: <Banknote className="text-green-400" size={32} />,
            glow: "group-hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]",
        },
    ];

    return (
        <section className="py-24 bg-linear-to-b from-black to-zinc-950 text-white relative">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm mb-6">
                        <Lock size={14} className="text-cyan-400" />
                        100% Safe & Transparent
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        The <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SW Coin</span> Economy
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Load your wallet, enter the arena, and convert your hard-earned victories back into real cash.
                    </p>
                </div>

                {/* Currency Highlight Card */}
                <div className="mb-12 max-w-md mx-auto p-4 rounded-2xl bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-center">
                    <p className="text-sm text-cyan-400 font-semibold tracking-widest uppercase mb-1">Current Exchange Rate</p>
                    <p className="text-2xl font-bold text-white flex items-center justify-center gap-3">
                        1.5 SW Coins <ArrowRightLeft size={20} className="text-gray-400" /> ₹1 INR
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {economyInfo.map((item, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-zinc-900/80 hover:border-white/10 ${item.glow} group`}
                        >
                            {/* Icon Container */}
                            <div className="mb-6 inline-flex p-4 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>

                            {/* Text */}
                            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
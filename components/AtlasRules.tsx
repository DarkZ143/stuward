"use client";

import { Users, Shuffle, Coins, Timer, ShieldAlert } from "lucide-react";

export function AtlasRules() {
    const rules = [
        {
            title: "Play With Friends",
            desc: "Create a private room and invite your friends to compete together.",
            badge: "100% Free",
            badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
            icon: <Users size={32} />,
            bgWatermark: <Users size={120} strokeWidth={1} />,
            theme: {
                text: "text-cyan-400",
                bg: "bg-cyan-400/10",
                borderHover: "group-hover:border-cyan-400/50",
                shadowHover: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",
            }
        },
        {
            title: "Random Matchmaking",
            desc: "Join public rooms and get matched with random players instantly across the platform.",
            badge: "Free & Paid Modes",
            badgeColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
            icon: <Shuffle size={32} />,
            bgWatermark: <Shuffle size={120} strokeWidth={1} />,
            theme: {
                text: "text-green-400",
                bg: "bg-green-400/10",
                borderHover: "group-hover:border-green-400/50",
                shadowHover: "group-hover:shadow-[0_0_40px_rgba(74,222,128,0.15)]",
            }
        },
        {
            title: "Entry Lock System",
            desc: "The match starts strictly only after all players lock in their SW coins entry fee.",
            badge: "Secure Escrow",
            badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
            icon: <Coins size={32} />,
            bgWatermark: <Coins size={120} strokeWidth={1} />,
            theme: {
                text: "text-yellow-400",
                bg: "bg-yellow-400/10",
                borderHover: "group-hover:border-yellow-400/50",
                shadowHover: "group-hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]",
            }
        },
        {
            title: "Strict Time Limit",
            desc: "Keep the game moving! Each player gets a maximum of 10 minutes to complete their turn.",
            badge: "Auto-Forfeit",
            badgeColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
            icon: <Timer size={32} />,
            bgWatermark: <Timer size={120} strokeWidth={1} />,
            theme: {
                text: "text-purple-400",
                bg: "bg-purple-400/10",
                borderHover: "group-hover:border-purple-400/50",
                shadowHover: "group-hover:shadow-[0_0_40px_rgba(192,132,252,0.15)]",
            }
        },
    ];

    return (
        <section className="py-24 bg-linear-to-b from-[#0a0a0a] to-black text-white relative overflow-hidden">

            {/* Inject Animation CSS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes slideUpFade {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-up {
                    animation: slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    opacity: 0;
                }
            `}} />

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* TITLE */}
                <div className="text-center mb-16 animate-slide-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm mb-6 uppercase tracking-widest font-medium">
                        📖 Rules of Engagement
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        <span className="bg-linear-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">Atlas Game</span> Rules
                    </h2>
                    <p className="text-gray-400 mt-2 text-base md:text-lg max-w-xl mx-auto">
                        Understand the matchmaking system, entry fees, and time limits before you step into the arena.
                    </p>
                </div>

                {/* RULE CARDS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {rules.map((rule, index) => (
                        <div
                            key={index}
                            style={{ animationDelay: `${(index + 1) * 100}ms` }}
                            className={`animate-slide-up relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl group transition-all duration-500 hover:-translate-y-2 ${rule.theme.borderHover} ${rule.theme.shadowHover} overflow-hidden flex flex-col`}
                        >
                            {/* CLIP ART WATERMARK */}
                            <div className={`absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12 ${rule.theme.text}`}>
                                {rule.bgWatermark}
                            </div>

                            {/* CARD HEADER (Icon & Badge) */}
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className={`inline-flex p-3 rounded-xl ${rule.theme.bg} ${rule.theme.text} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    {rule.icon}
                                </div>
                                <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md border ${rule.badgeColor}`}>
                                    {rule.badge}
                                </span>
                            </div>

                            {/* CONTENT */}
                            <div className="relative z-10 grow">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                    {rule.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {rule.desc}
                                </p>
                            </div>

                            {/* Subtle bottom border highlight on hover */}
                            <div className={`absolute bottom-0 left-0 h-1 w-0 bg-current opacity-50 transition-all duration-500 group-hover:w-full ${rule.theme.text}`} />
                        </div>
                    ))}
                </div>

                {/* NOTE / WARNING */}
                <div className="mt-16 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '600ms' }}>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200/80 text-sm shadow-[0_0_20px_rgba(245,158,11,0.05)]">
                        <ShieldAlert className="text-amber-500 shrink-0" size={24} />
                        <p>
                            <strong className="text-amber-400 font-semibold">Fair Play Policy:</strong> Make sure to follow the rules strictly to ensure a balanced and fair competitive environment. Violations may result in account restrictions.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
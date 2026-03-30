"use client";

import { Scale, BrainCircuit, ShieldBan, UserCheck, AlertTriangle } from "lucide-react";

export function RegulationsSection() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden flex justify-center">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-3/4 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 relative w-full">

                {/* BIG CURLY BRACKETS */}
                <div className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 text-[150px] md:text-[250px] font-black text-cyan-500/5 select-none font-mono">
                    {"{"}
                </div>
                <div className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 text-[150px] md:text-[250px] font-black text-blue-500/5 select-none font-mono">
                    {"}"}
                </div>

                {/* CONTENT BOX */}
                <div className="relative p-8 md:p-12 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">

                    {/* Header */}
                    <div className="flex flex-col items-center justify-center mb-12">
                        <div className="p-3 bg-white/5 rounded-2xl mb-5 border border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                            <Scale className="text-cyan-400" size={32} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight mb-4">
                            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Legal & Fair Play
                            </span>
                        </h2>
                        <p className="text-gray-400 text-center max-w-2xl text-sm md:text-base">
                            Stuward is built on integrity. We strictly enforce fair play policies to ensure a safe, skill-based environment for all competitors.
                        </p>
                    </div>

                    {/* Grid of Rules */}
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                            <BrainCircuit className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                            <h3 className="font-semibold text-white mb-2 text-lg">100% Skill-Based</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Outcomes depend entirely on your knowledge and performance. No luck, algorithms, or gambling involved.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                            <ShieldBan className="text-red-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                            <h3 className="font-semibold text-white mb-2 text-lg">No Gambling</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                We strictly prohibit games of chance. This platform is designed exclusively for educational and strategic competition.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                            <UserCheck className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                            <h3 className="font-semibold text-white mb-2 text-lg">Strictly 18+</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Users must be legally recognized as adults (18+) to register, participate, and withdraw earnings.
                            </p>
                        </div>
                    </div>

                    {/* Warning/Terms Box */}
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                        <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={22} />
                        <p className="text-sm text-amber-200/80 leading-relaxed">
                            By using Stuward, you agree to our comprehensive Terms of Service and Responsible Gaming policies. This platform is intended for educational testing and competitive skill assessment only.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
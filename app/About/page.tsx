"use client";

import { VisualArenaGame } from "@/components/VisualArena";
import {
    Target,
    Zap,
    ShieldCheck,
    Users,
    Trophy,
    Brain,
    Globe,
    Terminal,
    Database,
    Code2,
    Palette,
    Server
} from "lucide-react";

export default function AboutPage() {
    // Core Values Data
    const values = [
        {
            title: "Skill Over Luck",
            desc: "We strictly oppose gambling. Every game on Stuward relies 100% on your intellect, speed, and knowledge.",
            icon: <Brain size={28} />,
            color: "text-cyan-400",
            bg: "bg-cyan-400/10",
            border: "group-hover:border-cyan-400/50"
        },
        {
            title: "Real Rewards",
            desc: "Your time is valuable. We built an economy where your cognitive skills directly translate into real-world cash.",
            icon: <Trophy size={28} />,
            color: "text-yellow-400",
            bg: "bg-yellow-400/10",
            border: "group-hover:border-yellow-400/50"
        },
        {
            title: "Fair & Secure",
            desc: "Protected by an Entry Lock system and strict anti-cheat measures, ensuring a level playing field for everyone.",
            icon: <ShieldCheck size={28} />,
            color: "text-emerald-400",
            bg: "bg-emerald-400/10",
            border: "group-hover:border-emerald-400/50"
        },
        {
            title: "Community First",
            desc: "Whether you are playing with friends in private rooms or matchmaking globally, the community drives the platform.",
            icon: <Users size={28} />,
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "group-hover:border-purple-400/50"
        }
    ];

    // Leadership Data
    const leadership = [

        {
            name: "Rahul Bhardwaj",
            role: "Co-Founder & Lead Dev",
            initials: "RB",
            desc: "The technical mastermind behind Stuward. Specializes in building seamless, high-performance web applications and UI/UX.",
            gradient: "from-purple-500 via-pink-500 to-rose-500",
            icon: <Terminal className="text-pink-400 mb-2" size={28} />,
            skills: ["Next.js", "TypeScript", "React", "Firebase"]
        },
        {
            name: "Rahul Kumar",
            role: "Co-Founder & CEO",
            initials: "RK",
            desc: "Driving the vision and business strategy of Stuward. Passionate about bridging the gap between gaming and educational growth.",
            gradient: "from-cyan-400 via-blue-500 to-blue-700",
            icon: <Globe className="text-cyan-400 mb-2" size={28} />,
            skills: ["Strategy", "Product", "Operations"]
        },

        {
            name: "Rohit Sharma",
            role: "Director & Backend Architect",
            initials: "RS",
            desc: "Ensures the platform scales flawlessly. Expert in secure database management, matchmaking algorithms, and API infrastructure.",
            gradient: "from-emerald-400 via-teal-500 to-cyan-500",
            icon: <Database className="text-teal-400 mb-2" size={28} />,
            skills: ["Node.js", "Security"]
        }
    ];

    // Core Team Data (Small Cards)
    const coreTeam = [
        { name: "Chandrakiran", role: "Lead UI/UX Designer", initials: "PD", icon: <Palette size={16} />, color: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/20" },
        { name: "Anisha Yadav", role: "Game Logic Engineer", initials: "AG", icon: <Code2 size={16} />, color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
        { name: "Neha Verma", role: "Community Manager", initials: "NV", icon: <Users size={16} />, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
        { name: "Hirdyansh Singh", role: "DevOps Specialist", initials: "AS", icon: <Server size={16} />, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
        { name: "Aman Shrivastava", role: "QA Lead", initials: "KI", icon: <ShieldCheck size={16} />, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
        { name: "Vikram Singh", role: "Security Analyst", initials: "VR", icon: <Database size={16} />, color: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/20" },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">

            {/* INJECT ANIMATION CSS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-up {
                    animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    opacity: 0;
                }
                `
            }} />

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center text-center px-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-linear-to-b from-cyan-500/10 to-transparent blur-[80px] pointer-events-none" />

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
                    <Target size={16} />
                    Our Mission
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
                    Redefining <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Screen Time</span>
                </h1>

                <p className="text-gray-400 text-base md:text-xl max-w-3xl leading-relaxed animate-fade-up" style={{ animationDelay: '300ms' }}>
                    Stuward was built on a simple belief: your intelligence should pay off. We are transforming mindless scrolling and casual gaming into a competitive, skill-based arena where students can learn, play, and earn.
                </p>
            </section>

            {/* 2. THE STORY & THE IDEA */}
            <section className="py-24 border-t border-white/5 relative bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Idea Behind Stuward</h2>
                            <div className="h-1 w-20 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full" />
                        </div>

                        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                            <p>
                                The modern internet is filled with apps designed to consume your time without giving anything back. We noticed students spending hours playing games, building incredible reflexes and digital skills, but seeing zero real-world return.
                            </p>
                            <p>
                                <strong className="text-white">What if we flipped the script?</strong> What if we created a platform where your aptitude, coding logic, and general knowledge were your greatest weapons?
                            </p>
                            <p>
                                That is how Stuward was born. A platform that merges the thrill of E-sports with the value of EdTech. You invest a small entry fee, back your own skills, and walk away with real rewards.
                            </p>
                        </div>
                    </div>

                    <div className="relative p-10 rounded-3xl bg-linear-to-br from-zinc-900 to-black border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.05)] animate-fade-up" style={{ animationDelay: '400ms' }}>
                        <svg className="absolute top-6 left-6 text-white/5 w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <div className="relative z-10 space-y-8">
                            <h3 className="text-2xl font-bold text-white leading-snug">
                                &quot;We are not just building a game. We are building an economy powered by intellect.&quot;
                            </h3>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-linear-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                                    <Zap className="text-white" size={20} />
                                </div>
                                <div>
                                    <p className="text-white font-semibold">The Stuward Vision</p>
                                    <p className="text-cyan-400 text-sm">Founded 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. CORE PILLARS */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 animate-fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Pillars</h2>
                        <p className="text-gray-400">The foundation of everything we build at Stuward.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val, idx) => (
                            <div
                                key={idx}
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                                className={`animate-fade-up p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 group ${val.border}`}
                            >
                                <div className={`mb-6 inline-flex p-4 rounded-xl ${val.bg} ${val.color} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <VisualArenaGame />


            {/* 4. THE TEAM & FOUNDERS */}
            <section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
                <div className="absolute -right-20 top-20 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute -left-20 bottom-20 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 relative z-10">

                    <div className="text-center mb-16 animate-fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet The Team</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Built by tech enthusiasts and gamers. We understand the grind and the need for platforms that actually reward your time and skill.
                        </p>
                    </div>

                    {/* LEADERSHIP TIER (Big Cards) */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {leadership.map((leader, index) => (
                            <div
                                key={index}
                                className="group p-1 rounded-3xl bg-linear-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-500 animate-fade-up"
                                style={{ animationDelay: `${(index + 1) * 200}ms` }}
                            >
                                <div className="bg-black/80 backdrop-blur-xl rounded-[23px] p-8 h-full flex flex-col items-center text-center relative overflow-hidden">

                                    {/* Abstract Avatar */}
                                    <div className={`w-28 h-28 rounded-2xl bg-linear-to-br ${leader.gradient} p-1 mb-6 shadow-lg transform group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500`}>
                                        <div className="w-full h-full bg-zinc-900 rounded-xl flex flex-col items-center justify-center border border-white/20">
                                            {leader.icon}
                                            <span className="text-white font-black text-xl tracking-widest">{leader.initials}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">{leader.role}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">{leader.desc}</p>

                                    {/* Tech/Skill Pills */}
                                    <div className="flex flex-wrap justify-center gap-2 mt-auto">
                                        {leader.skills.map((skill, sIdx) => (
                                            <span key={sIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CORE TEAM TIER (Small Cards) */}
                    <div className="text-center mb-10 animate-fade-up" style={{ animationDelay: '600ms' }}>
                        <h3 className="text-xl font-bold text-white mb-2">Core Development & Operations</h3>
                        <div className="h-px w-24 bg-white/10 mx-auto" />
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: '700ms' }}>
                        {coreTeam.map((member, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors group">
                                {/* Small Avatar */}
                                <div className={`w-12 h-12 rounded-lg bg-zinc-900 border ${member.border} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                                    <span className={`text-sm font-bold tracking-wider ${member.color}`}>
                                        {member.initials}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{member.name}</h4>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <span className={member.color}>{member.icon}</span>
                                        <p className="text-gray-400 text-xs">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
}
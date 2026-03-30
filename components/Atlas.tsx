"use client";

import {
    Globe,
    BookOpen,
    MapPin,
    Trophy,
    ArrowRight
} from "lucide-react";
import { useEffect, useRef } from "react";

export function AtlasSection() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // 🌍 Enhanced Canvas Animation: Zero-Gravity Word Cloud
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        const words = [
            "Earth", "India", "London", "Apple", "Tiger",
            "Grammar", "Noun", "Verb", "Run", "Play",
            "Virat", "Sachin", "Dhoni", "Paris", "Tokyo",
            "River", "Mountain", "Ocean", "Desert"
        ];

        const colors = ["#22d3ee", "#4ade80", "#facc15", "#c084fc"]; // Cyan, Green, Yellow, Purple

        // Reduced particle count so it's not too cluttered, added velocities
        const particles = Array.from({ length: 40 }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4, // Slight horizontal drift
            vy: (Math.random() - 0.5) * 0.4 - 0.2, // Gentle upward float
            text: words[Math.floor(Math.random() * words.length)],
            size: Math.random() * 14 + 12,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: Math.random() * 0.4 + 0.1,
        }));

        let animationFrameId: number;

        const animate = () => {
            // Semi-transparent clear for a slight trailing effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                // Apply glowing effect
                ctx.shadowBlur = 10;
                ctx.shadowColor = p.color;

                // Draw text
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.alpha;
                ctx.font = `600 ${p.size}px "Inter", sans-serif`;
                ctx.fillText(p.text, p.x, p.y);

                // Reset global alpha and shadow so it doesn't affect the clearRect
                ctx.globalAlpha = 1.0;
                ctx.shadowBlur = 0;

                // Move particles
                p.x += p.vx;
                p.y += p.vy;

                // Screen wrapping (if they float off screen, bring them back on the other side)
                if (p.x > canvas.width + 50) p.x = -50;
                if (p.x < -50) p.x = canvas.width + 50;
                if (p.y < -50) p.y = canvas.height + 50;
                if (p.y > canvas.height + 50) p.y = -50;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    const atlasModes = [
        {
            title: "Overall Words",
            desc: "Play with mixed categories like country, animal, object & more.",
            icon: <Globe size={32} />,
            bgWatermark: <Globe size={120} strokeWidth={1} />,
            theme: {
                text: "text-cyan-400",
                bg: "bg-cyan-400/10",
                borderHover: "group-hover:border-cyan-400/50",
                shadowHover: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",
            }
        },
        {
            title: "Grammar Words",
            desc: "Improve vocabulary and grammar through fast-paced word challenges.",
            icon: <BookOpen size={32} />,
            bgWatermark: <BookOpen size={120} strokeWidth={1} />,
            theme: {
                text: "text-green-400",
                bg: "bg-green-400/10",
                borderHover: "group-hover:border-green-400/50",
                shadowHover: "group-hover:shadow-[0_0_40px_rgba(74,222,128,0.15)]",
            }
        },
        {
            title: "Cricketers",
            desc: "Name iconic cricketers based on challenging last-letter chain rules.",
            icon: <Trophy size={32} />,
            bgWatermark: <Trophy size={120} strokeWidth={1} />,
            theme: {
                text: "text-yellow-400",
                bg: "bg-yellow-400/10",
                borderHover: "group-hover:border-yellow-400/50",
                shadowHover: "group-hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]",
            }
        },
        {
            title: "Places",
            desc: "Explore world geography with intense city & country chain challenges.",
            icon: <MapPin size={32} />,
            bgWatermark: <MapPin size={120} strokeWidth={1} />,
            theme: {
                text: "text-purple-400",
                bg: "bg-purple-400/10",
                borderHover: "group-hover:border-purple-400/50",
                shadowHover: "group-hover:shadow-[0_0_40px_rgba(192,132,252,0.15)]",
            }
        },
    ];

    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden py-24 flex items-center">

            {/* 🔥 INJECT CSS FOR ENTRANCE ANIMATIONS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scaleInUp {
                    0% { opacity: 0; transform: translateY(30px) scale(0.95); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-scale-in {
                    animation: scaleInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    opacity: 0;
                }
            `}} />

            {/* 🌍 BACKGROUND CANVAS */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full z-0 opacity-70 pointer-events-none"
            />

            {/* Ambient center gradient so text is always readable over canvas */}
            <div className="absolute inset-0 bg-radial-[at_center_center] from-black/20 via-black/60 to-black z-0 pointer-events-none" />

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">

                {/* TITLE */}
                <div className="text-center mb-16 animate-scale-in" style={{ animationDelay: '100ms' }}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm mb-6 uppercase tracking-widest font-medium">
                        <Globe size={14} className="text-cyan-400 animate-pulse" />
                        Explore Atlas
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                        The <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Atlas Game</span> Arenas
                    </h2>
                    <p className="text-gray-400 mt-2 text-base md:text-lg max-w-2xl mx-auto">
                        Challenge your brain with rapid-fire word chains. Pick your category, outsmart the competition, and win real rewards.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                    {atlasModes.map((mode, index) => (
                        <div
                            key={index}
                            style={{ animationDelay: `${(index + 1) * 150 + 100}ms` }}
                            className={`animate-scale-in relative p-8 rounded-2xl bg-zinc-900/60 border border-white/5 backdrop-blur-xl cursor-pointer group transition-all duration-500 hover:-translate-y-3 ${mode.theme.borderHover} ${mode.theme.shadowHover} overflow-hidden`}
                        >
                            {/* CLIP ART WATERMARK */}
                            <div className={`absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 group-hover:-rotate-12 ${mode.theme.text}`}>
                                {mode.bgWatermark}
                            </div>

                            {/* ICON */}
                            <div className={`mb-6 inline-flex p-4 rounded-xl ${mode.theme.bg} ${mode.theme.text} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 relative z-10`}>
                                {mode.icon}
                            </div>

                            {/* TITLE & DESC */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                    {mode.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    {mode.desc}
                                </p>
                            </div>

                            {/* CTA */}
                            <div className={`mt-auto flex items-center justify-between text-sm font-semibold transition-colors duration-300 text-gray-500 ${mode.theme.text} relative z-10`}>
                                <span>Play Now</span>
                                <ArrowRight className="w-5 h-5 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
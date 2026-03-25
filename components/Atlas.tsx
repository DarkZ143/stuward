"use client";

import {
    Globe,
    BookOpen,
    MapPin,
    Trophy,
} from "lucide-react";
import { useEffect, useRef } from "react";

export function AtlasSection() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

        // 🌍 Word + world themed symbols
        const words = [
            "Earth", "India", "London", "Apple", "Tiger",
            "Grammar", "Noun", "Verb", "Run", "Play",
            "Virat", "Sachin", "Dhoni",
            "Paris", "Tokyo", "River", "Mountain",
            "A", "B", "C", "D", "E"
        ];

        const particles = Array.from({ length: 70 }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 1 + 0.3,
            text: words[Math.floor(Math.random() * words.length)],
            size: Math.random() * 14 + 10,
        }));

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                ctx.fillStyle = "rgba(0,200,255,0.08)";
                ctx.font = `${p.size}px monospace`;
                ctx.fillText(p.text, p.x, p.y);

                p.y += p.speed;

                if (p.y > canvas.height) {
                    p.y = 0;
                    p.x = Math.random() * canvas.width;
                }
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
            icon: <Globe className="text-cyan-400" size={28} />,
        },
        {
            title: "Grammar Words",
            desc: "Improve vocabulary and grammar through word challenges.",
            icon: <BookOpen className="text-green-400" size={28} />,
        },
        {
            title: "Cricketers",
            desc: "Name cricketers based on last letter chain rules.",
            icon: <Trophy className="text-yellow-400" size={28} />,
        },
        {
            title: "Places",
            desc: "Explore world geography with city & country challenges.",
            icon: <MapPin className="text-purple-400" size={28} />,
        },
    ];

    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden py-20">

            {/* 🌍 BACKGROUND */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full z-0"
            />

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-4">

                {/* TITLE */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        🌍 Atlas Game Modes
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                        Challenge your brain with word-based competitions and win rewards.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                    {atlasModes.map((mode, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition cursor-pointer group"
                        >
                            {/* ICON */}
                            <div className="mb-4">{mode.icon}</div>

                            {/* TITLE */}
                            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                                {mode.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-gray-400 text-sm">
                                {mode.desc}
                            </p>

                            {/* CTA */}
                            <div className="mt-4 text-sm text-white/60 group-hover:text-cyan-400 transition">
                                Play Now →
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
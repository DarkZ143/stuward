"use client";

import {
    Brain,
    Puzzle,

    ArrowRightLeft,
    Binary,
    Layers,
    Users,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function ReasoningPage() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // 🔧 Resize
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        const symbols = [
            "→",
            "←",
            "↑",
            "↓",
            "◆",
            "▲",
            "■",
            "●",
            "0",
            "1",
            "?",
            "≠",
        ];

        const particles = Array.from({ length: 70 }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 1 + 0.4,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            size: Math.random() * 14 + 10,
        }));

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                ctx.fillStyle = "rgba(255,255,255,0.1)";
                ctx.font = `${p.size}px monospace`;
                ctx.fillText(p.symbol, p.x, p.y);

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

    const reasoningGames = [
        {
            title: "Logical Puzzles",
            desc: "Solve tricky logic-based questions under time pressure.",
            icon: <Puzzle className="text-cyan-400" size={28} />,
        },
        {
            title: "Seating Arrangement",
            desc: "Solve circular and linear seating puzzles efficiently.",
            icon: <Users className="text-green-400" size={28} />,
        },
        {
            title: "Blood Relations",
            desc: "Understand family relationships and solve complex problems.",
            icon: <Users className="text-yellow-400" size={28} />,
        },
        {
            title: "Direction Sense",
            desc: "Track movements and find correct directions logically.",
            icon: <ArrowRightLeft className="text-orange-400" size={28} />,
        },
        {
            title: "Coding-Decoding",
            desc: "Decode patterns and identify hidden logic sequences.",
            icon: <Binary className="text-purple-400" size={28} />,
        },
        {
            title: "Series Completion",
            desc: "Find the missing element in sequences and patterns.",
            icon: <Layers className="text-blue-400" size={28} />,
        },
        {
            title: "Analogy",
            desc: "Identify relationships between pairs logically.",
            icon: <Brain className="text-pink-400" size={28} />,
        },
        {
            title: "Classification",
            desc: "Identify odd one out from given options.",
            icon: <Layers className="text-red-400" size={28} />,
        },
        {
            title: "Syllogism",
            desc: "Draw logical conclusions from given statements.",
            icon: <Brain className="text-indigo-400" size={28} />,
        },
        {
            title: "Statement & Conclusion",
            desc: "Evaluate arguments and logical conclusions.",
            icon: <Brain className="text-teal-400" size={28} />,
        },
        {
            title: "Cause & Effect",
            desc: "Analyze cause-effect relationships logically.",
            icon: <Brain className="text-emerald-400" size={28} />,
        },
        {
            title: "Data Sufficiency",
            desc: "Determine if given data is sufficient to answer.",
            icon: <Layers className="text-cyan-300" size={28} />,
        },
        {
            title: "Non-Verbal Reasoning",
            desc: "Solve mirror images, paper folding & figure series.",
            icon: <Puzzle className="text-gray-300" size={28} />,
        },
    ];

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">

            {/* 🧠 BACKGROUND */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full z-0"
            />

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">

                {/* TITLE */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Reasoning Challenges 🧠
                    </h1>
                    <p className="text-gray-400 mt-3">
                        Test your logic, improve thinking, and win by solving smart puzzles.
                    </p>
                </div>

                {/* GAME CARDS */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {reasoningGames.map((game, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition cursor-pointer group"
                        >
                            {/* ICON */}
                            <div className="mb-4">{game.icon}</div>

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
                                Start Challenge →
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
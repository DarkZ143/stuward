"use client";

import {
    Code2,
    Bug,
    Braces,
    Terminal,
    Cpu,
    Database,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function CodingPage() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // 🔧 Resize function (IMPORTANT)
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        const codeSnippets = [
            "const x = 10;",
            "let sum = a + b;",
            "function solve() {}",
            "if(x > 0) return true;",
            "{ } [ ] ( )",
            "for(let i=0;i<n;i++)",
            "console.log('Hello');",
            "var data = [];",
        ];

        const particles = Array.from({ length: 70 }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 1 + 0.5,
            text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
            size: Math.random() * 14 + 10,
        }));

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                ctx.fillStyle = "rgba(0,255,150,0.15)";
                ctx.font = `${p.size}px monospace`;
                ctx.fillText(p.text, p.x, p.y);

                p.y += p.speed;

                // reset when out of screen
                if (p.y > canvas.height) {
                    p.y = 0;
                    p.x = Math.random() * canvas.width;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // 🧹 Cleanup (VERY IMPORTANT)
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    const codingGames = [
        {
            title: "DSA Challenges",
            desc: "Solve algorithmic problems and improve problem-solving skills.",
            icon: <Cpu className="text-cyan-400" size={28} />,
        },
        {
            title: "Debugging",
            desc: "Find and fix bugs in given code snippets.",
            icon: <Bug className="text-red-400" size={28} />,
        },
        {
            title: "Code Output",
            desc: "Predict output of code snippets quickly.",
            icon: <Terminal className="text-green-400" size={28} />,
        },
        {
            title: "Syntax Battle",
            desc: "Complete missing syntax and fix code structure.",
            icon: <Braces className="text-yellow-400" size={28} />,
        },
        {
            title: "MCQ Coding",
            desc: "Answer coding-related MCQs under time pressure.",
            icon: <Code2 className="text-purple-400" size={28} />,
        },
        {
            title: "Database Queries",
            desc: "Solve SQL-based problems and queries.",
            icon: <Database className="text-blue-400" size={28} />,
        },
    ];

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">

            {/* 💻 BACKGROUND CANVAS */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full z-0"
            />

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">

                {/* TITLE */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Coding Battles 💻
                    </h1>
                    <p className="text-gray-400 mt-3">
                        Compete with others, solve problems, and earn rewards through coding.
                    </p>
                </div>

                {/* GAME CARDS */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {codingGames.map((game, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,150,0.2)] transition cursor-pointer group"
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
                            <div className="mt-4 text-sm text-white/60 group-hover:text-green-400 transition">
                                Start Coding →
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
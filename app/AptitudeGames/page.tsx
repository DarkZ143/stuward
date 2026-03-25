/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
    Calculator,
    Percent,
    Sigma,
    Clock,
    BarChart,
    Divide,
    TrendingUp,
    Shapes,
    Brain,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function AptitudePage() {
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

        // 🔥 More logical/math symbols
        const symbols = [
            "+", "-", "×", "÷", "%", "π", "Σ", "=",
            "√", "∑", "∫", "∞", "x²", "log", "Δ"
        ];

        const particles = Array.from({ length: 80 }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 1 + 0.3,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            size: Math.random() * 14 + 10,
        }));

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                ctx.fillStyle = "rgba(0,255,200,0.08)";
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

    // 📚 CATEGORY STRUCTURE
    const sections = [
        {
            title: "🔢 Arithmetic (Core)",
            icon: <Calculator className="text-cyan-400" />,
            topics: [
                "Percentage",
                "Profit & Loss",
                "Simple & Compound Interest",
                "Ratio & Proportion",
                "Average",
                "Time, Speed & Distance",
                "Time & Work",
                "Pipes & Cisterns",
                "Mixture & Alligation",
                "Partnership",
            ],
        },
        {
            title: "📊 Number System",
            icon: <BarChart className="text-green-400" />,
            topics: [
                "Divisibility rules",
                "LCM & HCF",
                "Remainders",
                "Factors & multiples",
                "Cyclicity",
            ],
        },
        {
            title: "🔺 Algebra",
            icon: <Sigma className="text-yellow-400" />,
            topics: [
                "Linear equations",
                "Quadratic equations",
                "Inequalities",
                "Logarithms",
            ],
        },
        {
            title: "📐 Geometry & Mensuration",
            icon: <Shapes className="text-purple-400" />,
            topics: [
                "Lines & angles",
                "Triangles",
                "Circles",
                "Area & Perimeter",
                "Volume (Cube, Cylinder, Cone, Sphere)",
            ],
        },
        {
            title: "📈 Modern Math",
            icon: <TrendingUp className="text-pink-400" />,
            topics: [
                "Permutation & Combination",
                "Probability",
                "Set Theory",
                "Venn Diagrams",
            ],
        },
    ];

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">

            {/* 🎯 BACKGROUND */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full z-0"
            />

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">

                {/* TITLE */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Aptitude Mastery 🧮
                    </h1>
                    <p className="text-gray-400 mt-3">
                        Master concepts, compete in rooms, and win rewards.
                    </p>
                </div>

                {/* SECTIONS */}
                <div className="space-y-12">
                    {sections.map((section, i) => (
                        <div key={i}>

                            {/* SECTION TITLE */}
                            <div className="flex items-center gap-3 mb-6">
                                {section.icon}
                                <h2 className="text-xl md:text-2xl font-semibold">
                                    {section.title}
                                </h2>
                            </div>

                            {/* TOPICS */}
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {section.topics.map((topic, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition cursor-pointer"
                                    >
                                        <p className="text-sm text-gray-300">{topic}</p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
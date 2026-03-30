"use client";

import { useState, useEffect } from "react";
import { Timer, Image as ImageIcon, Send, Sparkles } from "lucide-react";
import Image from "next/image";

export function VisualArenaGame() {
    const [guess, setGuess] = useState("");
    const [timeLeft, setTimeLeft] = useState(30);
    const [blurLevel, setBlurLevel] = useState(20); // Starts highly blurred
    const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");

    // Simulated Timer and Blur Reduction
    useEffect(() => {
        if (gameState !== "playing" || timeLeft <= 0) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            if (timeLeft <= 0) setGameState("lost");
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
            // Slowly reduce blur as time runs out
            setBlurLevel((prev) => Math.max(0, prev - 0.6));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, gameState]);

    const handleGuess = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock validation - Replace with your actual game logic
        if (guess.toLowerCase() === "eiffel tower") {
            setGameState("won");
            setBlurLevel(0); // Instantly reveal on win
        } else {
            // Optional: Add penalty for wrong guess or just clear input
            setGuess("");
        }
    };

    return (
        <section className="py-20 bg-black text-white flex justify-center items-center min-h-[80vh] px-4">

            <div className="w-full max-w-3xl p-8 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">

                {/* Header Info */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            <ImageIcon size={20} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Geo-Snapshot</h2>
                            <p className="text-sm text-gray-400">Guess the landmark to win</p>
                        </div>
                    </div>

                    {/* Dynamic Timer */}
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${timeLeft <= 10 ? 'bg-red-500/10 border-red-500/30 text-red-400 animate-pulse' : 'bg-white/5 border-white/10 text-white'
                        }`}>
                        <Timer size={18} />
                        <span className="font-mono font-bold text-lg">00:{timeLeft.toString().padStart(2, '0')}</span>
                    </div>
                </div>

                {/* The Image Area */}
                <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 mb-8 flex items-center justify-center">

                    {/* Placeholder for the actual image - Replace src with your game data */}
                    <Image
                        src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1000&auto=format&fit=crop"
                        alt="Mystery Landmark"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-all duration-1000 ease-linear"
                        style={{ filter: `blur(${blurLevel}px) grayscale(${blurLevel > 5 ? '50%' : '0%'})` }}
                    />

                    {/* Win/Loss Overlay */}
                    {gameState !== "playing" && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center flex-col animate-in fade-in zoom-in duration-300">
                            {gameState === "won" ? (
                                <>
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                                        <Sparkles size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Correct!</h3>
                                    <p className="text-emerald-400 font-medium">+50 SW Coins</p>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-3xl font-bold text-red-400 mb-2">Time&apos;s Up!</h3>
                                    <p className="text-gray-300">It was the Eiffel Tower.</p>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* Guess Input Form */}
                <form onSubmit={handleGuess} className="relative">
                    <input
                        type="text"
                        disabled={gameState !== "playing"}
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        placeholder="Type your guess here..."
                        className="w-full bg-black/50 border border-white/10 rounded-xl pl-6 pr-32 py-4 text-lg text-white outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all disabled:opacity-50"
                    />
                    <button
                        type="submit"
                        disabled={gameState !== "playing" || !guess.trim()}
                        className="absolute right-2 top-2 bottom-2 bg-linear-to-r from-cyan-500 to-blue-600 px-6 rounded-lg font-bold flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Submit
                        <Send size={16} />
                    </button>
                </form>

            </div>
        </section>
    );
}
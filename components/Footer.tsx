"use client";

import Image from "next/image";
import Stuimage from "@/public/stuward.png";
import { useRouter, usePathname } from "next/navigation";
import { useLoader } from "@/context/LoaderContext";
import { useState, useEffect } from "react";

export default function Footer() {
    const router = useRouter();
    const { setLoading } = useLoader();

    const [email, setEmail] = useState("");
    const [loadingSub, setLoadingSub] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"success" | "error" | "">("");

    const navigate = (path: string) => {
        setLoading(true);
        router.push(path);
    };

    // 🔥 AUTO CLOSE POPUP
    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const pathname = usePathname();

    if (pathname === "/login" || pathname === "/signup") {
        return null;
    }

    const handleSubscribe = async () => {
        if (!email) {
            setStatus("error");
            setMessage("Please enter email");
            return;
        }

        try {
            setLoadingSub(true);

            const res = await fetch("/api/subscribe", {
                method: "POST",
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setStatus("success");
                setMessage("Subscribed successfully 🚀");
                setEmail("");
            } else {
                throw new Error();
            }
        } catch {
            setStatus("error");
            setMessage("Something went wrong ❌");
        } finally {
            setLoadingSub(false);
        }
    };

    // 🔥 Reusable animated underline class for links
    const linkStyles = "cursor-pointer w-fit text-gray-400 hover:text-white transition-colors duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400 after:origin-bottom-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out";

    return (
        <>
            {/* 🔥 POPUP */}
            {status && (
                <div className="fixed inset-0 flex items-center justify-center z-999 bg-black/60 backdrop-blur-sm">
                    <div className="bg-[#111] border border-white/10 rounded-xl p-6 w-[320px] text-center shadow-xl animate-fadeIn">
                        <h2
                            className={`text-lg font-semibold mb-2 ${status === "success" ? "text-green-400" : "text-red-400"
                                }`}
                        >
                            {status === "success" ? "Success 🎉" : "Error ❌"}
                        </h2>
                        <p className="text-sm text-gray-300 mb-4">{message}</p>
                        <button
                            onClick={() => setStatus("")}
                            className="bg-linear-to-r from-blue-500 to-cyan-400 px-4 py-2 rounded-lg text-sm text-white font-medium hover:scale-105 transition-transform"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

            {/* FOOTER */}
            <footer className="bg-black text-white border-t border-white/10 mt-20 relative overflow-hidden">
                {/* Subtle top glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />

                <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
                    {/* LEFT */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Image src={Stuimage} alt="logo" width={40} height={40} className="drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" />
                            <h2 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Stuward
                            </h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Learn, play, and earn with skill-based games designed for students. Transform your knowledge into rewards.
                        </p>
                    </div>

                    {/* MIDDLE */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* QUICK LINKS */}
                        <div>
                            <h3 className="font-bold mb-5 text-white tracking-wide">Quick Links</h3>
                            <ul className="space-y-4 text-sm">
                                <li className={linkStyles} onClick={() => navigate("/")}>Home</li>
                                <li className={linkStyles} onClick={() => navigate("/about")}>About</li>
                                <li className={linkStyles} onClick={() => navigate("/support")}>Support</li>
                                <li className={linkStyles} onClick={() => navigate("/profile")}>Profile</li>
                            </ul>
                        </div>

                        {/* GAMES */}
                        <div>
                            <h3 className="font-bold mb-5 text-white tracking-wide">Games</h3>
                            <ul className="space-y-4 text-sm">
                                <li className={linkStyles} onClick={() => navigate("/AtlasGames")}>Atlas</li>
                                <li className={linkStyles} onClick={() => navigate("/AptitudeGames")}>Aptitude</li>
                                <li className={linkStyles} onClick={() => navigate("/CodingGames")}>Coding</li>
                                <li className={linkStyles} onClick={() => navigate("/ReasoningGames")}>Reasoning</li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div>
                        <h3 className="font-bold mb-5 text-white tracking-wide">
                            Subscribe Newsletter
                        </h3>
                        <div className="flex bg-white/5 border border-white/10 rounded-lg overflow-hidden focus-within:border-cyan-500/50 focus-within:ring-1 focus-within:ring-cyan-500/50 transition-all duration-300">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-transparent px-4 py-3 outline-none text-sm w-full placeholder:text-gray-600"
                            />
                            <button
                                onClick={handleSubscribe}
                                disabled={loadingSub}
                                className="bg-linear-to-r from-blue-500 to-cyan-400 px-5 text-sm font-medium flex items-center justify-center min-w-30 hover:brightness-110 active:scale-95 transition-all"
                            >
                                {loadingSub ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : (
                                    "Subscribe"
                                )}
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            Get updates about new games and rewards.
                        </p>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="border-t border-white/5 text-center py-6 text-sm text-gray-500">
                    © {new Date().getFullYear()} Stuward India Pvt Ltd. All rights reserved.
                </div>
            </footer>
        </>
    );
}
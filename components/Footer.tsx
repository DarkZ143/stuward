"use client";

import Image from "next/image";
import Stuimage from "@/public/stuward.png";
import { useRouter } from "next/navigation";
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

    // 🔥 AUTO CLOSE POPUP
    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    return (
        <>
            {/* 🔥 POPUP */}
            {status && (
                <div className="fixed inset-0 flex items-center justify-center z-999 bg-black/60 backdrop-blur-sm">
                    <div className="bg-[#111] border border-white/10 rounded-xl p-6 w-[320px] text-center shadow-xl animate-fadeIn">

                        <h2
                            className={`text-lg font-semibold mb-2 ${status === "success"
                                    ? "text-green-400"
                                    : "text-red-400"
                                }`}
                        >
                            {status === "success" ? "Success 🎉" : "Error ❌"}
                        </h2>

                        <p className="text-sm text-gray-300 mb-4">{message}</p>

                        <button
                            onClick={() => setStatus("")}
                            className="bg-linear-to-r from-blue-500 to-cyan-400 px-4 py-2 rounded-lg text-sm"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

            {/* FOOTER */}
            <footer className="bg-black text-white border-t border-white/10 mt-20">
                <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">

                    {/* LEFT */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image src={Stuimage} alt="logo" width={36} height={36} />
                            <h2 className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Stuward
                            </h2>
                        </div>

                        <p className="text-gray-400 text-sm">
                            Learn, play, and earn with skill-based games designed for students.
                        </p>
                    </div>

                    {/* MIDDLE */}
                    <div className="grid grid-cols-2 gap-6">

                        {/* QUICK LINKS */}
                        <div>
                            <h3 className="font-semibold mb-3 text-cyan-400">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="cursor-pointer hover:text-white" onClick={() => navigate("/")}>Home</li>
                                <li className="cursor-pointer hover:text-white" onClick={() => navigate("/about")}>About</li>
                                <li className="cursor-pointer hover:text-white" onClick={() => navigate("/support")}>Support</li>
                                <li className="cursor-pointer hover:text-white" onClick={() => navigate("/profile")}>Profile</li>
                            </ul>
                        </div>

                        {/* GAMES */}
                        <div>
                            <h3 className="font-semibold mb-3 text-cyan-400">Games</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="cursor-pointer hover:text-white" onClick={() => navigate("/games/atlas")}>Atlas</li>
                                <li className="cursor-pointer hover:text-white" onClick={() => navigate("/games/aptitude")}>Aptitude</li>
                                <li className="cursor-pointer hover:text-white" onClick={() => navigate("/games/coding")}>Coding</li>
                                <li className="cursor-pointer hover:text-white" onClick={() => navigate("/games/reasoning")}>Reasoning</li>
                            </ul>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div>
                        <h3 className="font-semibold mb-3 text-cyan-400">
                            Subscribe Newsletter
                        </h3>

                        <div className="flex bg-white/10 rounded-lg overflow-hidden">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-transparent px-3 py-2 outline-none text-sm w-full"
                            />

                            <button
                                onClick={handleSubscribe}
                                disabled={loadingSub}
                                className="bg-linear-to-r from-blue-500 to-cyan-400 px-4 text-sm flex items-center justify-center min-w-27.5"
                            >
                                {loadingSub ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : (
                                    "Subscribe"
                                )}
                            </button>
                        </div>

                        <p className="text-xs text-gray-500 mt-2">
                            Get updates about new games and rewards.
                        </p>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-white/10 text-center py-4 text-sm text-gray-500">
                    © {new Date().getFullYear()} Stuward India Pvt Ltd. All rights reserved.
                </div>
            </footer>
        </>
    );
}
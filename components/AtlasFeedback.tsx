"use client";

import { useState } from "react";
import { MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";

export function AtlasFeedback() {
    const [formData, setFormData] = useState({ subject: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Something went wrong");

            setStatus("success");
            setFormData({ subject: "", email: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    return (
        <section className="py-24 bg-linear-to-b from-black to-zinc-950 text-white relative overflow-hidden flex justify-center">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-2xl mx-auto px-4 relative z-10 w-full">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 mb-6 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                        <MessageSquare size={28} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Report & <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Feedback</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Found a bug? Have a suggestion? Or need to report a player? Let us know below.
                    </p>
                </div>

                {/* Form Card */}
                <div className="p-8 md:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">

                    {status === "success" ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
                            <CheckCircle className="text-emerald-400 w-16 h-16 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                            <p className="text-gray-400">Thank you for helping us improve the Atlas Game. We will look into it shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Subject Dropdown */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Category *</label>
                                    <select
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none"
                                    >
                                        <option value="" disabled className="text-gray-500">Select a topic...</option>
                                        <option value="Bug Report">🐛 Bug Report</option>
                                        <option value="Player Report">⚠️ Report a Player</option>
                                        <option value="Game Suggestion">💡 Game Suggestion</option>
                                        <option value="Payment Issue">💳 Payment Issue</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email (Optional)</label>
                                    <input
                                        type="email"
                                        placeholder="For follow-up replies"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-gray-600"
                                    />
                                </div>
                            </div>

                            {/* Message Textarea */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Message *</label>
                                <textarea
                                    required
                                    rows={5}
                                    placeholder="Describe the issue or share your feedback in detail..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-y placeholder:text-gray-600"
                                />
                            </div>

                            {/* Error Banner */}
                            {status === "error" && (
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                    <AlertCircle size={18} className="shrink-0" />
                                    <p>{errorMessage}</p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full relative group px-8 py-4 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <div className="relative z-10 flex items-center justify-center gap-2">
                                    {status === "loading" ? (
                                        <span className="animate-pulse">Sending Report...</span>
                                    ) : (
                                        <>
                                            Send Feedback
                                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </div>
                                {/* Button Hover Shine */}
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
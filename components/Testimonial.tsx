"use client";

import { Quote, Star } from "lucide-react";

export function FeedbackSection() {
    const feedbacks = [
        {
            name: "Rahul (Student)",
            text: "I improved my aptitude and earned money at the same time. This is addictive 🔥",
            color: "from-cyan-400 to-blue-500"
        },
        {
            name: "Anjali (Student)",
            text: "Atlas game is super fun and competitive. Never seen this concept before!",
            color: "from-purple-400 to-pink-500"
        },
        {
            name: "Rohit (Gamer)",
            text: "Feels like PUBG rooms but for brain games. Really engaging experience.",
            color: "from-amber-400 to-orange-500"
        },
        {
            name: "Priya (Parent)",
            text: "My child is learning while playing. Much better than useless gaming apps.",
            color: "from-emerald-400 to-teal-500"
        },
        {
            name: "Aman (Coder)",
            text: "Coding battles are amazing. Helps me practice and earn together.",
            color: "from-blue-400 to-indigo-500"
        },
        {
            name: "Neha (Parent)",
            text: "I feel safe letting my kid use this platform. Skill-based and educational.",
            color: "from-rose-400 to-red-500"
        },
    ];

    // We duplicate the array to create a seamless infinite loop
    const doubledFeedbacks = [...feedbacks, ...feedbacks];

    return (
        <section className="py-24 bg-zinc-950 text-white overflow-hidden relative border-t border-white/5">

            {/* Inline styles for the marquee animation so it works without tailwind.config edits */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
                .fade-edges {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}} />

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Wall of <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Love</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        See what our community of students, gamers, and parents are saying about their experience.
                    </p>
                </div>

                {/* Scrolling Container with Fade Edges */}
                <div className="fade-edges relative flex overflow-hidden group">

                    {/* The Moving Track */}
                    <div className="flex gap-6 animate-marquee min-w-max py-4 px-3">
                        {doubledFeedbacks.map((item, index) => (
                            <div
                                key={index}
                                className="relative w-[320px] md:w-95 p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-zinc-900/80 hover:border-white/10 group/card flex flex-col justify-between shadow-lg"
                            >
                                {/* Background Quote Icon */}
                                <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16 rotate-12 group-hover/card:text-white/10 transition-colors duration-300" />

                                <div className="relative z-10">
                                    {/* Star Rating */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                        ))}
                                    </div>

                                    {/* Feedback Text */}
                                    <p className="text-gray-300 text-base mb-8 leading-relaxed">
                                        &quot;{item.text}&quot;
                                    </p>
                                </div>

                                {/* User Info Footer */}
                                <div className="flex items-center gap-4 relative z-10 mt-auto border-t border-white/5 pt-4">
                                    {/* CSS Gradient Avatar */}
                                    <div className={`w-10 h-10 rounded-full bg-linear-to-tr ${item.color} flex items-center justify-center shadow-inner`} />
                                    <div>
                                        <p className="text-white text-sm font-semibold tracking-wide">
                                            {item.name.split(' ')[0]}
                                        </p>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mt-0.5">
                                            {item.name.match(/\((.*?)\)/)?.[1] || "User"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
"use client";

import { useEffect, useRef } from "react";

export function FeedbackSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const feedbacks = [
        {
            name: "Rahul (Student)",
            text: "I improved my aptitude and earned money at the same time. This is addictive 🔥",
        },
        {
            name: "Anjali (Student)",
            text: "Atlas game is super fun and competitive. Never seen this concept before!",
        },
        {
            name: "Rohit (Gamer)",
            text: "Feels like PUBG rooms but for brain games. Really engaging experience.",
        },
        {
            name: "Priya (Parent)",
            text: "My child is learning while playing. Much better than useless gaming apps.",
        },
        {
            name: "Aman (Coder)",
            text: "Coding battles are amazing. Helps me practice and earn together.",
        },
        {
            name: "Neha (Parent)",
            text: "I feel safe letting my kid use this platform. Skill-based and educational.",
        },
    ];

    // Auto scroll effect
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let scrollAmount = 0;

        const interval = setInterval(() => {
            if (container) {
                scrollAmount += 1;
                container.scrollLeft = scrollAmount;

                // loop
                if (scrollAmount >= container.scrollWidth / 2) {
                    scrollAmount = 0;
                }
            }
        }, 20); // speed control

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">

                <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center">
                    What Users Say 💬
                </h2>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-hidden"
                >
                    {[...feedbacks, ...feedbacks].map((item, index) => (
                        <div
                            key={index}
                            className="min-w-70 md:min-w-[320px] max-w-[320px] p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 transition flex flex-col justify-between"
                        >
                            {/* TEXT */}
                            <p className="text-gray-300 text-sm mb-4 leading-relaxed wrap-break-word">
                                &quot;{item.text}&quot;
                            </p>

                            {/* NAME */}
                            <p className="text-cyan-400 text-sm font-semibold mt-auto">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
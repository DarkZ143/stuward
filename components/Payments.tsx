"use client";

import {
    ShieldCheck,
    Wallet,
    Banknote,
    IndianRupee,
} from "lucide-react";

export function PaymentSection() {
    const payments = [
        {
            title: "Secure Payments",
            desc: "All transactions are protected with secure payment gateways.",
            icon: <ShieldCheck className="text-cyan-400" size={28} />,
        },
        {
            title: "Instant Rewards",
            desc: "Winnings are credited instantly to your wallet.",
            icon: <Wallet className="text-green-400" size={28} />,
        },
        {
            title: "Easy Withdrawals",
            desc: "Withdraw your earnings anytime to your bank account.",
            icon: <Banknote className="text-yellow-400" size={28} />,
        },
        {
            title: "Low Entry Fee",
            desc: "Start playing with minimal investment and win big.",
            icon: <IndianRupee className="text-purple-400" size={28} />,
        },
    ];

    return (
        <section className="py-16 bg-linear-to-b from-black to-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto px-4">

                <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center">
                    Payments & Rewards
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {payments.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:scale-105 hover:border-cyan-400/30 transition group"
                        >
                            {/* ICON */}
                            <div className="mb-4">
                                {item.icon}
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg font-semibold mb-2 text-cyan-400">
                                {item.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-gray-400 text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
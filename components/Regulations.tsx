"use client";

export function RegulationsSection() {
    return (
        <section className="py-20 bg-black text-white relative overflow-hidden">

            <div className="max-w-5xl mx-auto px-4 relative">

                {/* BIG CURLY BRACKETS */}
                <div className="absolute -left-10 top-0 text-[120px] md:text-[160px] font-bold text-cyan-400/10 select-none">
                    {"{"}
                </div>

                <div className="absolute -right-10 bottom-0 text-[120px] md:text-[160px] font-bold text-blue-400/10 select-none">
                    {"}"}
                </div>

                {/* CONTENT BOX */}
                <div className="relative p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.08)]">

                    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Legal & Fair Play
                    </h2>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed text-center">
                        Stuward is a{" "}
                        <span className="text-cyan-400 font-semibold">
                            skill-based gaming platform
                        </span>{" "}
                        where outcomes depend on user knowledge and performance. We strictly
                        follow fair play policies and{" "}
                        <span className="text-red-400 font-semibold">
                            do not support gambling or luck-based games
                        </span>.
                    </p>

                    <p className="mt-4 text-gray-400 text-sm md:text-base text-center">
                        Users must be{" "}
                        <span className="text-yellow-400 font-semibold">18+</span> to
                        participate. By using Stuward, you agree to our{" "}
                        <span className="text-blue-400 font-semibold">
                            terms, conditions, and responsible gaming policies
                        </span>.
                    </p>

                    {/* NOTE */}
                    <div className="mt-6 text-center text-xs text-gray-500">
                        ⚠️ This platform is intended for educational and skill-based
                        competitions only.
                    </div>

                </div>
            </div>
        </section>
    );
}
"use client";

import {
  Brain,
  Users,
  Wallet,
  Trophy,
  ShieldAlert,
  Timer,
  CheckCircle2,
} from "lucide-react";

export function RulesSection() {
  const rules = [
    {
      title: "Pure Skill",
      text: "All games are 100% skill-based. Strategy and speed are your only tools—no luck involved.",
      icon: <Brain className="text-cyan-400" size={28} />,
      border: "hover:border-cyan-500/50",
    },
    {
      title: "Fair Matchmaking",
      text: "Rooms activate instantly once the required player count is reached for a fair challenge.",
      icon: <Users className="text-blue-400" size={28} />,
      border: "hover:border-blue-500/50",
    },
    {
      title: "Secure Entry",
      text: "Entry fees are safely held in a secure pool and deducted only when the game begins.",
      icon: <Wallet className="text-green-400" size={28} />,
      border: "hover:border-green-500/50",
    },
    {
      title: "Ranked Rewards",
      text: "Winners are automatically calculated based on accuracy and completion time.",
      icon: <Trophy className="text-yellow-400" size={28} />,
      border: "hover:border-yellow-500/50",
    },
    {
      title: "Blitz Format",
      text: "Every game is time-bound. Quick thinking is rewarded; delay leads to disqualification.",
      icon: <Timer className="text-purple-400" size={28} />,
      border: "hover:border-purple-500/50",
    },
    {
      title: "Anti-Cheat System",
      text: "Zero tolerance for bots or scripts. Integrity breaches result in permanent bans.",
      icon: <ShieldAlert className="text-red-400" size={28} />,
      border: "hover:border-red-500/50",
    },
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            The <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Rules of Play</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Stuward operates on transparency and integrity. Here is how we ensure a competitive and rewarding environment for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm transition-all duration-300 ${rule.border} hover:bg-zinc-900/60`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 group-hover:scale-110 transition-transform duration-300">
                  {rule.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
                    {rule.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {rule.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-16 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <CheckCircle2 size={14} />
            Verified Skill-Based Platform
          </div>
          <p className="text-gray-500 text-xs text-center italic">
            *By joining a room, you agree to comply with our fair-play policy.
          </p>
        </div>
      </div>
    </section>
  );
}
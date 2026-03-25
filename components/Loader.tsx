"use client";

export default function Loader() {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-999">

            <div className="spinning-number text-white">

                {/* WHEEL 1 */}
                <div
                    className="wheel"
                    style={
                        {
                            color: "#4f46e5",
                            "--l": "3em",
                            "--m": 22,
                            "--t": "22s",
                            "--r1": "normal",
                            "--s": 1,
                        } as React.CSSProperties
                    }
                >
                    {Array.from({ length: 22 }).map((_, i) => (
                        <div
                            key={i}
                            className="number"
                            style={
                                {
                                    "--a": `${(360 / 22) * i}deg`,
                                    "--i": i,
                                } as React.CSSProperties
                            }
                        />
                    ))}
                </div>

                {/* WHEEL 2 */}
                <div
                    className="wheel"
                    style={
                        {
                            color: "#6366f1",
                            "--l": "4em",
                            "--m": 29,
                            "--t": "29s",
                            "--r1": "reverse",
                            "--s": 0.98,
                        } as React.CSSProperties
                    }
                >
                    {Array.from({ length: 29 }).map((_, i) => (
                        <div
                            key={i}
                            className="number"
                            style={
                                {
                                    "--a": `${(360 / 29) * i}deg`,
                                    "--i": i,
                                } as React.CSSProperties
                            }
                        />
                    ))}
                </div>

                {/* WHEEL 3 */}
                <div
                    className="wheel"
                    style={
                        {
                            color: "#818cf8",
                            "--l": "5em",
                            "--m": 36,
                            "--t": "36s",
                            "--r1": "reverse",
                            "--s": 0.96,
                        } as React.CSSProperties
                    }
                >
                    {Array.from({ length: 36 }).map((_, i) => (
                        <div
                            key={i}
                            className="number"
                            style={
                                {
                                    "--a": `${(360 / 36) * i}deg`,
                                    "--i": i,
                                } as React.CSSProperties
                            }
                        />
                    ))}
                </div>

            </div>

            {/* STYLES */}
            <style jsx>{`
        .spinning-number {
          position: relative;
          font-size: 40px;
        }

        .wheel {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: spin var(--t) linear infinite var(--r1);
        }

        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .number {
          position: absolute;
          transform: translate(-50%, -50%)
            rotate(var(--a))
            translateY(calc(var(--l) * -1))
            scale(var(--s));
        }

        .number::before {
          content: "1";
          animation: change calc(var(--t) * 1.8) linear infinite;
        }

        @keyframes change {
          0% {
            content: "1";
          }
          50% {
            content: "0";
          }
          100% {
            content: "1";
          }
        }
      `}</style>
        </div>
    );
}
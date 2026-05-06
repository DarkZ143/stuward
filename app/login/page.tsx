/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { useRouter } from "next/navigation";
import { useLoader } from "@/context/LoaderContext";
import Image from "next/image";

export default function Login() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { setLoading } = useLoader();

    // 🔐 EMAIL LOGIN
    const handleLogin = async () => {
        if (!email || !password) {
            alert("Enter email & password");
            return;
        }

        try {
            setLoading(true);

            const res = await signInWithEmailAndPassword(auth, email, password);
            const user = res.user;

            const userRef = doc(db, "users", user.uid);
            const snap = await getDoc(userRef);

            if (!snap.exists()) {
                await setDoc(userRef, {
                    email: user.email,
                    name: user.email?.split("@")[0],
                    provider: "email",
                    gender: "other",

                    wallet: 0,
                    matches: 0,
                    wins: 0,
                    accuracy: 0,
                });
            }

            router.push("/");
        } catch (err) {
            alert("Login failed ❌");
        } finally {
            setLoading(false);
        }
    };

    // 🔵 GOOGLE LOGIN
    const handleGoogleLogin = async () => {
        try {
            setLoading(true);

            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            

            const userRef = doc(db, "users", user.uid);
            const snap = await getDoc(userRef);

            if (!snap.exists()) {
                await setDoc(userRef, {
                    name: user.displayName,
                    email: user.email,
                    provider: "google",
                    gender: "other",

                    wallet: 0,
                    matches: 0,
                    wins: 0,
                    accuracy: 0,
                });
            }

            router.push("/");
        } catch (err) {
            alert("Google login failed ❌");
        } finally {
            setLoading(false);
        }
    };

    // 🔁 FORGOT PASSWORD
    const handleForgotPassword = async () => {
        if (!email) {
            setError("Please enter your email first");
            return;
        }

        try {
            setLoading(true);

            await sendPasswordResetEmail(auth, email);

            setError("✅ Password reset link sent to your email");

        } catch (err: any) {
            if (err.code === "auth/user-not-found") {
                setError("User not found");
            } else {
                setError("Failed to send reset email ❌");
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">

            <div className="p-8 bg-white/5 border border-white/10 rounded-xl w-[320px]">

                <h2 className="text-xl mb-6 text-center font-semibold">
                    Welcome Back 👋
                </h2>

                {/* ✅ ERROR MESSAGE HERE */}
                {error && (
                    <p className="text-sm text-center mb-3 text-red-400">
                        {error}
                    </p>
                )}

                {/* EMAIL */}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-3 p-2 bg-black border border-white/10 rounded-md"
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* PASSWORD */}
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-2 p-2 bg-black border border-white/10 rounded-md"
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* FORGOT PASSWORD */}
                <div className="text-right mb-4">
                    <button
                        onClick={handleForgotPassword}
                        className="text-xs text-cyan-400 hover:underline"
                    >
                        Forgot Password?
                    </button>
                </div>

                {/* LOGIN BUTTON */}
                <button
                    onClick={handleLogin}
                    className="w-full bg-linear-to-r from-blue-500 to-cyan-400 py-2 rounded-md hover:opacity-90 transition"
                >
                    Login
                </button>

                {/* OR DIVIDER */}
                <div className="flex items-center gap-2 my-4">
                    <div className="flex-1 h-px bg-white/10"></div>
                    <span className="text-xs text-gray-400">OR</span>
                    <div className="flex-1 h-px bg-white/10"></div>
                </div>

                {/* GOOGLE BUTTON */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-2 border border-white/20 py-2 rounded-md hover:bg-white/10 transition"
                >

                    <Image src="/google.png" alt="Google" width={24} height={24} /> Continue with Google
                </button>

                {/* SIGNUP LINK */}
                <p className="text-center text-sm text-gray-400 mt-5">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => router.push("/signup")}
                        className="text-cyan-400 cursor-pointer hover:underline"
                    >
                        Sign Up
                    </span>
                </p>

            </div>

        </div>
    );
}
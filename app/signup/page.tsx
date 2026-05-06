/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useLoader } from "@/context/LoaderContext";
import Image from "next/image";

export default function Signup() {
    const router = useRouter();
    const { setLoading } = useLoader();

    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        gender: "other",
    });

    const [error, setError] = useState("");

    // 🔥 HANDLE INPUT
    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // 🔐 VALIDATION
    const validate = () => {
        if (!form.name || !form.username || !form.email || !form.password) {
            return "All required fields must be filled";
        }

        if (!/\S+@\S+\.\S+/.test(form.email)) {
            return "Invalid email format";
        }

        if (form.password.length < 6) {
            return "Password must be at least 6 characters";
        }

        if (form.password !== form.confirmPassword) {
            return "Passwords do not match";
        }

        if (form.phone && form.phone.length < 10) {
            return "Invalid phone number";
        }

        return "";
    };

    // ✅ EMAIL SIGNUP
    const handleSignup = async () => {
        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            setError("");
            setLoading(true);

            const res = await createUserWithEmailAndPassword(
                auth,
                form.email,
                form.password
            );

            const user = res.user;

            const userRef = doc(db, "users", user.uid);
            const snap = await getDoc(userRef);

            if (!snap.exists()) {
                await setDoc(userRef, {
                    name: form.name,
                    username: form.username,
                    email: form.email,
                    phone: form.phone,
                    provider: "email",
                    gender: form.gender,

                    wallet: 0,
                    matches: 0,
                    wins: 0,
                    accuracy: 0,
                });
            }

            router.push("/");
        } catch (err) {
            setError("Signup failed ❌");
        } finally {
            setLoading(false);
        }
    };

    // 🔵 GOOGLE SIGNUP
    const handleGoogleSignup = async () => {
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
            setError("Google signup failed ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">

            <div className="p-8 bg-white/5 border border-white/10 rounded-xl w-87.5">

                <h2 className="text-xl mb-6 text-center font-semibold">
                    Create Account 🚀
                </h2>

                {/* ERROR */}
                {error && (
                    <p className="text-red-400 text-sm mb-3 text-center">{error}</p>
                )}

                {/* NAME */}
                <input
                    name="name"
                    placeholder="Full Name"
                    className="w-full mb-3 p-2 bg-black border border-white/10 rounded-md"
                    onChange={handleChange}
                />

                {/* USERNAME */}
                <input
                    name="username"
                    placeholder="Username"
                    className="w-full mb-3 p-2 bg-black border border-white/10 rounded-md"
                    onChange={handleChange}
                />

                {/* EMAIL */}
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full mb-3 p-2 bg-black border border-white/10 rounded-md"
                    onChange={handleChange}
                />

                {/* PHONE */}
                <input
                    name="phone"
                    placeholder="Phone (optional)"
                    className="w-full mb-3 p-2 bg-black border border-white/10 rounded-md"
                    onChange={handleChange}
                />

                {/* PASSWORD */}
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full mb-3 p-2 bg-black border border-white/10 rounded-md"
                    onChange={handleChange}
                />

                {/* CONFIRM PASSWORD */}
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full mb-3 p-2 bg-black border border-white/10 rounded-md"
                    onChange={handleChange}
                />

                {/* GENDER */}
                <select
                    name="gender"
                    className="w-full mb-4 p-2 bg-black border border-white/10 rounded-md"
                    onChange={handleChange}
                >
                    <option value="male">Male 👨</option>
                    <option value="female">Female 👩</option>
                    <option value="other">Other 🦅</option>
                </select>

                {/* SIGNUP BUTTON */}
                <button
                    onClick={handleSignup}
                    className="w-full bg-linear-to-r from-blue-500 to-cyan-400 py-2 rounded-md hover:opacity-90 transition"
                >
                    Create Account
                </button>

                {/* OR */}
                <div className="flex items-center gap-2 my-4">
                    <div className="flex-1 h-px bg-white/10"></div>
                    <span className="text-xs text-gray-400">OR</span>
                    <div className="flex-1 h-px bg-white/10"></div>
                </div>

                {/* GOOGLE */}
                <button
                    onClick={handleGoogleSignup}
                    className="w-full flex items-center justify-center gap-2 border border-white/20 py-2 rounded-md hover:bg-white/10 transition"
                >
                    <Image src="/google.png" alt="Google" width={24} height={24} /> Continue with Google
                </button>

                {/* LOGIN REDIRECT */}
                <p className="text-center text-sm text-gray-400 mt-5">
                    Already have an account?{" "}
                    <span
                        onClick={() => router.push("/login")}
                        className="text-cyan-400 cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>

            </div>

        </div>
    );
}
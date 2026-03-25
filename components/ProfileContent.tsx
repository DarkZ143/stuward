"use client";

import { useAuth } from "@/context/AuthContext";
import { useUserData } from "@/hooks/useUserData";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";


export default function ProfileContent() {
    const { user, loading } = useAuth();
    const userData = useUserData();
    const router = useRouter();
    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login"); // ✅ use replace instead of push
        }
    }, [user, loading])




    const [name, setName] = useState("");
    const [gender, setGender] = useState("other");


    // 🔥 Avatar logic
    const getAvatar = (gender?: string) => {
        if (gender === "male") return "👨";
        if (gender === "female") return "👩";
        return "🦅";
    };

    // 🔥 Sync data once
    useEffect(() => {
        if (userData) {
            setName((prev) => prev || userData.name || "");
            setGender((prev) => prev || userData.gender || "other");
        }
    }, [userData]);

    // 🔥 Update profile
    const handleUpdate = async () => {
        if (!user) return;

        await updateDoc(doc(db, "users", user.uid), {
            name,
            gender,
        });

        alert("Profile updated ✅");
    };
    if (loading) return null;
    // 🔥 Logout
    const logout = async () => {
        await signOut(auth);
        router.replace("/login");
    };

    return (
        <div className="min-h-screen bg-black text-white px-4 py-10">

            <div className="max-w-3xl mx-auto">

                {/* ================= PROFILE HEADER ================= */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">

                    {/* AVATAR */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-4xl">
                        {getAvatar(gender)}
                    </div>

                    {/* NAME */}
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-black border border-white/10 px-3 py-2 rounded mb-2 text-center w-full"
                    />

                    {/* GENDER */}
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="bg-black border border-white/10 px-3 py-2 rounded mb-3 w-full"
                    >
                        <option value="male">Male 👨</option>
                        <option value="female">Female 👩</option>
                        <option value="other">Other 🦅</option>
                    </select>

                    {/* EMAIL */}
                    <p className="text-gray-400 text-sm">{userData?.email}</p>

                    {/* SAVE BUTTON */}
                    <button
                        onClick={handleUpdate}
                        className="mt-3 px-4 py-2 bg-linear-to-r from-blue-500 to-cyan-400 rounded hover:opacity-90"
                    >
                        Save Changes
                    </button>
                </div>

                {/* ================= STATS ================= */}
                <div className="grid grid-cols-3 gap-4 mt-6 text-center">

                    <div className="bg-white/5 p-4 rounded-lg">
                        <p className="text-xl font-bold">
                            {userData?.matches || 0}
                        </p>
                        <p className="text-sm text-gray-400">Matches</p>
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        <p className="text-xl font-bold">
                            {userData?.wins || 0}
                        </p>
                        <p className="text-sm text-gray-400">Wins</p>
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        <p className="text-xl font-bold">
                            {userData?.accuracy || 0}%
                        </p>
                        <p className="text-sm text-gray-400">Accuracy</p>
                    </div>

                </div>

                {/* ================= WALLET ================= */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl mt-6 text-center">

                    <h3 className="text-lg mb-2">💰 Wallet Balance</h3>

                    <p className="text-3xl font-bold text-cyan-400">
                        {userData?.wallet || 0} SW
                    </p>

                    <div className="flex justify-center gap-4 mt-4">
                        <button className="px-4 py-2 bg-green-500 rounded">
                            Add
                        </button>
                        <button className="px-4 py-2 bg-red-500 rounded">
                            Withdraw
                        </button>
                    </div>

                </div>

                {/* ================= ACTIONS ================= */}
                <div className="mt-6 flex flex-col gap-3">

                    <button className="bg-white/5 py-3 rounded-lg hover:bg-white/10">
                        ⚙ Settings
                    </button>

                    <button
                        onClick={logout}
                        className="bg-red-500/20 text-red-400 py-3 rounded-lg hover:bg-red-500/30"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>
    );
}
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login"); // ✅ MUST use replace
        }
    }, [user, loading]);

    // 🔥 While checking auth → let global loader handle UI
    if (loading) return null;

    // 🔥 If not logged in → block render
    if (!user) return null;

    return <>{children}</>;
}
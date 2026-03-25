"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export function useUserData() {
    const { user } = useAuth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        if (!user) return;

        const fetchData = async () => {
            const snap = await getDoc(doc(db, "users", user.uid));
            if (snap.exists()) {
                setUserData(snap.data());
            }
        };

        fetchData();
    }, [user]);

    return userData;
}
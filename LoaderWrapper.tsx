"use client";

import { useLoader } from "@/context/LoaderContext";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Loader from "@/components/Loader";

export function LoaderWrapper() {
  const { loading, setLoading } = useLoader();
  const pathname = usePathname();

  useEffect(() => {
    setLoading(false);
  }, [pathname, setLoading]); // ✅ FIXED

  return loading ? <Loader /> : null;
}
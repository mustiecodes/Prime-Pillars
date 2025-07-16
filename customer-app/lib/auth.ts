"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";

export const useProtectRoute = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && (!user || !user.is_verified)) {
      router.push("/login");
    }
  }, [user, loading, router]);
};

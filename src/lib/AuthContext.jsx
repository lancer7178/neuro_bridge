"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase/config";
import { onAuthStateChanged, signOut as fbSignOut } from "firebase/auth";
import { doc, getDoc, getDocFromCache } from "firebase/firestore";

const AuthContext = createContext({
  user: null,
  profile: null,
  loading: true,
  logout: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!mounted) return;

      if (currentUser) {
        setUser(currentUser);
        setLoading(true);

        try {
          const docRef = doc(db, "users", currentUser.uid);

          // try fast cache read first
          try {
            const cacheSnap = await getDocFromCache(docRef);
            if (cacheSnap && cacheSnap.exists()) {
              const cached = { ...cacheSnap.data(), email: currentUser.email };
              cached.role = (cached.role || "").toLowerCase();
              setProfile(cached);
              try {
                localStorage.setItem("userData", JSON.stringify(cached));
              } catch (e) {}
            }
          } catch (e) {
            // cache read may fail if not available; ignore
          }

          // then network fetch to ensure up-to-date data
          const netSnap = await getDoc(docRef);
          if (netSnap.exists()) {
            const net = { ...netSnap.data(), email: currentUser.email };
            net.role = (net.role || "").toLowerCase();
            setProfile(net);
            try {
              localStorage.setItem("userData", JSON.stringify(net));
            } catch (e) {}
          } else {
            const fallback = {
              email: currentUser.email,
              fullName: "",
              role: "student",
            };
            setProfile(fallback);
            try {
              localStorage.setItem("userData", JSON.stringify(fallback));
            } catch (e) {}
          }
        } catch (err) {
          console.warn("AuthProvider: failed to fetch profile", err);
        } finally {
          setLoading(false);
        }
      } else {
        setUser(null);
        setProfile(null);
        try {
          localStorage.removeItem("userData");
        } catch (e) {}
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, []);

  const logout = async () => {
    try {
      await fbSignOut(auth);
    } catch (e) {
      console.warn("logout failed", e);
    }
    setUser(null);
    setProfile(null);
    try {
      localStorage.removeItem("userData");
    } catch (e) {}
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

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
    // Listen for immediate profile updates from register/login flows
    const handleAuthProfileUpdated = (e) => {
      try {
        const data = e?.detail;
        if (data) {
          const norm = { ...data, role: (data.role || "").toLowerCase() };
          setProfile(norm);
          try {
            localStorage.setItem("userData", JSON.stringify(norm));
          } catch (err) {}
        }
      } catch (err) {}
    };

    window.addEventListener("authProfileUpdated", handleAuthProfileUpdated);

    // cleanup in return of outer effect
    let mounted = true;

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!mounted) return;

      if (currentUser) {
        setUser(currentUser);
        setLoading(true);

        try {
          // Hydrate from localStorage immediately to avoid role flicker after signup
          try {
            const cachedLocal = JSON.parse(
              localStorage.getItem("userData") || "null"
            );
            if (cachedLocal && cachedLocal.role) {
              const norm = {
                ...cachedLocal,
                role: (cachedLocal.role || "").toLowerCase(),
                email: cachedLocal.email || currentUser.email,
              };
              setProfile(norm);
            }
          } catch (e) {}

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
            // Avoid forcing a student fallback; prefer cached or existing role
            let fallbackRole = (profile?.role || "").toLowerCase();
            let fallback = {
              email: currentUser.email,
              fullName: "",
              role: fallbackRole,
            };
            try {
              const cached = JSON.parse(
                localStorage.getItem("userData") || "null"
              );
              if (cached && cached.role) {
                fallback = {
                  ...cached,
                  email: cached.email || currentUser.email,
                };
                fallback.role = (fallback.role || "").toLowerCase();
              }
            } catch (e) {}

            // If still empty, leave role blank instead of downgrading to student
            fallback.role = fallback.role || "";

            setProfile(fallback);
            // Only write fallback if we genuinely have no cached role; otherwise keep existing
            if (!fallback.role) {
              try {
                localStorage.setItem("userData", JSON.stringify(fallback));
              } catch (e) {}
            }
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
      window.removeEventListener(
        "authProfileUpdated",
        handleAuthProfileUpdated
      );
      unsubscribe();
    };
  }, [profile?.role]);

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

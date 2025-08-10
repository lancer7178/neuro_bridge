"use client";

import React, { Suspense, lazy } from "react";

const LoginClient = lazy(() => import("./LoginClient"));

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="text-center p-10 text-white">جارٍ التحميل...</div>}>
      <LoginClient />
    </Suspense>
  );
}

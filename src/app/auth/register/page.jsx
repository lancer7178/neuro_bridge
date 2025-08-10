"use client";

import React, { Suspense, lazy } from "react";

const RegisterClient = lazy(() => import("./RegisterClient"));

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="text-center p-10 text-white">جارٍ التحميل...</div>}>
      <RegisterClient />
    </Suspense>
  );
}

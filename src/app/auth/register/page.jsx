import React, { Suspense } from "react";
import RegisterClient from "./RegisterClient";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="text-center p-10 text-white">جارٍ التحميل...</div>}>
      <RegisterClient />
    </Suspense>
  );
}

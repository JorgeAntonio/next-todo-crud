import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center bg-slate-900">
      <h1 className="text-4xl font-bold text-white">404 - Not Found</h1>
      <Link href="/">
        <h3 className="text-white">Volver al inicio</h3>
      </Link>
    </div>
  );
}

export default NotFound;

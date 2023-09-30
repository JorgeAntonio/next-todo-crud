import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-slate-600 container flex justify-between items-center mx-auto px-4 py-3 text-white">
      <Link href="/">
        <h3>Next CRUD</h3>
      </Link>
      <ul className="flex gap-2">
        <Link href="/">Inicio</Link>
        <Link href="/new">Nuevo</Link>
        <Link href="/about">Acerca de</Link>
      </ul>
    </nav>
  );
}

export default Navbar;

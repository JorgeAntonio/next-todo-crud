import React from "react";

function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 p-10 w-sm md:w-md">
        <h1 className="font-bold text-sm">Cargando...</h1>
      </div>
    </div>
  );
}

export default Loading;

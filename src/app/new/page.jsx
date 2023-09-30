"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    if (!params.id) {
      await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-slate-900">
      <form className="bg-slate-800 p-10 w-sm md:w-md" onSubmit={handleSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>
        <input
          id="title"
          className="border-2 border-gray-300 focus:outline-none focus:border-blue-300 rounded-lg p-2 mb-4 block w-full appearance-none leading-normal text-black"
          type="text"
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripción de la tarea
        </label>
        <textarea
          id="description"
          className="border-2 border-gray-300 focus:outline-none focus:border-blue-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-black"
          rows={4}
          placeholder="Descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Crear
          </button>
          {params.id && (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={async () => {
                alert("¿Estas seguro de eliminar esta tarea?");
                await fetch(`/api/tasks/${params.id}`, {
                  method: "DELETE",
                });
                router.refresh();
                router.push("/");
              }}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default NewPage;

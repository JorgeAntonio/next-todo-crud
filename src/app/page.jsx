import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function LoadTasks() {
  return await prisma.task.findMany();
}

export default async function Home() {
  const tasks = await LoadTasks();
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-white my-4">Tareas</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tasks.map((task) => {
          return <TaskCard task={task} key={task.id} />;
        })}
      </div>
    </main>
  );
}

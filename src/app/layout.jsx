import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Next Todo App",
  description: "Crud de tareas con Next.js, Prisma, Tailwind CSS y PostgreSQL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matías Speroni — Frontend Developer",
  description:
    "Portfolio de Matías Speroni: proyectos frontend, tecnologías y experiencia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

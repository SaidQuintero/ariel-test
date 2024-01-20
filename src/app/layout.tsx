import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import Sidebar from "@/components/Sidebar";
import SidePanel from "@/components/SidePanel";

export const metadata: Metadata = {
  title: "Ariel UI Example",
  description: "Pruebas de Next JS por Said",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} body`}>
        <Sidebar />
        <div className="content">{children}</div>
        <SidePanel />
      </body>
    </html>
  );
}

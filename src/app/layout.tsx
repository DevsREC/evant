'use client'

import "./globals.css";
import BottomNavbar from "@/components/custom/BottomNavbar/BottomNavbar";
import { usePathname } from 'next/navigation';
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showBottomNav = !pathname?.startsWith('/event/');

  return (
    <html lang="en">
      <body className="antialiased">
        <main className="font-urbanist">
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </main>
        {showBottomNav && <BottomNavbar />}
      </body>
    </html>
  );
}
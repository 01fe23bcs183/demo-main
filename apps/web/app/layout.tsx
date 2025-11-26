import React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <header className="p-4 bg-white shadow">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="font-bold text-xl">IndieTix</div>
            <nav className="flex gap-4 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <a href="/events" className="hover:underline">Browse</a>
              <a href="/bookings" className="hover:underline">My Bookings</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto p-4 space-y-6">{children}</main>
      </body>
    </html>
  );
}

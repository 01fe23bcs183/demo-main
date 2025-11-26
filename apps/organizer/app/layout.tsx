import React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <header className="p-4 bg-white shadow">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <div className="font-bold text-xl">IndieTix Organizer</div>
            <nav className="flex gap-4 text-sm">
              <a href="/" className="hover:underline">Dashboard</a>
              <a href="/events" className="hover:underline">Events</a>
              <a href="/payouts" className="hover:underline">Payouts</a>
              <a href="/refunds" className="hover:underline">Refunds</a>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto p-4 space-y-6">{children}</main>
      </body>
    </html>
  );
}

import React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <header style={{ position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(8px)" }} className="bg-white/90 border-b border-slate-200">
          <div className="shell" style={{ padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div className="pill">Organizer</div>
              <span style={{ color: "#475569", fontSize: 13 }}>Create, monitor, and settle</span>
            </div>
            <nav style={{ display: "flex", gap: 10, fontSize: 13 }}>
              <a href="/" className="hover:underline">Dashboard</a>
              <a href="/events" className="hover:underline">Events</a>
              <a href="/payouts" className="hover:underline">Payouts</a>
              <a href="/refunds" className="hover:underline">Refunds</a>
            </nav>
          </div>
        </header>
        <main className="shell" style={{ paddingTop: 20 }}>{children}</main>
      </body>
    </html>
  );
}

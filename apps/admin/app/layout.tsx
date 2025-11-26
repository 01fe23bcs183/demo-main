import React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(8px)" }} className="bg-white/90 border-b border-slate-200">
          <div className="shell" style={{ padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div className="pill">Admin</div>
              <span style={{ color: "#475569", fontSize: 13 }}>Monitor platform health</span>
            </div>
            <nav style={{ display: "flex", gap: 10, fontSize: 13 }}>
              <a href="/" className="hover:underline">Overview</a>
              <a href="/users" className="hover:underline">Users</a>
              <a href="/organizers" className="hover:underline">Organizers</a>
              <a href="/events" className="hover:underline">Events</a>
            </nav>
          </div>
        </header>
        <main className="shell" style={{ paddingTop: 20 }}>{children}</main>
      </body>
    </html>
  );
}

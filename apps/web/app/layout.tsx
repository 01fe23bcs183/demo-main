import React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 20 }} className="bg-white/80 border-b border-slate-200">
          <div className="shell" style={{ padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div className="pill">IndieTix</div>
              <span style={{ color: "#475569", fontSize: 13 }}>No hidden convenience fees. Ever.</span>
            </div>
            <nav style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: 13, color: "#0f172a" }}>
              <a href="/" className="hover:underline">Home</a>
              <a href="/discover" className="hover:underline">Discover</a>
              <a href="/events" className="hover:underline">Browse</a>
              <a href="/bookings" className="hover:underline">My Bookings</a>
              <a href="/checkout/evt-comedy-1" className="button" style={{ padding: "8px 12px" }}>Book in 60s</a>
            </nav>
          </div>
        </header>
        <main className="shell" style={{ paddingTop: 24 }}>{children}</main>
      </body>
    </html>
  );
}

import { listEvents } from "@indietix/api";

const featured = listEvents();
const tonight = featured.slice(0, 3);
const curated = featured.slice().reverse();

const formatDate = (date: string) =>
  new Date(date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="hero fade-in">
        <div className="hero-content">
          <div className="space-y-4">
            <div className="pill float" style={{ width: "fit-content" }}>
              IndieTix • book in under 60s
            </div>
            <h1 style={{ fontSize: 36, lineHeight: 1.1, margin: 0 }}>Transparent tickets for India’s indie scene.</h1>
            <p style={{ color: "#e2e8f0", fontSize: 15, maxWidth: 560 }}>
              Comedy, music, workshops, theatre, and food walks across India with honest fee breakup, Smart Split links, and
              offline QR tickets ready at the gate.
            </p>
            <div className="grid two" style={{ alignItems: "stretch" }}>
              <div className="glass slide">
                <div className="stat">
                  <span className="label" style={{ color: "#cbd5e1" }}>Today in Bengaluru</span>
                  <span className="value" style={{ color: "white" }}>12 shows • 4 venues</span>
                  <span className="hint" style={{ color: "#cbd5e1" }}>Refund friendly & Smart Split ready</span>
                </div>
                <div className="divider" style={{ background: "rgba(255,255,255,0.12)" }} />
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <span className="badge" style={{ background: "rgba(255,255,255,0.12)", color: "white" }}>UPI + Cards</span>
                  <span className="badge" style={{ background: "rgba(255,255,255,0.12)", color: "white" }}>Offline QR</span>
                  <span className="badge" style={{ background: "rgba(255,255,255,0.12)", color: "white" }}>Consent-led refunds</span>
                </div>
              </div>
              <div className="glass float">
                <div className="stat">
                  <span className="label" style={{ color: "#cbd5e1" }}>Fast booking</span>
                  <span className="value" style={{ color: "white" }}>60s checkout</span>
                  <span className="hint" style={{ color: "#cbd5e1" }}>UPI intent + stored attendee details</span>
                </div>
                <div className="divider" style={{ background: "rgba(255,255,255,0.12)" }} />
                <div style={{ display: "grid", gap: 6, color: "#e2e8f0", fontSize: 14 }}>
                  <span>• Tap to fill attendee details</span>
                  <span>• See payment gateway + platform fees upfront</span>
                  <span>• Smart Split links for friends who owe</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="button" href="/discover">Jump to discover feed</a>
              <a className="button secondary" href="/events">Browse all events</a>
              <div className="pill soft">Refunds require organizer approval</div>
            </div>
          </div>
          <div className="card" style={{ background: "#0b1220", color: "white", borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="stat">
              <span className="label" style={{ color: "#cbd5e1" }}>Sample breakup</span>
              <span className="value" style={{ color: "white" }}>₹499 ticket</span>
              <span className="hint" style={{ color: "#cbd5e1" }}>Zero surprises pricing</span>
            </div>
            <div className="divider" style={{ background: "rgba(255,255,255,0.12)" }} />
            <div className="grid" style={{ gap: 8 }}>
              <div className="pill soft" style={{ background: "rgba(255,255,255,0.08)", color: "white" }}>PG fee ₹10</div>
              <div className="pill soft" style={{ background: "rgba(255,255,255,0.08)", color: "white" }}>Server ₹2</div>
              <div className="pill soft" style={{ background: "rgba(255,255,255,0.08)", color: "white" }}>Platform ₹10 + 5%</div>
              <div className="pill" style={{ background: "#ec4899" }}>Total shown up front</div>
            </div>
            <p style={{ color: "#cbd5e1", marginTop: 12, fontSize: 13 }}>
              Cancellations follow event policy; payouts pause until organizers approve refunds. Offline QR unlocks once payment clears.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div className="pill soft">Tonight near you</div>
            <h2 style={{ margin: "6px 0", fontSize: 22 }}>Handpicked for speed booking</h2>
            <p style={{ color: "#475569", margin: 0 }}>Natural language search and filters auto-fill these cards.</p>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span className="tag">Comedy</span>
            <span className="tag">Music</span>
            <span className="tag">Workshops</span>
            <a href="/events" className="button" style={{ padding: "10px 12px" }}>View all</a>
          </div>
        </div>
        <div className="grid two">
          {tonight.map((event, idx) => (
            <div key={event.id} className="card fade-up" style={{ animationDelay: `${idx * 80}ms` }}>
              <div style={{ display: "flex", gap: 12 }}>
                <img
                  src={`${event.cover}?auto=format&fit=crop&w=240&q=70`}
                  alt={event.title}
                  style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 14 }}
                />
                <div className="grid" style={{ gap: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                    <span className="badge">{event.category}</span>
                    <span className="badge" style={{ background: "#ec4899", color: "white" }}>Smart Split ready</span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 17 }}>{event.title}</div>
                  <div style={{ color: "#475569", fontSize: 14 }}>{event.city} • {event.venue}</div>
                  <div style={{ fontSize: 14 }}>{formatDate(event.date)}</div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span className="pill soft">₹{event.price} onwards</span>
                    <span style={{ color: "#059669", fontWeight: 700, fontSize: 12 }}>{event.booked}/{event.seats} seats sold</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <a className="button" href={`/events/${event.id}`}>View</a>
                    <a className="button secondary" href={`/checkout/${event.id}`}>Book now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card space-y-4 fade-up">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 18 }}>Why IndieTix?</h3>
            <p style={{ margin: 0, color: "#475569" }}>Everything we design respects attention and keeps pricing honest.</p>
          </div>
          <div className="pill soft">Mobile-first • Offline ready • Razorpay powered</div>
        </div>
        <div className="grid three">
          <div className="card" style={{ background: "#fef2f8" }}>
            <div className="stat">
              <span className="label" style={{ color: "#be185d" }}>Refund clarity</span>
              <span className="value" style={{ color: "#9d174d" }}>Consent-first</span>
              <span className="hint" style={{ color: "#9d174d" }}>Organizer approvals pause payouts; you see status live.</span>
            </div>
          </div>
          <div className="card" style={{ background: "#eff6ff" }}>
            <div className="stat">
              <span className="label" style={{ color: "#1d4ed8" }}>Smart Split</span>
              <span className="value" style={{ color: "#1e3a8a" }}>Share & settle</span>
              <span className="hint" style={{ color: "#1e3a8a" }}>Friends pay their share; you cover the leftover only if needed.</span>
            </div>
          </div>
          <div className="card" style={{ background: "#ecfeff" }}>
            <div className="stat">
              <span className="label" style={{ color: "#0f172a" }}>Offline first</span>
              <span className="value" style={{ color: "#0f172a" }}>QR stays cached</span>
              <span className="hint" style={{ color: "#0f172a" }}>Tickets save to device for gates with patchy connectivity.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3 fade-up">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div className="pill soft">Transparent roster</div>
            <h2 style={{ margin: "6px 0", fontSize: 20 }}>Featured this week</h2>
          </div>
          <a className="button secondary" href="/events">See all events</a>
        </div>
        <div className="grid two">
          {curated.map((event, idx) => (
            <div key={event.id} className="card" style={{ animation: "fadeUp 0.6s ease both", animationDelay: `${idx * 60}ms` }}>
              <div style={{ display: "grid", gap: 10, gridTemplateColumns: "140px 1fr" }}>
                <img
                  src={`${event.cover}?auto=format&fit=crop&w=240&q=70`}
                  alt={event.title}
                  style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 14 }}
                />
                <div className="grid" style={{ gap: 6 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <span className="badge">{event.city}</span>
                    <span className="badge" style={{ background: "#0ea5e9", color: "#0f172a" }}>{event.category}</span>
                    <span className="badge" style={{ background: "#e2e8f0" }}>{event.tags.join(" • ")}</span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 17 }}>{event.title}</div>
                  <div style={{ color: "#475569", fontSize: 14 }}>{event.venue}</div>
                  <div style={{ fontSize: 14 }}>{formatDate(event.date)}</div>
                  <div style={{ fontSize: 13, color: "#475569" }}>{event.description}</div>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <span className="pill soft">Refund policy: {event.refundPolicy}</span>
                    <span className="pill" style={{ background: "#22c55e" }}>{event.booked}/{event.seats} seats</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                    <a className="button" href={`/events/${event.id}`}>Details</a>
                    <a className="button secondary" href={`/checkout/${event.id}`}>Book</a>
                    <span className="badge">₹{event.price} onwards</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card fade-up">
        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <div className="stat">
            <span className="label">Seat map fairness</span>
            <span className="value">Queue-first</span>
            <span className="hint">Dynamic locks prevent cart hogging; you see hold timers.</span>
          </div>
          <div className="stat">
            <span className="label">Support</span>
            <span className="value">In-line help</span>
            <span className="hint">Escalations reach organizers; refunds paused until resolved.</span>
          </div>
          <div className="stat">
            <span className="label">Loyalty</span>
            <span className="value">Karma-ready</span>
            <span className="hint">Earn credit for reliable attendance; early access for top fans.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

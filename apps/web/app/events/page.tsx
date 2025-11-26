import { listEvents } from "@indietix/api";

const events = listEvents();

const filterSummary = "Filters: Comedy, Tonight, Bengaluru (mock parser ready for NL queries)";

export default function EventsPage() {
  return (
    <div className="space-y-5">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <div>
          <div className="pill soft">Search + filters</div>
          <h1 style={{ margin: "6px 0", fontSize: 24 }}>All events</h1>
          <p style={{ color: "#475569", margin: 0 }}>{filterSummary}</p>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span className="tag">Comedy</span>
          <span className="tag">Tonight</span>
          <span className="tag">≤ ₹1,000</span>
          <span className="tag">Refund friendly</span>
        </div>
      </div>

      <div className="card" style={{ display: "grid", gap: 12 }}>
        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          <div className="stat">
            <span className="label">Natural language</span>
            <span className="value">“comedy tonight under 500”</span>
            <span className="hint">Chip parser runs instantly</span>
          </div>
          <div className="stat">
            <span className="label">Transparent math</span>
            <span className="value">Fees shown up front</span>
            <span className="hint">PG + server + platform</span>
          </div>
          <div className="stat">
            <span className="label">Smart Split</span>
            <span className="value">Shareable links</span>
            <span className="hint">Friends pay their part</span>
          </div>
        </div>
        <div className="divider" />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span className="badge">Bengaluru</span>
          <span className="badge">Mumbai</span>
          <span className="badge">Delhi NCR</span>
          <span className="badge" style={{ background: "#0ea5e9", color: "#0f172a" }}>Hyderabad</span>
        </div>
      </div>

      <div className="grid three">
        {events.map((event, idx) => (
          <div key={event.id} className="card fade-up" style={{ animationDelay: `${idx * 40}ms` }}>
            <img
              src={`${event.cover}?auto=format&fit=crop&w=320&q=60`}
              alt={event.title}
              style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 14 }}
            />
            <div className="grid" style={{ gap: 6 }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="badge">{event.category}</span>
                <span className="badge">{event.city}</span>
                <span className="badge" style={{ background: "#fef2f2", color: "#b91c1c" }}>{event.booked}/{event.seats} seats</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 17 }}>{event.title}</div>
              <div style={{ color: "#475569", fontSize: 14 }}>{event.venue}</div>
              <div style={{ fontSize: 14 }}>₹{event.price}</div>
              <div style={{ fontSize: 13, color: "#475569" }}>{event.description}</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <a className="button" href={`/events/${event.id}`}>View details</a>
                <a className="button secondary" href={`/checkout/${event.id}`}>Book</a>
                <span className="tag">Refunds: {event.refundPolicy}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

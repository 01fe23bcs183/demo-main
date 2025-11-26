import { calculateFees, getEvent } from "@indietix/api";
import { notFound } from "next/navigation";

const formatDate = (date: string) =>
  new Date(date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "short" });

export default function EventDetail({ params }: { params: { id: string } }) {
  const event = getEvent(params.id);
  if (!event) return notFound();
  const fees = calculateFees(event.price);

  return (
    <div className="grid" style={{ gap: 20, gridTemplateColumns: "minmax(0, 2fr) minmax(320px, 1fr)" }}>
      <div className="space-y-4">
        <img
          src={`${event.cover}?auto=format&fit=crop&w=900&q=70`}
          className="w-full"
          style={{ height: 320, objectFit: "cover", borderRadius: 20, boxShadow: "var(--glow)" }}
          alt={event.title}
        />
        <div className="card" style={{ display: "grid", gap: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <span className="badge">{event.category}</span>
            <span className="badge">{event.city}</span>
            <span className="badge" style={{ background: "#22c55e", color: "#0f172a" }}>{event.booked}/{event.seats} seats</span>
            <span className="badge">Smart Split ready</span>
          </div>
          <h1 style={{ margin: 0, fontSize: 28 }}>{event.title}</h1>
          <div style={{ color: "#475569" }}>{event.city} • {event.venue}</div>
          <div>{formatDate(event.date)}</div>
          <p style={{ color: "#475569", lineHeight: 1.6 }}>{event.description}</p>
          <div className="card" style={{ background: "#f8fafc" }}>
            <div style={{ display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
              <div className="stat">
                <span className="label">Refund policy</span>
                <span className="value" style={{ fontSize: 16 }}>{event.refundPolicy}</span>
                <span className="hint">Organizer must approve; payouts pause till decision</span>
              </div>
              <div className="stat">
                <span className="label">Ticket perks</span>
                <span className="value" style={{ fontSize: 16 }}>Offline QR</span>
                <span className="hint">Cached after payment for low-signal gates</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {event.perks?.map((perk) => (<span key={perk} className="tag">{perk}</span>))}
            </div>
          </div>
          <section className="card" style={{ background: "#0f172a", color: "white" }}>
            <h3 style={{ marginTop: 0 }}>What you get</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: "#e2e8f0", lineHeight: 1.5 }}>
              {event.perks?.map((perk) => (<li key={perk}>{perk}</li>))}
              <li>Transparent breakup before paying.</li>
              <li>Offline ticket cached after payment.</li>
            </ul>
          </section>
          <section className="card" style={{ background: "#fefce8" }}>
            <h3 style={{ marginTop: 0 }}>Refund clarity</h3>
            <p style={{ margin: 0, color: "#854d0e" }}>{event.refundPolicy}</p>
            <p style={{ margin: "6px 0 0", color: "#854d0e" }}>
              Organizer approval is mandatory; payouts pause until a decision is made.
            </p>
          </section>
        </div>
      </div>
      <div className="card space-y-3 slide">
        <h2 style={{ margin: 0, fontSize: 22 }}>Book tickets</h2>
        <div className="grid" style={{ gap: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>Ticket</span><span>₹{event.price}</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>Payment processing</span><span>₹{fees.paymentGatewayFee}</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>Server maintenance</span><span>₹{fees.serverMaintenanceFee}</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>Platform fixed</span><span>₹{fees.platformFixedFee}</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>Platform commission</span><span>₹{fees.platformPercentFee}</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, borderTop: "1px solid #e2e8f0", paddingTop: 8 }}>
            <span>Total</span><span>₹{fees.total}</span>
          </div>
        </div>
        <a className="button w-full text-center" href={`/checkout/${event.id}`}>Continue to checkout</a>
        <div style={{ fontSize: 12, color: "#475569" }}>Refunds always require organizer approval; cancellations follow event policy.</div>
        <div style={{ fontSize: 12, color: "#475569" }}>Smart Split ready: generate shared payment links for friends at checkout.</div>
        <div className="card" style={{ background: "#f1f5f9" }}>
          <h4 style={{ margin: "0 0 6px" }}>Need help?</h4>
          <p style={{ margin: 0, color: "#475569" }}>Chat opens from checkout; refund escalations pause payouts automatically.</p>
        </div>
      </div>
    </div>
  );
}

export default function OrganizerDashboard() {
  const upcoming = [
    { title: "Bangalore LOL Nights", date: "Aug 15, 7:30 PM", tickets: "64/120", status: "Published" },
    { title: "Indie Folk Evenings", date: "Aug 20, 8:00 PM", tickets: "210/300", status: "Published" },
  ];
  const payouts = [
    { period: "Aug 1–7", amount: "₹1.4L", status: "Processing" },
    { period: "Jul 24–31", amount: "₹1.2L", status: "Paid" },
  ];

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="grid two">
        <div className="card fade">
          <div className="pill soft">GMV (30d)</div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>₹3.4L</div>
          <div style={{ color: "#475569", fontSize: 13 }}>Bangalore-heavy comedy shows.</div>
        </div>
        <div className="card fade">
          <div className="pill soft">Tickets sold</div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>1,240</div>
          <div style={{ color: "#475569", fontSize: 13 }}>Queue + flash sale ready.</div>
        </div>
        <div className="card fade">
          <div className="pill soft">Refund requests</div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>3</div>
          <div style={{ color: "#475569", fontSize: 13 }}>Approval required before payout.</div>
        </div>
      </div>

      <div className="card fade" style={{ display: "grid", gap: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0 }}>Onboarding wizard</h2>
          <a className="button" href="#">Resume</a>
        </div>
        <div style={{ display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <div className="card" style={{ background: "#ecfeff" }}>
            <div className="pill soft">Step 1</div>
            <div style={{ fontWeight: 700 }}>Business basics</div>
            <div style={{ color: "#475569", fontSize: 13 }}>Name, logo, socials</div>
          </div>
          <div className="card" style={{ background: "#fefce8" }}>
            <div className="pill soft">Step 2</div>
            <div style={{ fontWeight: 700 }}>Venue</div>
            <div style={{ color: "#854d0e", fontSize: 13 }}>Address + capacity</div>
          </div>
          <div className="card" style={{ background: "#eff6ff" }}>
            <div className="pill soft">Step 3</div>
            <div style={{ fontWeight: 700 }}>First event</div>
            <div style={{ color: "#1d4ed8", fontSize: 13 }}>Title, date, base price</div>
          </div>
        </div>
      </div>

      <div className="card fade" style={{ display: "grid", gap: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0 }}>Upcoming events</h2>
          <a className="button" href="#">Create new</a>
        </div>
        <div className="grid" style={{ gap: 10 }}>
          {upcoming.map((event) => (
            <div key={event.title} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 700 }}>{event.title}</div>
                <div style={{ color: "#475569", fontSize: 13 }}>{event.date}</div>
                <div style={{ color: "#475569", fontSize: 13 }}>Tickets: {event.tickets}</div>
              </div>
              <div className="pill soft">{event.status}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card fade" style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        <div>
          <h3 style={{ marginTop: 0 }}>Payouts</h3>
          <div className="grid" style={{ gap: 8 }}>
            {payouts.map((payout) => (
              <div key={payout.period} className="card" style={{ background: "#f1f5f9" }}>
                <div style={{ fontWeight: 700 }}>{payout.period}</div>
                <div style={{ color: "#475569" }}>{payout.amount}</div>
                <div style={{ fontSize: 12, color: "#475569" }}>Status: {payout.status}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ marginTop: 0 }}>Check-in</h3>
          <p style={{ color: "#475569", marginTop: 0 }}>QR scan or manual search. Duplicate & invalid ticket states ready.</p>
          <div className="card" style={{ background: "#ecfeff" }}>
            <div style={{ fontWeight: 700 }}>Scan mode</div>
            <p style={{ margin: "6px 0 0", color: "#0f172a" }}>Camera overlay + manual search fallback for staff.</p>
          </div>
          <div className="card" style={{ background: "#ffedd5" }}>
            <div style={{ fontWeight: 700 }}>Attendee list</div>
            <p style={{ margin: "6px 0 0", color: "#7c2d12" }}>Search by name, phone, or ticket ID; mark attended.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

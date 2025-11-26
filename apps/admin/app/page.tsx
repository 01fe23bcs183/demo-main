export default function AdminOverview() {
  const alerts = [
    { title: "Payment latency", detail: "Razorpay webhook lagging 3s", severity: "Warn" },
    { title: "Refund queue", detail: "3 approvals pending from organizers", severity: "Info" },
  ];
  const verifications = [
    { org: "Laugh Lab", status: "GST review" },
    { org: "Bay Beats", status: "PAN pending" },
  ];

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="grid three">
        <div className="card fade">
          <div className="text-sm text-slate-500">GMV today</div>
          <div className="text-2xl font-bold">₹1.2L</div>
          <div className="text-xs text-slate-600">Platform share: honest fees applied.</div>
        </div>
        <div className="card fade">
          <div className="text-sm text-slate-500">Active users</div>
          <div className="text-2xl font-bold">8,430</div>
          <div className="text-xs text-slate-600">Karma and referrals growing.</div>
        </div>
        <div className="card fade">
          <div className="text-sm text-slate-500">Pending verifications</div>
          <div className="text-2xl font-bold">5</div>
          <div className="text-xs text-slate-600">Organizer GST/PAN review queue.</div>
        </div>
      </div>

      <div className="card fade" style={{ display: "grid", gap: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0 }}>Platform KPIs</h2>
          <a className="button" href="#">Download CSV</a>
        </div>
        <div className="grid" style={{ gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <div className="card" style={{ background: "#ecfeff" }}>
            <div className="badge">GMV over time</div>
            <p style={{ color: "#0f172a", margin: "6px 0 0" }}>Line chart placeholder with daily totals.</p>
          </div>
          <div className="card" style={{ background: "#fef2f2" }}>
            <div className="badge">Bookings by category</div>
            <p style={{ color: "#b91c1c", margin: "6px 0 0" }}>Bar chart placeholder.</p>
          </div>
          <div className="card" style={{ background: "#f1f5f9" }}>
            <div className="badge">Top cities</div>
            <p style={{ color: "#475569", margin: "6px 0 0" }}>Bengaluru, Mumbai, Delhi NCR, Hyderabad.</p>
          </div>
        </div>
      </div>

      <div className="card fade" style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        <div>
          <h3 style={{ marginTop: 0 }}>Alerts</h3>
          <div className="grid" style={{ gap: 8 }}>
            {alerts.map((alert) => (
              <div key={alert.title} className="card" style={{ background: "#fff7ed" }}>
                <div style={{ fontWeight: 700 }}>{alert.title}</div>
                <div style={{ color: "#92400e" }}>{alert.detail}</div>
                <div className="badge">{alert.severity}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ marginTop: 0 }}>Organizer verification</h3>
          <div className="grid" style={{ gap: 8 }}>
            {verifications.map((item) => (
              <div key={item.org} className="card" style={{ background: "#eef2ff" }}>
                <div style={{ fontWeight: 700 }}>{item.org}</div>
                <div style={{ color: "#312e81" }}>{item.status}</div>
                <a className="button" href="#">Open dossier</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

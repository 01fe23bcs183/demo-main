export default function OrganizerDashboard() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="card">
        <div className="text-sm text-slate-500">GMV (30d)</div>
        <div className="text-2xl font-bold">₹3.4L</div>
        <div className="text-xs text-slate-600">Bangalore-heavy comedy shows.</div>
      </div>
      <div className="card">
        <div className="text-sm text-slate-500">Tickets sold</div>
        <div className="text-2xl font-bold">1,240</div>
        <div className="text-xs text-slate-600">Queue + flash sale ready.</div>
      </div>
      <div className="card">
        <div className="text-sm text-slate-500">Refund requests</div>
        <div className="text-2xl font-bold">3</div>
        <div className="text-xs text-slate-600">Approval required before payout.</div>
      </div>
    </div>
  );
}

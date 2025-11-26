export default function AdminOverview() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="card">
        <div className="text-sm text-slate-500">GMV today</div>
        <div className="text-2xl font-bold">₹1.2L</div>
        <div className="text-xs text-slate-600">Platform share: honest fees applied.</div>
      </div>
      <div className="card">
        <div className="text-sm text-slate-500">Active users</div>
        <div className="text-2xl font-bold">8,430</div>
        <div className="text-xs text-slate-600">Karma and referrals growing.</div>
      </div>
      <div className="card">
        <div className="text-sm text-slate-500">Pending verifications</div>
        <div className="text-2xl font-bold">5</div>
        <div className="text-xs text-slate-600">Organizer GST/PAN review queue.</div>
      </div>
    </div>
  );
}

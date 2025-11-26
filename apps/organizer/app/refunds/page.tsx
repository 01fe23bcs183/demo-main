const refundRequests = [
  { id: "r-1", booking: "bkg-123", event: "Bangalore LOL Nights", amount: 1020, reason: "Feeling unwell", status: "PENDING" },
  { id: "r-2", booking: "bkg-456", event: "Indie Folk Evenings", amount: 1400, reason: "Travel", status: "APPROVED" },
];

export default function RefundsPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Refund requests</h1>
      <p className="text-sm text-slate-700">Every refund requires organizer approval before money moves. Approve to trigger provider refund or convert to store credit.</p>
      <div className="grid gap-3">
        {refundRequests.map((req) => (
          <div key={req.id} className="card space-y-2">
            <div className="flex justify-between items-center">
              <div className="font-semibold">{req.event}</div>
              <span className="text-xs px-2 py-1 rounded bg-orange-50 text-orange-700">{req.status}</span>
            </div>
            <div className="text-sm">Booking {req.booking} • ₹{req.amount}</div>
            <div className="text-sm text-slate-600">Reason: {req.reason}</div>
            <div className="flex gap-2 text-sm">
              <button className="button">Approve</button>
              <button className="button" style={{ background: "#991b1b" }}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

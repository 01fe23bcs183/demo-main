const payouts = [
  { id: "p-1", period: "Jul 1 - Jul 15", status: "PROCESSING", amount: 120000 },
  { id: "p-2", period: "Jun 15 - Jun 30", status: "COMPLETED", amount: 98000 },
];

export default function PayoutsPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Payouts</h1>
      <div className="grid gap-3">
        {payouts.map((payout) => (
          <div key={payout.id} className="card flex justify-between items-center">
            <div>
              <div className="font-semibold">{payout.period}</div>
              <div className="text-sm text-slate-600">Status: {payout.status}</div>
            </div>
            <div className="text-lg font-bold">₹{payout.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

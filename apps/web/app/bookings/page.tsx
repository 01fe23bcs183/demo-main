import { listBookings } from "@indietix/api";

const bookings = listBookings();

export default function MyBookings() {
  return (
    <div className="space-y-5">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <div>
          <div className="pill soft">Tickets</div>
          <h1 style={{ margin: "6px 0", fontSize: 24 }}>My bookings</h1>
          <p style={{ margin: 0, color: "#475569" }}>Upcoming • Past • Cancelled tabs ready; offline QR cached after payment.</p>
        </div>
        <div className="pill">Available offline</div>
      </div>
      <div className="grid two">
        {bookings.map((booking, idx) => (
          <div key={booking.id} className="card space-y-2 fade-up" style={{ animationDelay: `${idx * 60}ms` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="font-semibold">{booking.event?.title}</div>
              <span className="text-xs px-2 py-1 rounded" style={{ background: "#ecfeff", color: "#0f172a" }}>{booking.status}</span>
            </div>
            <div className="text-sm text-slate-600">{booking.tickets} tickets • ₹{booking.ticketPrice} each</div>
            <div className="text-sm">Fees: PG ₹{booking.fees.paymentGatewayFee}, Server ₹{booking.fees.serverMaintenanceFee}, Platform ₹{booking.fees.platformFixedFee} + {booking.fees.platformPercentFee * 100}%</div>
            <div className="text-sm text-slate-700">Refunds require organizer approval. Tap support to raise a request.</div>
            <div className="text-xs text-slate-600">Refund status: {booking.refundStatus}</div>
            <div className="text-xs text-slate-600">Payment: {booking.paymentStatus}; Smart Split: {booking.smartSplitLinks?.join(", ")}</div>
            <div className="card" style={{ background: "#f1f5f9" }}>
              <div className="font-semibold">Offline ticket</div>
              <p style={{ margin: "6px 0 0", color: "#475569" }}>QR stays cached even without data; locks automatically if refund pending.</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <button className="button">View ticket (QR ready)</button>
              <button className="button" style={{ background: "#1f2937" }}>Contact support</button>
              <button className="button" style={{ background: "#0f172a" }}>Request refund</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

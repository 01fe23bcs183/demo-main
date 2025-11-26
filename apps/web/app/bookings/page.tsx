import { listBookings } from "@indietix/api";

const bookings = listBookings();

export default function MyBookings() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">My bookings</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {bookings.map((booking) => (
          <div key={booking.id} className="card space-y-2">
            <div className="flex justify-between items-center">
              <div className="font-semibold">{booking.event?.title}</div>
              <span className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700">{booking.status}</span>
            </div>
            <div className="text-sm text-slate-600">{booking.tickets} tickets • ₹{booking.ticketPrice} each</div>
            <div className="text-sm">Fees: PG ₹{booking.fees.paymentGatewayFee}, Server ₹{booking.fees.serverMaintenanceFee}, Platform ₹{booking.fees.platformFixedFee} + {booking.fees.platformPercentFee * 100}%</div>
            <div className="text-sm text-slate-700">Refunds require organizer approval. Tap support to raise a request.</div>
            <div className="text-xs text-slate-600">Refund status: {booking.refundStatus}</div>
            <div className="text-xs text-slate-600">Payment: {booking.paymentStatus}; Smart Split: {booking.smartSplitLinks?.join(", ")}</div>
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

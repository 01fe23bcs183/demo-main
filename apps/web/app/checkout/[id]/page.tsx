import { calculateFees, getEvent } from "@indietix/api";
import { notFound } from "next/navigation";

export default function CheckoutPage({ params }: { params: { id: string } }) {
  const event = getEvent(params.id);
  if (!event) return notFound();
  const ticketCount = 2;
  const splitLinks = ["https://pay.indietix.test/share/a", "https://pay.indietix.test/share/b"];
  const fees = calculateFees(event.price);
  const subtotal = event.price * ticketCount;
  const total = subtotal + fees.feeTotal;

  return (
    <div className="grid" style={{ gap: 20, gridTemplateColumns: "minmax(0, 2fr) minmax(320px, 1fr)" }}>
      <div className="card space-y-3">
        <div className="pill soft">Step 2 of 3 • Checkout</div>
        <h1 style={{ margin: 0, fontSize: 24 }}>Checkout</h1>
        <p style={{ color: "#475569" }}>
          Smart Split is enabled. Share these links with friends; booking confirms once everyone pays or you cover the remainder.
        </p>
        <ul className="list-disc list-inside text-sm text-slate-700">
          {splitLinks.map((link) => (
            <li key={link}><a href={link} className="underline">{link}</a></li>
          ))}
        </ul>
        <div className="grid" style={{ gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div className="card" style={{ background: "#f1f5f9" }}>
            <div className="font-semibold">Transparent fees</div>
            <p style={{ color: "#475569", margin: "6px 0 0" }}>
              Gateway ₹{fees.paymentGatewayFee}, Server ₹{fees.serverMaintenanceFee}, Platform ₹{fees.platformFixedFee} + ₹{fees.platformPercentFee} commission.
            </p>
          </div>
          <div className="card" style={{ background: "#ecfeff" }}>
            <div className="font-semibold">Refund guarantee</div>
            <p style={{ color: "#0f172a", margin: "6px 0 0" }}>
              Organizer must approve every refund; we pause payouts until that happens.
            </p>
          </div>
        </div>
        <section className="space-y-2">
          <div className="font-semibold">Attendee details</div>
          <div className="grid" style={{ gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            <input placeholder="Name" className="border rounded px-3 py-2" defaultValue="Aditi" />
            <input placeholder="Email" className="border rounded px-3 py-2" defaultValue="aditi@example.com" />
            <input placeholder="Phone" className="border rounded px-3 py-2" defaultValue="9876543210" />
          </div>
        </section>
        <section className="space-y-2">
          <div className="font-semibold">Refund policy</div>
          <p style={{ color: "#475569", margin: 0 }}>Cancellations allowed up to 6 hours before start. All refunds must be approved by the organizer.</p>
          <p style={{ color: "#475569", margin: 0, fontSize: 13 }}>Offline ticket downloads activate once payment clears; refunds deactivate QR until decision.</p>
        </section>
        <section className="card" style={{ background: "#fefce8" }}>
          <div className="font-semibold">Payment in progress</div>
          <p style={{ margin: "6px 0 0", color: "#854d0e" }}>If you close the tab, we resume from where you left off with payment status.</p>
          <div className="shimmer" style={{ marginTop: 8 }} />
        </section>
      </div>
      <div className="card space-y-2 slide">
        <div className="font-semibold">Order summary</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>{ticketCount} × Ticket</span><span>₹{subtotal}</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>Payment processing</span><span>₹{fees.paymentGatewayFee}</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>Server maintenance</span><span>₹{fees.serverMaintenanceFee}</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>Platform fixed</span><span>₹{fees.platformFixedFee}</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>Platform commission</span><span>₹{fees.platformPercentFee}</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, borderTop: "1px solid #e2e8f0", paddingTop: 8 }}>
          <span>Total</span><span>₹{total}</span>
        </div>
        <button className="button w-full">Pay with Razorpay (stub)</button>
        <div style={{ fontSize: 12, color: "#475569" }}>Offline tickets: QR will be available for download and stored in the mobile app for offline access.</div>
        <div style={{ fontSize: 12, color: "#475569" }}>Need help? Support escalates to organizer if refund is requested.</div>
      </div>
    </div>
  );
}

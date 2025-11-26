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
    <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
      <div className="card space-y-3">
        <h1 className="text-xl font-semibold">Checkout</h1>
        <p className="text-sm text-slate-600">Smart Split is enabled. Share these links with friends; booking confirms once everyone pays or you cover the remainder.</p>
        <ul className="list-disc list-inside text-sm text-slate-700">
          {splitLinks.map((link) => (
            <li key={link}><a href={link} className="underline">{link}</a></li>
          ))}
        </ul>
        <div className="grid md:grid-cols-2 gap-2 text-sm">
          <div className="card">
            <div className="font-semibold">Transparent fees</div>
            <p className="text-slate-600">Gateway ₹{fees.paymentGatewayFee}, Server ₹{fees.serverMaintenanceFee}, Platform ₹{fees.platformFixedFee} + ₹{fees.platformPercentFee} commission.</p>
          </div>
          <div className="card">
            <div className="font-semibold">Refund guarantee</div>
            <p className="text-slate-600">Organizer must approve every refund; we pause payouts until that happens.</p>
          </div>
        </div>
        <section className="space-y-2">
          <div className="font-semibold">Attendee details</div>
          <div className="grid md:grid-cols-2 gap-2">
            <input placeholder="Name" className="border rounded px-3 py-2" defaultValue="Aditi" />
            <input placeholder="Email" className="border rounded px-3 py-2" defaultValue="aditi@example.com" />
            <input placeholder="Phone" className="border rounded px-3 py-2" defaultValue="9876543210" />
          </div>
        </section>
        <section className="space-y-2">
          <div className="font-semibold">Refund policy</div>
          <p className="text-sm text-slate-700">Cancellations allowed up to 6 hours before start. All refunds must be approved by the organizer.</p>
          <p className="text-xs text-slate-600">Offline ticket downloads activate once payment clears; refunds deactivate QR until decision.</p>
        </section>
      </div>
      <div className="card space-y-2">
        <div className="font-semibold">Order summary</div>
        <div className="flex justify-between text-sm"><span>{ticketCount} × Ticket</span><span>₹{subtotal}</span></div>
        <div className="flex justify-between text-sm"><span>Payment processing</span><span>₹{fees.paymentGatewayFee}</span></div>
        <div className="flex justify-between text-sm"><span>Server maintenance</span><span>₹{fees.serverMaintenanceFee}</span></div>
        <div className="flex justify-between text-sm"><span>Platform fixed</span><span>₹{fees.platformFixedFee}</span></div>
        <div className="flex justify-between text-sm"><span>Platform commission</span><span>₹{fees.platformPercentFee}</span></div>
        <div className="flex justify-between font-semibold border-t pt-2"><span>Total</span><span>₹{total}</span></div>
        <button className="button w-full">Pay with Razorpay (stub)</button>
        <div className="text-xs text-slate-600">Offline tickets: QR will be available for download and stored in the mobile app for offline access.</div>
        <div className="text-xs text-slate-600">Need help? Support escalates to organizer if refund is requested.</div>
      </div>
    </div>
  );
}

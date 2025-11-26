import { getEvent } from "@indietix/api";
import { notFound } from "next/navigation";

export default function CheckoutPage({ params }: { params: { id: string } }) {
  const event = getEvent(params.id);
  if (!event) return notFound();
  const ticketCount = 2;
  const splitLinks = ["https://pay.indietix.test/share/a", "https://pay.indietix.test/share/b"];
  const paymentGatewayFee = 10;
  const serverMaintenanceFee = 2;
  const platformFixedFee = 10;
  const platformPercentFee = Math.round(event.price * 0.05);
  const subtotal = event.price * ticketCount;
  const totalFees = paymentGatewayFee + serverMaintenanceFee + platformFixedFee + platformPercentFee;
  const total = subtotal + totalFees;

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
        </section>
      </div>
      <div className="card space-y-2">
        <div className="font-semibold">Order summary</div>
        <div className="flex justify-between text-sm"><span>{ticketCount} × Ticket</span><span>₹{subtotal}</span></div>
        <div className="flex justify-between text-sm"><span>Payment processing</span><span>₹{paymentGatewayFee}</span></div>
        <div className="flex justify-between text-sm"><span>Server maintenance</span><span>₹{serverMaintenanceFee}</span></div>
        <div className="flex justify-between text-sm"><span>Platform fixed</span><span>₹{platformFixedFee}</span></div>
        <div className="flex justify-between text-sm"><span>Platform commission</span><span>₹{platformPercentFee}</span></div>
        <div className="flex justify-between font-semibold border-t pt-2"><span>Total</span><span>₹{total}</span></div>
        <button className="button w-full">Pay with Razorpay (stub)</button>
        <div className="text-xs text-slate-600">Offline tickets: QR will be available for download and stored in the mobile app for offline access.</div>
      </div>
    </div>
  );
}

import { getEvent } from "@indietix/api";
import { notFound } from "next/navigation";

const formatDate = (date: string) => new Date(date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "short" });

export default function EventDetail({ params }: { params: { id: string } }) {
  const event = getEvent(params.id);
  if (!event) return notFound();
  const paymentGatewayFee = 10;
  const serverMaintenanceFee = 2;
  const platformFixedFee = 10;
  const platformPercentFee = Math.round(event.price * 0.05);
  const total = event.price + paymentGatewayFee + serverMaintenanceFee + platformFixedFee + platformPercentFee;

  return (
    <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
      <div className="space-y-4">
        <img src={`${event.cover}?auto=format&fit=crop&w=900&q=70`} className="w-full h-80 object-cover rounded-xl" alt={event.title} />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{event.title}</h1>
          <div className="text-slate-600">{event.city} • {event.venue}</div>
          <div>{formatDate(event.date)}</div>
          <p className="text-slate-700 leading-relaxed">{event.description}</p>
        </div>
        <section className="card space-y-3">
          <h3 className="font-semibold">Reviews & ratings</h3>
          <p className="text-sm text-slate-600">Only attendees can review. This stub shows how ratings will appear once bookings are marked ATTENDED.</p>
        </section>
      </div>
      <div className="card space-y-3">
        <h2 className="text-xl font-semibold">Book tickets</h2>
        <div className="space-y-1">
          <div className="flex justify-between text-sm"><span>Ticket</span><span>₹{event.price}</span></div>
          <div className="flex justify-between text-sm"><span>Payment processing</span><span>₹{paymentGatewayFee}</span></div>
          <div className="flex justify-between text-sm"><span>Server maintenance</span><span>₹{serverMaintenanceFee}</span></div>
          <div className="flex justify-between text-sm"><span>Platform fixed</span><span>₹{platformFixedFee}</span></div>
          <div className="flex justify-between text-sm"><span>Platform commission</span><span>₹{platformPercentFee}</span></div>
          <div className="flex justify-between font-semibold border-t pt-2"><span>Total</span><span>₹{total}</span></div>
        </div>
        <a className="button w-full text-center" href={`/checkout/${event.id}`}>Continue to checkout</a>
        <div className="text-xs text-slate-600">Refunds always require organizer approval; cancellations follow event policy.</div>
        <div className="text-xs text-slate-600">Smart Split ready: generate shared payment links for friends at checkout.</div>
      </div>
    </div>
  );
}

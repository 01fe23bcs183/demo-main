import { calculateFees, getEvent } from "@indietix/api";
import { notFound } from "next/navigation";

const formatDate = (date: string) => new Date(date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "short" });

export default function EventDetail({ params }: { params: { id: string } }) {
  const event = getEvent(params.id);
  if (!event) return notFound();
  const fees = calculateFees(event.price);

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
        <section className="card grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-semibold">What you get</h3>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {event.perks?.map((perk) => (<li key={perk}>{perk}</li>))}
              <li>Transparent breakup before paying.</li>
              <li>Offline ticket cached after payment.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Refund policy</h3>
            <p className="text-sm text-slate-700">{event.refundPolicy}</p>
            <p className="text-xs text-slate-600">Organizer approval is mandatory; payouts pause until a decision is made.</p>
          </div>
        </section>
      </div>
      <div className="card space-y-3">
        <h2 className="text-xl font-semibold">Book tickets</h2>
        <div className="space-y-1">
          <div className="flex justify-between text-sm"><span>Ticket</span><span>₹{event.price}</span></div>
          <div className="flex justify-between text-sm"><span>Payment processing</span><span>₹{fees.paymentGatewayFee}</span></div>
          <div className="flex justify-between text-sm"><span>Server maintenance</span><span>₹{fees.serverMaintenanceFee}</span></div>
          <div className="flex justify-between text-sm"><span>Platform fixed</span><span>₹{fees.platformFixedFee}</span></div>
          <div className="flex justify-between text-sm"><span>Platform commission</span><span>₹{fees.platformPercentFee}</span></div>
          <div className="flex justify-between font-semibold border-t pt-2"><span>Total</span><span>₹{fees.total}</span></div>
        </div>
        <a className="button w-full text-center" href={`/checkout/${event.id}`}>Continue to checkout</a>
        <div className="text-xs text-slate-600">Refunds always require organizer approval; cancellations follow event policy.</div>
        <div className="text-xs text-slate-600">Smart Split ready: generate shared payment links for friends at checkout.</div>
      </div>
    </div>
  );
}

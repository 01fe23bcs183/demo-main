import { listEvents } from "@indietix/api";

const featured = listEvents();

const formatDate = (date: string) => new Date(date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="card">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Discover indie experiences</h1>
            <p className="text-slate-600">Comedy, music, workshops and more across India with honest pricing and zero hidden convenience fees.</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
              <div className="card">Smart Split pay-links</div>
              <div className="card">Organizer-approved refunds</div>
              <div className="card">Transparent fee math</div>
              <div className="card">Offline tickets ready</div>
            </div>
          </div>
          <div className="space-y-2 text-sm bg-slate-900 text-white rounded-xl p-4 w-full md:w-80">
            <div className="font-semibold">Zero surprises</div>
            <p>Ticket ₹499 + PG ₹10 + Server ₹2 + Platform ₹10 + Platform 5%.</p>
            <p className="text-slate-200">We surface the breakup before you pay, and refunds always need organizer consent.</p>
            <div className="flex gap-2">
              <a className="button" href="/events">Browse events</a>
              <a className="button" href="/discover" style={{ background: "#ec4899" }}>Discover feed</a>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Featured this week</h2>
          <a className="text-sm underline" href="/events">View all</a>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((event) => (
            <div key={event.id} className="card flex gap-3">
              <img src={`${event.cover}?auto=format&fit=crop&w=240&q=60`} alt={event.title} className="w-32 h-32 object-cover rounded" />
              <div className="space-y-2">
                <div className="text-lg font-semibold">{event.title}</div>
                <div className="text-sm text-slate-600">{event.city} • {event.venue}</div>
                <div className="text-sm">{formatDate(event.date)}</div>
                <div className="text-sm font-medium">From ₹{event.price}</div>
                <a className="text-sm underline" href={`/events/${event.id}`}>Details</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card space-y-2">
        <h3 className="text-lg font-semibold">Why IndieTix?</h3>
        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
          <li>Consent-first refunds: payouts pause until organizers approve.</li>
          <li>Smart Split: share payment links with friends; cover leftover only if needed.</li>
          <li>Offline-first: QR tickets cached for gates without strong connectivity.</li>
        </ul>
      </section>
    </div>
  );
}

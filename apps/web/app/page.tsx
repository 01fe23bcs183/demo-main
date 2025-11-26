import { listEvents } from "@indietix/api";

const featured = listEvents();

const formatDate = (date: string) => new Date(date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="card">
        <h1 className="text-2xl font-bold">Discover indie experiences</h1>
        <p className="text-slate-600">Comedy, music, workshops and more across India with honest pricing and zero hidden convenience fees.</p>
        <div className="mt-4 flex gap-3">
          <a className="button" href="/events">Browse events</a>
          <a className="button" href="/discover" style={{ background: "#ec4899" }}>Discover feed</a>
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
    </div>
  );
}

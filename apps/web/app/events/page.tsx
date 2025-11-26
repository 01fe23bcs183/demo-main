import { listEvents } from "@indietix/api";

const events = listEvents();

const filterSummary = "Filters: Comedy, Tonight, Bengaluru (mock parser ready for NL queries)";

export default function EventsPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">All events</h1>
        <div className="text-sm text-slate-600">{filterSummary}</div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="card space-y-2">
            <img src={`${event.cover}?auto=format&fit=crop&w=320&q=60`} alt={event.title} className="w-full h-40 object-cover rounded" />
            <div className="font-semibold">{event.title}</div>
            <div className="text-sm text-slate-600">{event.city} • {event.venue}</div>
            <div className="text-sm">₹{event.price}</div>
            <a className="text-sm underline" href={`/events/${event.id}`}>View details</a>
          </div>
        ))}
      </div>
    </div>
  );
}

import { listEvents } from "@indietix/api";

const events = listEvents();

export default function AdminEventsPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Events moderation</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {events.map((event) => (
          <div key={event.id} className="card space-y-1">
            <div className="font-semibold">{event.title}</div>
            <div className="text-sm text-slate-600">{event.city} • {event.venue}</div>
            <div className="text-sm">Category: {event.category}</div>
            <div className="flex gap-2 text-sm">
              <button className="button">Publish</button>
              <button className="button" style={{ background: "#991b1b" }}>Unpublish</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

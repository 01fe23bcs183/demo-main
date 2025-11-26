import { listEvents } from "@indietix/api";

const events = listEvents();

export default function OrganizerEvents() {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Events</h1>
        <a className="button" href="/events/new">Create event</a>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {events.map((event) => (
          <div key={event.id} className="card space-y-1">
            <div className="font-semibold">{event.title}</div>
            <div className="text-sm text-slate-600">{event.city} • {event.venue}</div>
            <div className="text-sm">Seats {event.booked}/{event.seats}</div>
            <div className="flex gap-3 text-sm">
              <a href={`/events/${event.id}/attendees`} className="underline">Attendees</a>
              <a href={`/events/${event.id}/edit`} className="underline">Edit</a>
              <a href={`/events/${event.id}/flash`} className="underline">Flash sale</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

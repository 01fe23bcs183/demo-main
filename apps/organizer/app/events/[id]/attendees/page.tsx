import { getEvent, listAttendeesForEvent } from "@indietix/api";
import { notFound } from "next/navigation";

export default function AttendeesPage({ params }: { params: { id: string } }) {
  const event = getEvent(params.id);
  if (!event) return notFound();
  const attendees = listAttendeesForEvent(params.id);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-xs uppercase text-slate-500">Attendees</div>
          <h1 className="text-2xl font-semibold">{event.title}</h1>
        </div>
        <span className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700">{attendees.length} check-ins ready</span>
      </div>
      <div className="card space-y-2">
        <div className="font-semibold">Gate controls</div>
        <p className="text-sm text-slate-700">Offline QR valid; refunds auto-lock until organizer approves. Smart Split tickets stay pending until all friends pay.</p>
        <div className="flex gap-2 flex-wrap">
          <button className="button">Export CSV</button>
          <button className="button" style={{ background: "#1f2937" }}>Mark all offline-ready</button>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {attendees.map((attendee) => (
          <div key={attendee.id} className="card space-y-1">
            <div className="flex justify-between items-center">
              <div className="font-semibold">{attendee.name}</div>
              <span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-800">{attendee.status}</span>
            </div>
            <div className="text-sm text-slate-600">{attendee.ticketType}</div>
            <div className="text-xs text-slate-600">Check-in: {attendee.checkIn}</div>
            <div className="text-xs text-slate-600">Offline ticket: {attendee.offlineTicket ? "Ready" : "Not generated"}</div>
            <div className="flex gap-2 flex-wrap text-sm">
              <button className="button">Check-in</button>
              <button className="button" style={{ background: "#1f2937" }}>Resend QR</button>
              <button className="button" style={{ background: "#0f172a" }}>Flag refund</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

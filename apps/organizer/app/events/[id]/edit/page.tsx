import { getEvent } from "@indietix/api";
import { notFound } from "next/navigation";

export default function EditEventPage({ params }: { params: { id: string } }) {
  const event = getEvent(params.id);
  if (!event) return notFound();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-xs uppercase text-slate-500">Editing</div>
          <h1 className="text-2xl font-semibold">{event.title}</h1>
        </div>
        <span className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700">{event.booked}/{event.seats} seats</span>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="card space-y-2">
          <div className="font-semibold">Details</div>
          <input className="border rounded px-3 py-2 w-full" defaultValue={event.title} />
          <div className="grid grid-cols-2 gap-2">
            <input className="border rounded px-3 py-2 w-full" defaultValue={event.city} />
            <input className="border rounded px-3 py-2 w-full" defaultValue={event.venue} />
          </div>
          <input className="border rounded px-3 py-2 w-full" defaultValue={event.category} />
          <input className="border rounded px-3 py-2 w-full" defaultValue={event.date.replace("T", " ")} />
          <textarea className="border rounded px-3 py-2 w-full" rows={4} defaultValue={event.description}></textarea>
        </div>
        <div className="card space-y-2">
          <div className="font-semibold">Pricing & policy</div>
          <div className="grid grid-cols-2 gap-2">
            <input className="border rounded px-3 py-2 w-full" defaultValue={event.price} />
            <input className="border rounded px-3 py-2 w-full" defaultValue={event.seats} />
          </div>
          <textarea className="border rounded px-3 py-2 w-full" rows={3} defaultValue={event.refundPolicy}></textarea>
          <label className="text-sm text-slate-700 flex items-center gap-2">
            <input type="checkbox" defaultChecked /> Smart Split enabled
          </label>
          <label className="text-sm text-slate-700 flex items-center gap-2">
            <input type="checkbox" defaultChecked /> Offline QR allowed
          </label>
          <label className="text-sm text-slate-700 flex items-center gap-2">
            <input type="checkbox" defaultChecked /> Payouts paused if refund pending
          </label>
        </div>
      </div>
      <div className="card space-y-2">
        <div className="font-semibold">Flash & discovery</div>
        <p className="text-sm text-slate-700">Configure flash sales, waitlist slots, and categories surfaced to Discover feed.</p>
        <div className="flex gap-2 flex-wrap">
          <a href={`/events/${event.id}/flash`} className="button">Manage flash sale</a>
          <button className="button" style={{ background: "#1f2937" }}>Save changes</button>
        </div>
      </div>
    </div>
  );
}

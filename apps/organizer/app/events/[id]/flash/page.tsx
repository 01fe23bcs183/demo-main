import { getEvent } from "@indietix/api";
import { notFound } from "next/navigation";

export default function FlashSalePage({ params }: { params: { id: string } }) {
  const event = getEvent(params.id);
  if (!event) return notFound();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-xs uppercase text-slate-500">Flash sale</div>
          <h1 className="text-2xl font-semibold">{event.title}</h1>
        </div>
        <span className="text-xs px-2 py-1 rounded bg-orange-50 text-orange-700">Queue ready</span>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="card space-y-2">
          <div className="font-semibold">Flash configuration</div>
          <input className="border rounded px-3 py-2 w-full" placeholder="Start" defaultValue="Today 7:00 PM" />
          <input className="border rounded px-3 py-2 w-full" placeholder="End" defaultValue="Today 9:00 PM" />
          <div className="grid grid-cols-2 gap-2">
            <input className="border rounded px-3 py-2 w-full" placeholder="Discount %" defaultValue={15} />
            <input className="border rounded px-3 py-2 w-full" placeholder="Seats" defaultValue={20} />
          </div>
          <label className="text-sm text-slate-700 flex items-center gap-2">
            <input type="checkbox" defaultChecked /> Fair-queue hold for 5 minutes
          </label>
          <label className="text-sm text-slate-700 flex items-center gap-2">
            <input type="checkbox" defaultChecked /> Smart Split allowed during flash
          </label>
        </div>
        <div className="card space-y-2">
          <div className="font-semibold">Live controls</div>
          <p className="text-sm text-slate-700">If refund requests are pending, payouts stay paused. Offline QR is generated only for successful payments.</p>
          <div className="flex gap-2 flex-wrap">
            <button className="button">Start flash</button>
            <button className="button" style={{ background: "#1f2937" }}>Pause queue</button>
            <button className="button" style={{ background: "#0f172a" }}>Close early</button>
          </div>
        </div>
      </div>
      <div className="card space-y-1">
        <div className="font-semibold">Status</div>
        <div className="text-sm text-slate-700">{event.booked} / {event.seats} seats sold • Refund policy: {event.refundPolicy}</div>
        <div className="text-xs text-slate-600">Offline tickets remain valid if payment succeeded; queue auto-expiry returns seats to pool.</div>
      </div>
    </div>
  );
}

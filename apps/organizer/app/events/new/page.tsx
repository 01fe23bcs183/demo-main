export default function NewEventPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Create event</h1>
        <span className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700">Draft</span>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="card space-y-2">
          <div className="font-semibold">Basics</div>
          <input className="border rounded px-3 py-2 w-full" placeholder="Title" defaultValue="New Indie Night" />
          <input className="border rounded px-3 py-2 w-full" placeholder="City" defaultValue="Bengaluru" />
          <input className="border rounded px-3 py-2 w-full" placeholder="Venue" defaultValue="Koramangala Social" />
          <input className="border rounded px-3 py-2 w-full" placeholder="Category" defaultValue="Comedy" />
          <div className="grid grid-cols-2 gap-2">
            <input className="border rounded px-3 py-2 w-full" placeholder="Price" defaultValue={499} />
            <input className="border rounded px-3 py-2 w-full" placeholder="Seats" defaultValue={120} />
          </div>
          <input className="border rounded px-3 py-2 w-full" placeholder="Date/time" defaultValue="2024-09-01 20:00" />
        </div>
        <div className="card space-y-2">
          <div className="font-semibold">Policies</div>
          <textarea className="border rounded px-3 py-2 w-full" rows={4} defaultValue="Refunds require organizer approval; free cancellations till 6 hours before."></textarea>
          <label className="text-sm text-slate-700 flex items-center gap-2">
            <input type="checkbox" defaultChecked /> Smart Split links enabled
          </label>
          <label className="text-sm text-slate-700 flex items-center gap-2">
            <input type="checkbox" defaultChecked /> Offline tickets allowed
          </label>
          <label className="text-sm text-slate-700 flex items-center gap-2">
            <input type="checkbox" defaultChecked /> Hold payouts until refunds resolved
          </label>
        </div>
      </div>
      <div className="card space-y-2">
        <div className="font-semibold">Seating & queue</div>
        <p className="text-sm text-slate-700">Fair-queue controls and flash sales are enabled once you save. Seat map can be uploaded later.</p>
        <div className="flex gap-2 flex-wrap">
          <button className="button">Save draft</button>
          <button className="button" style={{ background: "#1f2937" }}>Publish</button>
        </div>
      </div>
    </div>
  );
}

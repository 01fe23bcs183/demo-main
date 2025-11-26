import { discoverFeed } from "@indietix/api";

const feed = discoverFeed();
const formatDate = (date: string) => new Date(date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });

export default function DiscoverPage() {
  return (
    <div className="space-y-5">
      <section className="card space-y-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <div className="text-xs uppercase text-slate-500">Feed</div>
            <h1 className="text-2xl font-semibold">Discover indie drops</h1>
            <p className="text-sm text-slate-600">Fast scroll for what&apos;s trending, what&apos;s refundable, and what your friends are buying.</p>
          </div>
          <div className="flex gap-2 text-sm flex-wrap">
            <button className="button">Tonight</button>
            <button className="button" style={{ background: "#1f2937" }}>This weekend</button>
            <button className="button" style={{ background: "#0f172a" }}>Refund friendly</button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="card" style={{ background: "#0f172a", color: "white" }}>
            <div className="text-xs uppercase tracking-wide">Control</div>
            <div className="text-lg font-semibold">No hidden convenience fee</div>
            <p className="text-sm opacity-80">See gateway, server, and platform fees before you commit; Smart Split lets friends pay their share.</p>
          </div>
          <div className="card" style={{ background: "#ffedd5" }}>
            <div className="text-xs uppercase tracking-wide text-orange-900">Refunds</div>
            <div className="text-lg font-semibold text-orange-900">Organizer-approved refunds</div>
            <p className="text-sm text-orange-900/80">Every refund is consented by the organizer; queue and payouts respect that decision.</p>
          </div>
          <div className="card" style={{ background: "#ecfeff" }}>
            <div className="text-xs uppercase tracking-wide text-cyan-900">Offline</div>
            <div className="text-lg font-semibold text-cyan-900">Offline tickets ready</div>
            <p className="text-sm text-cyan-900/80">Download QR to wallet and mobile app; gates can check in even if the network blips.</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 className="text-xl font-semibold">For you</h2>
          <div className="text-sm text-slate-600">Curated using tags, refunds, and split-friendly pricing.</div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {feed.map((event) => (
            <div key={event.id} className="card space-y-2">
              <div className="flex gap-3">
                <img src={`${event.cover}?auto=format&fit=crop&w=200&q=70`} alt={event.title} className="w-28 h-28 object-cover rounded" />
                <div className="space-y-1">
                  <div className="font-semibold">{event.title}</div>
                  <div className="text-sm text-slate-600">{event.city} • {event.venue}</div>
                  <div className="text-sm">{formatDate(event.date)}</div>
                  <div className="text-sm font-semibold">₹{event.price} onwards</div>
                </div>
              </div>
              <p className="text-sm text-slate-700">{event.description}</p>
              <div className="flex gap-2 flex-wrap text-xs">
                {event.badges.map((badge: string) => (
                  <span key={badge} className="px-2 py-1 rounded-full bg-slate-100 text-slate-700 border">{badge}</span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xs text-slate-600">Refund policy: {event.refundPolicy}</div>
                <a className="button" href={`/events/${event.id}`}>View</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

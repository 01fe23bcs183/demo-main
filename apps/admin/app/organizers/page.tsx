const organizers = [
  { id: "org-1", name: "Laugh Lounge", city: "Bengaluru", verified: true },
  { id: "org-2", name: "Indie Folk Collective", city: "Mumbai", verified: false },
];

export default function OrganizersPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Organizers</h1>
      <div className="grid gap-3">
        {organizers.map((org) => (
          <div key={org.id} className="card flex justify-between items-center">
            <div>
              <div className="font-semibold">{org.name}</div>
              <div className="text-sm text-slate-600">{org.city}</div>
            </div>
            <span className="text-xs px-2 py-1 rounded bg-green-50 text-green-700">{org.verified ? "Verified" : "Pending"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

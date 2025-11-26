const users = [
  { id: "u-1", name: "Aditi", email: "aditi@example.com", status: "ACTIVE" },
  { id: "u-2", name: "Rohan", email: "rohan@example.com", status: "LOCKED" },
];

export default function UsersPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Users</h1>
      <div className="grid gap-3">
        {users.map((user) => (
          <div key={user.id} className="card flex justify-between items-center">
            <div>
              <div className="font-semibold">{user.name}</div>
              <div className="text-sm text-slate-600">{user.email}</div>
            </div>
            <span className="text-xs px-2 py-1 rounded bg-indigo-50 text-indigo-700">{user.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const demoEvents = [
  {
    id: "evt-comedy-1",
    title: "Bangalore LOL Nights",
    city: "Bengaluru",
    category: "Comedy",
    venue: "Indiranagar Social",
    price: 499,
    cover: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    date: "2024-08-15T19:30:00+05:30",
    seats: 120,
    booked: 64,
    tags: ["standup", "english"],
    description: "A curated lineup of the sharpest comics in town with honest pricing and transparent fees.",
  },
  {
    id: "evt-music-1",
    title: "Indie Folk Evenings",
    city: "Mumbai",
    category: "Music",
    venue: "Bandstand Amphitheatre",
    price: 699,
    cover: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
    date: "2024-08-20T20:00:00+05:30",
    seats: 300,
    booked: 210,
    tags: ["folk", "hindi"],
    description: "Soulful indie artists with beachside breeze and clear ticket math.",
  },
];

export const demoBookings = [
  {
    id: "bkg-123",
    eventId: "evt-comedy-1",
    status: "CONFIRMED" as const,
    tickets: 2,
    ticketPrice: 499,
    fees: {
      paymentGatewayFee: 10,
      serverMaintenanceFee: 5,
      platformFixedFee: 10,
      platformPercentFee: 0.05,
    },
  },
];

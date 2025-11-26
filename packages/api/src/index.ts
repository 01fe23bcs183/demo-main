import { demoAttendees, demoEvents, demoBookings } from "./data";

export const listEvents = () => demoEvents;
export const getEvent = (id: string) => demoEvents.find((e) => e.id === id);
export const listBookings = () => demoBookings.map((b) => ({
  ...b,
  event: demoEvents.find((e) => e.id === b.eventId),
}));
export const listAttendeesForEvent = (eventId: string) =>
  demoAttendees.filter((attendee) => attendee.eventId === eventId);

export const calculateFees = (basePrice: number) => {
  const paymentGatewayFee = 10;
  const serverMaintenanceFee = 2;
  const platformFixedFee = 10;
  const platformPercentFee = Math.round(basePrice * 0.05);
  const total = basePrice + paymentGatewayFee + serverMaintenanceFee + platformFixedFee + platformPercentFee;
  const feeTotal = paymentGatewayFee + serverMaintenanceFee + platformFixedFee + platformPercentFee;

  return {
    paymentGatewayFee,
    serverMaintenanceFee,
    platformFixedFee,
    platformPercentFee,
    feeTotal,
    total,
  };
};

export const discoverFeed = () =>
  demoEvents.map((event) => ({
    ...event,
    badges: [
      `${event.booked}/${event.seats} seats`,
      event.refundPolicy,
      event.tags.slice(0, 2).join(" • "),
    ],
  }));

export type Event = ReturnType<typeof listEvents>[number];
export type Booking = ReturnType<typeof listBookings>[number];

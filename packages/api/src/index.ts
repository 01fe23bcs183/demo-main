import { demoEvents, demoBookings } from "./data";

export const listEvents = () => demoEvents;
export const getEvent = (id: string) => demoEvents.find((e) => e.id === id);
export const listBookings = () => demoBookings.map((b) => ({
  ...b,
  event: demoEvents.find((e) => e.id === b.eventId),
}));

export type Event = ReturnType<typeof listEvents>[number];
export type Booking = ReturnType<typeof listBookings>[number];

import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", name: "event1" },
  { id: "e2", name: "event2" },
  { id: "e3", name: "event3" },
  { id: "e4", name: "event4" },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            {event.name}, <Link to={`/events/${event.id}`}>LINK</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

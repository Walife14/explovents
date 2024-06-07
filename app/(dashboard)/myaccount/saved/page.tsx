"use client";

// components
import EventCard from "@components/EventCard/EventCard";
import BackBtn from "@/app/components/BackBtn/BackBtn";
import { useEffect, useState } from "react";

// types and interfaces
import { IEvent } from "@/app/interfaces/IEvent";

type Props = {};

function Saved({}: Props) {
  const [savedEvents, setSavedEvents] = useState<IEvent[] | []>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getSavedEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/events/save", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const json = await res.json();

        if (json) {
          console.log(json);
          setSavedEvents(json);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getSavedEvents();
  }, []);

  return (
    <main>
      <div className="mx-4 md:w-5/6 md:mx-auto">
        <div className="relative">
          <BackBtn />
          <h1 className="text-primary text-center">Saved Events</h1>
        </div>
        {!loading && (
          <div>
            {savedEvents.map((event: IEvent, index) => (
              <EventCard
                key={index}
                title={event.title}
                description={event.description}
                price={60}
                url={`/event/${event.id}`}
                image={event.banner_image}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Saved;

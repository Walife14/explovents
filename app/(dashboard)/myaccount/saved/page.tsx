"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// components
import EventCard from "@components/EventCard/EventCard";
import BackBtn from "@/app/components/BackBtn/BackBtn";
import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";

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
          // console.log(json);
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
        {!loading ? (
          <div className="flex flex-col gap-y-8 my-4">
            {savedEvents && savedEvents.length > 0 ? (
              savedEvents.map((event: IEvent, index: number) => (
                <EventCard
                  key={index}
                  title={event.title}
                  price={60}
                  image={event.banner_image}
                  url={"/event/" + event.id}
                  event_type={event.event_type}
                  country={event.country}
                  city={event.city}
                />
              ))
            ) : (
              <div className="h-[50vh] flex flex-col gap-y-8 items-center justify-center">
                <svg
                  className="w-16 h-16 fill-dark-gray"
                  fill="#000000"
                  viewBox="0 0 256 256"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M108,116a8,8,0,1,1-8-8A7.99993,7.99993,0,0,1,108,116Zm48-8a8,8,0,1,0,8,8A7.99993,7.99993,0,0,0,156,108Zm64,12v96a4.00007,4.00007,0,0,1-6.5332,3.0957L186.667,197.168,159.86621,219.0957a4.00069,4.00069,0,0,1-5.06641,0L128,197.168,101.2002,219.0957a4.00069,4.00069,0,0,1-5.06641,0L69.333,197.168,42.5332,219.0957A4,4,0,0,1,36,216V120a92,92,0,0,1,184,0Zm-8,0a84,84,0,0,0-168,0v87.55908L66.7998,188.9043a4.00069,4.00069,0,0,1,5.06641,0L98.667,210.832,125.4668,188.9043a4.00025,4.00025,0,0,1,5.0664,0L157.333,210.832l26.80078-21.92773a4.00069,4.00069,0,0,1,5.06641,0L212,207.55908Z"></path>{" "}
                  </g>
                </svg>
                <p className="md:w-2/3 text-center">
                  Unfortunately, it seems you haven&apos;t saved any events yet.
                  Fancy exploring some of our top picks? Click{" "}
                  <Link className="underline" href="/explore">
                    here
                  </Link>{" "}
                  to get started!
                </p>
              </div>
            )}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </main>
  );
}

export default Saved;

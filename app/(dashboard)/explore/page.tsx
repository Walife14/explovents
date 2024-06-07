"use client";

import CountryCityDates from "@/app/components/CountryCityDates/CountryCityDates";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// components
import EventCard from "@components/EventCard/EventCard";
import Button from "@components/Button/Button";

// interfaces and types
import { IEvent } from "@/app/interfaces/IEvent";
import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";

type Props = {};

function Explore({}: Props) {
  const [events, setEvents] = useState<IEvent[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/events`, {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });

      if (response) {
        const eventsData = await response.json();
        setEvents(eventsData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = (
    e: React.FormEvent,
    country: string,
    city: string,
    selectedDate: any,
    boatPartyEventChecked: boolean,
    poolPartyEventChecked: boolean,
    beachPartyEventChecked: boolean,
    otherPartyEventChecked: boolean
  ) => {
    e.preventDefault();

    console.log(
      country,
      city,
      selectedDate,
      boatPartyEventChecked,
      poolPartyEventChecked,
      beachPartyEventChecked,
      otherPartyEventChecked
    );
  };

  return (
    <main>
      <div className={`mx-4 md:w-5/6 md:mx-auto`}>
        <CountryCityDates
          handleSubmit={handleSubmit}
          btnText="Update"
          includeEventTypes={true}
        />
        {!loading ? (
          <>
            <h2 className="text-lg font-bold text-center">
              Events in{" "}
              <span className="text-primary underline">Ayia Napa</span>,{" "}
              <span className="text-primary underline">Cyprus</span> within{" "}
              <span className="text-primary underline">27 May - 29 May</span>
            </h2>

            <motion.div initial={{ x: -75 }} animate={{ x: 0 }}>
              {events.map((event: any, index: number) => (
                <EventCard
                  key={index}
                  title={event.title}
                  description={event.description}
                  price={60}
                  image={event.banner_image}
                  darkbg={index % 2 === 0}
                  url={"/event/" + event.id}
                />
              ))}
            </motion.div>

            <div className="flex justify-center my-8">
              <Button text={"Show more"} nonFullWidth={true} />
              {/* Button -> once clicked loads 8 more events from the database and then causes the refresh of the mapping of event cards with data (Possibly use useEffect to listen to changes to "eventsList"? the mapping goes through eventsList)*/}
            </div>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </main>
  );
}

export default Explore;

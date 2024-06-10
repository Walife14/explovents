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
  const [selectedCountry, setSelectedCountry] = useState<string>(null);
  const [selectedCity, setSelectedCity] = useState<string>(null);
  const [numberOfEventsFound, setNumberOfEventsFound] = useState<number | null>(
    null
  );

  const fetchEvents = async (country?: string, city?: string) => {
    try {
      setLoading(true);
      let q: string = "";
      if (country && city) {
        q = `?country=${country}&city=${city}`;
      }
      const response = await fetch(`/api/events${q}`, {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });

      if (response) {
        const eventsData = await response.json();
        setEvents(eventsData.events);
        setNumberOfEventsFound(eventsData.count);
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

  const handleSubmit = async (
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

    await fetchEvents(country, city);
    setSelectedCity(city);
    setSelectedCountry(country);

    // console.log(
    //   country,
    //   city,
    //   selectedDate,
    //   boatPartyEventChecked,
    //   poolPartyEventChecked,
    //   beachPartyEventChecked,
    //   otherPartyEventChecked
    // );
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
            <h2
              className={`text-sm font-bold text-center ${
                selectedCountry && "text-lg"
              }`}
            >
              {selectedCountry && selectedCity ? (
                <>
                  Events in{" "}
                  <span className="text-primary underline">{selectedCity}</span>
                  ,{" "}
                  <span className="text-primary underline">
                    {selectedCountry}
                  </span>{" "}
                  within{" "}
                  <span className="text-primary underline">
                    27 May - 29 May
                  </span>
                  .
                </>
              ) : (
                <>
                  You haven&apos;t searched for a location yet. Please use the
                  search form above to find events in your desired area!
                </>
              )}
            </h2>

            {selectedCountry && selectedCity && (
              <p>
                <span className="py-1 px-3 ring-2 ring-triary mr-2">
                  {numberOfEventsFound}
                </span>{" "}
                event{numberOfEventsFound > 1 && "s"} found!
              </p>
            )}

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

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
  const [checkboxError, setCheckboxError] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>(null);
  const [selectedCity, setSelectedCity] = useState<string>(null);
  const [numberOfEventsFound, setNumberOfEventsFound] = useState<number | null>(
    null
  );

  const fetchEvents = async (
    country?: string,
    city?: string,
    boatPartyEventChecked?: boolean,
    poolPartyEventChecked?: boolean,
    beachPartyEventChecked?: boolean,
    otherPartyEventChecked?: boolean
  ) => {
    try {
      setLoading(true);
      let q: string = "";
      if (country && city) {
        q = `?country=${country}&city=${city}${
          boatPartyEventChecked ? "&boatparty=true" : ""
        }${poolPartyEventChecked ? "&poolparty=true" : ""}${
          beachPartyEventChecked ? "&beachparty=true" : ""
        }${otherPartyEventChecked ? "&otherparty=true" : ""}`;
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
    setCheckboxError("");

    if (
      !boatPartyEventChecked &&
      !poolPartyEventChecked &&
      !beachPartyEventChecked &&
      !otherPartyEventChecked
    ) {
      setCheckboxError(
        "Please make sure that you select at least one event type!"
      );
      return;
    }

    await fetchEvents(
      country,
      city,
      boatPartyEventChecked,
      poolPartyEventChecked,
      beachPartyEventChecked,
      otherPartyEventChecked
    );
    setSelectedCity(city);
    setSelectedCountry(country);

    // if searching for boat parties just return events that match boat parties, same for pool and beach.
    // if searching for other parties show all events != boat/beach/pool parties.
    // if boat and other party selected show boat parties && events that are != pool_parties && beach_parties, etc.
  };

  return (
    <main>
      <div className={`mx-4 md:w-5/6 md:mx-auto`}>
        <CountryCityDates
          handleSubmit={handleSubmit}
          btnText="Update"
          includeEventTypes={true}
        />

        {checkboxError && (
          <div className="flex items-center text-error border-2 border-dark-gray/50 rounded-full p-2 gap-x-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-14 md:size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
            <span>{checkboxError}</span>
          </div>
        )}

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
              <p className="my-4">
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

"use client";

import Image from "next/image";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import Link from "next/link";

// components
import ImageGallery from "@components/ImageGallery/ImageGallery";
import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";

// interfaces and types
import { IEvent } from "@/app/interfaces/IEvent";
import SaveEventBtn from "@/app/components/SaveEventBtn/SaveEventBtn";
import { createClient } from "@/utils/supabase/client";

type Props = {
  params: { id: string };
};

function Event({ params }: Props) {
  const [date, setDate] = useState<Date>(new Date());
  const [nOfTickets, setNOfTickets] = useState<number>(1);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [event, setEvent] = useState<IEvent | null>(null);
  const [user, setUser] = useState<boolean>(false);

  const supabase = createClient();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/events/${params.id}`, {
          headers: {
            Accept: "application/json",
            method: "GET",
          },
        });
        if (response) {
          const eventData = await response.json();
          setEvent(eventData[0]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const checkIfUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (data.user) {
        setUser(true);
      }
    };

    fetchEvent();
    checkIfUser();
  }, []);

  function customDate(date: string) {
    // split the date by spaces returning an array of words
    let parts = date.split(" ");
    // remove the first word of the date (e.g. "Fri")
    parts.shift();
    // return the array words joined together adding a space in-between
    return parts.join(" ");
  }

  return (
    <main className="mx-4 md:w-5/6 md:mx-auto">
      {!loading ? (
        <>
          <div className="mx-auto relative h-32 md:h-60 flex items-center overflow-hidden">
            <Image
              className="w-auto h-full object-cover object-center"
              src={event.banner_image}
              alt={event.title + " event."}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              priority
            />
          </div>
          <h1 className="text-primary my-8">{event.title.toUpperCase()}</h1>
          <div className="grid grid-cols-2 gap-x-8 md:my-20">
            <div
              className="col-span-2 md:col-span-1 flex justify-center items-center"
              id="calendar_container"
            >
              <Calendar
                minDate={new Date()}
                onClickDay={(e) => setDate(e)}
                value={date}
                maxDetail="month"
              />
            </div>
            <div className="col-span-2 md:col-span-1 mt-8">
              <h2 className="text-3xl font-bold text-center mb-10">
                <span className="">Currently selected</span>
                <br />
                <span className="text-primary underline">
                  {customDate(date.toDateString())}
                </span>
              </h2>

              <h2 className="text-lg font-bold">When?</h2>
              <p>The event is on May 17th, starting at 4:00 PM.</p>
              <h2 className="text-lg font-bold">More info?</h2>
              <p>
                After purchasing your ticket, expect to receive an email within
                the next 5 minutes. This email will contain your ticket and
                provide you with essential details about the event, including
                venue directions and any additional information you may need.
              </p>

              <div className="border border-dark-gray flex rounded-md font-bold mt-20">
                <div className="flex items-center justify-center basis-3/4 py-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <span className="text-center flex-1">N. of tickets</span>
                </div>
                <div className="basis-1/4 text-center border-l border-dark-gray py-2 px-4">
                  <span className="text-3xl">{nOfTickets}</span>
                </div>
              </div>
              <Link
                className="text-white bg-secondary font-bold block text-center py-4 rounded-md mt-4 text-lg"
                href="/"
              >
                CONFIRM
              </Link>
            </div>
          </div>
          <div className="my-10">
            {user && (
              <div className="flex justify-end">
                <SaveEventBtn id={event.id} />
              </div>
            )}
          </div>
          <div className="my-20">
            <h2 className="text-3xl text-primary font-bold">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-8">
              {event.event_images.slice(0, 4).map((img, index) => (
                <div
                  key={index}
                  className="aspect-square bg-blue-500 rounded-md overflow-hidden relative"
                >
                  <Image
                    className={`h-full object-cover ${
                      index === event.event_images.slice(0, 4).length - 1
                        ? "filter brightness-75"
                        : ""
                    }`}
                    src={event.event_images[index]}
                    alt="test-image"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    priority
                  ></Image>
                  {index === event.event_images.slice(0, 4).length - 1 ? (
                    <button
                      onClick={() => setIsGalleryOpen(true)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold border-2 text-lg border-white rounded-md p-10"
                    >
                      View More
                    </button>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <ImageGallery
            isOpen={isGalleryOpen}
            onClose={() => setIsGalleryOpen(false)}
            images={event.event_images}
          />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </main>
  );
}

export default Event;

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// actions
import { createPendingEventOrder } from "./actions";

// components
import ImageGallery from "@components/ImageGallery/ImageGallery";
import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";
import AvailableEventDates from "./AvailableEventDates";
import SaveEventBtn from "@/app/components/SaveEventBtn/SaveEventBtn";

// interfaces and types
import { IEvent } from "@/app/interfaces/IEvent";
import { createClient } from "@/utils/supabase/client";
import { IEventDate } from "@/app/interfaces/IEventDate";

type Props = {
  params: { id: string };
};

function Event({ params }: Props) {
  const [date, setDate] = useState<Date>(new Date());
  const [nOfTickets, setNOfTickets] = useState<number>(1);
  const [nOfTicketsAvailable, setNOfTicketsAvailable] = useState<number>(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [event, setEvent] = useState<IEvent | null>(null);
  const [user, setUser] = useState<boolean>(false);

  const [selectedDate, setSelectedDate] = useState<IEventDate | null>(null);

  const supabase = createClient();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/events/${params.id}`, {
          method: "GET",
          headers: {
            "Accept": "application/json"
          }
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
  }, [params.id, supabase.auth]);

  const handleDateSelect = async (selectedDate) => {
    // this will run to allow the confirm button to know which date has been selected for the user to buy.
    // console.log("PARENT: the selected date is ", selectedDate)
    setSelectedDate(selectedDate)

    // verify to the frontend the number of tickets available for the user to buy
    setNOfTicketsAvailable(selectedDate.tickets_available)
  }

  const handleConfirmClick = async () => {
    if (selectedDate) {
      try {
        const res = await createPendingEventOrder(selectedDate.id, nOfTickets)

        if (res.success === true) { // if succesfully created pending event order
          // console.log("success", res.orderId) // pending order created successfully with id
          const stripeRes = await fetch('/api/tickets/create-checkout-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ orderId: res.orderId })
          })

          const json = await stripeRes.json()
          
          if (json.success) {
            console.log(json.message)
            // send them to the payment link
            window.location.assign(json.url)
          } else {
            console.log(json.message)
          }

        }
        if (res.success === false) {
          console.log("Failed to place order ", res)
        }

      } catch (error) {
        console.log("Failed to create order: ", error)
      }
    } else {
      // TO ADD: Perhaps add a notification for the user that enables on this that lets them know to select an event option
      console.log("No date selected")
    }
  }

  const addOneMoreTicket = (): void => {
    if (nOfTickets < nOfTicketsAvailable) {
      setNOfTickets(nOfTickets + 1)
    } else {
    }
  }

  const removeOneMoreTicket = (): void => {
    if (nOfTickets != 1) {
      setNOfTickets(nOfTickets - 1)
    }
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
            <div className="col-span-2 py-2 overflow-x-scroll">
              <AvailableEventDates id={params.id} onDateSelect={handleDateSelect} />
            </div>

            <div className="col-span-2 md:col-span-1 mt-8">
              <h2 className="text-lg font-bold">When?</h2>
              <p>The event is on May 17th, starting at 4:00 PM.</p>
              <h2 className="text-lg font-bold">More info?</h2>
              <p>
                After purchasing your ticket, expect to receive an email within
                the next 5 minutes. This email will contain your ticket and
                provide you with essential details about the event, including
                venue directions and any additional information you may need.
              </p>

              <div className='border border-dark-gray flex rounded-md font-bold mt-20'>
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
                <div className="basis-1/4 text-center py-2 px-4">
                  <span className="text-3xl">{nOfTicketsAvailable ? nOfTickets : '-'}</span>
                </div>
                <div className="flex flex-col justify-center px-2">
                  <button onClick={addOneMoreTicket}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                  </button>
                  <button onClick={removeOneMoreTicket}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                </div>
              </div>
              <button
                className="text-white bg-secondary font-bold block text-center py-4 rounded-md mt-4 text-lg w-full"
                onClick={handleConfirmClick}
              >
                CONFIRM
              </button>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2">
            <div className="flex justify-center items-center">
              <span>Share</span>
            </div>
            {user && (
              <div className="flex justify-center items-center">
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
                    className={`h-full object-cover ${index === event.event_images.slice(0, 4).length - 1
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

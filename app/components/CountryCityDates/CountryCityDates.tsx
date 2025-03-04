import Button from "@components/Button/Button";
import { useState } from "react";

type Props = {
  handleSubmit: (
    e: React.FormEvent,
    country: string,
    city: string,
    selectedDate: any,
    boatPartyEventChecked?: boolean,
    poolPartyEventChecked?: boolean,
    beachPartyEventChecked?: boolean,
    otherPartyEventChecked?: boolean
  ) => void;
  btnText?: string;
  limitBtnWidth?: boolean;
  includeEventTypes?: boolean;
  hasCountry?: string;
  hasCity?: string;
  hasBoatPartyEventChecked?: boolean;
  hasPoolPartyEventChecked?: boolean;
  hasBeachPartyEventChecked?: boolean;
  hasOtherPartyEventChecked?: boolean;
};

// list of countries/cities combinations for events we hold
const locations = {
  spain: ["ibiza", "marbella"],
  greece: ["zakynthos", "mykonos"],
  cyprus: ["ayia napa"],
};

function CountryCityDates({
  handleSubmit,
  btnText,
  limitBtnWidth,
  includeEventTypes,
  hasCountry,
  hasCity,
  hasBoatPartyEventChecked,
  hasPoolPartyEventChecked,
  hasBeachPartyEventChecked,
  hasOtherPartyEventChecked,
}: Props) {
  const [country, setCountry] = useState<string>(hasCountry ? hasCountry : "");
  const [city, setCity] = useState<string>(hasCity ? hasCity : "");
  const [selectedDate, setSelectedDate] = useState(getTodaysDate());
  const [boatPartyEventChecked, setBoatPartyEventChecked] = useState<boolean>(
    hasBoatPartyEventChecked ? true : false
  );
  const [poolPartyEventChecked, setPoolPartyEventChecked] = useState<boolean>(
    hasPoolPartyEventChecked ? true : false
  );
  const [beachPartyEventChecked, setBeachPartyEventChecked] = useState<boolean>(
    hasBeachPartyEventChecked ? true : false
  );
  const [otherPartyEventChecked, setOtherPartyEventChecked] = useState<boolean>(
    hasOtherPartyEventChecked ? true : false
  );
  const [allPartyEventChecked, setAllPartyEventChecked] = useState(false);

  const options = [
    {
      value: "boatParty",
      eventChecked: boatPartyEventChecked,
      toggleChecked: () => {
        setBoatPartyEventChecked(!boatPartyEventChecked);
        setAllPartyEventChecked(false);
      },
      text: "Boat Parties",
    },
    {
      value: "poolParty",
      eventChecked: poolPartyEventChecked,
      toggleChecked: () => {
        setPoolPartyEventChecked(!poolPartyEventChecked);
        setAllPartyEventChecked(false);
      },
      text: "Pool Parties",
    },
    {
      value: "beachParty",
      eventChecked: beachPartyEventChecked,
      toggleChecked: () => {
        setBeachPartyEventChecked(!beachPartyEventChecked);
        setAllPartyEventChecked(false);
      },
      text: "Beach Parties",
    },
    {
      value: "otherParty",
      eventChecked: otherPartyEventChecked,
      toggleChecked: () => {
        setOtherPartyEventChecked(!otherPartyEventChecked);
        setAllPartyEventChecked(false);
      },
      text: "Other Parties",
    },
  ];

  function toggleSelectedEvents() {
    if (allPartyEventChecked) {
      setOtherPartyEventChecked(false);
      setBeachPartyEventChecked(false);
      setPoolPartyEventChecked(false);
      setBoatPartyEventChecked(false);
    } else {
      setOtherPartyEventChecked(true);
      setBeachPartyEventChecked(true);
      setPoolPartyEventChecked(true);
      setBoatPartyEventChecked(true);
    }
    setAllPartyEventChecked(!allPartyEventChecked);
  }

  function getTodaysDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day
      }`;
  }

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(
          e,
          country,
          city,
          selectedDate,
          boatPartyEventChecked,
          poolPartyEventChecked,
          beachPartyEventChecked,
          otherPartyEventChecked
        )
      }
    >
      <div className="flex flex-col md:flex-row gap-x-1 gap-y-1 p-1 md:text-lg bg-triary rounded-md">
        <div className="md:flex-1 flex">
          <label htmlFor="countrySelect" hidden>
            Select Country
          </label>
          <div className="flex items-center justify-center p-2 rounded-l-md bg-white">
            <svg
              className="w-8 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
              />
            </svg>
          </div>
          <select
            className="w-full p-2 placeholder:text-dark-gray rounded-r-md rounded-l-none focus:outline-none hover:cursor-pointer"
            id="countrySelect"
            onChange={(e) => {
              setCountry(e.target.value);
              setCity("");
            }}
            value={country}
            required
          >
            <option value="" disabled>
              Please select a country
            </option>
            {Object.keys(locations).map((key: string, index: number) => (
              <option value={key} key={index}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 flex">
          <label htmlFor="citySelect" hidden>
            Select City
          </label>
          <div className="flex items-center justify-center p-2 rounded-l-md bg-white">
            <svg
              className="w-8 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <select
            className="w-full p-2 placeholder:text-dark-gray rounded-r-md rounded-l-none focus:outline-none hover:cursor-pointer"
            id="citySelect"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            required
          >
            <option value="" disabled>
              Please select a city
            </option>
            {country && (
              <>
                {locations[country].map((key: string, index: number) => (
                  <option value={key} key={index}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </option>
                ))}
              </>
            )}
          </select>
        </div>
        <div className="flex-1 flex">
          <label htmlFor="dateInput" hidden>
            Select Date(s)
          </label>
          <div className="flex items-center justify-center p-2 rounded-l-md bg-white">
            <svg
              className="w-8 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </div>
          <input
            className="p-2 placeholder:text-dark-gray flex-1 rounded-r-md rounded-l-none"
            id="dateInput"
            type="date"
            placeholder="Date"
            onChange={(e) => setSelectedDate(e.target.value)}
            value={selectedDate}
            required
            size={1}
          />
        </div>
      </div>
      {includeEventTypes && (
        <div className="grid grid-cols-2 my-2 gap-1 md:flex md:gap-x-2">
          {options.map((option) => (
              <label key={option.value}>
                <input
                  type="checkbox"
                  name={option.value}
                  checked={option.eventChecked}
                  onClick={option.toggleChecked}
                  onChange={() => { }}
                  className="hidden peer"
                />
                <span className="text-center peer-checked:bg-dark-gray peer-checked:text-gray-100 shadow-md md:py-2 md:px-4 cursor-pointer select-none">
                  {option.text}
                </span>
              </label>
          ))}
          {/* TOGGLES all the events, needs to be better fine tuned */}
          {/* <button
            type="button"
            className="underline text-secondary"
            onClick={toggleSelectedEvents}
          >
            Toggle All Events
          </button> */}
        </div>
      )}
      <div
        className={`w-72 mx-auto md:mx-0 ${includeEventTypes ? "" : "w-full text-center mt-4 md:mt-10"
          }`}
      >
        <Button
          text={btnText ? btnText : "Search"}
          type="submit"
          largeText={true}
          nonFullWidth={limitBtnWidth}
        />
      </div>
    </form>
  );
}

export default CountryCityDates;

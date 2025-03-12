"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DateRange } from "react-date-range";

// components
import Button from "../components/Button/Button";

// countries and cities we work with so far ** TEST DATA SO FAR **
const locations = {
  spain: ["ibiza", "marbella"],
  greece: ["zakynthos", "mykonos"],
  cyprus: ["ayia napa"],
};

type Props = {};

function Search({ }: Props) {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [dateSelected, setDateSelected] = useState<[{ startDate: Date | null, endDate: Date | null, key: string }]>([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);
  const router = useRouter();

  const handleSubmit = async (
    country: string,
    city: string,
    dateSelected: any
  ) => {
    // Navigate to the new page with query parameters

    // Set loading true to here to add loading state to button/page
    const startDate = dateSelected[0].startDate;
    const endDate = dateSelected[0].endDate;

    let formattedStartDate = startDate.toISOString().split('T')[0];
    let formattedEndDate = endDate.toISOString().split('T')[0];
    router.push(
      `/explore?country=${country}&city=${city}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`
    );
  };

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderHeight(header.offsetHeight);

    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return (
    <div
      className="relative px-4 md:w-5/6 md:mx-auto flex flex-col transition-all"
      style={isMediumScreen ? { height: `calc(100svh - ${headerHeight}px)` } : { minHeight: `calc(100svh - ${headerHeight}px)` }}
    >
      <div className="md:bg-boat-on-water bg-contain md:bg-cover bg-no-repeat w-full h-full absolute left-0 top-0 -z-10 opacity-50 md:opacity-70 transition-all"></div>
      <div className="h-full md:overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* part 1 - select the country */}
          <div className="md:col-span-2 flex flex-col items-center gap-y-2">
            <h2
              className={`${selectedCountry && "text-dark-gray"
                } text-center md:text-left transition-all duration-200 bg-white/70`}
            >
              What country are you going to?
            </h2>
            <ul className="flex justify-center md:justify-normal gap-x-4">
              {Object.entries(locations).map(([country]) => (
                <li key={country}>
                  <button
                    className={`${selectedCountry === country ? "bg-dark-gray text-white" : "bg-white/50"
                      } px-4 py-2 shadow-md rounded-md`}
                    onClick={() => {
                      setSelectedCountry(country);
                      setSelectedCity(null);
                    }}
                  >
                    <span>{country}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* part 2 - select the city */}
          {selectedCountry && (
            <div className="md:col-span-2 flex flex-col items-center gap-y-2">
              <h2
                className={`${selectedCity && "text-dark-gray"
                  } text-center md:text-left transition-all duration-200 bg-white/70`}
              >
                And the city?
              </h2>
              <ul className="flex justify-center md:justify-normal gap-x-4">
                {locations[selectedCountry].map((city: string) => (
                  <li key={city}>
                    <button
                      className={`${selectedCity === city ? "bg-dark-gray text-white" : "bg-white/50"
                        } px-4 py-2 shadow-md rounded-md`}
                      onClick={() => setSelectedCity(city)}
                    >
                      <span>{city}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* part 3 - select the date range */}
          {selectedCity && (
            <div className="md:col-span-4 flex flex-col items-center gap-y-2">
              {/* <h2 className="text-center md:text-left"> */}
              <h2
                className={`${(dateSelected[0].startDate && dateSelected[0].endDate ) && "text-dark-gray"
                  } text-center md:text-left transition-all duration-200 bg-white/70`}
              >
                What days will you be out there?
              </h2>
              <div className="flex justify-center md:justify-normal">
                <DateRange
                  onChange={(item: any) => setDateSelected([item.selection])}
                  ranges={dateSelected}
                  moveRangeOnFirstSelection={false}
                  showMonthAndYearPickers={false}
                  showDateDisplay={false}
                  editableDateInputs={true}
                  color="#0e0e0e"
                  rangeColors={!dateSelected[0].startDate && !dateSelected[0].endDate ? ["#b3b3b3"] : ["#444444"]}
                  minDate={new Date()} // makes it so that past dates are unselectable
                />
              </div>
            </div>
          )}
          {/* search button */}
          {selectedCountry && selectedCity && (dateSelected[0].startDate && dateSelected[0].endDate) && (
            <div className="md:col-span-4 mx-auto w-3/4 md:w-1/4">
              <Button
                text="Find Events"
                onClick={() => {
                  if (selectedCountry && selectedCity && dateSelected) {
                    handleSubmit(selectedCountry, selectedCity, dateSelected);
                  }
                }}
              />
            </div>
          )}
        </div>
        {/* <div className="relative hidden md:flex">
          <Image
            className="object-cover"
            src="/images/pages/home/pool-party-event.png"
            alt="Pool party event"
            fill
          />
        </div> */}
      </div>
    </div>
  );
}

export default Search;

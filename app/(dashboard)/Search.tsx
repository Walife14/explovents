"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

// components
import CountryCityDates from "../components/CountryCityDates/CountryCityDates";

// images
import arrows_graphic from "@/public/images/pages/home/arrows-graphic.svg";

// countries and cities we work with so far ** TEST DATA SO FAR **
const locations = {
  spain: ["ibiza", "marbella"],
  greece: ["zakynthos", "mykonos"],
  cyprus: ["ayia napa"],
};

type Props = {};

function Search({ }: Props) {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const router = useRouter();

  const handleSubmit = async (
    e: React.FormEvent,
    country: string,
    city: string,
    selectedDate: any
  ) => {
    e.preventDefault();

    // need to add pagination, selected event_types and date to string in future
    router.push(`/explore?country=${country}&city=${city}`);
  };

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderHeight(header.offsetHeight);
  }, []);

  return (
    <div
      className="px-4 md:w-5/6 md:mx-auto flex flex-col"
      style={{ height: `calc(100svh - ${headerHeight}px)` }}
    >
      <div>
        <h1 className="text-3xl font-black text-center mb-8 md:mb-20">
          We&apos;ve got you covered
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col gap-y-8 md:gap-y-4">
          {/* part 1 - select the country */}
          <div className="space-y-2">
            <h2 className={`${selectedCountry && 'text-base text-dark-gray'} text-center md:text-left transition-all duration-200`}>What country are you going to?</h2>
            <ul className="flex justify-center md:justify-normal gap-x-4">
              {Object.entries(locations).map(([country]) => (
                <li key={country}>
                  <button
                    className={`${selectedCountry === country && 'bg-dark-gray text-white'} px-4 py-2 shadow-md rounded-md`}
                    onClick={() => { setSelectedCountry(country); setSelectedCity(null) }}
                  >
                    <span>{country}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* part 2 - select the city */}
          {selectedCountry && (
            <div className="space-y-2">
              <h2 className={`${selectedCity && 'text-base text-dark-gray'} text-center md:text-left transition-all duration-200`}>And the city?</h2>
              <ul className="flex justify-center md:justify-normal gap-x-4">
                {locations[selectedCountry].map((city: string) => (
                  <li key={city}>
                    <button
                      className={`${selectedCity === city && 'bg-dark-gray text-white'} px-4 py-2 shadow-md rounded-md`}
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
            <div>
              <h2 className="text-center">Date Range Picker | To Be Added Soon</h2>
            </div>
          )}
        </div>
        <div className="relative hidden md:flex">
          <Image
            className="object-cover"
            src="/images/pages/home/pool-party-event.png"
            alt="Pool party event"
            fill
          />
        </div>
      </div>
    </div>
  );
}

export default Search;

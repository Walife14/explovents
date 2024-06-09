"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// components
import CountryCityDates from "../components/CountryCityDates/CountryCityDates";

// images
import arrows_graphic from "@/public/images/pages/home/arrows-graphic.svg";

type Props = {};

function Search({}: Props) {
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  const handleSubmit = async (
    e: React.FormEvent,
    country: string,
    city: string,
    selectedDate: any
  ) => {
    e.preventDefault();

    console.log(country, city, selectedDate);
  };

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderHeight(header.offsetHeight);
  }, []);

  return (
    <div
      className="px-4 md:w-5/6 md:mx-auto flex flex-col justify-evenly relative transition-all overflow-hidden"
      style={{ height: `calc(100svh - ${headerHeight}px)` }}
    >
      <Image
        className="absolute top-0 right-0 opacity-20 md:opacity-50 -z-20 scale-125 md:scale-75 transition-all"
        src={arrows_graphic}
        alt="arrows graphic"
        layout="fill"
      />
      <div>
        <h1 className="text-3xl font-black text-center mb-20">
          We&apos;ve got you covered
        </h1>
        <CountryCityDates handleSubmit={handleSubmit} />
      </div>

      <div className="flex justify-evenly text-center font-semibold text-lg">
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Boat Parties
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Pool Parties
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Beach Parties
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Other Events
        </motion.span>
      </div>
    </div>
  );
}

export default Search;

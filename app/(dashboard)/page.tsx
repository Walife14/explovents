"use client";

import NumberedCard from "./NumberedCard";
import { motion } from "framer-motion";
import useWindowSize from "@hooks/useWindowSize";

// components
import Search from "./Search";
import LinkBtn from "@components/LinkBtn/LinkBtn"

type Props = {};

function Home({}: Props) {
  const windowSize = useWindowSize();

  return (
    <main>
      <Search />
      <div className="my-20 md:my-40">
        <h2 className="mb-20 font-bold text-3xl md:w-3/6 mx-4 md:mx-auto">
          DISCOVER YOUR NEXT MOTIVE{" "}
          <span className="text-primary block text-right">
            EXPLOVENTS HAS GOT YOU COVERED
          </span>
        </h2>
        <motion.div className="md:w-5/6 mx-4 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <NumberedCard
            number={1}
            title={"Find Your Vibes"}
            text={
              "Search for the perfect motive using our intuitive search feature. Whether it's a beach bash or a nightclub rave, we've got the vibes you're looking for."
            }
          />
          <NumberedCard
            number={2}
            title={"Lock in the Fun"}
            text={
              "Book your spot hassle-free with just a few taps. No queues, no stress - just easy-peasy booking to secure your place at the hottest events wherever you are."
            }
          />
          <NumberedCard
            number={3}
            title={"Flash Your Ticket"}
            text={
              "Display your digital ticket on the app and breeze through the entrance like a VIP. No paper tickets, no fuss - just flash and party on!"
            }
          />
          <NumberedCard
            number={4}
            title={"Live Your Best Life"}
            text={`It's showtime! Dive into the electrifying atmosphere and create unforgettable memories at your chosen event. Let loose, dance like nobody's watching, and soak up every moment of the PARTY experience.`}
          />
        </motion.div>
      </div>
      <div className="my-20 md:my-40 flex flex-col items-center justify-center">
        <h2 className="font-bold mb-4 text-center mx-4 md:mx-auto">
          Want to make unforgettable experiences?
        </h2>
        <LinkBtn text={"Discover Events"} href={"/explore"} />
      </div>
    </main>
  );
}

export default Home;

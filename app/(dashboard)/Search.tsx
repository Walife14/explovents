"use client"

import { motion } from "framer-motion"

// components
import Button from "@components/Button/Button"
import AnimatedBubble from "./AnimatedBubble"

type Props = {}

function Search({ }: Props) {
    return (
        <div className="w-5/6 mx-auto space-y-10 relative mt-40">
            <AnimatedBubble color={'triary-light'} delay={0} position={'top-[5%] -left-[5%]'} />
            <AnimatedBubble color={'triary-light'} delay={0} position={'-top-[5%] left-[10%]'} />
            <AnimatedBubble color={'triary-light'} delay={0} position={'-top-[5%] left-[25%]'} />
            <AnimatedBubble color={'triary-light'} delay={0} position={'top-[50%] left-[25%]'} />
            <AnimatedBubble color={'triary-light'} delay={0} position={'-top-[5%] left-[40%]'} />
            <AnimatedBubble color={'secondary-light'} delay={0} position={'top-[50%] left-[40%]'} />
            <AnimatedBubble color={'triary-light'} delay={0} position={'-top-[5%] right-[25%]'} />
            <AnimatedBubble color={'triary-light'} delay={0} position={'top-[50%] right-[25%]'} />
            <AnimatedBubble color={'triary-light'} delay={0} position={'-top-[5%] right-[10%]'} />
            <AnimatedBubble color={'triary-light'} delay={0} position={'top-[5%] -right-[5%]'} />
            <h1 className="text-3xl font-black text-center">We've got you covered</h1>
            <form>
                <div className="flex gap-x-1 p-1 bg-triary-light text-2xl rounded-md">
                    <label htmlFor="countryInput" hidden>Select Country</label>
                    <input
                        className="p-2 placeholder:text-dark-gray flex-1 rounded-md"
                        id="countryInput"
                        type="text"
                        placeholder="Country"
                    />
                    <label htmlFor="cityInput" hidden>Select City</label>
                    <input
                        className="p-2 placeholder:text-dark-gray flex-1 rounded-md"
                        id="cityInput"
                        type="text"
                        placeholder="City"
                    />
                    <label htmlFor="dateInput" hidden>Select Date(s)</label>
                    <input
                        className="p-2 placeholder:text-dark-gray flex-1 rounded-md"
                        id="dateInput"
                        type="date"
                        placeholder="Date"
                    />
                </div>
                <div className="w-72 mx-auto mt-10">
                    <Button text="Search" type="submit" largeText={true} nonFullWidth={true} />
                </div>
            </form>
        </div>
    )
}

export default Search
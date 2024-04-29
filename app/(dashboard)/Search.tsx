"use client"

import { motion } from "framer-motion"

// components
import Button from "@components/Button/Button"
import AnimatedBubble from "./AnimatedBubble"
import { useState } from "react"

type Props = {}

function Search({ }: Props) {
    const [country, setCountry] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [selectedDate, setSelectedDate] = useState(getTodaysDate())

    function getTodaysDate() {
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth() + 1
        const day = today.getDate()
        return `${year}-${month < 10 ? '0' + month : month}-${day}`
    }

    const handleSubmit = (e: React.FormEvent, country: string, city: string, selectedDate: any) => {
        e.preventDefault()

        console.log(country, city, date)
    }

    return (
        <div className="w-5/6 mx-auto space-y-10 relative mt-40">
            <AnimatedBubble color={'triary-light'} delay={0} position={'top-[5%] -left-[5%]'} />
            <AnimatedBubble color={'triary-light'} delay={0.25} position={'-top-[5%] left-[10%]'} />
            <AnimatedBubble color={'triary-light'} delay={1} position={'-top-[5%] left-[25%]'} />
            <AnimatedBubble color={'triary-light'} delay={0.75} position={'top-[50%] left-[25%]'} />
            <AnimatedBubble color={'triary-light'} delay={0.25} position={'-top-[5%] left-[40%]'} />
            <AnimatedBubble color={'secondary-light'} delay={1} position={'top-[50%] left-[40%]'} />
            <AnimatedBubble color={'triary-light'} delay={0.2} position={'-top-[5%] right-[25%]'} />
            <AnimatedBubble color={'triary-light'} delay={0.6} position={'top-[50%] right-[25%]'} />
            <AnimatedBubble color={'triary-light'} delay={0.4} position={'-top-[5%] right-[10%]'} />
            <AnimatedBubble color={'triary-light'} delay={0.8} position={'top-[5%] -right-[5%]'} />
            <h1 className="text-3xl font-black text-center">We've got you covered</h1>
            <form onSubmit={(e) => handleSubmit(e, country, city, selectedDate)}>
                <div className="flex gap-x-1 p-1 bg-secondary text-2xl rounded-md">
                    <div className="flex-1 flex">
                        <label htmlFor="countryInput" hidden>Select Country</label>
                        <div className="h-auto aspect-square rounded-l-md bg-white">
                            <svg className="h-full p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                            </svg>
                        </div>
                        <input
                            className="p-2 placeholder:text-dark-gray flex-1 rounded-r-md"
                            id="countryInput"
                            type="text"
                            placeholder="Country"
                            onChange={(e) => setCountry(e.target.value)}
                            value={country}
                        />
                    </div>
                    <div className="flex-1 flex">
                        <label htmlFor="cityInput" hidden>Select City</label>
                        <div className="h-auto aspect-square rounded-l-md bg-white">
                            <svg className="h-full p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>
                        <input
                            className="p-2 placeholder:text-dark-gray flex-1 rounded-r-md"
                            id="cityInput"
                            type="text"
                            placeholder="City"
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                        />
                    </div>
                    <div className="flex-1 flex">
                        <label htmlFor="dateInput" hidden>Select Date(s)</label>
                        <div className="h-auto aspect-square rounded-l-md bg-white">
                            <svg className="h-full p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                        </div>
                        <input
                            className="p-2 placeholder:text-dark-gray flex-1 rounded-r-md"
                            id="dateInput"
                            type="date"
                            placeholder="Date"
                            onChange={(e) => setSelectedDate(e.target.value)}
                            value={selectedDate}
                        />
                    </div>
                </div>
                <div className="w-72 mx-auto mt-10">
                    <Button text="Search" type="button" largeText={true} nonFullWidth={true} />
                </div>
            </form>
        </div>
    )
}

export default Search
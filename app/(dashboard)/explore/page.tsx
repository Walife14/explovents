"use client"

import CountryCityDates from '@/app/components/CountryCityDates/CountryCityDates'
import React, { useEffect, useState } from 'react'

// components
import EventCard from './EventCard'

type Props = {}

function Explore({ }: Props) {
    const [headerHeight, setHeaderHeight] = useState(0)

    useEffect(() => {
        const header = document.querySelector('#header')
        if (header) {
            setHeaderHeight(header.clientHeight)
        }
    }, [])

    const handleSubmit = (
        e: React.FormEvent, country: string,
        city: string, selectedDate: any,
        boatPartyEventChecked: boolean, poolPartyEventChecked: boolean,
        beachPartyEventChecked: boolean, otherPartyEventChecked: boolean
    ) => {
        e.preventDefault()

        console.log(country, city, selectedDate, boatPartyEventChecked, poolPartyEventChecked, beachPartyEventChecked, otherPartyEventChecked)
    }

    return (
        <main>
            {headerHeight !== 0 ? (
                <div style={{ marginTop: `${headerHeight}px` }} className={`w-5/6 mx-auto`}>
                    <CountryCityDates handleSubmit={handleSubmit} btnText="Update" includeEventTypes={true} />
                    <h2 className='text-lg font-bold text-center'>
                        Here are the events we found in <span className='text-primary underline'>Ayia Napa</span>, <span className='text-primary underline'>Cyprus</span> between the dates <span className='text-primary underline'>27 May - 29 May</span>
                    </h2>
                    {[1, 2, 3, 4].map((index) => (
                        <EventCard
                            key={index}
                            title={'Fantasy Boat Party'}
                            description={'Join us aboard the Fantasy Boat Party for an electrifying voyage filled with music, dancing, and endless drinks against the backdrop of the open sea.'} price={60}
                        />
                    ))}
                </div>
            ) : null}
        </main>
    )
}

export default Explore
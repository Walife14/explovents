"use client"

import CountryCityDates from '@/app/components/CountryCityDates/CountryCityDates'

// components
import EventCard from '@components/EventCard/EventCard'
import Button from '@components/Button/Button'

type Props = {}

function Explore({ }: Props) {

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
            <div className={`mx-4 md:w-5/6 md:mx-auto`}>
                <CountryCityDates handleSubmit={handleSubmit} btnText="Update" includeEventTypes={true} />
                <h2 className='text-lg font-bold text-center'>
                    Events in <span className='text-primary underline'>Ayia Napa</span>, <span className='text-primary underline'>Cyprus</span> within <span className='text-primary underline'>27 May - 29 May</span>
                </h2>
                {[1, 2, 3, 4].map((index) => (
                    <EventCard
                        key={index}
                        title={'Fantasy Boat Party'}
                        description={'Join us aboard the Fantasy Boat Party for an electrifying voyage filled with music, dancing, and endless drinks against the backdrop of the open sea.'} price={60}
                        darkbg={index % 2 === 0}
                        url={'/event/1'}
                    />
                ))}
                <div className='flex justify-center my-8'>
                    <Button text={'Show more'} nonFullWidth={true} />
                    {/* Button -> once clicked loads 8 more events from the database and then causes the refresh of the mapping of event cards with data (Possibly use useEffect to listen to changes to "eventsList"? the mapping goes through eventsList)*/}
                </div>
            </div>
        </main>
    )
}

export default Explore
import React, { useEffect, useState } from 'react'

// interfaces
import { IEventDate } from '@/app/interfaces/IEventDate';

type Props = {
    id: string;
    onDateSelect: (date: IEventDate) => void;
}

function AvailableEventDates({ id, onDateSelect }: Props) {
    const [eventDates, setEventDates] = useState<IEventDate[] | []>([])
    const [selectedDate, setSelecetedDate] = useState<number | null>(null)


    useEffect(() => {
        const fetchEventDates = async () => {
            try {
                const res = await fetch(`/api/events/${id}/dates`, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json"
                    }
                });

                const json = await res.json()

                if (!res.ok) {
                    throw new Error("Failed to grab the dates available for the event.")
                }

                if (json) {
                    setEventDates(json)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchEventDates()
    }, [id])

    return (
        <ul className='flex gap-x-4'>
            {eventDates.length > 0 ?
                eventDates.map((e: IEventDate) => (
                    <li key={e.id}>
                        <button
                            className={`${selectedDate === e.id && 'bg-dark-gray text-white'} border border-dark-gray px-4 py-2 shadow-md rounded-md flex flex-col`}
                            disabled={e.tickets_sold === e.tickets_available}
                            onClick={() => { setSelecetedDate(e.id); onDateSelect(e) }}
                            type="button"
                        >
                            <span className='text-nowrap'>{e.date.split('-')[2]}/{e.date.split('-')[1]}/{e.date.split('-')[0]}</span>
                            {/* Need to add a check to make sure that if for example only 2 tickets are available
                                The user then shouldn't be able to buy 3 tickets */}
                            <span>{e.tickets_available >= 1 ? 'Available' : 'Unavailable'}</span>
                        </button>
                    </li>
                )) :
                    <li>
                        Could not find any available event dates
                    </li>
                }
        </ul>
    )
}

export default AvailableEventDates
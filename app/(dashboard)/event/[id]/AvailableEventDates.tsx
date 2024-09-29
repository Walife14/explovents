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
            {eventDates.map((e: IEventDate) => (
                <li key={e.id}>
                    <button
                        className={`flex flex-col items-center px-2 py-4 gap-y-2 h-full w-full border-2 rounded-xl border-green-500
                            disabled:bg-dark-gray/50 disabled:border-dark-gray/50 disabled:text-white
                            ${selectedDate === e.id && 'bg-green-500 text-white'}`
                        }
                        disabled={e.tickets_sold === e.tickets_available}
                        onClick={() => {setSelecetedDate(e.id); onDateSelect(e)}}
                        type="button"
                    >
                        <span className='text-nowrap'>{e.date.split('-')[2]}/{e.date.split('-')[1]}/{e.date.split('-')[0]}</span>
                        <span>{e.tickets_sold < e.tickets_available ? 'Available' : 'Unavailable' }</span>
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default AvailableEventDates
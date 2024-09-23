"use client"

import { IEvent } from "@/app/interfaces/IEvent";
import { useEffect, useState } from "react";

type Props = {
    id: number;
}

function SaveEventBtn({ id }: Props) {
    const [isEventSaved, setIsEventSaved] = useState<boolean>(false)
    const givenId = id.toString()

    const toggleSaveEvent = async () => {
        try {
            const res = await fetch('/api/events/save', {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: givenId })
            })

            if (res) {
                setIsEventSaved(!isEventSaved)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // func to get current user and to check whether or not they already saved the current event
        const checkIfAlreadySaved = async () => {
            const res = await fetch('/api/events/save', {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })

            if (!res.ok) {
                console.log("Failed to fetch saved events:", res.statusText)
                return
            }

            const json = await res.json()

            if (json) {
                json.forEach((savedEvents: IEvent) => {
                    if (savedEvents.id === id) {
                        setIsEventSaved(true)
                        return
                    }
                })
            }
        }
        
        checkIfAlreadySaved()
    }, [id])

    return (
        <button className="flex flex-col items-center gap-y-1" onClick={toggleSaveEvent}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${isEventSaved && 'fill-primary stroke-primary'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            {isEventSaved ? 'UNSAVE' : 'SAVE'}
        </button>
    )
}

export default SaveEventBtn
"use client"

import Image from 'next/image'
import Calendar from 'react-calendar'
import { useState } from 'react'
import Link from 'next/link'

// components
import ImageGallery from '@components/ImageGallery/ImageGallery'

// images
import IMG_Group_At_Boat_Party from '@/public/images/boat-party-with-drinks.jpg'
import IMG_1 from '@/public/images/pages/event/image-1.jpg'
import IMG_2 from '@/public/images/pages/event/image-2.jpg'
import IMG_3 from '@/public/images/pages/event/image-3.jpg'
import IMG_4 from '@/public/images/pages/event/image-4.jpg'

type Props = {
    params: { id: string }
}

interface Event {
    title: string;
    headerImgUrl: any;
    locationPlace: string;
    locationRoad: string;
    locationPostCode: string;
    Country: string;
}

function Event({ params }: Props) {
    const [date, setDate] = useState<Date>(new Date())
    const [nOfTickets, setNOfTickets] = useState<number>(1)
    const [isOpen, setIsOpen] = useState(false);

    const tempImageArray = [1, 2, 3, 4]

    const images = [
        IMG_Group_At_Boat_Party, IMG_1, IMG_2, IMG_3, IMG_4
    ]

    const eventObj: Event = {
        title: 'Castle Club Boat Party',
        headerImgUrl: IMG_Group_At_Boat_Party,
        locationPlace: 'Sunset Pier, Ayia Napa Harbor',
        locationRoad: '28 Kyrou Nerou Avenue',
        locationPostCode: 'Ayia Napa, 5330',
        Country: 'Cyprus'
    }

    function customDate(date: string) {
        // split the date by spaces returning an array of words
        let parts = date.split(' ')
        // remove the first word of the date (e.g. "Fri")
        parts.shift()
        // return the array words joined together adding a space in-between
        return parts.join(' ')
    }

    const openGallery = () => {
        setIsOpen(true)
    }
    const closeGallery = () => {
        setIsOpen(false)
    }

    return (
        <main className='mx-4 md:w-5/6 md:mx-auto'>
            <div className='mx-auto relative h-32 md:h-60 flex items-center overflow-hidden'>
                <Image
                    className='bg-cover w-full h-auto'
                    src={eventObj.headerImgUrl}
                    alt={'Boat party of ' + eventObj.title + ' event.'}
                    quality={100}
                    priority
                />
            </div>
            <h1 className='text-primary my-8'>{eventObj.title.toUpperCase()}</h1>
            <div className='grid grid-cols-2 gap-x-8 md:my-20'>
                <div className='col-span-2 md:col-span-1 flex justify-center items-center' id="calendar_container">
                    <Calendar
                        minDate={new Date()}
                        onClickDay={(e) => setDate(e)}
                        value={date}
                        maxDetail='month'
                    />
                </div>
                <div className='col-span-2 md:col-span-1 mt-8'>
                    <h2 className='text-3xl font-bold text-center mb-10'>
                        <span className=''>Currently selected</span>
                        <br />
                        <span className='text-primary underline'>{customDate(date.toDateString())}</span>
                    </h2>

                    <h2 className='text-lg font-bold'>When?</h2>
                    <p>The event is on May 17th, starting at 4:00 PM.</p>
                    <h2 className='text-lg font-bold'>More info?</h2>
                    <p>After purchasing your ticket, expect to receive an email within the next 5 minutes. This email will contain your ticket and provide you with essential details about the event, including venue directions and any additional information you may need.</p>

                    <div className='border border-dark-gray flex rounded-md font-bold mt-20'>
                        <div className='flex items-center justify-center basis-3/4 py-2 px-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <span className='text-center flex-1'>N. of tickets</span>
                        </div>
                        <div className='basis-1/4 text-center border-l border-dark-gray py-2 px-4'>
                            <span className='text-3xl'>{nOfTickets}</span>
                        </div>
                    </div>
                    <Link className='text-white bg-secondary font-bold block text-center py-4 rounded-md mt-4 text-lg' href="/">CONFIRM</Link>
                </div>
            </div>
            <div className='my-20'>
                <h2 className='text-3xl text-primary font-bold'>Gallery</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-8'>
                    {tempImageArray.map((img, index) => (
                        <div key={index} className='aspect-square bg-blue-500 rounded-md overflow-hidden relative'>
                            <Image
                                className={`h-full object-cover ${index === tempImageArray.length - 1 ? 'filter brightness-75' : ''}`}
                                src={images[index]}
                                alt="test-image"
                            ></Image>
                            {index === tempImageArray.length - 1 ? (
                                <button
                                    onClick={openGallery}
                                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold border-2 text-lg border-white rounded-md p-10'
                                >View More</button>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
            <ImageGallery isOpen={isOpen} onClose={closeGallery} images={images} />
        </main>
    )
}

export default Event
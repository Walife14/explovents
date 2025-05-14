import Link from 'next/link'
import React from 'react'

// components
import LinkBtn from '@/app/components/LinkBtn/LinkBtn'

// icons
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'

type Props = {}

function page({ }: Props) {
    return (
        <>
            <div className='px-4 md:w-5/6 md:mx-auto'>
                <h1 className='text-center mb-4'>Welcome to the Explovents
                    <br />Organiser Hub
                </h1>

                <div>
                    <h2 className='mb-4'>Interested in hosting events with Explovents?</h2>
                    <div className='flex flex-col items-center gap-y-2 text-white p-4 bg-[#16397A]'>
                        <h3>
                            Get everything you need to run successful events in one place
                        </h3>

                        <ul className='pl-5 space-y-1 text-center'>
                            <li>
                                Advertise to thousands of potential attendees
                            </li>
                            <li>Track ticket sales in real-time</li>
                            <li>Manage bookings effortlessly</li>
                            <li>Access powerful analytics</li>
                        </ul>
                    </div>
                    <ChevronDoubleDownIcon className='size-6 my-4 mx-auto'></ChevronDoubleDownIcon>
                    <div className='flex flex-col items-center gap-y-2'>
                        <LinkBtn text={'Get Started'} href='/organiser/register'></LinkBtn>
                        <span className='flex gap-x-2'>Already an organiser? <Link className='underline' href='/organiser/login'>Log in</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
import LinkBtn from '@/app/components/LinkBtn/LinkBtn'
import React from 'react'

// components

type Props = {}

function page({ }: Props) {
    return (
        <>
            <div className='px-4'>
                <h1 className='text-center'>Welcome to Explovents Organiser Hub</h1>

                <div className='flex flex-col gap-y-2 my-10'>
                    <LinkBtn text={'Apply for Organiser Account'} textxl={true} href='/organiser/register'></LinkBtn>
                    <LinkBtn text={'Login to Organiser Account'} href='/organiser/login' textxl transparent></LinkBtn>
                </div>

                <div>
                    <h2 className='mb-4'>Why should I register for an organiser account?</h2>
                    <div className='flex flex-col gap-y-2'>
                        <p>
                            By creating an organiser account on Explovents, you'll unlock the tools needed to manage your events effortlessly.
                            From promoting events and tracking ticket sales to engaging with attendees, our platform provides everything you need to run successful events.
                        </p>
                        <p>
                            Gain access to real-time analytics, streamline bookings, and showcase your brand to a wide audience.
                            Get started today and watch your events thrive!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
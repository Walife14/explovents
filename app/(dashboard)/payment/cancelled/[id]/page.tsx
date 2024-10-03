import React from 'react'
import Link from 'next/link';

type Props = {
    params: { id: string };
}

async function getEventById(eventId: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/${eventId}`, {
        method: 'GET',
    })

    return response.json()
}

export default async function page({ params }: any) {
    const [event] = await getEventById(params.id)

    return (
        <main>
            <h1 className='mx-4 text-center'>You have cancelled the payment for the event {event.title}</h1>

            <section className='mx-4 my-10'>
                <h2 className='mb-4'>Made a mistake and want to try and book again?</h2>
                <p>If you&apos;d like to rebook for the same event, you can easily <Link className='underline text-blue-500' href={`/event/${event.id}`}>click here</Link> to visit the {event.title} page.</p>
            </section>

            <section className='mx-4 my-10'>
                <h2 className='mb-4'>Perhaps you would like to browse other events?</h2>
                <p>If you&apos;d like to explore other events on our platform then <Link className='underline text-blue-500' href={`/explore`}>click here</Link> to browse through events.</p>
            </section>

            <section className='mx-4 my-10'>
                <h2 className='mb-4'>Do you believe there was a mistake in your payment being cancelled?</h2>
                <p>If you believe there was a mistake in your payment being cancelled, please try again or <Link className='underline text-blue-500' href={`/faq`}>click here</Link> to get in touch or find help.</p>
            </section>
        </main>
    )
}
import React from 'react'
import Link from 'next/link'

type Props = {}

export default function FAQ({ }: Props) {
    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <p>At Explovents we believe that you should have all the details you need of what you&apos;re using. Below you can find common questions our customers have had.</p>
            <p>If the information you need is not listed here, feel free to <Link className='underline' href="/faq#contact" target='_blank'>fill out a form with your question</Link>.</p>
            <div className='grid grid-cols-3 gap-8 m-8'>
                <div className='flex flex-col gap-y-4'>
                    <h2 className='text-[#16397A] text-center'>Event Management</h2>
                    <ul className='flex flex-col gap-y-4'>
                        <li>
                            <Link href='#'>How do I edit event details after publishing?</Link>
                        </li>
                        <li>
                            <Link href='#'>How do I unpublish or cancel an event?</Link>
                        </li>
                        <li>
                            <Link href='#'>How do I set different ticket tiers (e.g . Early Bird, VIP)?</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <h2 className='text-[#16397A] text-center'>Ticketing &#38; Sales</h2>
                    <ul className='flex flex-col gap-y-4'>
                        <li>
                            <Link href='#'>How do I set ticket prices and limits?</Link>
                        </li>
                        <li>
                            <Link href='#'>Where can I see ticket sales and revenue breakdown?</Link>
                        </li>
                        <li>
                            <Link href='#'>How do I refund a ticket?</Link>
                        </li>
                        <li>
                            <Link href='#'>Can I limit the number of tickets someone can buy?</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <h2 className='text-[#16397A] text-center'>Ticketing &#38; Sales</h2>
                    <ul className='flex flex-col gap-y-4'>
                        <li>
                            <Link href='#'>When do I receive payment for my event?</Link>
                        </li>
                        <li>
                            <Link href='#'>How do I setup my bank account for payouts?</Link>
                        </li>
                        <li>
                            <Link href='#'>Where can I find a breakdown of fees and charges?</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <h2 className='text-[#16397A] text-center'>Payment &#38; Payouts</h2>
                    <ul className='flex flex-col gap-y-4'>
                        <li>
                            <Link href='#'>When do I receive payment for my event?</Link>
                        </li>
                        <li>
                            <Link href='#'>How do I setup my bank account for payouts?</Link>
                        </li>
                        <li>
                            <Link href='#'>Where can I find a breakdown of fees and charges?</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <h2 className='text-[#16397A] text-center'>Promotion &#38; Visibility</h2>
                    <ul className='flex flex-col gap-y-4'>
                        <li>
                            <Link href='#'>How can I boost visibility for my event on Explovents?</Link>
                        </li>
                        <li>
                            <Link href='#'>Can I add social media or website links to my event listing?</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <h2 className='text-[#16397A] text-center'>Admin &#38; Settings</h2>
                    <ul className='flex flex-col gap-y-4'>
                        <li>
                            <Link href='#'>How do I update my organiser profile or company name?</Link>
                        </li>
                        <li>
                            <Link href='#'>Can I add team members to help manage my events?</Link>
                        </li>
                        <li>
                            <Link href='#'>How do I delete my organiser account?</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <h2 className='text-[#16397A] text-center'>On The Day of the Event</h2>
                    <ul className='flex flex-col gap-y-4'>
                        <li>
                            <Link href='#'>How do I check in attendees at the event?</Link>
                        </li>
                        <li>
                            <Link href='#'>Can I scan QR codes using my phone?</Link>
                        </li>
                        <li>
                            <Link href='#'>What should I do if a ticket doesn&apos;t scan properly?</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
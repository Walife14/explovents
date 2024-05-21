"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
}

function MyAccount({ }: Props) {
    return (
        <main>
            <div className='mx-4 md:w-5/6 md:mx-auto'>
                <h1 className='text-primary text-center mb-10'>My Account</h1>
                <motion.div
                    className='flex flex-col md:flex-row justify-center gap-x-8 gap-y-4 mb-10'
                    animate={{
                        scale: [0.75, 1]
                    }}
                >
                    <Link href="/myaccount/saved" className='flex flex-col items-center border border-dark-gray p-4 rounded-md' aria-label="Link to saved events page">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        View saved events
                    </Link>
                    <Link href="#" className='flex flex-col items-center border border-dark-gray p-4 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        View booked events
                    </Link>
                </motion.div>
            </div>
        </main >
    )
}

export default MyAccount
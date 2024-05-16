"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

function Verify({ }: Props) {
    const router = useRouter()

    const [timer, setTimer] = useState(10)

    useEffect(() => {
        if (!timer) return

        let timeoutTimer = setTimeout(() => {
            router.push('/login')
        }, 10000)

        let intervalTimer = setInterval(() => {
            setTimer(timer - 1)
        }, 1000)

        return () => {
            clearInterval(intervalTimer)
            clearTimeout(timeoutTimer)
        }
    }, [timer, router])

    return (
        <main className="flex flex-col gap-y-4 w-2/5 mx-auto relative">
            <div>
                <div className="flex flex-col items-center">
                    <div className='p-4 ring-2 ring-primary rounded-3xl mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="aspect-square w-12 stroke-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    </div>

                    <h2 className='text-lg font-bold text-primary'>Thank you for registering</h2>
                </div>

                <h1 className="text-3xl font-bold text-center text-primary my-8">Please verify your email</h1>
                <p className="text-dark-gray mb-4">Remember to verify your email address. If you don&apos;t see the verification email in your inbox, please check your spam folder.</p>
                <p className="text-dark-gray">Verifying your email ensures seamless access to purchasing event tickets!</p>

                <div className='flex flex-col items-center my-10'>
                    <span>Redirecting in...</span>
                    <span className='text-primary-dark text-3xl font-bold'>{timer}</span>
                </div>
            </div>
        </main>
    )
}

export default Verify
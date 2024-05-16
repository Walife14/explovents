"use client"

import { useState } from "react"

// components
import Button from "@/app/components/Button/Button"
import BackBtn from "@/app/components/BackBtn/BackBtn"

type Props = {}

function ForgotPassword({ }: Props) {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent, email: string): void => {
        e.preventDefault()
        setError('')

        if (!isValidEmail(email)) {
            setError('Email is not valid!')
        } else {
            console.log(email)
        }
    }

    const isValidEmail = (email: string) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return emailRegex.test(email)
    }

    return (
        <main className="flex flex-col gap-y-4 mx-4 md:w-2/5 md:mx-auto mt-8 md:mt-0 relative">
            <BackBtn />
            <div>
                <div className="flex justify-center">
                    <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M78.25 20.125V9.5C78.25 4.80558 74.4445 1 69.75 1H10.25C5.55558 1 1.75 4.80558 1.75 9.5V30.75C1.75 35.4445 5.55558 39.25 10.25 39.25H35.2188M69.75 43.5V35C69.75 30.3055 65.9445 26.5 61.25 26.5C56.5555 26.5 52.75 30.3055 52.75 35V43.5M48.5 69H74C76.3473 69 78.25 67.0973 78.25 64.75V47.75C78.25 45.4027 76.3473 43.5 74 43.5H48.5C46.1527 43.5 44.25 45.4027 44.25 47.75V64.75C44.25 67.0973 46.1527 69 48.5 69Z" stroke="#FFA07A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.875 26.5C24.3958 26.5 27.25 23.6458 27.25 20.125C27.25 16.6042 24.3958 13.75 20.875 13.75C17.3542 13.75 14.5 16.6042 14.5 20.125C14.5 23.6458 17.3542 26.5 20.875 26.5Z" fill="#FFA07A" />
                        <path d="M40 26.5C43.5208 26.5 46.375 23.6458 46.375 20.125C46.375 16.6042 43.5208 13.75 40 13.75C36.4792 13.75 33.625 16.6042 33.625 20.125C33.625 23.6458 36.4792 26.5 40 26.5Z" fill="#FFA07A" />
                    </svg>
                </div>

                <h1 className="text-lg md:text-3xl font-bold text-center text-primary mt-8">Forgot your password?</h1>
                <p className="text-dark-gray py-8">Uh-oh! Looks like you&apos;ve forgotten your password. No worries! Just enter your email below, and we&apos;ll send you a link with instructions on how to reset it.</p>

                <form onSubmit={(e) => handleSubmit(e, email)}>
                    <label>
                        <span>Email Address</span>
                        <input
                            type="email"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </label>
                    <div className="w-2/5 mx-auto">
                        <Button
                            text="Send"
                            type="submit"
                        />
                    </div>
                    <div>
                        <p className="error">{error}</p>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default ForgotPassword
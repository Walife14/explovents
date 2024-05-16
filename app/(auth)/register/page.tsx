"use client"

import { useState } from "react"
import AuthForm from "../AuthForm"
import Link from "next/link"
import { signup } from "../actions"

type Props = {}

function Register({ }: Props) {
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent, email: string, password: string, confirmPassword: string) => {
        try {
            e.preventDefault()
            setError('')

            const formData = { email, password, confirmPassword }
            await signup(formData)

        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div>
            <AuthForm isRegister={true} handleSubmit={handleSubmit} />
            {error}
            <div className="mx-4 md:w-3/5 md:mx-auto">
                <p>Already have an account? <Link href="/login" className="font-bold underline">Click here to login</Link>.</p>
            </div>
        </div>
    )
}

export default Register
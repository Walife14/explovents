"use client"

import { useState } from "react"
import AuthForm from "../AuthForm"
import Link from "next/link"

type Props = {}

function Register({ }: Props) {
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent, email: string, password: string, confirmPassword: string) => {
        e.preventDefault()
        setError('')

        console.log(email, password, confirmPassword)
    }

    return (
        <div>
            <AuthForm isRegister={true} handleSubmit={handleSubmit} />
            <div className="w-3/5 mx-auto">
                <p>Already have an account? <Link href="/login" className="font-bold underline">Click here to login</Link>.</p>
            </div>
        </div>
    )
}

export default Register
"use client"

import { useState } from "react"
import AuthForm from "../AuthForm"
import Link from "next/link"
import { login } from "../actions"

type Props = {}

function Login({ }: Props) {
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent, email: string, password: string) => {
        try {
            e.preventDefault()
            setError('')

            const formData = { email, password }
            await login(formData)

        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div>
            <AuthForm isRegister={false} handleSubmit={handleSubmit} data-testid="auth-form" />
            {error}
            <div className="mx-4 md:w-3/5 md:mx-auto">
                <p>Don&#39;t have an account? <Link href="/register" className="font-bold underline">Click here to register</Link>.</p>
                <p>Forgot your password? <Link href="/forgot-password" className="font-bold underline">Click here</Link>.</p>
            </div>
        </div>
    )
}

export default Login
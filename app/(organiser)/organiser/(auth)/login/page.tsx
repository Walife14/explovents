'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

// actions
import { login } from '@/app/(auth)/actions'

// components
import Button from '@/app/components/Button/Button'

import woman_with_headphones_graphic from '@/public/images/pages/organiser/person-with-headphones.svg'

type Props = {}

function Login({ }: Props) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const credentials = {
                email: formData.email,
                password: formData.password
            }
            await login( credentials,  true)
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='mx-4 md:w-5/6 md:mx-auto md:grid md:grid-cols-2'>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-center my-4'>Login</h2>

                    {error && (
                        <div>
                            {error}
                        </div>
                    )}

                    <label>
                        <span>Email Address</span>
                        <input
                            type="email"
                            placeholder="Email Address"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            value={formData.email}
                            required
                        />
                    </label>
                    <label>
                        <span>Password</span>
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            value={formData.password}
                            required
                        />
                    </label>
                    <div className="w-full md:w-4/6 mx-auto">
                        <Button
                            type="submit"
                            text="Login"
                            disabled={loading}
                        ></Button>
                    </div>
                </form>
                <div className='flex flex-col gap-y-2 mt-8'>
                    <p>Don&apos;t have an organiser account? Click <Link className='underline font-bold' href="/organiser/register">here</Link> to apply for an organiser account.</p>
                    <p>Forgot your password? Click <Link className='underline font-bold' href="/organiser/forgot-password">here</Link>.</p>
                </div>
            </div>
            <Image className='w-full my-4' src={woman_with_headphones_graphic} alt={'Person with headphones illustration'} priority />
        </div>
    )
}

export default Login
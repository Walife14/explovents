"use client"

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

// components
import Button from '@/app/components/Button/Button'

import woman_with_headphones_graphic from '@/public/images/pages/organiser/person-with-headphones.svg'

type Props = {}

function Register({ }: Props) {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false)
            return
        }

        try {
            const response = await fetch('/api/organizer/register-organizer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Registration Failed')
            }

            // redirect user back to the home page
            // router.push('/organizer')
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
                    <h2 className='text-center my-4'>Register</h2>

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
                            id="email"
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
                            id="password"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            value={formData.password}
                            required
                        />
                    </label>
                    <label>
                        <span>Confirm Password</span>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            id="confirmPassword"
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            value={formData.confirmPassword}
                            required
                        />
                    </label>
                    <div className="w-full md:w-4/6 mx-auto">
                        <Button
                            type="submit"
                            text="Register"
                            disabled={loading}
                        ></Button>
                    </div>
                </form>
                <div className='flex flex-col gap-y-2 mt-8'>
                    <p>Already have an organiser account? Click <Link className='underline font-bold' href="/organiser/login">here</Link> to login.</p>
                </div>
            </div>

            <Image className='w-full my-4' src={woman_with_headphones_graphic} alt={'Person with headphones illustration'} priority />
        </div>
    )
}

export default Register
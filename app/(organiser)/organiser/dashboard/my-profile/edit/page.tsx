"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

// components
import Button from '@/app/components/Button/Button'

type Props = {}

export default function Edit({ }: Props) {
    const router = useRouter()
    const [formData, setFormData] = useState({
        company_name: ''
    })
    const [loading, setLoading] = useState<boolean>(false)


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {

            // do the checks here
            const res = await fetch('/api/organizer/edit-profile', {
                method: 'POST',
                body: JSON.stringify({ company_name: formData.company_name }),
                headers: { 'Content-Type': 'application/json' }
            })

            router.push('/organiser/dashboard/my-profile')
        } catch (err: any) {
            console.error("Error: ", err)
        } finally {
            setLoading(false)
        }
    }

    return (
            <form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
                <h1>Edit Your Profile</h1>

                <label>
                    <span>Company Name</span>
                    <input
                        type="text"
                        onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        value={formData.company_name}
                    />
                </label>

                <Button
                    type='submit'
                    text='Confirm Changes'
                    disabled={loading}
                ></Button>
            </form>
    )
}
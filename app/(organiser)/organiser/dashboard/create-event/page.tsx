"use client"

import React from 'react'

// components
import Button from '@/app/components/Button/Button'

type Props = {}

function page({ }: Props) {

    const handleSubmit = async() => {
        console.log("Form has been submitted")
    }

    return (
        <div className='px-4'>
            <h1 className='text-center'>Create Event</h1>
            <div className='flex gap-x-4 my-8'>
                <span className='text-3xl font-bold text-red-600'>!</span>
                <p>
                    Please note that after submitting your event details, your listing will go through a brief verification process. We will review your event for authenticity before making it visible to users. This helps ensure a safe and trustworthy experience for everyone.
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Event Title</span>
                    <input
                        type="text"
                        placeholder="Event Title"
                        required
                    />
                </label>
                <label>
                    <span>Description</span>
                    <textarea
                        placeholder="Describe your event"
                        required
                    ></textarea>
                </label>
                <label>
                    <span>Event Type</span>
                    <select
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                    >
                        <option value="" disabled selected>Select Event Type</option>
                        <option value="boat-party">Boat Party</option>
                        <option value="pool-party">Pool Party</option>
                        <option value="beach-party">Beach Party</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <label>
                    <span>Country</span>
                    <input
                        type="text"
                        placeholder="Country"
                        required
                    />
                </label>
                <label>
                    <span>City</span>
                    <input
                        type="text"
                        placeholder="City"
                        required
                    />
                </label>
                <label>
                    <span>Address</span>
                    <input
                        type="text"
                        placeholder="Event Address"
                        required
                    />
                </label>
                <label>
                    <span>Dress Code</span>
                    <input
                        type="text"
                        placeholder="Dress Code"
                    />
                </label>
                <label>
                    <span>Banner Image URL</span>
                    <input
                        type="url"
                        placeholder="Banner Image URL"
                        required
                    />
                </label>
                <label>
                    <span>Event Images (comma-separated URLs)</span>
                    <input
                        type="text"
                        placeholder="Image URLs"
                    />
                </label>
                <div className="w-full md:w-4/6 mx-auto">
                    <Button
                        type="submit"
                        text="Create Event"
                    />
                </div>
            </form>

        </div>
    )
}

export default page
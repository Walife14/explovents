"use client"

import React, { useEffect, useState } from 'react'

type Props = {}

export default function MyProfile({ }: Props) {
    const [user, setUser] = useState<{ id: string, email: string, role: string, company_name: string | null }>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch("/api/user", { credentials: "include" })
            const data = await res.json()
            setLoading(true)

            if (res.ok) {
                setUser(data)
                console.log(data)

                // if the user is not an organizer -- in the future reroute them to the process to make them an organizer?
                if (data.role !== 'organizer') {
                    console.log("this user is not an organizer!")
                }
                
                setLoading(false)
            } else {
                // no user, maybe send back to organiser landing
                setUser(null)
                setLoading(false)
            }
        }

        fetchUser()
    }, [])

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <h1>My Profile</h1>
            <ul>
                <li>
                    <span>Logged in as {user.email}</span>
                </li>
                <li>
                    <p>Company name: {user.company_name === null ? "It doesn't seem like you have a company name assigned!" : user.company_name}</p>
                </li>
            </ul>
        </div>
    )
}
"use client"

import CountryCityDates from '@/app/components/CountryCityDates/CountryCityDates'
import React, { useEffect, useState } from 'react'

type Props = {}

function Explore({ }: Props) {
    const [headerHeight, setHeaderHeight] = useState(0)

    useEffect(() => {
        const header = document.querySelector('#header')
        if (header) {
            setHeaderHeight(header.clientHeight)
        }
    }, [])

    const handleSubmit = (
        e: React.FormEvent, country: string,
        city: string, selectedDate: any,
        boatPartyEventChecked: boolean, poolPartyEventChecked: boolean,
        beachPartyEventChecked: boolean, otherPartyEventChecked: boolean
    ) => {
        e.preventDefault()

        console.log(country, city, selectedDate, boatPartyEventChecked, poolPartyEventChecked, beachPartyEventChecked, otherPartyEventChecked)
    }

    return (
        <main>
            {headerHeight !== 0 ? (
                <div style={{ marginTop: `${headerHeight}px` }} className={`w-5/6 mx-auto`}>
                    <CountryCityDates handleSubmit={handleSubmit} btnText="Update" includeEventTypes={true} />
                </div>
            ) : null}
        </main>
    )
}

export default Explore
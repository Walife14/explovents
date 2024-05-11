import Link from 'next/link'
import React from 'react'

type Props = {
}

function MyAccount({ }: Props) {
    return (
        <main>
            <div className='w-5/6 mx-auto'>
                <h1 className='text-primary text-center mb-10'>My Account</h1>
                <div>
                    <Link href="/myaccount/saved">View saved events</Link>
                    <Link href="/myaccount/booked">View booked events</Link>
                </div>
            </div>
        </main>
    )
}

export default MyAccount
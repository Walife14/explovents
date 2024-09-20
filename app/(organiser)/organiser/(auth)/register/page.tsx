import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

// components
import Button from '@/app/components/Button/Button'

import woman_with_headphones_graphic from '@/public/images/pages/organiser/person-with-headphones.svg'

type Props = {}

function page({ }: Props) {
    return (
        <div className='px-4'>
            <h2 className='text-center my-4'>Register</h2>

            <form>
                <label>
                    <span>Email Address</span>
                    <input
                        type="email"
                        placeholder="Email Address"
                        // onChange={(e) => setPassword(e.target.value)}
                        // value={password}
                        required
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input
                        type="password"
                        placeholder="Password"
                        // onChange={(e) => setPassword(e.target.value)}
                        // value={password}
                        required
                    />
                </label>
                <div className="w-full md:w-4/6 mx-auto">
                    <Button
                        type="submit"
                        text="Register"
                    ></Button>
                </div>
            </form>
            <div className='flex flex-col gap-y-2 mt-8'>
                <p>Already have an organiser account? Click <Link className='underline font-bold' href="/organiser/login">here</Link> to login.</p>
            </div>
            <Image className='w-full my-4' src={woman_with_headphones_graphic} alt={'Person with headphones illustration'} />
        </div>
    )
}

export default page
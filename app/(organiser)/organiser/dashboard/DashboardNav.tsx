import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// icons
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { HomeIcon } from '@heroicons/react/24/solid'
import { ListBulletIcon } from '@heroicons/react/24/solid'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { PlusIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function DashboardNav({ }: Props) {
    const [open, setOpen] = useState<boolean>(false)
    const pathname = usePathname()

    return (
        <div className='relative border-r-2 border-gray-200'>
            <button className='absolute top-4 right-0 translate-x-full bg-gray-200 rounded-r-lg py-4' onClick={() => setOpen(!open)}>
                <ChevronRightIcon className={`${open && 'rotate-180'} size-6 mx-auto`}></ChevronRightIcon>
            </button>
            <ul className={`flex flex-col gap-y-4 ${open ? 'px-8' : 'px-2'} whitespace-nowrap`}>
                <li>
                    <Link href="/organiser/dashboard" className="flex gap-x-4 items-center">
                        <HomeIcon className={`size-8 ${pathname === '/organiser/dashboard' ? 'text-black' : 'text-dark-gray'}`}></HomeIcon>
                        {open && (
                            <span>Home</span>
                        )}
                    </Link>
                </li>
                <li>
                    <Link href="/organiser/dashboard/create-event" className="flex gap-x-4 items-center">
                        <PlusIcon className={`size-8 ${pathname === '/organiser/dashboard/create-event' ? 'text-black' : 'text-dark-gray'}`}></PlusIcon>
                        {open && (
                            <span>Create Event</span>
                        )}
                    </Link>
                </li>
                <li>
                    <Link href="/organiser/dashboard/my-events" className="flex gap-x-4 items-center">
                        <ListBulletIcon className={`size-8 ${pathname === '/organiser/dashboard/my-events' ? 'text-black' : 'text-dark-gray'}`}></ListBulletIcon>
                        {open && (
                            <span>My Events</span>
                        )}
                    </Link>
                </li>
                <li>
                    <Link href="/organiser/dashboard/faq" className="flex gap-x-4 items-center">
                        <InformationCircleIcon className={`size-8 ${pathname === '/organiser/dashboard/faq' ? 'text-black' : 'text-dark-gray'}`}></InformationCircleIcon>
                        {open && (
                            <span>FAQ</span>
                        )}
                    </Link>
                </li>
                <li>
                    <Link href="/organiser/dashboard/my-profile" className="flex gap-x-4 items-center">
                        <UserCircleIcon className={`size-8 ${pathname === '/organiser/dashboard/my-profile' ? 'text-black' : 'text-dark-gray'}`}></UserCircleIcon>
                        {open && (
                            <span>My Profile</span>
                        )}
                    </Link>
                </li>
            </ul>
        </div>
    )
}
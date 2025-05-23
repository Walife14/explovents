import React from 'react'
import Link from 'next/link'

// icons
import { ChartPieIcon } from '@heroicons/react/24/solid'
import { ListBulletIcon } from '@heroicons/react/24/solid'
import { PlusIcon } from '@heroicons/react/24/solid'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

type Props = {}

const menuItems = [
    {
        href: '/organiser/dashboard/create-event',
        icon: PlusIcon,
        label: 'Create Event'
    },
    {
        href: '/organiser/dashboard/my-events',
        icon: ListBulletIcon,
        label: 'My Events'
    },
    {
        href: '/organiser/dashboard/financials',
        icon: ChartPieIcon,
        label: 'Financials'
    },
    {
        href: '/organiser/dashboard/faq',
        icon: QuestionMarkCircleIcon,
        label: 'FAQ'
    }
]

function Dashboard({ }: Props) {



    return (
        <div className='px-4'>
            <h1>Welcome back, <span className='text-primary'>Red Boat Party</span>!</h1>
            <ul className='flex gap-8 mt-4'>
                {menuItems.map(({ href, icon: Icon, label }) => (
                    <li key={label}>
                        <Link href={href}>
                            <div className="flex flex-col items-center gap-y-2 py-4 px-8 border border-dark-gray rounded-lg">
                                <Icon className='size-24 fill-dark-gray'></Icon>
                                <span>{label}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard
"use client"

import React, { useEffect, useState } from 'react'
import DashboardNav from './DashboardNav'

type Props = {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
    const [contentHeight, setContentHeight] = useState('100vh')

    useEffect(() => {
        const updateHeight = () => {
            const header = document.querySelector('header') as HTMLElement | null
            const headerHeight = header?.offsetHeight || 0
            setContentHeight(`calc(100vh - ${headerHeight}px)`)
        }

        updateHeight()
        window.addEventListener('resize', updateHeight)

        return () => {
            window.removeEventListener('resize', updateHeight)
        }
    }, [])

    return (
        <div className='flex' style={{ height: contentHeight }}>
            <DashboardNav></DashboardNav>
            <div className='px-8 overflow-y-auto flex-1'>
                {children}
            </div>
        </div>
    )
}
import React from 'react'

// components
import LinkBtn from '@/app/components/LinkBtn/LinkBtn'

type Props = {}

function page({}: Props) {
  return (
    <div className='px-4'>
        <h1>Welcome back, Red Boat Party!</h1>
        {/* <ul className='my-4 flex flex-col gap-y-4'>
            <li>
                <LinkBtn text={'My Events'} href={'dashboard/my-events'}></LinkBtn>
            </li>
            <li>
                <LinkBtn text={'Create Event'} href={'dashboard/create-event'}></LinkBtn>
            </li>
            <li>
                <LinkBtn text={'Financials'} href={'#'} disabled></LinkBtn>
            </li>
            <li>
                <LinkBtn text={'Manage Account'} href={'dashboard/manage-account'}></LinkBtn>
            </li>
            <li>
                <LinkBtn text={'Help/Resources'} href={'dashboard/help'}></LinkBtn>
            </li>
        </ul> */}
    </div>
  )
}

export default page
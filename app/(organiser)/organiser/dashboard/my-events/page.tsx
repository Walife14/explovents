import LinkBtn from '@/app/components/LinkBtn/LinkBtn'
import React from 'react'

type Props = {}

function page({ }: Props) {
    return (
        <div className='px-4'>
            <h1 className='text-center'>Your Events</h1>
            <div className='flex flex-col gap-y-4 my-8'>
                <div>
                    <div className='bg-dark-gray/10 rounded-md p-4'>
                        <h2>Red Boat Party</h2>
                        <div>
                            <p>Status: <span className='font-semibold text-green-600'>Active</span></p>
                        </div>
                    </div>
                    {/* <div className='grid grid-cols-2 gap-y-2 gap-x-4 py-2'>
                        <LinkBtn text={'Edit'} href={'/'}></LinkBtn>
                        <LinkBtn text={'View'} href={'/'} transparent></LinkBtn>
                        <div className='col-span-2'>
                            <LinkBtn text={'Analytics'} href={'/'} disabled></LinkBtn>
                        </div>
                    </div> */}
                </div>

                <div>
                    <div className='bg-dark-gray/10 rounded-md p-4'>
                        <h2>Blue Pool Party</h2>
                        <div>
                            <p>Status: <span className='font-semibold text-red-600'>Inactive</span></p>
                        </div>
                    </div>
                    {/* <div className='grid grid-cols-2 gap-x-4 gap-y-2 py-2'>
                        <LinkBtn text={'Edit'} href={'/'}></LinkBtn>
                        <LinkBtn text={'View'} href={'/'} transparent></LinkBtn>
                        <div className='col-span-2'>
                            <LinkBtn text={'Analytics'} href={'/'} disabled></LinkBtn>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default page
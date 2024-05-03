import React, { useState } from 'react'

type Props = {
    title: string;
    text: string;
}

function FAQItem({ title, text }: Props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='w-2/4 mx-auto pt-4 pb-1 border-b border-dark-gray'>
            <button className='w-full' onClick={() => setIsOpen(!isOpen)}>
                <div className='flex justify-between'>
                    <h3 className={`${isOpen ? 'text-black' : 'text-dark-gray'} font-bold text-lg`}>{title}</h3>
                    <div className='flex flex-col justify-center'>
                        <svg className={`w-6 h-6 ${isOpen ? 'stroke-black' : 'stroke-dark-gray'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                </div>
                {isOpen && (
                    <p className='text-left p-2'>
                        {text}
                    </p>
                )}

            </button>
        </div>
    )
}

export default FAQItem
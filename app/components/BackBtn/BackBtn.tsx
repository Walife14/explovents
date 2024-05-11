"use client"

import { useRouter } from 'next/navigation'

type Props = {}

function BackBtn({ }: Props) {
    const router = useRouter()

    return (
        <div className="absolute top-0 left-0">
            <button
                className="flex gap-x-2"
                type="button"
                onClick={() => router.back()}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 7M1 7L7 1M1 7H13C14.5913 7 16.1174 7.63214 17.2426 8.75736C18.3679 9.88258 19 11.4087 19 13C19 14.5913 18.3679 16.1174 17.2426 17.2426C16.1174 18.3679 14.5913 19 13 19H10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-semibold">back</span>
            </button>
        </div>
    )
}

export default BackBtn
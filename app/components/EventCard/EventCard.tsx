import Image from 'next/image'

// images
import IMG_Boatparty from '@/public/images/boat-party.avif'
import Link from 'next/link';

type Props = {
    title: string;
    description: string;
    price: number;
}

function EventCard({ title, description, price }: Props) {
    return (
        <Link href="#">
            <div className="grid grid-cols-12 my-8">
                <Image className='h-auto col-span-3' src={IMG_Boatparty} width={5000} alt={`${title}`} quality={100} priority />
                <div className='col-span-8 p-2 flex flex-col gap-y-2'>
                    <h2 className='text-3xl font-bold text-primary'>{title}</h2>
                    <span className='text-3xl font-bold'>£{price}</span>
                    <p className='text-lg text-dark-gray'>{description}</p>
                </div>
                <div className='flex items-col justify-center items-end p-2'>
                    <div className='w-5/6 aspect-square bg-secondary rounded-full flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-8 h-8 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventCard
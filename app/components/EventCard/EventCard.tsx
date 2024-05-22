import Image from 'next/image'
import Link from 'next/link';

type Props = {
    title: string;
    description: string;
    price: number;
    darkbg?: boolean;
    url: string;
    image: string;
}

function EventCard({ title, description, price, darkbg, url, image }: Props) {
    return (
        <Link href={url}>
            <div className={`grid grid-cols-12 gap-x-2 my-8 ${darkbg && 'bg-gray-100'}`}>
                <div className='col-span-4 md:col-span-3 relative'>
                    <Image
                        className='w-auto h-full object-cover object-center'
                        src={image}
                        alt={`${title}`}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        fill
                    />
                </div>
                <div className='col-span-7 md:col-span-8 md:p-2 flex flex-col gap-y-8'>
                    <h2 className='text-lg md:text-3xl font-bold text-primary'>{title}</h2>
                    <span className='md:text-3xl font-bold'>£{price}</span>
                    <p className='md:text-lg text-dark-gray truncate'>{description}</p>
                </div>
                <div className='flex items-col justify-center items-end p-2'>
                    <div className='md:w-5/6 aspect-square bg-secondary lg:rounded-full flex justify-center items-center'>
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
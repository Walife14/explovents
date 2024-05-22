// components
import EventCard from "@components/EventCard/EventCard"
import BackBtn from "@/app/components/BackBtn/BackBtn"

import tempImage from '@/public/images/boat-party-with-drinks.jpg'

type Props = {}

function Saved({ }: Props) {
    return (
        <main>
            <div className="w-5/6 mx-auto">
                <div className="relative">
                    {/* <div className="absolute top-0 left-0">
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
                    </div> */}
                    <BackBtn />
                    <h1 className="text-primary text-center">Saved Events</h1>
                </div>
                <div>
                    {[1, 2, 3, 4].map((index) => (
                        <EventCard
                            key={index}
                            title={'Fantasy Boat Party'}
                            description={'Join us aboard the Fantasy Boat Party for an electrifying voyage filled with music, dancing, and endless drinks against the backdrop of the open sea.'} price={60}
                            url="event/1"
                            image="https://hmgsintxxxubgofxjaiw.supabase.co/storage/v1/object/public/events/Red%20Boat%20Party/banner_image/red_boat_party_banner.jpg"
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Saved
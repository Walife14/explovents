import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
    isOpen: boolean;
    onClose: () => void
    images: any;
}

function ImageGallery({ isOpen, onClose, images }: Props) {
    const [isViewOne, setIsViewOne] = useState<boolean>(true)
    const [page, setPage] = useState<number>(0)

    const toggleImage = (direction: string) => {
        if (isViewOne) {
            if (direction === 'previous') {
                if (page !== 0) {
                    setPage(page - 1)
                }
            }
            if (direction === 'next') {
                if (page !== images.length - 1) {
                    setPage(page + 1)
                }
            }
        } else {
            if (direction === 'previous') {
                if (page !== 0) {
                    setPage(page - 4)
                }
            }
            if (direction === 'next') {
                if ((page + 4) < images.length) {
                    setPage(page + 4)
                }
            }
        }

    }

    const isVisible = (index: number) => {
        return page === index || page + 1 === index || page + 2 === index || page + 3 === index;
    };

    useEffect(() => {
        // disable scrolling on opening gallery
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        }

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpen])

    if (!isOpen) return null
    return (
        <div className="bg-white/[95%] fixed left-0 top-0 w-full h-[100dvh] z-[51] md:p-10 flex">
            <div className="flex flex-col-reverse md:flex-row flex-1">
                <div className="md:basis-16"></div>
                <div className="flex-1 flex flex-col">
                    {/* image display */}
                    <div className={`flex-1 overflow-hidden relative ${isViewOne ? '' : 'grid grid-cols-2 grid-rows-2 gap-2'}`}>

                        {/* viewing 1 at a time */}
                        {isViewOne && (
                            <>
                                {images.map((img: HTMLImageElement, index: number) => (
                                    <Image
                                        key={index}
                                        className={`object-contain w-full h-full ${page === index ? '' : 'hidden'}`}
                                        src={img}
                                        alt="boat party with drinks"
                                        quality={100}
                                        loading="lazy"
                                    />
                                ))}
                            </>
                        )}

                        {/* viewing 4 at a time */}
                        {!isViewOne && (
                            <>
                                {images.map((img: HTMLImageElement, index: number) => (
                                    <div key={index} className={`${isVisible(index) ? '' : 'hidden'} relative`}>
                                        <Image
                                            className="object-contain w-full h-full select-none"
                                            src={img}
                                            alt="Boat party with drinks"
                                            quality={100}
                                            priority
                                        />
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    <div className="flex items-center gap-y-2 p-4 bg-white">
                        {/* toggle between viewing one or four elements at a time */}
                        <div className="flex-1 flex flex-col gap-y-1">
                            <button className="flex items-center gap-x-4" onClick={() => { setIsViewOne(true); setPage(0) }} aria-label="View one image at a time">
                                <svg className={!isViewOne ? 'text-triary-light' : 'text-triary-dark'} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="fill-current w-full h-full" rx="3" width="17" height="17" fill="none" />
                                </svg>
                                <span className={`font-semibold ${!isViewOne ? 'text-dark-gray' : 'text-black'}`}>View one at a time</span>
                            </button>
                            <button className="flex items-center gap-x-4" onClick={() => { setIsViewOne(false); setPage(0) }} aria-label="View four images at a time">
                                <svg className={isViewOne ? 'text-triary-light' : 'text-triary-dark'} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="fill-current" rx="3" width="17" height="17" fill="none" />
                                    <rect className="fill-current" x="19" width="17" height="17" rx="3" fill="none" />
                                    <rect className="fill-current" y="19" width="17" height="17" rx="3" fill="none" />
                                    <rect className="fill-current" x="19" y="19" width="17" height="17" rx="3" fill="none" />
                                </svg>
                                <span className={`font-semibold ${isViewOne ? 'text-dark-gray' : 'text-black'}`}>View four at a time</span>
                            </button>
                        </div>

                        {/* next or previous image */}
                        <div className="flex gap-x-4">
                            <button className="font-semibold" onClick={() => toggleImage('previous')}>Previous</button>
                            <button className="font-semibold" onClick={() => toggleImage('next')}>Next</button>
                        </div>
                    </div>
                </div>

                {/* close button */}
                <div className="basis-16 flex justify-end md:justify-center items-start p-2 md:p-0">
                    <button onClick={onClose} className="bg-black/40 rounded-full" aria-label="Close gallery">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-12 h-12 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

            </div>
        </div >
    )
}

export default ImageGallery
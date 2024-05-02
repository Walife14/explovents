"use client"

// components
import AnimatedBubble from "./AnimatedBubble"
import CountryCityDates from "../components/CountryCityDates/CountryCityDates"

type Props = {}

function Search({ }: Props) {
    const handleSubmit = async (e: React.FormEvent, country: string, city: string, selectedDate: any) => {
        e.preventDefault()

        console.log(country, city, selectedDate)
    }

    return (
        <div className="w-5/6 mx-auto space-y-10 relative mt-40">
            <AnimatedBubble color={1} delay={0} position={'top-[5%] -left-[5%]'} />
            <AnimatedBubble color={1} delay={0.25} position={'-top-[5%] left-[10%]'} />
            <AnimatedBubble color={1} delay={1} position={'-top-[5%] left-[25%]'} />
            <AnimatedBubble color={1} delay={0.75} position={'top-[50%] left-[25%]'} />
            <AnimatedBubble color={1} delay={0.25} position={'-top-[5%] left-[40%]'} />
            <AnimatedBubble color={2} delay={1} position={'top-[40%] left-[40%]'} />
            <AnimatedBubble color={2} delay={0.5} position={'top-[10%] left-[40%]'} />
            <AnimatedBubble color={1} delay={0.2} position={'-top-[5%] right-[25%]'} />
            <AnimatedBubble color={1} delay={0.6} position={'top-[50%] right-[25%]'} />
            <AnimatedBubble color={1} delay={0.4} position={'-top-[5%] right-[10%]'} />
            <AnimatedBubble color={1} delay={0.8} position={'top-[5%] -right-[5%]'} />
            <h1 className="text-3xl font-black text-center">We've got you covered</h1>
            <CountryCityDates handleSubmit={handleSubmit} />
        </div>
    )
}

export default Search
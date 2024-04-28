import Button from "@components/Button/Button"

type Props = {}

function Search({ }: Props) {
    return (
        <div className="w-5/6 mx-auto space-y-10 relative mt-40">
            <div className="h-80 w-80 bg-triary absolute left-0 top-1/2 -translate-y-1/2 -z-10 rounded-full blur-3xl mix-blend-screen"></div>
            <div className="h-80 w-80 bg-triary absolute left-[15%] top-0 -translate-y-1/2 -z-10 rounded-full blur-3xl mix-blend-screen"></div>
            <div className="h-80 w-80 bg-triary absolute left-[15%] top-full -translate-y-1/2 -z-10 rounded-full blur-3xl mix-blend-screen"></div>
            <div className="h-80 w-80 bg-triary absolute left-[70%] top-0 -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full blur-3xl mix-blend-screen"></div>
            <div className="h-80 w-80 bg-triary absolute left-[50%] top-0 -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full blur-3xl mix-blend-screen"></div>
            <div className="h-80 w-80 bg-triary absolute left-[30%] top-0 -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full blur-3xl mix-blend-screen"></div>
            <div className="h-80 w-80 bg-secondary-light absolute left-[70%] top-full -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full blur-3xl mix-blend-screen"></div>
            <div className="h-80 w-80 bg-secondary-light absolute left-[50%] top-full -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full blur-3xl mix-blend-screen"></div>
            <div className="h-80 w-80 bg-secondary-light absolute left-[30%] top-full -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full blur-3xl mix-blend-screen"></div>
            <div className="h-80 w-80 bg-triary absolute right-[15%] top-0 -translate-y-1/2 -z-10 rounded-full blur-3xl mix-blend-screen"></div>
            <div className="h-80 w-80 bg-triary absolute right-0 top-1/2 -translate-y-1/2 -z-10 rounded-full blur-3xl mix-blend-screen"></div>
            <h1 className="text-3xl font-black text-center">We've got you covered</h1>
            <form>
                <div className="flex gap-x-1 p-1 bg-triary-light text-2xl rounded-md">
                    <label htmlFor="countryInput" hidden>Select Country</label>
                    <input
                        className="p-2 placeholder:text-dark-gray flex-1 rounded-md"
                        id="countryInput"
                        type="text"
                        placeholder="Country"
                    />
                    <label htmlFor="cityInput" hidden>Select City</label>
                    <input
                        className="p-2 placeholder:text-dark-gray flex-1 rounded-md"
                        id="cityInput"
                        type="text"
                        placeholder="City"
                    />
                    <label htmlFor="dateInput" hidden>Select Date(s)</label>
                    <input
                        className="p-2 placeholder:text-dark-gray flex-1 rounded-md"
                        id="dateInput"
                        type="date"
                        placeholder="Date"
                    />
                </div>
                <div className="w-72 mx-auto mt-10">
                    <Button text="Search" type="submit" largeText={true} nonFullWidth={true} />
                </div>
            </form>
        </div>
    )
}

export default Search
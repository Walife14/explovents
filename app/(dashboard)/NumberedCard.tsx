type Props = {
    number: number;
    title: string;
    text: string;
}

function NumberedCard({ number, title, text }: Props) {
    return (
        <div className="flex gap-x-4">
            <div className="min-w-40 max-w-40 min-h-40 max-h-40 border-8 border-triary rounded-full flex items-center justify-center">
                <span className="text-5xl font-black">{number}</span>
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="text-lg">{text}</p>
            </div>
        </div>
    )
}

export default NumberedCard
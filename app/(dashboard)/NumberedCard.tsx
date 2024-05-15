type Props = {
    number: number;
    title: string;
    text: string;
}

function NumberedCard({ number, title, text }: Props) {
    return (
        <div className="flex gap-x-4">
            <span className="text-5xl font-black text-primary underline">{number}</span>
            <div className="flex-1">
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="text-lg">{text}</p>
            </div>
        </div>
    )
}

export default NumberedCard

type Props = {
    text: string;
    type?: "submit" | "reset" | "button" | undefined;
}

function Button({ text, type }: Props) {
    return (
        <button
            className="bg-secondary font-semibold text-white py-2 my-4 rounded-md w-full mx-auto"
            type={type || "button"}
        >
            {text}
        </button>
    )
}

export default Button

type Props = {
    text: string;
    type?: "submit" | "reset" | "button" | undefined;
    largeText?: boolean;
    nonFullWidth?: boolean;
}

function Button({ text, largeText, nonFullWidth, type }: Props) {
    return (
        <button
            className={`bg-secondary font-semibold text-white py-2 my-4 rounded-md ${nonFullWidth ? 'px-20' : 'w-full'} mx-auto ${largeText ? 'text-2xl' : ''}`}
            type={type || "button"}
        >
            {text}
        </button>
    )
}

export default Button
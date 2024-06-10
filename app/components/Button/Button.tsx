type Props = {
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
  largeText?: boolean;
  nonFullWidth?: boolean;
  disabled?: boolean;
};

function Button({ text, largeText, nonFullWidth, type, disabled }: Props) {
  return (
    <button
      className={`bg-secondary font-semibold text-white py-2 my-4 rounded-md transition-all hover:scale-[1.05] hover:bg-secondary-dark active:scale-[0.98] active:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:bg-dark-gray
                ${nonFullWidth ? "px-20" : "w-full"} mx-auto ${
        largeText ? "text-2xl" : ""
      }`}
      type={type || "button"}
      disabled={disabled || false}
    >
      {text}
    </button>
  );
}

export default Button;

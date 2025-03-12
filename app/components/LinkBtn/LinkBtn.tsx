import Link from "next/link";

type Props = {
  text: string;
  transparent?: boolean;
  href: string;
  textxl?: boolean;
  disabled?: boolean;
};

function LinkBtn({ text, href, textxl, disabled }: Props) {
  return (
    <div className="group">
      <Link
        className={`relative py-1 text-xl active:text-secondary transition-all duration-300
        ${disabled && 'text-dark-gray/70 cursor-not-allowed'}
        `}
        href={href ? href : '#'}
      >
        {text}
        {/* Custom Underline using ::after */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full z-10"></span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
      </Link>
    </div>
  );
}

export default LinkBtn;

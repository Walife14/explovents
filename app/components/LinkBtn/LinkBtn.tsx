import Link from "next/link";

type Props = {
    text: string;
    transparent?: boolean;
    href: string;
    textxl?: boolean;
    disabled?: boolean;
  };
  
  function LinkBtn({ text, transparent, href, textxl, disabled }: Props) {
    return (
      <Link
        className={`block text-center font-semibold py-2 px-4 rounded-md
        ${ transparent ? 'bg-white text-secondary border-2 border-secondary' : 'bg-secondary border-2 border-secondary text-white'}
        ${textxl && 'text-xl'}
        ${disabled ? 'bg-dark-gray/50 cursor-not-allowed' : 'transition-all hover:scale-[1.05] hover:bg-secondary-dark active:scale-[0.98] active:bg-secondary-light'}
        `}
        href={href ? href : '#'}
      >
        {text}
      </Link>
    );
  }
  
  export default LinkBtn;
  
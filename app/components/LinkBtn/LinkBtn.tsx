import Link from "next/link";

type Props = {
    text: string;
    transparent?: boolean;
    href: string;
    textxl?: boolean;
  };
  
  function LinkBtn({ text, transparent, href, textxl }: Props) {
    return (
      <Link
        className={`block text-center ${ transparent ? 'bg-white text-secondary border-2 border-secondary' : 'bg-secondary border-2 border-secondary text-white'} ${textxl && 'text-xl'} font-semibold py-2 px-4 rounded-md transition-all hover:scale-[1.05] hover:bg-secondary-dark active:scale-[0.98] active:bg-secondary-light`}
        href={href}
      >
        {text}
      </Link>
    );
  }
  
  export default LinkBtn;
  
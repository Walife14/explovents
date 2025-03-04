import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
    number: number;
    title: string;
    text: string;
}

function NumberedCard({ number, title, text }: Props) {
    const motiveInstructionList = useRef(null)
    const isInView = useInView(motiveInstructionList, { once: true })
    return (
        <motion.div
            className="flex gap-x-4 will-change-transform"
            style={{
                transform: isInView ? "translateX(0)" : "translateX(-100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
            ref={motiveInstructionList}
        >
            <span className="text-5xl font-black text-primary underline">{number}</span>
            <div className="flex-1">
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="text-lg">{text}</p>
            </div>
        </motion.div>
    )
}

export default NumberedCard
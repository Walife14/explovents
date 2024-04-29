import { motion } from "framer-motion"

type Props = {
    color: string;
    delay: number;
    position: string;
}

function AnimatedBubble({ color, delay, position }: Props) {
    return (
        <motion.div
            className={`absolute w-[20%] aspect-square bg-${color} rounded-full mix-blend-screen -z-10 ${position} blur-2xl`}
            animate={{
                x: [0, 0, -20, 20, 0],
                y: [0, 20, 0, -20, 0],
            }}
            transition={{
                duration: 4,
                ease: 'linear',
                repeat: Infinity,
                delay: delay,
            }}
        />
    );
}

export default AnimatedBubble
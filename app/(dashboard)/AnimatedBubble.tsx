import { motion } from "framer-motion"

type Props = {
    color: number;
    delay: number;
    position: string;
}

function AnimatedBubble({ color, delay, position }: Props) {
    return (
        <>
            {color === 1 && (
                <motion.div
                    className={`absolute w-[20%] aspect-square bg-triary rounded-full mix-blend-screen -z-10 ${position} blur-2xl`}
                    animate={{
                        x: [0, 0, -40, 20, 0],
                        y: [0, 40, 0, -40, 0],
                    }}
                    transition={{
                        duration: 5,
                        ease: 'linear',
                        repeat: Infinity,
                        delay: delay,
                    }}
                />
            )}
            {color === 2 && (
                <motion.div
                    className={`absolute w-[20%] aspect-square bg-secondary rounded-full mix-blend-screen -z-10 ${position} blur-2xl`}
                    animate={{
                        x: [0, 0, -40, 20, 0],
                        y: [0, 40, 0, -40, 0],
                    }}
                    transition={{
                        duration: 5,
                        ease: 'linear',
                        repeat: Infinity,
                        delay: delay,
                    }}
                />
            )}
        </>
    );
}

export default AnimatedBubble
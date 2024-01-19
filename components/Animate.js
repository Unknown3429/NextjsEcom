import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Animate = ({ children, initial = { opacity: 0 }, exit = { duration: 1 }, animate = { opacity: 1 }, className, transition = { duration: 1 } }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={initial}
                animate={animate}
                exit={exit}
                transition={transition}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Animate
import React from 'react'
import { AnimatePresence , motion } from 'framer-motion'

const AnimationWrapper = ({children , initial , animate , exit , transition}) => {
  return (
    <AnimatePresence>
        <motion.div
        initial={initial} 
        animate={animate}
        exit={exit}
        transition={transition}
        >
          {children}
          
        </motion.div>
    </AnimatePresence>
  )
}

export default AnimationWrapper
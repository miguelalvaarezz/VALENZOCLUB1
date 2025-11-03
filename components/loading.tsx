"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Loading() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-32 h-32"
      >
        <Image
          src="/images/pcarga.PNG"
          alt="Loading"
          width={128}
          height={128}
          className="w-full h-full object-contain"
          priority
        />
      </motion.div>
    </div>
  )
}


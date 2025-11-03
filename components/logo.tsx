"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Logo() {
  const [logoError, setLogoError] = useState(false)

  return (
    <Link href="/">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer flex items-center"
      >
        {!logoError ? (
          <div className="scale-[3]">
            <Image
              src="/images/logo.svg"
              alt="VALENZO CLUB"
              width={300}
              height={100}
              className="object-contain h-8 w-auto"
              priority
              onError={() => setLogoError(true)}
            />
          </div>
        ) : (
          <h1 className="text-2xl font-bold text-gold">
            VALENZO CLUB
          </h1>
        )}
      </motion.div>
    </Link>
  )
}

// Versión que siempre muestra texto (actual por defecto)
export function LogoText() {
  return (
    <Link href="/">
      <motion.h1
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-bold gradient-text cursor-pointer"
      >
        VALENZO CLUB
      </motion.h1>
    </Link>
  )
}


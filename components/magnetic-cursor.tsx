"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorInnerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorInner = cursorInnerRef.current
    if (!cursor || !cursorInner) return

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const onMouseLeave = () => {
      cursor.style.opacity = "0"
    }

    const onMouseEnter = () => {
      cursor.style.opacity = "1"
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mouseenter", onMouseEnter)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mouseenter", onMouseEnter)
    }
  }, [])

  return (
    <>
      {/* Outer Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-8 h-8 border border-gold/50 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ left: "-50%", top: "-50%" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Inner Cursor */}
      <motion.div
        ref={cursorInnerRef}
        className="fixed w-2 h-2 bg-gold rounded-full pointer-events-none z-50"
        style={{ left: "-50%", top: "-50%" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  )
}


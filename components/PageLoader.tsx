"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useImageLoader } from '@/lib/hooks/useImageLoader'

interface PageLoaderProps {
  children: React.ReactNode
}

export function PageLoader({ children }: PageLoaderProps) {
  const { imagesLoaded, imagesProgress, containerRef } = useImageLoader()
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (imagesLoaded) {
      // Pequeño delay antes de mostrar el contenido para transición suave
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [imagesLoaded])

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {!showContent && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-32 h-32 relative"
            >
              <img
                src="/images/pcarga.PNG"
                alt="Loading"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <div
        ref={containerRef}
        className={showContent ? 'opacity-100' : 'opacity-0'}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        {children}
      </div>
    </>
  )
}

// Wrapper para componentes del servidor
export function PageLoaderWrapper({ children }: PageLoaderProps) {
  return <PageLoader>{children}</PageLoader>
}


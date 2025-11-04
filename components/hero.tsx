"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    
    // Set video properties for autoplay and loop
    video.muted = true
    video.loop = true
    video.playsInline = true
    video.setAttribute('playsinline', 'true')
    video.setAttribute('webkit-playsinline', 'true')
    
    // Handler for ended event to ensure loop
    const handleEnded = () => {
      if (video) {
        video.currentTime = 0
        video.play().catch(() => {
          // Silent fail for loop restart
        })
      }
    }
    
    // Try to play immediately
    const attemptPlay = () => {
      if (!video) return
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If autoplay fails, try again when user interacts
          const tryPlayOnInteraction = () => {
            if (video) {
              video.play().catch(() => {})
            }
          }
          document.addEventListener('click', tryPlayOnInteraction, { once: true, passive: true })
          document.addEventListener('touchstart', tryPlayOnInteraction, { once: true, passive: true })
        })
      }
    }
    
    // Try to play when video is ready
    if (video.readyState >= 2) {
      attemptPlay()
    } else {
      const loadedHandler = () => {
        attemptPlay()
        video.removeEventListener('loadeddata', loadedHandler)
      }
      const canPlayHandler = () => {
        attemptPlay()
        video.removeEventListener('canplay', canPlayHandler)
      }
      video.addEventListener('loadeddata', loadedHandler)
      video.addEventListener('canplay', canPlayHandler)
    }
    
    // Ensure loop works by handling ended event
    video.addEventListener('ended', handleEnded)
    
    return () => {
      if (video) {
        video.removeEventListener('ended', handleEnded)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-30"
          style={{ pointerEvents: 'none' }}
        >
          <source src="/videos/heromovie.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>
      
      {/* Animated Circles */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          opacity: { duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] },
          scale: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          opacity: { duration: 1.5, delay: 0.7, ease: [0.4, 0, 0.2, 1] },
          scale: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 25, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1] 
          }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.6, 
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1] 
            }}
          >
            <span className="text-white">VALENZO</span> <span className="gradient-text">CLUB</span>
          </motion.h1>

          <motion.p
            className="text-sm md:text-base uppercase tracking-[0.3em] text-foreground/90 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.9, 
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1] 
            }}
          >
            — The night has a name —
          </motion.p>

          <motion.p
            className="text-sm md:text-base uppercase tracking-[0.3em] text-gold mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.2, 
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1] 
            }}
          >
            We don't sell clothes — we sell access
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 1.5, 
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1] 
            }}
          >
            <Button
              asChild
              variant="glow"
              size="lg"
              className="group relative overflow-hidden"
            >
              <Link href="/collection">
                Join the Club
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


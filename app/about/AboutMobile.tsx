"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { values } from "./data"

interface AboutMobileProps {
  hoveredItem: number | null
  setHoveredItem: (id: number | null) => void
}

interface ValueBoxProps {
  value: { title: string; description: string }
  index: number
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

function ValueBox({ value, index, isHovered, onMouseEnter, onMouseLeave }: ValueBoxProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
      transition={{ 
        delay: 0.3 + index * 0.12,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className="relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* 3D Recessed Box Effect */}
      <div className="perspective-1000">
        <motion.div
          className={`transform-gpu bg-black/40 backdrop-blur-sm border-2 border-black/50 p-8 relative overflow-hidden rounded-lg transition-all duration-500 ${
            isHovered ? 'border-gold/30' : ''
          }`}
          style={{
            boxShadow: 'inset 0 8px 32px 0 rgba(0,0,0,0.5), 0 4px 16px 0 rgba(0,0,0,0.3)',
          }}
        >
          {/* Inner shadow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20 pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold/20" />
              <span className="text-xs text-gold font-light tracking-widest">
                0{index + 1}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight">
              {value.title}
            </h3>
            <p className="text-white/60 leading-relaxed text-base font-light">
              {value.description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function AboutMobile({ hoveredItem, setHoveredItem }: AboutMobileProps) {
  // Refs para las animaciones
  const heroSectionRef = useRef(null)
  const heroContentRef = useRef(null)
  const heroTitleRef = useRef(null)
  const heroSubtitleRef = useRef(null)
  const storyTitleRef = useRef(null)
  const storyLineRef = useRef(null)
  const storyP1Ref = useRef(null)
  const storyP2Ref = useRef(null)
  const storyP3Ref = useRef(null)
  const storyImageRef = useRef(null)
  const valuesSectionRef = useRef(null)
  const valuesTitleRef = useRef(null)

  // useInView hooks
  const heroSectionInView = useInView(heroSectionRef, { once: true, margin: "-50px" })
  const heroContentInView = useInView(heroContentRef, { once: true, margin: "-50px" })
  const heroTitleInView = useInView(heroTitleRef, { once: true, margin: "-50px" })
  const heroSubtitleInView = useInView(heroSubtitleRef, { once: true, margin: "-50px" })
  const storyTitleInView = useInView(storyTitleRef, { once: true, margin: "-50px" })
  const storyLineInView = useInView(storyLineRef, { once: true, margin: "-50px" })
  const storyP1InView = useInView(storyP1Ref, { once: true, margin: "-50px" })
  const storyP2InView = useInView(storyP2Ref, { once: true, margin: "-50px" })
  const storyP3InView = useInView(storyP3Ref, { once: true, margin: "-50px" })
  const storyImageInView = useInView(storyImageRef, { once: true, margin: "-50px" })
  const valuesSectionInView = useInView(valuesSectionRef, { once: true, margin: "-100px" })
  const valuesTitleInView = useInView(valuesTitleRef, { once: true, margin: "-50px" })

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={heroSectionRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroSectionInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-24"
      >
        <motion.div
          ref={heroContentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: heroContentInView ? 1 : 0, y: heroContentInView ? 0 : 30 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center space-y-8"
        >
          <motion.h1
            ref={heroTitleRef}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: heroTitleInView ? 1 : 0, y: heroTitleInView ? 0 : 25 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl font-bold leading-tight mb-8"
          >
            <span className="text-white">VALENZO</span>
          </motion.h1>
          <motion.p
            ref={heroSubtitleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroSubtitleInView ? 1 : 0, y: heroSubtitleInView ? 0 : 20 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs text-gold-300 uppercase tracking-widest font-light"
          >
            "The night has a name"
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Story Section */}
      <section className="mb-12">
        <div className="max-w-3xl mx-auto space-y-6 px-6 md:px-8">
          <motion.h2
            ref={storyTitleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: storyTitleInView ? 1 : 0, y: storyTitleInView ? 0 : 20 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm uppercase tracking-[0.3em] text-white mb-4 font-light"
          >
            THE STORY
          </motion.h2>
          <motion.div
            ref={storyLineRef}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: storyLineInView ? 1 : 0, scaleX: storyLineInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-[2px] w-16 bg-gold origin-left mb-6 block"
          />
          <motion.p
            ref={storyP1Ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: storyP1InView ? 1 : 0, y: storyP1InView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base text-white/70 leading-relaxed font-light text-justify"
          >
            VALENZO CLUB, nace de la cabeza de dos jóvenes que ven la repetición constante de 
            las prendas populares, como un problema en expansión. Esto le reduce el valor a 
            las prendas y el sentimiento de exclusividad en los individuos que las visten.
          </motion.p>
          <motion.p
            ref={storyP2Ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: storyP2InView ? 1 : 0, y: storyP2InView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base text-white/70 leading-relaxed font-light text-justify"
          >
            Es por ello, que se crea VALENZO, una empresa que tiene como único y principal 
            objetivo, <span className="text-white font-bold">la exclusividad de sus prendas y el sentimiento que estas inspiran en 
            nuestra comunidad selecta de clientes.</span>
          </motion.p>
          <motion.p
            ref={storyP3Ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: storyP3InView ? 1 : 0, y: storyP3InView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base text-white/70 leading-relaxed font-light italic border-l-[6px] border-gold/30 rounded-l-lg pl-4 text-justify"
            style={{
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px',
            }}
          >
            This is not fashion. This is access. This is VALENZO CLUB.
          </motion.p>
        </div>
      </section>

      {/* Image Section with revelation.jpg as background */}
      <motion.section
        ref={storyImageRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: storyImageInView ? 1 : 0, scale: storyImageInView ? 1 : 0.95 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-24 relative h-[400px] rounded-lg overflow-hidden px-6 md:px-8"
      >
        <div className="absolute inset-0">
          <img 
            src="/images/revelation.JPG" 
            alt="" 
            className="w-full h-full object-cover"
            style={{
              filter: 'sepia(40%) contrast(1.2) brightness(0.7) saturate(0.8)',
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </motion.section>

      {/* Values Section - Hidden for now */}
      {false && (
        <motion.section
          ref={valuesSectionRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: valuesSectionInView ? 1 : 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-24"
        >
          <motion.div
            ref={valuesTitleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: valuesTitleInView ? 1 : 0, y: valuesTitleInView ? 0 : 30 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-gold mb-6 font-light">
              OUR VALUES
            </h2>
            <div className="h-px w-16 bg-white mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {values.map((value, index) => (
              <ValueBox
                key={value.title}
                value={value}
                index={index}
                isHovered={hoveredItem === index}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              />
            ))}
          </div>
        </motion.section>
      )}
    </>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { collectionItems, timeline } from "./data"
import { useAccessModal } from "@/contexts/access-modal-context"

interface CollectionDesktopProps {
  hoveredItem: number | null
  setHoveredItem: (id: number | null) => void
}

interface TimelineItemProps {
  item: { year: string; title: string; text: string; image: string }
  index: number
  isLast: boolean
}

function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className="relative"
    >
      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-px h-32 bg-gradient-to-b from-gold/20 via-gold/10 to-transparent" />
      )}

      {/* 3D Box Effect */}
      <div className="perspective-1000">
        <motion.div
          whileHover={{ rotateX: 2, rotateY: -2 }}
          transition={{ duration: 0.5 }}
          className="transform-gpu bg-black/20 backdrop-blur-sm border border-gold/20 p-12 shadow-[0_8px_32px_0_rgba(33,23,16,0.3)] relative overflow-hidden rounded-lg"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-2 gap-12 items-center relative z-10">
            {/* Content */}
            <div className={`space-y-6 ${index % 2 === 1 ? 'order-2' : ''}`}>
              <div className="flex items-center gap-4">
                <div className="w-32 h-px bg-gold/20" />
                <span className="text-xs text-gold font-light tracking-widest">
                  {item.year}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white leading-tight">
                {item.title}
              </h2>
              <p className="text-white/60 leading-relaxed text-lg font-light">
                {item.text}
              </p>
            </div>

            {/* Image with Frame */}
            <div className={`relative ${index % 2 === 1 ? 'order-1' : ''}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* Frame effect */}
                <div className="absolute inset-0 border border-gold/30 rounded-lg" />
                <div className="absolute inset-2 border border-white/10 rounded-lg" />
                
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover relative z-0 ${index === 0 ? 'object-center' : 'object-bottom'}`}
                  style={{
                    filter: 'sepia(40%) contrast(1.2) brightness(0.7) saturate(0.8)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none" />
                {/* Retro film grain effect */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px',
                }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

interface CollectionItemProps {
  item: { id: number; title: string; image: string }
  hoveredItem: number | null
  setHoveredItem: (id: number | null) => void
  openModal: () => void
}

function CollectionItem({ item, hoveredItem, setHoveredItem, openModal }: CollectionItemProps) {
  const ref = useRef(null)
  const plaqueRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const plaqueInView = useInView(plaqueRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40, scale: isInView ? 1 : 0.95 }}
      transition={{ 
        duration: 1,
        delay: 0.4,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      className="relative group"
    >
      {/* Grid layout: Frame+Image left, Title+Exclusive+Button right */}
      <div className="grid grid-cols-2 gap-12 items-center">
        {/* Left Column: The Artwork - Luxury Museum Frame */}
        <div className="relative aspect-[3/4]">
          <div className="absolute" style={{ top: '-1rem', bottom: '-0.5rem', left: '-0.75rem', right: '-0.75rem' }}>
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 20%, #1a1a1a 40%, #0a0a0a 60%, #1a1a1a 100%)',
              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.8), inset 0 -2px 10px rgba(0,0,0,0.6), 0 0 30px rgba(0,0,0,0.5)',
            }} />
            <div className="absolute inset-1" style={{
              background: 'linear-gradient(135deg, rgba(45,45,45,0.9) 0%, rgba(26,26,26,0.8) 100%)',
              border: '1px solid rgba(100,100,100,0.2)',
            }} />
            <div className="absolute inset-2" style={{
              background: 'linear-gradient(135deg, #0a0a0a 0%, #2d2d2d 50%, #0a0a0a 100%)',
              borderTop: '1px solid rgba(100,100,100,0.3)',
              borderBottom: '1px solid rgba(0,0,0,0.8)',
            }} />
            <div className="absolute inset-3 border border-gold/20" style={{
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)',
            }} />
          </div>
          
          <div className="relative aspect-[3/4] overflow-hidden m-3 rounded-sm">
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-top"
              animate={{
                scale: hoveredItem === item.id ? 1.02 : 1,
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Right Column: Title, Exclusive, Button */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Plaque */}
          <motion.div
            ref={plaqueRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: plaqueInView ? 1 : 0 }}
            transition={{ delay: 0.8 }}
          >
            <div>
              <p className="text-xl font-bold mb-2">
                <span className="text-white">— </span>
                <span className="text-black bg-white px-2 py-1 rounded-sm">BLACK</span>
                <span className="text-white"> GENESIS —</span>
              </p>
              <div className="relative inline-flex flex-col items-center mb-6">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                
                <div className="relative px-8 py-4">
                  <p className="text-[10px] text-gold/80 font-light tracking-[0.3em] mb-3 text-center">
                    EXCLUSIVE EDITION
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-thin text-gold/80 tracking-tight">3</span>
                    <span className="text-4xl font-thin text-white tracking-tight">/</span>
                    <span className="text-4xl font-thin text-gold/80 tracking-tight">15</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Button */}
          <motion.button
            onClick={openModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gold text-black uppercase tracking-wider text-sm font-medium hover:bg-gold-100 transition-all duration-300 glow-border w-fit"
          >
            Request Access →
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export function CollectionDesktop({ hoveredItem, setHoveredItem }: CollectionDesktopProps) {
  const { openModal } = useAccessModal()
  
  // Refs para las animaciones
  const heroSectionRef = useRef(null)
  const heroContentRef = useRef(null)
  const heroTitleRef = useRef(null)
  const heroSubtitleRef = useRef(null)
  const pieceSectionRef = useRef(null)
  const pieceTitleRef = useRef(null)

  // useInView hooks
  const heroSectionInView = useInView(heroSectionRef, { once: true, margin: "-50px" })
  const heroContentInView = useInView(heroContentRef, { once: true, margin: "-50px" })
  const heroTitleInView = useInView(heroTitleRef, { once: true, margin: "-50px" })
  const heroSubtitleInView = useInView(heroSubtitleRef, { once: true, margin: "-50px" })
  const pieceSectionInView = useInView(pieceSectionRef, { once: true, margin: "-50px" })
  const pieceTitleInView = useInView(pieceTitleRef, { once: true, margin: "-50px" })

  return (
    <>
      {/* Hero Title */}
      <motion.section
        ref={heroSectionRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroSectionInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-40"
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6"
          >
            <span className="text-white block">THE</span>
            <span className="gradient-text block">FOUNDATION</span>
          </motion.h1>
          <motion.p
            ref={heroSubtitleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroSubtitleInView ? 1 : 0, y: heroSubtitleInView ? 0 : 20 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs text-gold-300 uppercase tracking-widest font-light"
          >
            "Future belongs to the few"
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Timeline Story - Connected Journey */}
      <section className="mb-40 relative">
        <div className="space-y-32">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </section>

      {/* The Artwork - Mona Lisa Presentation */}
      <motion.section 
        ref={pieceSectionRef}
        className="mb-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: pieceSectionInView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div 
          ref={pieceTitleRef}
          id="piece-section" 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: pieceTitleInView ? 1 : 0, y: pieceTitleInView ? 0 : 20 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-black mb-8 font-light">
            THE PIECE
          </p>
          <div className="h-px w-24 bg-black mx-auto" />
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {collectionItems.map((item) => (
            <CollectionItem
              key={item.id}
              item={item}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
              openModal={openModal}
            />
          ))}
        </div>
      </motion.section>

    </>
  )
}


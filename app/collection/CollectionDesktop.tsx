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
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-px h-32 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
      )}

      {/* 3D Box Effect */}
      <div className="perspective-1000">
        <motion.div
          whileHover={{ rotateX: 2, rotateY: -2 }}
          transition={{ duration: 0.5 }}
          className="transform-gpu bg-black/20 backdrop-blur-sm border border-black/20 p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden rounded-lg"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-2 gap-12 items-center relative z-10">
            {/* Content */}
            <div className={`space-y-6 ${index % 2 === 1 ? 'order-2' : ''}`}>
              <div className="flex items-center gap-4">
                <div className="w-32 h-px bg-black/20" />
                <span className="text-[10px] text-black font-light tracking-[0.3em] uppercase">
                  {item.year}
                </span>
              </div>
              <h2 className="text-5xl font-bold text-white leading-tight tracking-tight uppercase">
                {item.title.split(' ').map((word, idx) => 
                  word.toLowerCase() === 'the' ? (
                    <span key={idx}>{word} </span>
                  ) : (
                    <span key={idx} className="text-black">{word} </span>
                  )
                )}
              </h2>
              <p className="text-white/70 leading-relaxed text-lg font-light tracking-wide">
                {item.text}
              </p>
            </div>

            {/* Image with Frame */}
            <div className={`relative ${index % 2 === 1 ? 'order-1' : ''}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {/* Frame effect */}
                <div className="absolute inset-0 border border-black/30 rounded-lg" />
                <div className="absolute inset-2 border border-white/10 rounded-lg" />
                
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover relative z-0 ${index === 0 ? 'object-center' : 'object-bottom'}`}
                  style={{
                    filter: index === 0
                      ? 'sepia(40%) contrast(1.2) brightness(0.5) saturate(0.8)'
                      : 'sepia(40%) contrast(1.2) brightness(0.7) saturate(0.8)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Overlay gradient */}
                {index === 0 && (
                  <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                )}
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
  const blackGenesisRef = useRef(null)
  const exclusiveEditionRef = useRef(null)
  const numbersRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const plaqueInView = useInView(plaqueRef, { once: true, margin: "-50px" })
  const blackGenesisInView = useInView(blackGenesisRef, { once: true, margin: "-50px" })
  const exclusiveEditionInView = useInView(exclusiveEditionRef, { once: true, margin: "-50px" })
  const numbersInView = useInView(numbersRef, { once: true, margin: "-50px" })

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
            <div className="absolute inset-3 border border-black/20" style={{
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
              <motion.p
                ref={blackGenesisRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: blackGenesisInView ? 1 : 0, y: blackGenesisInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-xl font-bold mb-2 mt-4"
              >
                <span className="text-white">— </span>
                <span className="text-white bg-black px-2 py-1 rounded-sm">BLACK</span>
                <span className="text-white"> GENESIS —</span>
              </motion.p>
              <div className="relative inline-flex flex-col items-center mb-6">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent" />
                
                <div className="relative px-8 py-4">
                  <motion.p
                    ref={exclusiveEditionRef}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: exclusiveEditionInView ? 1 : 0, y: exclusiveEditionInView ? 0 : 15 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-[10px] text-white font-light tracking-[0.3em] mb-3 text-center"
                  >
                    LIMITED EDITION
                  </motion.p>
                  <motion.div
                    ref={numbersRef}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: numbersInView ? 1 : 0, y: numbersInView ? 0 : 15 }}
                    transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-4xl font-thin text-white tracking-tight">4</span>
                    <span className="text-4xl font-thin text-white tracking-tight">/</span>
                    <span className="text-4xl font-thin text-white tracking-tight">15</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Button */}
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-center">
              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-black text-white uppercase tracking-wider text-sm font-medium hover:bg-gray-800 transition-all duration-300 glow-border w-fit -mt-12 rounded-lg"
              >
                SOLICITAR COMPRA →
              </motion.button>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: numbersInView ? 1 : 0, y: numbersInView ? 0 : 15 }}
                transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-xs text-white font-light tracking-wide mt-4 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Quedan 3 unidades
              </motion.p>
            </div>
          </div>
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
  const processTitleRef = useRef(null)

  // useInView hooks
  const heroSectionInView = useInView(heroSectionRef, { once: true, margin: "-50px" })
  const heroContentInView = useInView(heroContentRef, { once: true, margin: "-50px" })
  const heroTitleInView = useInView(heroTitleRef, { once: true, margin: "-50px" })
  const heroSubtitleInView = useInView(heroSubtitleRef, { once: true, margin: "-50px" })
  const pieceSectionInView = useInView(pieceSectionRef, { once: true, margin: "-50px" })
  const pieceTitleInView = useInView(pieceTitleRef, { once: true, margin: "-50px" })
  const processTitleInView = useInView(processTitleRef, { once: true })

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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroTitleInView ? 1 : 0, y: heroTitleInView ? 0 : 20 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs text-white uppercase tracking-widest font-light mb-2"
          >
            001 | DROP
          </motion.p>
          <motion.h1
            ref={heroTitleRef}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: heroTitleInView ? 1 : 0, y: heroTitleInView ? 0 : 25 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6"
          >
            <span className="text-white block">THE</span>
            <span className="text-black block">FOUNDATION</span>
          </motion.h1>
          <motion.p
            ref={heroSubtitleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroSubtitleInView ? 1 : 0, y: heroSubtitleInView ? 0 : 20 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs text-white uppercase tracking-widest font-light"
          >
            "Future belongs to the few"
          </motion.p>
        </motion.div>
      </motion.section>

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
          <p className="text-xs uppercase tracking-[0.5em] text-white mb-8 font-light">
            THE PIECE
          </p>
          <div className="h-px w-24 bg-white mx-auto" />
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

      {/* The Piece Title - Duplicate */}
      <motion.div 
        ref={processTitleRef}
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: processTitleInView ? 1 : 0, y: processTitleInView ? 0 : 20 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="text-xs uppercase tracking-[0.5em] text-white mb-8 font-light">
          THE PROCESS
        </p>
        <div className="h-px w-24 bg-white mx-auto" />
      </motion.div>

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

    </>
  )
}


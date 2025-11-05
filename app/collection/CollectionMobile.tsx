"use client"

import { motion, PanInfo, AnimatePresence, useInView } from "framer-motion"
import { useState, useRef } from "react"
import { collectionItems, timeline } from "./data"
import { useAccessModal } from "@/contexts/access-modal-context"

interface CollectionMobileProps {
  hoveredItem: number | null
  setHoveredItem: (id: number | null) => void
}

export function CollectionMobile({ hoveredItem, setHoveredItem }: CollectionMobileProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const { openModal } = useAccessModal()

  // Refs para useInView
  const pieceSectionRef = useRef(null)
  const pieceTitleRef = useRef(null)
  const collectionItemRef = useRef(null)
  const plaqueRef = useRef(null)
  const ctaRef = useRef(null)
  const processTitleRef = useRef(null)

  // useInView hooks
  const pieceSectionInView = useInView(pieceSectionRef, { once: true, margin: "-50px" })
  const pieceTitleInView = useInView(pieceTitleRef, { once: true })
  const collectionItemInView = useInView(collectionItemRef, { once: true })
  const plaqueInView = useInView(plaqueRef, { once: true })
  const ctaInView = useInView(ctaRef, { once: true })
  const processTitleInView = useInView(processTitleRef, { once: true })

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const handleSwipe = (swipe: number) => {
    if (swipe < -swipeConfidenceThreshold && currentIndex < timeline.length - 1) {
      setDirection(1)
      setCurrentIndex(prevIndex => prevIndex + 1)
    } else if (swipe > swipeConfidenceThreshold && currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex(prevIndex => prevIndex - 1)
    }
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const handleNext = () => {
    if (currentIndex < timeline.length - 1) {
      setDirection(1)
      setCurrentIndex(prevIndex => prevIndex + 1)
    } else {
      const pieceSection = document.getElementById('piece-section')
      if (pieceSection) {
        const elementPosition = pieceSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - 100
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <>
      {/* Hero Title */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs text-white uppercase tracking-widest font-light mb-2"
          >
            001 | DROP
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl font-bold leading-[0.9] mb-4"
          >
            <span className="text-white block">THE</span>
            <span className="text-black block">FOUNDATION</span>
          </motion.h1>
          <p className="text-xs text-white uppercase tracking-widest font-light">
            "Future belongs to the few"
          </p>
        </motion.div>
      </motion.section>

      {/* The Artwork - Mona Lisa Presentation */}
      <motion.section 
        ref={pieceSectionRef}
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: pieceSectionInView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div 
          ref={pieceTitleRef}
          id="piece-section" 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: pieceTitleInView ? 1 : 0, y: pieceTitleInView ? 0 : 20 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-white mb-6 font-light">
            THE PIECE
          </p>
          <div className="h-px w-16 bg-white mx-auto" />
        </motion.div>

        <div className="relative">
          {collectionItems.map((item) => (
            <motion.div
              key={item.id}
              ref={collectionItemRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: collectionItemInView ? 1 : 0, y: collectionItemInView ? 0 : 30 }}
              transition={{ duration: 1.5 }}
              className="relative group"
            >
              {/* The Artwork - Luxury Museum Frame */}
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
                  />
                </div>
              </div>

              {/* Plaque */}
              <motion.div
                ref={plaqueRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: plaqueInView ? 1 : 0 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-4"
              >
                <div>
                  <p className="text-xl font-bold mb-2 mt-6">
                    <span className="text-white">— </span>
                    <span className="text-white bg-black px-2 py-1 rounded-sm">BLACK</span>
                    <span className="text-white"> GENESIS —</span>
                  </p>
                  <div className="relative inline-flex flex-col items-center mb-6">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent" />
                    
                    <div className="relative px-8 py-4">
                      <p className="text-[10px] text-white font-light tracking-[0.3em] mb-3 text-center">
                        LIMITED EDITION
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-4xl font-thin text-white tracking-tight">4</span>
                        <span className="text-4xl font-thin text-white tracking-tight">/</span>
                        <span className="text-4xl font-thin text-white tracking-tight">15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      {/* CTA */}
        <motion.div
        ref={ctaRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: ctaInView ? 1 : 0 }}
        transition={{ duration: 1 }}
          className="text-center mt-0"
      >
        <motion.button
          onClick={openModal}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-black text-white uppercase tracking-wider text-sm font-medium hover:bg-gray-800 transition-all duration-300 glow-border rounded-lg"
        >
          SOLICITAR COMPRA →
        </motion.button>
          <p className="text-xs text-white font-light tracking-wide mt-4 text-center flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Quedan 11 unidades
        </p>
        </motion.div>
      </motion.section>

      {/* The Piece Title - Duplicate */}
      <motion.div 
        ref={processTitleRef}
        className="text-center mb-12 mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: processTitleInView ? 1 : 0, y: processTitleInView ? 0 : 20 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="text-xs uppercase tracking-[0.5em] text-white mb-6 font-light">
          THE PROCESS
        </p>
        <div className="h-px w-16 bg-white mx-auto" />
      </motion.div>

      {/* Timeline Story - Carousel */}
      <motion.section 
        className="mb-24 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="relative h-[700px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.3 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }: PanInfo) => {
                const swipe = swipePower(offset.x, velocity.x)
                handleSwipe(swipe)
              }}
              className="absolute w-full"
            >
              {/* 3D Box Effect - Recessed */}
              <div className="perspective-1000">
                <motion.div
                  className="transform-gpu bg-black/40 backdrop-blur-sm border-2 border-black/50 p-6 relative overflow-hidden rounded-lg"
                  style={{
                    boxShadow: 'inset 0 8px 32px 0 rgba(0,0,0,0.5), 0 4px 16px 0 rgba(0,0,0,0.3)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20 pointer-events-none" />
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-px bg-black/20" />
                      <span className="text-[10px] text-black font-light tracking-[0.3em] uppercase">
                        {timeline[currentIndex].year}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white leading-tight tracking-tight uppercase">
                      {timeline[currentIndex].title.split(' ').map((word, idx) => 
                        word.toLowerCase() === 'the' ? (
                          <span key={idx}>{word} </span>
                        ) : (
                          <span key={idx} className="text-black">{word} </span>
                        )
                      )}
                    </h2>
                    <p className="text-white/70 leading-relaxed text-sm font-light tracking-wide">
                      {timeline[currentIndex].text}
                    </p>

                    {/* Image with Frame */}
                    <div className="mt-4">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <div className="absolute inset-0 border border-black/30 rounded-lg" />
                        <div className="absolute inset-2 border border-white/10 rounded-lg" />
                        
                        <motion.img
                          src={timeline[currentIndex].image}
                          alt={timeline[currentIndex].title}
                          className={`w-full h-full object-cover relative z-0 ${currentIndex === 0 ? 'object-center' : 'object-bottom'}`}
                          style={{
                            filter: currentIndex === 0 
                              ? 'sepia(40%) contrast(1.2) brightness(0.5) saturate(0.8)'
                              : 'sepia(40%) contrast(1.2) brightness(0.7) saturate(0.8)',
                          }}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {currentIndex === 0 && (
                          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none" />
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
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 -mt-40">
          {timeline.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-black w-8' : 'bg-black/30 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.div
          className="flex justify-center mt-8 relative z-10"
        >
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-black text-white uppercase tracking-wider text-sm font-medium hover:bg-gray-800 transition-all duration-300 glow-border rounded-lg"
          >
            {currentIndex < timeline.length - 1 ? 'Next →' : 'View The Piece →'}
          </motion.button>
        </motion.div>
      </motion.section>
    </>
  )
}

"use client"

import { motion, PanInfo, AnimatePresence } from "framer-motion"
import { useState } from "react"
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
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl font-bold leading-[0.9] mb-4"
          >
            <span className="text-white block">THE</span>
            <span className="text-gold-300 block">FOUNDATION</span>
          </motion.h1>
          <p className="text-xs text-gold-300 uppercase tracking-widest font-light">
            "Future belongs to the few"
          </p>
        </motion.div>
      </motion.section>

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
                      <div className="w-16 h-px bg-gold/20" />
                      <span className="text-xs text-gold font-light tracking-widest">
                        {timeline[currentIndex].year}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white leading-tight">
                      {timeline[currentIndex].title}
                    </h2>
                    <p className="text-white/60 leading-relaxed text-base font-light">
                      {timeline[currentIndex].text}
                    </p>

                    {/* Image with Frame */}
                    <div className="mt-4">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <div className="absolute inset-0 border border-gold/30 rounded-lg" />
                        <div className="absolute inset-2 border border-white/10 rounded-lg" />
                        
                        <motion.img
                          src={timeline[currentIndex].image}
                          alt={timeline[currentIndex].title}
                          className={`w-full h-full object-cover relative z-0 ${currentIndex === 0 ? 'object-center' : 'object-bottom'}`}
                          style={{
                            filter: 'sepia(40%) contrast(1.2) brightness(0.7) saturate(0.8)',
                          }}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.6 }}
                        />
                        
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
                currentIndex === index ? 'bg-gold w-8' : 'bg-gold/30 w-2'
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
            className="px-8 py-3 bg-gold text-black uppercase tracking-wider text-sm font-medium hover:bg-gold-100 transition-all duration-300 glow-border rounded-lg"
          >
            {currentIndex < timeline.length - 1 ? 'Next →' : 'View The Piece →'}
          </motion.button>
        </motion.div>
      </motion.section>

      {/* The Artwork - Mona Lisa Presentation */}
      <motion.section 
        className="mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div 
          id="piece-section" 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  <div className="absolute inset-3 border border-gold/20" style={{
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-center mt-4"
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
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.button
          onClick={openModal}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 bg-gold text-black uppercase tracking-wider text-sm font-medium hover:bg-gold-100 transition-all duration-300 glow-border rounded-lg"
        >
          Request Access →
        </motion.button>
      </motion.section>
    </>
  )
}

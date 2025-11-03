"use client"

import { motion } from "framer-motion"
import { collectionItems, timeline } from "./data"
import { useAccessModal } from "@/contexts/access-modal-context"

interface CollectionDesktopProps {
  hoveredItem: number | null
  setHoveredItem: (id: number | null) => void
}

export function CollectionDesktop({ hoveredItem, setHoveredItem }: CollectionDesktopProps) {
  const { openModal } = useAccessModal()
  return (
    <>
      {/* Hero Title */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="mb-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6"
          >
            <span className="text-white block">THE</span>
            <span className="gradient-text block">FOUNDATION</span>
          </motion.h1>
          <p className="text-base md:text-lg text-white/50 font-serif italic tracking-normal">
            "Future belongs to the few"
          </p>
        </motion.div>
      </motion.section>

      {/* Timeline Story - Connected Journey */}
      <section className="mb-40 relative">
        <div className="space-y-32">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="relative"
            >
              {/* Connecting Line */}
              {index < timeline.length - 1 && (
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
          ))}
        </div>
      </section>

      {/* The Artwork - Mona Lisa Presentation */}
      <section className="mb-40">
        <div id="piece-section" className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.5em] text-gold/60 mb-8 font-light">
            THE PIECE
          </p>
          <div className="h-px w-24 bg-gold/20 mx-auto" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {collectionItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative group"
            >
              {/* The Artwork - Museum Frame */}
              <div className="relative aspect-[3/4] max-w-2xl mx-auto overflow-hidden rounded-lg">
                {/* Double frame effect */}
                <div className="absolute inset-0 border-2 border-gold/40 rounded-lg" />
                <div className="absolute inset-4 border border-white/20 rounded-lg" />
                
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover relative z-0"
                  animate={{
                    scale: hoveredItem === item.id ? 1.02 : 1,
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>

              {/* Plaque */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-center mt-12"
              >
                <div>
                  <p className="text-2xl font-bold text-white mb-1">
                    MIDNIGHT VENOM
                  </p>
                  <p className="text-xs text-white/30 font-light tracking-wide mb-4">
                    Hooded Sweatshirt · Edition of 50
                  </p>
                  <p className="text-xl font-light text-white">$850</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-gold text-black uppercase tracking-wider text-sm font-medium hover:bg-gold-100 transition-all duration-300 glow-border"
        >
          Request Access →
        </motion.button>
      </motion.section>
    </>
  )
}


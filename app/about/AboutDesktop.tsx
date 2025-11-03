"use client"

import { motion } from "framer-motion"
import { values } from "./data"

interface AboutDesktopProps {
  hoveredItem: number | null
  setHoveredItem: (id: number | null) => void
}

export function AboutDesktop({ hoveredItem, setHoveredItem }: AboutDesktopProps) {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="mb-24"
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
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            <span className="text-white">VALENZO</span>
          </motion.h1>
          <p className="text-xs text-gold-300 uppercase tracking-widest font-light">
            "The night has a name"
          </p>
        </motion.div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-32"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-white mb-8 font-light">
              THE STORY
            </h2>
            <div className="h-px w-16 bg-gold/30" />
            <p className="text-base text-white/70 leading-relaxed font-light">
              VALENZO CLUB nace de la cabeza de dos jóvenes que ven la repetición constante de 
              las prendas populares, como un problema en expansión. Esto le reduce el valor a 
              las prendas y el sentimiento de exclusividad en los individuos que las visten.
            </p>
            <p className="text-base text-white/70 leading-relaxed font-light">
              Es por ello, que se crea VALENZO, una empresa que tiene como único y principal 
              objetivo, <span className="text-white font-bold">la exclusividad de sus prendas y el sentimiento que estas accionan en 
              nuestra comunidad selecta de clientes.</span>
            </p>
            <p className="text-base text-white/70 leading-relaxed font-light italic border-l-4 border-gold/30 rounded-l pl-4">
              This is not fashion. This is access. This is VALENZO CLUB.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-gold-300 mb-6 font-light">
            OUR VALUES
          </h2>
          <div className="h-px w-16 bg-white mx-auto" />
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* 3D Recessed Box Effect */}
              <div className="perspective-1000">
                <motion.div
                  className={`transform-gpu bg-black/40 backdrop-blur-sm border-2 border-black/50 p-8 relative overflow-hidden rounded-lg transition-all duration-500 ${
                    hoveredItem === index ? 'border-gold/30' : ''
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
          ))}
        </div>
      </motion.section>
    </>
  )
}


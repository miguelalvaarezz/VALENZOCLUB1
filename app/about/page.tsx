"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { AboutPageContent } from "./AboutPageContent"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bgDark relative">
      <Navbar />
      
      {/* Background Image */}
      <motion.div 
        className="absolute left-0 right-0 bottom-0 top-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img 
          src="/images/revelation.JPG" 
          alt="" 
          className="w-full h-full object-cover opacity-50 object-center"
          style={{
            filter: 'sepia(40%) contrast(1.2) brightness(0.7) saturate(0.8)',
          }}
        />
      </motion.div>
      
      <AboutPageContent />
    </main>
  )
}

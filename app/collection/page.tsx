"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { CollectionPageContent } from "./CollectionPage"

export default function CollectionPage() {
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
          src="/images/fondoc.webp" 
          alt="" 
          className="w-full h-full object-cover opacity-10 object-center translate-y-[-30%] md:translate-y-0"
        />
      </motion.div>
      
      {/* Gradient background section */}
      <div className="absolute left-0 right-0 bottom-0 top-[150vh] z-0" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,1) 100%)',
      }} />
      
      <CollectionPageContent />
    </main>
  )
}

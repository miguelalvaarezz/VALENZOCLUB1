"use client"

import { Navbar } from "@/components/navbar"
import { AboutPageContent } from "./AboutPageContent"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bgDark relative">
      <Navbar />
      
      {/* Background Image */}
      <div className="absolute left-0 right-0 bottom-0 top-0 overflow-hidden">
        <img 
          src="/images/revelation.JPG" 
          alt="" 
          className="w-full h-full object-cover opacity-10 object-center"
          style={{
            filter: 'sepia(40%) contrast(1.2) brightness(0.7) saturate(0.8)',
          }}
        />
      </div>
      
      <AboutPageContent />
    </main>
  )
}

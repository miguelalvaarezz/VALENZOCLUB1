"use client"

import { Navbar } from "@/components/navbar"
import { CollectionPageContent } from "./CollectionPage"
import { PageLoader } from "@/components/PageLoader"

export default function CollectionPage() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-black relative">
        <Navbar />
        
        {/* Background Image */}
        <div 
          className="fixed left-0 right-0 bottom-0 top-0 overflow-hidden z-0"
          style={{
            willChange: 'auto',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          <img 
            src="/images/IMG_0083.JPG" 
            alt="" 
            className="w-full h-full opacity-35 object-top md:object-center"
            style={{
              minWidth: '100%',
              minHeight: '100%',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              willChange: 'auto',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          />
        </div>
        
        <div className="relative z-10">
        <CollectionPageContent />
        </div>
      </main>
    </PageLoader>
  )
}

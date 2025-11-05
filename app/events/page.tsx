"use client"

import { Navbar } from "@/components/navbar"
import { EventsDesktop } from "./EventsDesktop"
import { EventsMobile } from "./EventsMobile"
import { useMediaQuery } from "@/lib/hooks/useMediaQuery"
import { PageLoader } from "@/components/PageLoader"

export default function EventsPage() {
  const isMobile = useMediaQuery("(max-width: 767px)")

  return (
    <PageLoader>
      <main className="min-h-screen bg-bgDark">
        <Navbar />
        
        <div className="container mx-auto px-6 pt-32 pb-20">
          {isMobile ? <EventsMobile /> : <EventsDesktop />}
        </div>
      </main>
    </PageLoader>
  )
}

"use client"

import { useState } from "react"
import { AboutDesktop } from "./AboutDesktop"
import { AboutMobile } from "./AboutMobile"
import { useMediaQuery } from "@/lib/hooks/useMediaQuery"

export function AboutPageContent() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const isMobile = useMediaQuery("(max-width: 767px)")

  return (
    <div className="container mx-auto px-6 pt-32 pb-32 max-w-5xl relative z-10">
      {isMobile ? (
        <AboutMobile hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
      ) : (
        <AboutDesktop hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
      )}
    </div>
  )
}


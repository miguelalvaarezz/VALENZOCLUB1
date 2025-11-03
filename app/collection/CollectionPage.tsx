"use client"

import { useState } from "react"
import { CollectionDesktop } from "./CollectionDesktop"
import { CollectionMobile } from "./CollectionMobile"
import { useMediaQuery } from "@/lib/hooks/useMediaQuery"

export function CollectionPageContent() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const isMobile = useMediaQuery("(max-width: 767px)")

  return (
    <div className="container mx-auto px-6 pt-32 pb-32 max-w-5xl relative z-10">
      {isMobile ? (
        <CollectionMobile hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
      ) : (
        <CollectionDesktop hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
      )}
    </div>
  )
}


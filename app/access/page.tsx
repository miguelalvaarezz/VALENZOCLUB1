"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { AccessDesktop } from "./AccessDesktop"
import { AccessMobile } from "./AccessMobile"
import { useMediaQuery } from "@/lib/hooks/useMediaQuery"

export default function AccessPage() {
  const isMobile = useMediaQuery("(max-width: 767px)")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    reason: "",
    reference: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Here you would typically send the data to your backend
  }

  return (
    <main className="min-h-screen bg-bgDark">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          {isMobile ? (
            <AccessMobile 
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              submitted={submitted}
            />
          ) : (
            <AccessDesktop 
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              submitted={submitted}
            />
          )}
        </div>
      </div>
    </main>
  )
}

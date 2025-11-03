"use client"

import { useState, useEffect } from "react"
import { Loading } from "@/components/loading"
import { AccessModalProvider, useAccessModal } from "@/contexts/access-modal-context"
import { AccessModal } from "@/components/access-modal"

function ProvidersContent({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const { isOpen, closeModal } = useAccessModal()

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {children}
      <AccessModal isOpen={isOpen} onClose={closeModal} />
    </>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AccessModalProvider>
      <ProvidersContent>{children}</ProvidersContent>
    </AccessModalProvider>
  )
}


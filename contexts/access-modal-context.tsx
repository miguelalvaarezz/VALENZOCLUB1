"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface AccessModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const AccessModalContext = createContext<AccessModalContextType | undefined>(undefined)

export function AccessModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <AccessModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </AccessModalContext.Provider>
  )
}

export function useAccessModal() {
  const context = useContext(AccessModalContext)
  if (context === undefined) {
    throw new Error("useAccessModal must be used within an AccessModalProvider")
  }
  return context
}


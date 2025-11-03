"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Logo } from "@/components/logo"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Collection", href: "/collection" },
  { label: "About", href: "/about" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black"
    >
      <div className="container mx-auto px-6 py-6 flex items-center justify-between relative">
        {/* Spacer for mobile to balance layout */}
        {!isHomePage && <div className="md:hidden w-6" />}

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-sm font-light tracking-wider uppercase hover:text-gold transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        {!isHomePage && (
          <>
            <button
              className="md:hidden text-white hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="absolute top-full left-0 right-0 glass-effect md:hidden"
              >
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-light tracking-wider uppercase hover:text-gold transition-colors duration-300 py-2 border-b border-white/10"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </motion.nav>
  )
}


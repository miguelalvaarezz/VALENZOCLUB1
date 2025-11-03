"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/valenzoclub", label: "Instagram" },
]

const footerLinks = {
  shop: ["Collection", "New Arrivals", "Accessories"],
  about: ["Our Story", "Events", "Membership"],
  legal: ["Privacy Policy", "Terms of Service", "FAQ"],
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 mb-12 justify-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-center"
          >
            <h3 className="text-2xl font-bold gradient-text">VALENZO CLUB</h3>
            <p className="text-sm text-foreground/60">
              The night has a name. Access granted to the elite.
            </p>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-foreground/60 hover:text-gold transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-foreground/50">
            © 2025 VALENZO CLUB. All rights reserved. Access by invitation only.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}


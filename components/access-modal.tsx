"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface AccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AccessModal({ isOpen, onClose }: AccessModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Construir el mensaje de WhatsApp
    const whatsappMessage = `Buenas, soy ${formData.name} y quiero acceder a la compra de la hoodie "BLACK GENESIS".\n\n¿Cómo nos conociste?: ${formData.message}\nEmail: ${formData.email}`
    
    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Número de WhatsApp sin el símbolo +
    const phoneNumber = "34695537321"
    
    // Construir la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Abrir WhatsApp en una nueva pestaña/ventana
    window.open(whatsappUrl, '_blank')
    
    // Cerrar el modal
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-black border-2 border-gold/30 rounded-lg p-8 w-full max-w-md pointer-events-auto relative"
              style={{
                boxShadow: '0 0 40px rgba(0,0,0,0.8), inset 0 1px 2px rgba(255,255,255,0.1)',
                maxHeight: '90vh',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 120px)' }}>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Request Access</h2>
                  <p className="text-sm text-white/60 mb-6">
                    Presenta tu solicitud para comprar
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/80 mb-2">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-white/80 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-white/80 mb-2">
                      ¿Cómo nos conociste?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full resize-none text-base"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    variant="glow"
                    className="flex-1"
                  >
                    Enviar Solicitud
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}


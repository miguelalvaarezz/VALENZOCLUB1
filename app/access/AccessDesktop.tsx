"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

interface AccessDesktopProps {
  formData: {
    name: string
    email: string
    age: string
    reason: string
    reference: string
  }
  setFormData: (data: any) => void
  handleSubmit: (e: React.FormEvent) => void
  submitted: boolean
}

export function AccessDesktop({ formData, setFormData, handleSubmit, submitted }: AccessDesktopProps) {
  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center glass-effect glow-border p-12 rounded-lg max-w-md mx-auto"
      >
        <CheckCircle className="h-20 w-20 text-gold mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Application Received</h2>
        <p className="text-foreground/70 mb-6">
          We've received your application. Our team will review it and get back to you
          within 48 hours.
        </p>
        <p className="text-sm text-foreground/50">
          Limited spots available. Only the elite will make it.
        </p>
      </motion.div>
    )
  }

  return (
    <>
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-7xl font-bold mb-6 gradient-text">
          ACCESS
        </h1>
        <p className="text-xl text-foreground/70 uppercase tracking-widest mb-4">
          Membership is Limited
        </p>
        <p className="text-foreground/60 max-w-xl mx-auto">
          Apply now to join the elite. Only those who truly understand what we're
          building will be granted access.
        </p>
      </div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="glass-effect glow-border p-12 rounded-lg"
      >
        <div className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-sm uppercase tracking-wider mb-3 block">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm uppercase tracking-wider mb-3 block">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="age" className="text-sm uppercase tracking-wider mb-3 block">
              Age
            </Label>
            <Input
              id="age"
              name="age"
              type="number"
              placeholder="18-24"
              min="18"
              max="24"
              required
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="reason" className="text-sm uppercase tracking-wider mb-3 block">
              Why VALENZO CLUB?
            </Label>
            <Textarea
              id="reason"
              name="reason"
              placeholder="Tell us why you belong here..."
              required
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              rows={5}
            />
          </div>

          <div>
            <Label htmlFor="reference" className="text-sm uppercase tracking-wider mb-3 block">
              How did you hear about us?
            </Label>
            <Input
              id="reference"
              name="reference"
              type="text"
              placeholder="Friend, Event, Social Media..."
              value={formData.reference}
              onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              variant="glow"
              size="lg"
              className="w-full"
            >
              Submit Application
            </Button>
          </div>

          <p className="text-xs text-foreground/50 text-center">
            By submitting this form, you agree to our terms and privacy policy.
          </p>
        </div>
      </motion.form>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-foreground/50 italic">
          "Not everyone will make it. That's by design."
        </p>
      </motion.div>
    </>
  )
}


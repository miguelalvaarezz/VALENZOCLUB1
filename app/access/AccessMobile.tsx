"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

interface AccessMobileProps {
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

export function AccessMobile({ formData, setFormData, handleSubmit, submitted }: AccessMobileProps) {
  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center glass-effect glow-border p-8 rounded-lg"
      >
        <CheckCircle className="h-16 w-16 text-gold mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-3">Application Received</h2>
        <p className="text-foreground/70 mb-4 text-sm">
          We've received your application. Our team will review it and get back to you
          within 48 hours.
        </p>
        <p className="text-xs text-foreground/50">
          Limited spots available. Only the elite will make it.
        </p>
      </motion.div>
    )
  }

  return (
    <>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 gradient-text">
          ACCESS
        </h1>
        <p className="text-base text-foreground/70 uppercase tracking-widest mb-3">
          Membership is Limited
        </p>
        <p className="text-foreground/60 text-sm">
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
        className="glass-effect glow-border p-6 rounded-lg"
      >
        <div className="space-y-5">
          <div>
            <Label htmlFor="name" className="text-xs uppercase tracking-wider mb-2 block">
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
            <Label htmlFor="email" className="text-xs uppercase tracking-wider mb-2 block">
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
            <Label htmlFor="age" className="text-xs uppercase tracking-wider mb-2 block">
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
            <Label htmlFor="reason" className="text-xs uppercase tracking-wider mb-2 block">
              Why VALENZO CLUB?
            </Label>
            <Textarea
              id="reason"
              name="reason"
              placeholder="Tell us why you belong here..."
              required
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="reference" className="text-xs uppercase tracking-wider mb-2 block">
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

          <div className="pt-2">
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
        className="mt-8 text-center"
      >
        <p className="text-xs text-foreground/50 italic">
          "Not everyone will make it. That's by design."
        </p>
      </motion.div>
    </>
  )
}


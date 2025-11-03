"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"
import { events } from "./data"

export function EventsMobile() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-3 gradient-text">
          EVENTS
        </h1>
        <p className="text-sm text-foreground/70 uppercase tracking-widest">
          Exclusive Invites
        </p>
      </motion.div>

      {/* Events Grid */}
      <div className="space-y-6 mb-12">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg glow-border glass-effect"
          >
            <div className="relative h-64">
              <motion.img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 glass-effect">
                    <span className="text-xs uppercase tracking-wider text-gold">
                      {event.guests}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold">{event.title}</h2>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gold" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center glass-effect p-8 rounded-lg glow-border"
      >
        <h3 className="text-2xl font-bold mb-3">
          Want access?
        </h3>
        <p className="text-foreground/70 mb-6 text-sm">
          Join the club and get invited.
        </p>
        <motion.a
          href="/access"
          className="inline-block px-6 py-3 bg-gold text-black uppercase tracking-wider hover:bg-gold-100 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Apply Now
        </motion.a>
      </motion.div>
    </>
  )
}


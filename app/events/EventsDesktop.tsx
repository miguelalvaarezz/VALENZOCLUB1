"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"
import { events } from "./data"

export function EventsDesktop() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-7xl font-bold mb-4 gradient-text">
          EVENTS
        </h1>
        <p className="text-lg text-foreground/70 uppercase tracking-widest">
          Exclusive Invites
        </p>
      </motion.div>

      {/* Events Grid */}
      <div className="grid grid-cols-2 gap-8 mb-20">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-lg glow-border glass-effect cursor-pointer"
          >
            <div className="relative h-96">
              <motion.img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div>
                  <motion.div
                    className="inline-block px-4 py-2 glass-effect mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-xs uppercase tracking-wider text-gold">
                      {event.guests}
                    </span>
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-6">{event.title}</h2>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gold" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gold" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-gold" />
                    <span className="text-sm">{event.guests}</span>
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
        className="text-center glass-effect p-12 rounded-lg glow-border"
      >
        <h3 className="text-3xl font-bold mb-4">
          Want access to our events?
        </h3>
        <p className="text-foreground/70 mb-8">
          Join the club and get invited to our exclusive gatherings.
        </p>
        <motion.a
          href="/access"
          className="inline-block px-8 py-4 bg-gold text-black uppercase tracking-wider hover:bg-gold-100 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now
        </motion.a>
      </motion.div>
    </>
  )
}


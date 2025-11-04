import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events - Exclusive Gatherings",
  description: "Join VALENZO CLUB's exclusive events and gatherings. Access to premium fashion shows, private parties, and elite networking opportunities.",
  keywords: ["VALENZO CLUB events", "exclusive fashion events", "elite gatherings", "fashion shows", "private events"],
  openGraph: {
    title: "VALENZO CLUB Events - Exclusive Gatherings",
    description: "Join exclusive events and gatherings for VALENZO CLUB members",
    url: "https://valenzoclub.com/events",
    images: ["/images/events-og.jpg"],
  },
  alternates: {
    canonical: "https://valenzoclub.com/events",
  },
}

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


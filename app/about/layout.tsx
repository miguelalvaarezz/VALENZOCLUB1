import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Our Story",
  description: "Learn about VALENZO CLUB's history, values, and mission. Discover how we became the most exclusive fashion community.",
  keywords: ["VALENZO CLUB about", "fashion brand history", "luxury fashion brand", "exclusive fashion community"],
  openGraph: {
    title: "About VALENZO CLUB - Our Story",
    description: "Learn about VALENZO CLUB's history and mission",
    url: "https://valenzoclub.com/about",
    images: ["/images/about-og.jpg"],
  },
  alternates: {
    canonical: "https://valenzoclub.com/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


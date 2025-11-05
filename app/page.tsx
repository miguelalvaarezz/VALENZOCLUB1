import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { PageLoaderWrapper } from "@/components/PageLoader"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VALENZO CLUB | Access the Night - Exclusive Fashion & Elite Membership",
  description: "We don't sell clothes — we sell access. Join VALENZO CLUB and become part of the most exclusive fashion community. Limited edition drops, exclusive events, and elite membership.",
  keywords: ["VALENZO CLUB", "exclusive fashion", "elite fashion", "luxury clothing", "limited edition", "fashion membership"],
  openGraph: {
    title: "VALENZO CLUB | Access the Night",
    description: "We don't sell clothes — we sell access. Exclusive fashion for the elite.",
    url: "https://valenzoclub.com",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://valenzoclub.com",
  },
}

export default function Home() {
  return (
    <PageLoaderWrapper>
      <main className="relative">
        <Navbar />
        <Hero />
        <Footer />
      </main>
    </PageLoaderWrapper>
  )
}


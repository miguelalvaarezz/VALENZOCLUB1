import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Collection - Limited Edition Drops",
  description: "Discover VALENZO CLUB's exclusive limited edition fashion collection. Browse our curated selection of premium pieces available only to club members.",
  keywords: ["VALENZO CLUB collection", "limited edition fashion", "exclusive clothing", "premium fashion", "elite fashion"],
  openGraph: {
    title: "VALENZO CLUB Collection - Limited Edition Drops",
    description: "Browse our exclusive limited edition fashion collection",
    url: "https://valenzoclub.com/collection",
    images: ["/images/collection-og.jpg"],
  },
  alternates: {
    canonical: "https://valenzoclub.com/collection",
  },
}

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Access - Request Membership",
  description: "Request exclusive access to VALENZO CLUB. Join the elite fashion community and gain access to limited edition drops and exclusive events.",
  keywords: ["VALENZO CLUB membership", "request access", "elite membership", "exclusive access", "fashion club membership"],
  openGraph: {
    title: "Request Access to VALENZO CLUB",
    description: "Request exclusive access to VALENZO CLUB membership",
    url: "https://valenzoclub.com/access",
    images: ["/images/access-og.jpg"],
  },
  alternates: {
    canonical: "https://valenzoclub.com/access",
  },
}

export default function AccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


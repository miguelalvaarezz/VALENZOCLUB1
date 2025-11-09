import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === "/") {
    return NextResponse.next()
  }

  if (
    pathname.startsWith("/password") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/videos")
  ) {
    return NextResponse.next()
  }

  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next()
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = "/password"
  url.search = ""

  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|videos|robots.txt|sitemap.xml).*)",
  ],
}


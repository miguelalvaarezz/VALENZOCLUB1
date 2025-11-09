import { NextResponse } from "next/server"
import { savePasswordEmail } from "@/lib/db/password"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = typeof body.email === "string" ? body.email : ""

    await savePasswordEmail(email)

    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof Error) {
      const status = error.message.includes("registrado") || error.message.includes("válido") ? 400 : 500
      return NextResponse.json(
        { ok: false, message: error.message },
        { status }
      )
    }

    return NextResponse.json(
      { ok: false, message: "Error desconocido" },
      { status: 500 }
    )
  }
}


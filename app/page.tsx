import { redirect } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acceso Anticipado | VALENZO CLUB",
  description:
    "Desbloquea el acceso anticipado a VALENZO CLUB. Regístrate para conocer BLUE GENESIS II antes que nadie.",
}

export default function Home() {
  redirect("/password")
}


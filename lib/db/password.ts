import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL) {
  throw new Error(
    "Falta la variable NEXT_PUBLIC_SUPABASE_URL. Configúrala en tu entorno."
  )
}

if (!SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error(
    "Falta la variable SUPABASE_SERVICE_ROLE_KEY. Configúrala en tu entorno."
  )
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
})

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

export async function savePasswordEmail(email: string) {
  const trimmedEmail = email.trim().toLowerCase()

  if (!trimmedEmail) {
    throw new Error("Email vacío")
  }

  if (!emailRegex.test(trimmedEmail)) {
    throw new Error("Email inválido")
  }

  const { error } = await supabase.from("password_subscriptions").insert({
    email: trimmedEmail,
    created_at: new Date().toISOString(),
  })

  if (error) {
    if (error.code === "23505" || error.message?.includes("duplicate")) {
      throw new Error("Este email ya está registrado")
    }

    throw new Error(
      error.message || "No se pudo guardar el email. Intenta más tarde."
    )
  }
}


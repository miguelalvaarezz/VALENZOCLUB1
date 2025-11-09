import { FormEvent } from "react"
import { Logo } from "@/components/logo"
import { SubmissionStatus, TimeLeft } from "./types"

interface PasswordMobileProps {
  timeLeft: TimeLeft
  email: string
  onEmailChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  status: SubmissionStatus
  feedback: string
}

export function PasswordMobile({
  timeLeft,
  email,
  onEmailChange,
  onSubmit,
  status,
  feedback,
}: PasswordMobileProps) {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/IMG_0083.JPG)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" aria-hidden="true" />

      <header className="absolute inset-x-0 top-0 z-20 flex justify-center py-6">
        <Logo />
      </header>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <div className="w-full max-w-sm text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/70">
            001 | DROP
          </p>

          <p className="mt-6 text-2xl font-semibold tracking-[0.35em]">
            <span className="text-white bg-[#0b1b33] pl-2 pr-1 py-1 rounded-sm">BLUE</span>
            <span className="text-white">&nbsp;GENESIS II</span>
          </p>
          <p className="mt-4 text-base font-light text-white/80">
            La representación del inicio de Valenzo. La primera etapa hacia lo más alto del{" "}
            <span className="font-semibold italic">nightlife mundial</span>.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center justify-center gap-6 text-[10px] uppercase tracking-[0.35em] text-white/70">
              <span>Días</span>
              <span>Horas</span>
              <span>Minutos</span>
              <span>Segundos</span>
            </div>
            <div className="flex items-center justify-center gap-6 text-3xl font-semibold tracking-[0.25em]">
              <span>{String(timeLeft.days).padStart(2, "0")}</span>
              <span>{String(timeLeft.hours).padStart(2, "0")}</span>
              <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>
          </div>

          <form className="mt-10 flex w-full flex-col gap-3" onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(event) => onEmailChange(event.target.value)}
              className="w-full rounded-full border border-white/30 bg-black/50 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className={`rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition ${
                status === "loading"
                  ? "cursor-not-allowed opacity-70"
                  : "hover:bg-white/90"
              }`}
            >
              {status === "loading" ? "Guardando..." : "Acceso anticipado"}
            </button>
          </form>

          {feedback && (
            <p
              className={`mt-4 text-xs ${
                status === "error" ? "text-red-400" : "text-emerald-300"
              }`}
              aria-live="polite"
            >
              {feedback}
            </p>
          )}

          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/60 underline decoration-white/40 underline-offset-4">
            Entrar con contraseña
          </p>
        </div>
      </section>
    </main>
  )
}


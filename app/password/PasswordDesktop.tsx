import { FormEvent } from "react"
import { Logo } from "@/components/logo"
import { SubmissionStatus, TimeLeft } from "./types"

interface PasswordDesktopProps {
  timeLeft: TimeLeft
  email: string
  onEmailChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  status: SubmissionStatus
  feedback: string
}

export function PasswordDesktop({
  timeLeft,
  email,
  onEmailChange,
  onSubmit,
  status,
  feedback,
}: PasswordDesktopProps) {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/IMG_0083.JPG)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

      <header className="absolute inset-x-0 top-0 z-20 flex justify-center py-8">
        <Logo />
      </header>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
        <div className="max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-white/70">
            001 | DROP
          </p>

          <p className="mt-8 text-3xl font-semibold tracking-[0.4em] sm:text-4xl">
            <span className="text-white bg-[#0b1b33] pl-3 pr-2 py-1 rounded-sm">BLUE</span>
            <span className="text-white">&nbsp;GENESIS II</span>
          </p>
          <p className="mt-6 text-lg font-light text-white/80 sm:text-xl">
            La representación del inicio de Valenzo. La primera etapa hacia lo más alto del{" "}
            <span className="font-semibold italic">nightlife mundial</span>.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-12 text-center">
            <TimeValue label="Días" value={timeLeft.days} />
            <TimeValue label="Horas" value={timeLeft.hours} />
            <TimeValue label="Minutos" value={timeLeft.minutes} />
            <TimeValue label="Segundos" value={timeLeft.seconds} />
          </div>

          <form className="mx-auto mt-12 flex max-w-xl flex-col gap-3" onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(event) => onEmailChange(event.target.value)}
              className="w-full rounded-full border border-white/30 bg-black/40 px-6 py-3 text-base text-white placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-0"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition sm:w-auto ${
                  status === "loading"
                    ? "cursor-not-allowed opacity-70"
                    : "hover:bg-white/90"
                }`}
              >
                {status === "loading" ? "Guardando..." : "Acceso anticipado"}
              </button>
            </div>
          </form>

          {feedback && (
            <p
              className={`mt-4 text-sm ${
                status === "error" ? "text-red-400" : "text-emerald-300"
              }`}
              aria-live="polite"
            >
              {feedback}
            </p>
          )}

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/60 underline decoration-white/40 underline-offset-4">
            Entrar con contraseña
          </p>
        </div>
      </section>
    </main>
  )
}

function TimeValue({ label, value }: { label: string; value: number }) {
  const formatted = String(value).padStart(2, "0")
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-5xl font-semibold tracking-[0.2em]">{formatted}</span>
      <span className="text-xs uppercase tracking-[0.35em] text-white/70">
        {label}
      </span>
    </div>
  )
}


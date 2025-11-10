"use client"

import { FormEvent, useEffect, useMemo, useState } from "react"
import { useMediaQuery } from "@/lib/hooks/useMediaQuery"
import { PasswordDesktop } from "./PasswordDesktop"
import { PasswordMobile } from "./PasswordMobile"
import { SubmissionStatus, TimeLeft } from "./types"

const TARGET_DATE_ISO = "2025-11-13T20:00:00-01:00"

export default function PasswordPage() {
  const isMobile = useMediaQuery("(max-width: 767px)")

  const targetDate = useMemo(() => new Date(TARGET_DATE_ISO), [])

  const calculateTimeLeft = (target: Date): TimeLeft => {
    const diff = target.getTime() - Date.now()
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    return { days, hours, minutes, seconds }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate)
  )
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<SubmissionStatus>("idle")
  const [feedback, setFeedback] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (status !== "idle") {
      setStatus("idle")
      setFeedback("")
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = email.trim()

    if (!trimmed) {
      setStatus("error")
      setFeedback("Introduce un email válido.")
      return
    }

    setStatus("loading")
    setFeedback("")

    try {
      const response = await fetch("/api/password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmed }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.message ?? "No se pudo guardar el email.")
      }

      setStatus("success")
      setFeedback("Te avisaremos en cuanto se desbloquee el acceso.")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setFeedback(
        error instanceof Error
          ? error.message
          : "Ocurrió un error inesperado. Inténtalo de nuevo."
      )
    }
  }

  const sharedProps = {
    timeLeft,
    email,
    onEmailChange: handleEmailChange,
    onSubmit: handleSubmit,
    status,
    feedback,
  }

  return isMobile ? (
    <PasswordMobile {...sharedProps} />
  ) : (
    <PasswordDesktop {...sharedProps} />
  )
}

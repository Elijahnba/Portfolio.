"use client"

export default function ContactButtons() {
  const handleCalendlyClick = () => {
    window.open("https://calendly.com", "_blank")
  }

  const handleIntercomClick = () => {
    window.open("https://intercom.com", "_blank")
  }

  const handleEmailClick = () => {
    window.open("mailto:info@digitalwhirl.com", "_blank")
  }

  return {
    handleCalendlyClick,
    handleIntercomClick,
    handleEmailClick,
  }
}

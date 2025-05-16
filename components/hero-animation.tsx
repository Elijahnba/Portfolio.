"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = "#ffffff"
        this.opacity = Math.random() * 0.5 + 0.3
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.2) this.size -= 0.01
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle =
          this.color +
          Math.floor(this.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()
      }
    }

    // Create particles
    let particles: Particle[] = []
    const particleCount = 100

    const init = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() * canvas.width) / devicePixelRatio
        const y = (Math.random() * canvas.height) / devicePixelRatio
        particles.push(new Particle(x, y))
      }
    }

    const devicePixelRatio = window.devicePixelRatio || 1
    init()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        // Regenerate particles that are too small or out of bounds
        if (
          particles[i].size <= 0.2 ||
          particles[i].x < 0 ||
          particles[i].x > canvas.width / devicePixelRatio ||
          particles[i].y < 0 ||
          particles[i].y > canvas.height / devicePixelRatio
        ) {
          particles[i] = new Particle(
            (Math.random() * canvas.width) / devicePixelRatio,
            (Math.random() * canvas.height) / devicePixelRatio,
          )
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="relative w-full h-[500px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="glassmorphism-dark rounded-full w-32 h-32 flex items-center justify-center"
        >
          <div className="text-gradient font-heading text-4xl font-bold">DW</div>
        </motion.div>
      </div>
    </div>
  )
}

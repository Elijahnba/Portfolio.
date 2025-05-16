"use client"

import { useEffect, useRef } from "react"

export default function ScrollAnimations() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Background particles animation
    const createParticles = () => {
      const bgAnimation = document.createElement("div")
      bgAnimation.className = "bg-animation"
      document.body.appendChild(bgAnimation)

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div")
        particle.className = "bg-animation-particle"

        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`

        // Random position
        particle.style.left = `${Math.random() * 100}vw`
        particle.style.top = `${Math.random() * 100}vh`

        // Random opacity
        particle.style.opacity = `${Math.random() * 0.5}`

        bgAnimation.appendChild(particle)
      }
    }

    // Scroll animations
    const handleScroll = () => {
      // Update scroll indicator
      if (scrollIndicatorRef.current) {
        const scrollTop = window.scrollY
        const docHeight = document.body.offsetHeight - window.innerHeight
        const scrollPercent = (scrollTop / docHeight) * 100
        scrollIndicatorRef.current.style.width = `${scrollPercent}%`
      }

      // Animate elements when they come into view
      const animateElements = document.querySelectorAll(".animate-on-scroll")
      animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible")
        }
      })

      // Parallax effect for certain elements
      const parallaxElements = document.querySelectorAll(".parallax")
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || "0.1"
        const yPos = -(window.scrollY * Number.parseFloat(speed))
        element.setAttribute("style", `transform: translateY(${yPos}px)`)
      })
    }

    // Move particles on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const particles = document.querySelectorAll(".bg-animation-particle")
      particles.forEach((particle, index) => {
        const speed = (index % 5) * 0.01
        const x = e.clientX * speed
        const y = e.clientY * speed

        const particleElement = particle as HTMLElement
        particleElement.style.transform = `translate(${x}px, ${y}px)`
      })
    }

    createParticles()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    // Initial check for elements in view
    setTimeout(() => {
      handleScroll()
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      const bgAnimation = document.querySelector(".bg-animation")
      if (bgAnimation) {
        document.body.removeChild(bgAnimation)
      }
    }
  }, [])

  return <div ref={scrollIndicatorRef} className="scroll-indicator" />
}

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
  { name: "Company 1", src: "/placeholder.svg?height=60&width=120" },
  { name: "Company 2", src: "/placeholder.svg?height=60&width=120" },
  { name: "Company 3", src: "/placeholder.svg?height=60&width=120" },
  { name: "Company 4", src: "/placeholder.svg?height=60&width=120" },
  { name: "Company 5", src: "/placeholder.svg?height=60&width=120" },
  { name: "Company 6", src: "/placeholder.svg?height=60&width=120" },
]

export default function ClientLogos() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap md:flex-nowrap">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="w-24 md:w-32 h-12 md:h-16 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image src={logo.src || "/placeholder.svg"} alt={logo.name} fill className="object-contain" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

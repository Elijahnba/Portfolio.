"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "DigitalWhirl transformed our online presence completely. Our website traffic increased by 50% and conversions by 35% within just three months of launch.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, GrowthLabs",
    content:
      "The team at DigitalWhirl doesn't just build websites, they build business solutions. Their strategic approach to our digital marketing has been a game-changer.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, StyleHouse",
    content:
      "Working with DigitalWhirl was the best decision we made for our e-commerce business. The website is beautiful, fast, and most importantly, it converts visitors into customers.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Partner, Wilson & Associates",
    content:
      "As a law firm, we needed a website that conveyed professionalism and trust. DigitalWhirl delivered exactly that, plus a significant increase in qualified leads.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Jessica Lee",
    role: "CMO, InnovateX",
    content:
      "The SEO strategy implemented by DigitalWhirl has put us on the first page of Google for our key search terms. The ROI has been exceptional.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
      <div className="overflow-hidden relative">
        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-4xl mx-auto glassmorphism rounded-lg p-8 md:p-12"
            >
              <div className="flex flex-col items-center text-center">
                <Quote className="h-12 w-12 text-primary/40 mb-6" />
                <p className="text-lg md:text-xl mb-8">"{testimonials[current].content}"</p>
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage
                    src={testimonials[current].avatar || "/placeholder.svg"}
                    alt={testimonials[current].name}
                  />
                  <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-heading font-semibold text-lg">{testimonials[current].name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-primary w-4" : "bg-muted"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

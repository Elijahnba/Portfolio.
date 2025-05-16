"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import * as LucideIcons from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: keyof typeof LucideIcons
  link: string
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  const Icon = LucideIcons[icon]

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative rounded-lg border border-border/40 p-6 transition-all hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 font-heading text-xl font-semibold">{title}</h3>
      <p className="mb-6 text-sm text-muted-foreground">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </motion.div>
  )
}

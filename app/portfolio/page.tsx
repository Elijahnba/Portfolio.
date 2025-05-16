import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="rounded-full">
              All
            </Button>
            <Button variant="ghost" className="rounded-full">
              Web Design
            </Button>
            <Button variant="ghost" className="rounded-full">
              E-commerce
            </Button>
            <Button variant="ghost" className="rounded-full">
              SaaS
            </Button>
            <Button variant="ghost" className="rounded-full">
              Law Firms
            </Button>
            <Button variant="ghost" className="rounded-full">
              Real Estate
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg border border-border/40">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Law Firm Website"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2">Modern Law Firm Website</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A conversion-focused website for a prestigious law firm.
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/portfolio/law-firm">View Case Study</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg border border-border/40">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="E-commerce Website"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2">E-commerce Platform</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A high-converting online store with seamless checkout experience.
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/portfolio/ecommerce">View Case Study</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg border border-border/40">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="SaaS Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2">SaaS Dashboard</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    An intuitive dashboard for a growing SaaS company.
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/portfolio/saas">View Case Study</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative overflow-hidden rounded-lg border border-border/40">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Real Estate Website"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2">Real Estate Platform</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A property listing website with advanced search functionality.
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/portfolio/real-estate">View Case Study</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group relative overflow-hidden rounded-lg border border-border/40">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Restaurant Website"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2">Restaurant Website</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A mouth-watering website with online reservation system.
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/portfolio/restaurant">View Case Study</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group relative overflow-hidden rounded-lg border border-border/40">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Healthcare Website"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2">Healthcare Provider</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A trustworthy website with appointment scheduling system.
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/portfolio/healthcare">View Case Study</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Project Process</h2>
            <p className="text-muted-foreground">How we turn your vision into a successful digital reality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-sm text-muted-foreground">
                We learn about your business, goals, and target audience to create a strategic plan.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Design</h3>
              <p className="text-sm text-muted-foreground">
                We create wireframes and visual designs that align with your brand and conversion goals.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Development</h3>
              <p className="text-sm text-muted-foreground">
                We build your website using the latest technologies for optimal performance.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Launch</h3>
              <p className="text-sm text-muted-foreground">
                We thoroughly test and launch your website, then provide ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8">Let's discuss how we can help you achieve your digital goals.</p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown, CheckCircle, ExternalLink } from "lucide-react"
import HeroAnimation from "@/components/hero-animation"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ServiceCard from "@/components/service-card"
import ClientLogos from "@/components/client-logos"
import FaqSection from "@/components/faq-section"
import LeadMagnetForm from "@/components/lead-magnet-form"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-primary/5 blur-3xl rounded-full transform -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-3xl rounded-full transform translate-y-1/2" />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                We Build <span className="text-gradient">Growth Engines</span> — Not Just Websites.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                At DigitalWhirl.com, we deliver conversion-optimized, SEO-powered digital solutions that make businesses
                unstoppable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/free-guide">
                    Get the Ultimate Guide (Free) <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-12 flex items-center justify-center lg:justify-start">
                <Button variant="ghost" size="sm" className="animate-bounce">
                  <ArrowDown className="mr-2 h-4 w-4" /> Scroll to explore
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 md:py-20 border-y border-border/40 bg-background/50">
        <div className="container">
          <h2 className="text-center font-heading text-2xl font-semibold mb-12">Trusted By Innovative Businesses</h2>
          <ClientLogos />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Comprehensive Digital Services</h2>
            <p className="text-muted-foreground">
              From stunning web design to powerful marketing strategies, we offer end-to-end solutions to help your
              business thrive online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Design"
              description="Stunning, conversion-focused designs that captivate your audience and drive results."
              icon="Palette"
              link="/services/web-design"
            />
            <ServiceCard
              title="Web Development"
              description="Custom, high-performance websites built with cutting-edge technologies."
              icon="Code"
              link="/services/web-development"
            />
            <ServiceCard
              title="SEO"
              description="Data-driven strategies to improve your visibility and drive organic traffic."
              icon="Search"
              link="/services/seo"
            />
            <ServiceCard
              title="CRO"
              description="Optimize your website to convert more visitors into customers."
              icon="TrendingUp"
              link="/services/cro"
            />
            <ServiceCard
              title="Email Marketing"
              description="Targeted campaigns that nurture leads and drive repeat business."
              icon="Mail"
              link="/services/email-marketing"
            />
            <ServiceCard
              title="Graphic Design"
              description="Eye-catching visuals that strengthen your brand identity."
              icon="Image"
              link="/services/graphic-design"
            />
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Why Choose DigitalWhirl?</h2>
              <p className="text-muted-foreground mb-8">
                We're not just another agency. We're your growth partner, committed to delivering measurable results
                that impact your bottom line.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Proven Results</h3>
                    <p className="text-sm text-muted-foreground">
                      50% traffic increase and 30% conversion boost for our clients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      Over 3 years of experience in web design and digital marketing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Cutting-Edge Technology</h3>
                    <p className="text-sm text-muted-foreground">
                      We use the latest tools and frameworks to build fast, secure websites.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Personalized Approach</h3>
                    <p className="text-sm text-muted-foreground">
                      Tailored strategies designed specifically for your business goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden border border-border/40 shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Digital marketing dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-lg border border-primary/20 -z-10" />
              <div className="absolute -top-6 -left-6 w-full h-full rounded-lg border border-accent/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              Take a look at some of our recent work that has helped businesses achieve their digital goals.
            </p>
          </div>

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
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Get answers to common questions about our services, process, and pricing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqSection />
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10 border-y border-border/40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Get The Ultimate Web Design & Marketing Guide
              </h2>
              <p className="text-muted-foreground mb-8">
                Learn the secrets to creating a high-converting website and effective marketing strategy. This free
                guide includes actionable tips you can implement today.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Proven strategies to increase your website conversion rate
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      SEO techniques that will help you rank higher in search results
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Email marketing templates that drive engagement and sales
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Design principles that create trust and credibility</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glassmorphism rounded-lg p-8">
                <LeadMagnetForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's work together to create a website and marketing strategy that drives real business results.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

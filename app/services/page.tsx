import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import ServiceCard from "@/components/service-card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive digital solutions to help your business thrive online.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
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
            <ServiceCard
              title="Hosting"
              description="Fast, secure, and reliable hosting solutions for your website."
              icon="Server"
              link="/services/hosting"
            />
            <ServiceCard
              title="PPC"
              description="Targeted pay-per-click campaigns that drive qualified traffic and leads."
              icon="MousePointerClick"
              link="/services/ppc"
            />
            <ServiceCard
              title="Google My Business"
              description="Optimize your local presence and attract nearby customers."
              icon="MapPin"
              link="/services/google-my-business"
            />
            <ServiceCard
              title="Project Management"
              description="Efficient project management to ensure your digital initiatives stay on track."
              icon="ClipboardList"
              link="/services/project-management"
            />
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Web Design & Development</h2>
              <p className="text-muted-foreground mb-6">
                Our web design and development services combine stunning visuals with powerful functionality to create
                websites that not only look great but also drive real business results.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Custom Design</h3>
                    <p className="text-sm text-muted-foreground">Tailored to your brand identity and business goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Responsive</h3>
                    <p className="text-sm text-muted-foreground">Optimized for all devices and screen sizes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">SEO-Friendly</h3>
                    <p className="text-sm text-muted-foreground">
                      Built with search engines in mind to improve visibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Conversion-Focused</h3>
                    <p className="text-sm text-muted-foreground">Designed to turn visitors into customers.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading text-xl font-semibold">Our Process</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2">
                      1
                    </div>
                    <p className="text-sm">Discovery</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2">
                      2
                    </div>
                    <p className="text-sm">Design</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2">
                      3
                    </div>
                    <p className="text-sm">Development</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href="/services/web-design">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden border border-border/40 shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Web design process"
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

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-muted-foreground">Flexible options to suit businesses of all sizes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="glassmorphism rounded-lg p-8 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold mb-2">Basic</h3>
                <p className="text-sm text-muted-foreground mb-4">Perfect for small businesses just getting started.</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$2,500</span>
                  <span className="text-muted-foreground ml-2">starting at</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">5-page responsive website</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Basic SEO setup</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Contact form</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Mobile responsive</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">1 month of support</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="glassmorphism rounded-lg p-8 flex flex-col h-full relative border border-primary/40 shadow-lg shadow-primary/10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-medium py-1 px-3 rounded-full">
                Most Popular
              </div>

              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold mb-2">Professional</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ideal for growing businesses seeking more features.
                </p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$5,000</span>
                  <span className="text-muted-foreground ml-2">starting at</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">10-page responsive website</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced SEO optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Blog setup</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Email newsletter integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">3 months of support</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Social media integration</span>
                </div>
              </div>

              <Button className="w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="glassmorphism rounded-lg p-8 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-sm text-muted-foreground mb-4">Comprehensive solution for established businesses.</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$10,000+</span>
                  <span className="text-muted-foreground ml-2">starting at</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Custom website with unlimited pages</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">E-commerce functionality</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Custom CRM integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced analytics dashboard</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">6 months of priority support</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated account manager</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss your project and how we can help you achieve your digital goals.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

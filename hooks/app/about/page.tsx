import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">DigitalWhirl</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We're a passionate team of digital experts committed to helping businesses thrive online.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden border border-border/40 shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Founder"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-lg border border-primary/20 -z-10" />
              <div className="absolute -top-6 -left-6 w-full h-full rounded-lg border border-accent/20 -z-10" />
            </div>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">The Founder's Story</h2>
              <p className="text-muted-foreground mb-6">
                With over 3 years of experience in web design and digital marketing, I founded DigitalWhirl with a
                simple mission: to help businesses achieve real, measurable growth through strategic digital solutions.
              </p>
              <p className="text-muted-foreground mb-6">
                After working with dozens of clients across various industries, I noticed a common problem. Most
                websites looked good but failed to convert visitors into customers. That's when I developed our unique
                approach that combines stunning design with conversion-focused strategies.
              </p>
              <p className="text-muted-foreground mb-8">
                Today, we're proud to have helped our clients achieve an average of 50% increase in traffic and 30%
                boost in conversions. Our team has grown, but our mission remains the same: to build growth engines, not
                just websites.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Work With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">
              From humble beginnings to becoming a trusted digital partner for businesses.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Item 1 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right">
                    <h3 className="font-heading text-xl font-semibold mb-2">2020</h3>
                    <h4 className="text-primary font-medium mb-2">The Beginning</h4>
                    <p className="text-sm text-muted-foreground">
                      DigitalWhirl was founded with a mission to create websites that drive real business results.
                    </p>
                  </div>
                  <div className="md:pl-8">
                    <div className="rounded-lg overflow-hidden border border-border/40">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Company founding"
                        width={300}
                        height={200}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:order-2">
                    <h3 className="font-heading text-xl font-semibold mb-2">2021</h3>
                    <h4 className="text-primary font-medium mb-2">Expanding Services</h4>
                    <p className="text-sm text-muted-foreground">
                      Added comprehensive digital marketing services to provide end-to-end solutions.
                    </p>
                  </div>
                  <div className="md:pr-8 md:order-1">
                    <div className="rounded-lg overflow-hidden border border-border/40">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Service expansion"
                        width={300}
                        height={200}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right">
                    <h3 className="font-heading text-xl font-semibold mb-2">2022</h3>
                    <h4 className="text-primary font-medium mb-2">Growing Team</h4>
                    <p className="text-sm text-muted-foreground">
                      Expanded our team of experts to better serve our growing client base.
                    </p>
                  </div>
                  <div className="md:pl-8">
                    <div className="rounded-lg overflow-hidden border border-border/40">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Team growth"
                        width={300}
                        height={200}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:order-2">
                    <h3 className="font-heading text-xl font-semibold mb-2">2023</h3>
                    <h4 className="text-primary font-medium mb-2">Industry Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                      Received industry awards for our innovative approach to web design and marketing.
                    </p>
                  </div>
                  <div className="md:pr-8 md:order-1">
                    <div className="rounded-lg overflow-hidden border border-border/40">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Awards"
                        width={300}
                        height={200}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right">
                    <h3 className="font-heading text-xl font-semibold mb-2">Today</h3>
                    <h4 className="text-primary font-medium mb-2">Looking Forward</h4>
                    <p className="text-sm text-muted-foreground">
                      Continuing to innovate and help businesses achieve their digital goals.
                    </p>
                  </div>
                  <div className="md:pl-8">
                    <div className="rounded-lg overflow-hidden border border-border/40">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Future vision"
                        width={300}
                        height={200}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Skills & Expertise</h2>
            <p className="text-muted-foreground">
              We combine technical expertise with creative talent to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {/* Skill Bar 1 */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">HTML</span>
                  <span>96%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "96%" }} />
                </div>
              </div>

              {/* Skill Bar 2 */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">CSS</span>
                  <span>80%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "80%" }} />
                </div>
              </div>

              {/* Skill Bar 3 */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">JavaScript</span>
                  <span>70%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "70%" }} />
                </div>
              </div>

              {/* Skill Bar 4 */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Tailwind CSS</span>
                  <span>60%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "60%" }} />
                </div>
              </div>

              {/* Skill Bar 5 */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Next.js</span>
                  <span>60%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "60%" }} />
                </div>
              </div>

              {/* Skill Bar 6 */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">PHP</span>
                  <span>60%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "60%" }} />
                </div>
              </div>

              {/* Skill Bar 7 */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Python</span>
                  <span>80%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "80%" }} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold mb-6">Tools We Use</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="glassmorphism rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="WordPress"
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span className="text-sm">WordPress</span>
                </div>
                <div className="glassmorphism rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Canva"
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span className="text-sm">Canva</span>
                </div>
                <div className="glassmorphism rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Notion"
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span className="text-sm">Notion</span>
                </div>
                <div className="glassmorphism rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Semrush"
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span className="text-sm">Semrush</span>
                </div>
                <div className="glassmorphism rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="VS Code"
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span className="text-sm">VS Code</span>
                </div>
                <div className="glassmorphism rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Webflow"
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span className="text-sm">Webflow</span>
                </div>
                <div className="glassmorphism rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="MailerLite"
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span className="text-sm">MailerLite</span>
                </div>
                <div className="glassmorphism rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Figma"
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span className="text-sm">Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help your business grow with our digital expertise.
            </p>
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

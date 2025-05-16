import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Monitor, Smartphone, Code, Palette, Zap, Users } from "lucide-react"

export default function WebDesignPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Web <span className="text-gradient">Design</span> Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stunning, conversion-focused designs that captivate your audience and drive results.
            </p>
            <Button className="nextjs-button" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-32 bg-black/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Web Design That Converts</h2>
              <p className="text-muted-foreground mb-6">
                At DigitalWhirl, we don't just create beautiful websites. We design strategic digital experiences that
                convert visitors into customers and drive business growth.
              </p>
              <p className="text-muted-foreground mb-8">
                Our web design process combines aesthetics with user experience and conversion rate optimization
                principles to create websites that not only look great but also perform exceptionally well.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Conversion-Focused Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Strategically designed to guide visitors toward taking action.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Mobile-First Approach</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimized for all devices to provide a seamless experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">SEO-Friendly Structure</h3>
                    <p className="text-sm text-muted-foreground">
                      Built with search engines in mind from the ground up.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Brand-Aligned Aesthetics</h3>
                    <p className="text-sm text-muted-foreground">Visually represents your brand identity and values.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-on-scroll">
              <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-xl">
                <Image
                  src="/web-design-concept.png"
                  alt="Web design process"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-lg border border-white/20 -z-10" />
              <div className="absolute -top-6 -left-6 w-full h-full rounded-lg border border-white/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Features */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Web Design Services</h2>
            <p className="text-muted-foreground">Comprehensive web design solutions tailored to your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glassmorphism-dark rounded-lg p-8 animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Website Design</h3>
              <p className="text-muted-foreground mb-6">
                Custom website designs that align with your brand identity and business goals. We create visually
                stunning, user-friendly websites that stand out from the competition.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Custom design concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Wireframing and prototyping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Visual design and UI development</span>
                </li>
              </ul>
            </div>

            <div className="glassmorphism-dark rounded-lg p-8 animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Responsive Design</h3>
              <p className="text-muted-foreground mb-6">
                Mobile-first designs that ensure your website looks and functions perfectly on all devices, from
                smartphones and tablets to desktop computers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Mobile-first approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Cross-device compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Touch-friendly interfaces</span>
                </li>
              </ul>
            </div>

            <div className="glassmorphism-dark rounded-lg p-8 animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-muted-foreground mb-6">
                User interface and experience design that focuses on creating intuitive, enjoyable interactions that
                guide users toward conversion.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">User journey mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Interaction design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Usability testing</span>
                </li>
              </ul>
            </div>

            <div className="glassmorphism-dark rounded-lg p-8 animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Brand Integration</h3>
              <p className="text-muted-foreground mb-6">
                Seamless integration of your brand identity into your website design, ensuring consistency across all
                digital touchpoints.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Brand identity implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Visual language development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Brand consistency across platforms</span>
                </li>
              </ul>
            </div>

            <div className="glassmorphism-dark rounded-lg p-8 animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Conversion Optimization</h3>
              <p className="text-muted-foreground mb-6">
                Strategic design elements and layouts that guide visitors toward taking desired actions, increasing
                conversion rates.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Call-to-action optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Landing page design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">A/B testing setup</span>
                </li>
              </ul>
            </div>

            <div className="glassmorphism-dark rounded-lg p-8 animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">User Research</h3>
              <p className="text-muted-foreground mb-6">
                In-depth research to understand your target audience's needs, preferences, and behaviors, informing
                design decisions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">User persona development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Competitive analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">User testing and feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-black/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-muted-foreground">A systematic approach to creating websites that deliver results.</p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-white/20 hidden md:block"></div>

            {/* Process Steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="md:absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold z-10 hidden md:flex">
                  1
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right animate-on-scroll">
                    <div className="md:hidden w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold mb-4">
                      1
                    </div>
                    <h3 className="font-heading text-2xl font-semibold mb-4">Discovery</h3>
                    <p className="text-muted-foreground">
                      We begin by understanding your business, goals, target audience, and competition. This phase
                      includes in-depth discussions, research, and analysis to establish a solid foundation for the
                      design process.
                    </p>
                  </div>
                  <div className="md:pl-16 animate-on-scroll">
                    <div className="glassmorphism-dark rounded-lg p-6">
                      <h4 className="font-medium mb-3">What to expect:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Comprehensive questionnaire</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Strategy session</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Competitive analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Goal definition</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="md:absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold z-10 hidden md:flex">
                  2
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left animate-on-scroll">
                    <div className="md:hidden w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold mb-4">
                      2
                    </div>
                    <h3 className="font-heading text-2xl font-semibold mb-4">Planning</h3>
                    <p className="text-muted-foreground">
                      Based on the discovery phase, we develop a strategic plan for your website. This includes creating
                      sitemaps, user flows, and wireframes to establish the structure and functionality of your site.
                    </p>
                  </div>
                  <div className="md:pr-16 md:text-right md:order-1 animate-on-scroll">
                    <div className="glassmorphism-dark rounded-lg p-6">
                      <h4 className="font-medium mb-3">What to expect:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Sitemap development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">User journey mapping</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Wireframe creation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Content strategy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="md:absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold z-10 hidden md:flex">
                  3
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right animate-on-scroll">
                    <div className="md:hidden w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold mb-4">
                      3
                    </div>
                    <h3 className="font-heading text-2xl font-semibold mb-4">Design</h3>
                    <p className="text-muted-foreground">
                      This is where your website comes to life visually. We create detailed design mockups that
                      incorporate your brand identity, user experience principles, and conversion optimization
                      strategies.
                    </p>
                  </div>
                  <div className="md:pl-16 animate-on-scroll">
                    <div className="glassmorphism-dark rounded-lg p-6">
                      <h4 className="font-medium mb-3">What to expect:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Visual design concepts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">UI element design</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Responsive layouts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Interactive prototypes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="md:absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold z-10 hidden md:flex">
                  4
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left animate-on-scroll">
                    <div className="md:hidden w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold mb-4">
                      4
                    </div>
                    <h3 className="font-heading text-2xl font-semibold mb-4">Development</h3>
                    <p className="text-muted-foreground">
                      Our development team brings the designs to life, coding your website with clean, efficient code
                      that ensures fast loading times, security, and compatibility across all browsers and devices.
                    </p>
                  </div>
                  <div className="md:pr-16 md:text-right md:order-1 animate-on-scroll">
                    <div className="glassmorphism-dark rounded-lg p-6">
                      <h4 className="font-medium mb-3">What to expect:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">HTML/CSS/JavaScript development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">CMS integration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Responsive implementation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Performance optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="md:absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold z-10 hidden md:flex">
                  5
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right animate-on-scroll">
                    <div className="md:hidden w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold mb-4">
                      5
                    </div>
                    <h3 className="font-heading text-2xl font-semibold mb-4">Launch & Support</h3>
                    <p className="text-muted-foreground">
                      After thorough testing, we launch your website and provide ongoing support to ensure it continues
                      to perform optimally and evolve with your business needs.
                    </p>
                  </div>
                  <div className="md:pl-16 animate-on-scroll">
                    <div className="glassmorphism-dark rounded-lg p-6">
                      <h4 className="font-medium mb-3">What to expect:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Quality assurance testing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Website launch</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Training and documentation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">Ongoing support and maintenance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Web Design Portfolio</h2>
            <p className="text-muted-foreground">
              Explore some of our recent web design projects and see the results we've achieved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg border border-white/10 animate-on-scroll">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/modern-website.png"
                  alt="Law Firm Website"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2">Modern Law Firm Website</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A conversion-focused website for a prestigious law firm.
                  </p>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="/portfolio/law-firm">View Case Study</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg border border-white/10 animate-on-scroll">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/ecommerce-website-homepage.png"
                  alt="E-commerce Website"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2">E-commerce Platform</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A high-converting online store with seamless checkout experience.
                  </p>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="/portfolio/ecommerce">View Case Study</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg border border-white/10 animate-on-scroll">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/saas-dashboard-overview.png"
                  alt="SaaS Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2">SaaS Dashboard</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    An intuitive dashboard for a growing SaaS company.
                  </p>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="/portfolio/saas">View Case Study</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="nextjs-button" asChild>
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-black/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Web Design Pricing</h2>
            <p className="text-muted-foreground">Transparent pricing options to suit businesses of all sizes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="glassmorphism-dark rounded-lg p-8 flex flex-col h-full animate-on-scroll">
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
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">5-page responsive website</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">Basic SEO setup</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">Contact form</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">Mobile responsive</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">1 month of support</span>
                </div>
              </div>

              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="glassmorphism-dark rounded-lg p-8 flex flex-col h-full relative border border-white/40 shadow-lg shadow-white/5 animate-on-scroll">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs font-medium py-1 px-3 rounded-full">
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
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">10-page responsive website</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced SEO optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">Blog setup</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">Email newsletter integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">3 months of support</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">Social media integration</span>
                </div>
              </div>

              <Button className="nextjs-button w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="glassmorphism-dark rounded-lg p-8 flex flex-col h-full animate-on-scroll">
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
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">Custom website with unlimited pages</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">E-commerce functionality</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">Custom CRM integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced analytics dashboard</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">6 months of priority support</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated account manager</span>
                </div>
              </div>

              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Get answers to common questions about our web design services.</p>
            </div>

            <div className="space-y-6">
              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">How long does it take to design a website?</h3>
                <p className="text-muted-foreground">
                  The timeline for website design typically ranges from 4-12 weeks, depending on the complexity and
                  scope of the project. Simple websites may be completed in 4-6 weeks, while more complex sites with
                  custom functionality can take 8-12 weeks or more.
                </p>
              </div>

              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Do I need to provide content for my website?
                </h3>
                <p className="text-muted-foreground">
                  While you can provide your own content, we also offer professional copywriting services to help create
                  compelling, SEO-friendly content for your website. We'll work with you to understand your brand voice
                  and messaging to ensure the content aligns with your goals.
                </p>
              </div>

              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">Will my website be mobile-friendly?</h3>
                <p className="text-muted-foreground">
                  Yes, all our websites are built with a mobile-first approach, ensuring they look and function
                  perfectly on all devices, from smartphones and tablets to desktop computers. Responsive design is a
                  standard feature of all our projects.
                </p>
              </div>

              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Can I update the website myself after it's launched?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we build websites with user-friendly content management systems that allow you to update content,
                  add blog posts, and make basic changes yourself. We provide training to ensure you're comfortable
                  managing your website.
                </p>
              </div>

              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">Do you offer website maintenance services?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer ongoing website maintenance and support services to ensure your website remains secure,
                  up-to-date, and performing optimally. Our maintenance packages include regular updates, security
                  monitoring, backups, and technical support.
                </p>
              </div>

              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">
                  What if I need changes after the website is launched?
                </h3>
                <p className="text-muted-foreground">
                  We provide a 30-day support period after launch to address any issues or make minor adjustments. For
                  more significant changes or ongoing updates, we offer maintenance packages and hourly support options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-black/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's work together to create a website that not only looks great but also drives real business results.
            </p>
            <Button className="nextjs-button" size="lg" asChild>
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

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, X, HelpCircle } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Flexible options to suit businesses of all sizes with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20 md:py-32">
        <div className="container">
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
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">Blog setup</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">E-commerce functionality</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">Custom integrations</span>
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
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">E-commerce functionality</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">Custom integrations</span>
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
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">Custom integrations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-sm">Performance optimization</span>
                </div>
              </div>

              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-32 bg-black/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Feature Comparison</h2>
              <p className="text-muted-foreground">A detailed comparison of features included in each plan.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 text-left">Feature</th>
                    <th className="py-4 px-4 text-center">Basic</th>
                    <th className="py-4 px-4 text-center">Professional</th>
                    <th className="py-4 px-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <span>Responsive Design</span>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="h-5 w-5 text-white mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="h-5 w-5 text-white mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="h-5 w-5 text-white mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <span>SEO Optimization</span>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">Basic</td>
                    <td className="py-4 px-4 text-center">Advanced</td>
                    <td className="py-4 px-4 text-center">Premium</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <span>Content Management System</span>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="h-5 w-5 text-white mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="h-5 w-5 text-white mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="h-5 w-5 text-white mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <span>Blog Setup</span>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <X className="h-5 w-5 text-gray-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="h-5 w-5 text-white mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="h-5 w-5 text-white mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <span>E-commerce Functionality</span>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <X className="h-5 w-5 text-gray-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <X className="h-5 w-5 text-gray-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="h-5 w-5 text-white mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <span>Custom Integrations</span>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <X className="h-5 w-5 text-gray-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <X className="h-5 w-5 text-gray-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="h-5 w-5 text-white mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <span>Support Period</span>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">1 Month</td>
                    <td className="py-4 px-4 text-center">3 Months</td>
                    <td className="py-4 px-4 text-center">6 Months</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <span>Revisions</span>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">2 Rounds</td>
                    <td className="py-4 px-4 text-center">3 Rounds</td>
                    <td className="py-4 px-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <span>Dedicated Account Manager</span>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <X className="h-5 w-5 text-gray-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <X className="h-5 w-5 text-gray-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="h-5 w-5 text-white mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <span>Analytics Dashboard</span>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">Basic</td>
                    <td className="py-4 px-4 text-center">Standard</td>
                    <td className="py-4 px-4 text-center">Advanced</td>
                  </tr>
                </tbody>
              </table>
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
              <p className="text-muted-foreground">Get answers to common questions about our pricing and services.</p>
            </div>

            <div className="space-y-6">
              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">Are there any hidden fees?</h3>
                <p className="text-muted-foreground">
                  No, we believe in transparent pricing. All costs are outlined in our proposals before any work begins.
                  If additional requirements arise during the project, we'll discuss them with you and provide a clear
                  cost estimate before proceeding.
                </p>
              </div>

              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">Do you offer payment plans?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer flexible payment plans for larger projects. Typically, we require a 50% deposit to begin
                  work, with the remaining balance due upon completion. For ongoing services, we offer monthly payment
                  options.
                </p>
              </div>

              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">
                  What's included in your maintenance packages?
                </h3>
                <p className="text-muted-foreground">
                  Our maintenance packages include regular software updates, security monitoring, daily backups, uptime
                  monitoring, and technical support. We offer different tiers based on your needs, starting from
                  $99/month.
                </p>
              </div>

              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">Do you offer discounts for non-profits?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer special pricing for non-profit organizations. Please contact us with details about your
                  organization and project requirements for more information.
                </p>
              </div>

              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Can I upgrade my plan after the project is completed?
                </h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade your plan at any time. We'll assess your current website and provide a quote for
                  the additional features or services you'd like to add.
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss your project and how we can help you achieve your digital goals.
            </p>
            <Button className="nextjs-button" size="lg" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

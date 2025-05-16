import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions about our services, process, and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="rounded-full">
              All Questions
            </Button>
            <Button variant="ghost" className="rounded-full">
              Services
            </Button>
            <Button variant="ghost" className="rounded-full">
              Pricing
            </Button>
            <Button variant="ghost" className="rounded-full">
              Process
            </Button>
            <Button variant="ghost" className="rounded-full">
              Technical
            </Button>
            <Button variant="ghost" className="rounded-full">
              Support
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-6">
              {/* Services Questions */}
              <div className="mb-12">
                <h2 className="font-heading text-2xl font-semibold mb-6">Services</h2>

                <AccordionItem value="services-1" className="border border-border/40 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium py-4">
                    What services do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We offer a comprehensive range of digital services including web design, web development, SEO,
                    conversion rate optimization, email marketing, graphic design, hosting, PPC advertising, Google My
                    Business optimization, and project management.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="services-2" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    Do you work with specific industries?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We work with clients across various industries including law firms, real estate, e-commerce, SaaS,
                    healthcare, restaurants, and more. Our approach is tailored to the specific needs and goals of each
                    industry.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="services-3" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    Can you help with existing websites or only new ones?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We can help with both new websites and improving existing ones. Our services include redesigns,
                    optimizations, and adding new features to existing websites, as well as building new websites from
                    scratch.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="services-4" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    Do you offer website maintenance services?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Yes, we offer ongoing website maintenance and support services to ensure your website remains
                    secure, up-to-date, and performing optimally. Our maintenance packages include regular updates,
                    security monitoring, backups, and technical support.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="services-5" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    Can you help with content creation?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Yes, we offer content creation services including copywriting, blog posts, product descriptions, and
                    more. Our content is optimized for both user engagement and search engines.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Pricing Questions */}
              <div className="mb-12">
                <h2 className="font-heading text-2xl font-semibold mb-6">Pricing</h2>

                <AccordionItem value="pricing-1" className="border border-border/40 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium py-4">
                    How much does a website cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Website costs vary depending on your specific requirements, complexity, and features needed. We
                    offer tailored solutions starting from $2,500 for basic websites to $10,000+ for complex e-commerce
                    or custom web applications. Contact us for a personalized quote.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing-2" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    Do you offer payment plans?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Yes, we offer flexible payment plans for larger projects. Typically, we require a 50% deposit to
                    begin work, with the remaining balance due upon completion. For ongoing services, we offer monthly
                    payment options.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing-3" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    Are there any hidden costs?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    No, we believe in transparent pricing. All costs are outlined in our proposals before any work
                    begins. If additional requirements arise during the project, we'll discuss them with you and provide
                    a clear cost estimate before proceeding.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing-4" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    What's included in your maintenance packages?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Our maintenance packages include regular software updates, security monitoring, daily backups,
                    uptime monitoring, and technical support. We offer different tiers based on your needs, starting
                    from $99/month.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing-5" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    Do you offer discounts for non-profits?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Yes, we offer special pricing for non-profit organizations. Please contact us with details about
                    your organization and project requirements for more information.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Process Questions */}
              <div className="mb-12">
                <h2 className="font-heading text-2xl font-semibold mb-6">Process</h2>

                <AccordionItem value="process-1" className="border border-border/40 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium py-4">
                    What is your design process?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Our design process includes discovery (understanding your goals and requirements), planning (sitemap
                    and wireframes), design (creating visual mockups), development (building the website), testing
                    (ensuring everything works properly), and launch. We involve you at every step for feedback and
                    approval.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="process-2" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    How long does it take to build a website?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    The timeline for website development typically ranges from 4-12 weeks, depending on the complexity
                    and scope of the project. Simple websites may be completed in 4-6 weeks, while more complex sites
                    with custom functionality can take 8-12 weeks or more.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="process-3" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    What information do you need from me to get started?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    To get started, we need information about your business, target audience, goals, brand guidelines
                    (if available), content (text and images), and any specific requirements or preferences. We'll
                    provide a detailed questionnaire to help gather this information.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="process-4" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    How involved will I be in the process?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We believe in collaborative development, so you'll be involved throughout the process. We'll seek
                    your input and approval at key milestones, but we won't overwhelm you with every small decision. Our
                    goal is to make the process as smooth and efficient as possible for you.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="process-5" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    What happens after my website launches?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    After launch, we provide a 30-day support period to address any issues that may arise. We also offer
                    ongoing maintenance packages to keep your website secure and up-to-date. Additionally, we can help
                    with digital marketing strategies to drive traffic to your new website.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Technical Questions */}
              <div className="mb-12">
                <h2 className="font-heading text-2xl font-semibold mb-6">Technical</h2>

                <AccordionItem value="technical-1" className="border border-border/40 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium py-4">
                    What technologies do you use?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We use modern technologies including HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS, and more
                    for frontend development. For backend, we use Node.js, PHP, Python, and various databases depending
                    on project requirements. We also work with WordPress for content management.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technical-2" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    Will my website be mobile-friendly?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Yes, all our websites are built with a mobile-first approach, ensuring they look and function
                    perfectly on all devices, from smartphones and tablets to desktop computers. Responsive design is a
                    standard feature of all our projects.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technical-3" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    Can I update the website myself?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Yes, we build websites with user-friendly content management systems that allow you to update
                    content, add blog posts, and make basic changes yourself. We provide training to ensure you're
                    comfortable managing your website.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technical-4" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    How do you handle website security?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Security is a top priority. We implement SSL certificates, secure coding practices, regular updates,
                    and security monitoring. For e-commerce sites, we ensure PCI compliance. Our maintenance packages
                    include ongoing security monitoring and updates.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technical-5" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    What about website hosting?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We offer reliable, high-performance hosting solutions tailored to your website's needs. Our hosting
                    includes daily backups, security monitoring, and technical support. If you prefer to use your own
                    hosting, we can accommodate that as well.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Support Questions */}
              <div>
                <h2 className="font-heading text-2xl font-semibold mb-6">Support</h2>

                <AccordionItem value="support-1" className="border border-border/40 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium py-4">
                    How can I get support if I have issues with my website?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We provide support via email, phone, and our ticketing system. For clients on maintenance plans, we
                    offer priority support with guaranteed response times. Emergency support is available for critical
                    issues.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="support-2" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    What are your support hours?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Our standard support hours are Monday to Friday, 9am to 5pm Pacific Time. For clients on premium
                    maintenance plans, we offer extended support hours and emergency after-hours support for critical
                    issues.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="support-3" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    Do you provide training on how to use my website?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Yes, we provide comprehensive training to ensure you're comfortable managing your website. This
                    includes video tutorials, documentation, and live training sessions. Additional training sessions
                    can be arranged if needed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="support-4" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    What if I need changes to my website after it launches?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We're happy to make changes or add new features to your website after launch. Small changes may be
                    included in your maintenance plan, while larger changes or new features would be quoted separately.
                    We aim to be flexible and responsive to your evolving needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="support-5" className="border border-border/40 rounded-lg px-6 mt-4">
                  <AccordionTrigger className="text-left font-medium py-4">
                    Do you offer ongoing SEO services?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Yes, we offer ongoing SEO services to help improve and maintain your search engine rankings. This
                    includes keyword research, content optimization, technical SEO, link building, and regular
                    performance reporting. We offer monthly SEO packages tailored to your goals and budget.
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              We're here to help. Contact us directly and we'll be happy to answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:info@digitalwhirl.com">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

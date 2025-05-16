"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of digital services including web design, web development, SEO, conversion rate optimization, email marketing, graphic design, hosting, PPC advertising, Google My Business optimization, and project management.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Website costs vary depending on your specific requirements, complexity, and features needed. We offer tailored solutions starting from $2,500 for basic websites to $10,000+ for complex e-commerce or custom web applications. Contact us for a personalized quote.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for website development typically ranges from 4-12 weeks, depending on the complexity and scope of the project. Simple websites may be completed in 4-6 weeks, while more complex sites with custom functionality can take 8-12 weeks or more.",
  },
  {
    question: "Do you offer website maintenance services?",
    answer:
      "Yes, we offer ongoing website maintenance and support services to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, backups, and technical support.",
  },
  {
    question: "What is your design process?",
    answer:
      "Our design process includes discovery (understanding your goals and requirements), planning (sitemap and wireframes), design (creating visual mockups), development (building the website), testing (ensuring everything works properly), and launch. We involve you at every step for feedback and approval.",
  },
]

export default function FaqSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

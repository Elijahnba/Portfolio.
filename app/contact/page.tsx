"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import ContactButtons from "@/components/contact-page"

export default function ContactPage() {
  const { handleCalendlyClick, handleIntercomClick, handleEmailClick } = ContactButtons()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? Let's discuss how we can help you achieve your digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="font-heading text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Website Design Inquiry" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project..." rows={6} required />
                </div>

                <Button type="submit" size="lg" className="nextjs-button w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="animate-on-scroll">
              <div className="glassmorphism-dark rounded-lg p-8 h-full">
                <h2 className="font-heading text-3xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground mb-1">For general inquiries:</p>
                      <a href="mailto:info@digitalwhirl.com" className="text-white hover:underline">
                        info@digitalwhirl.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground mb-1">Monday to Friday, 9am to 5pm:</p>
                      <a href="tel:+15551234567" className="text-white hover:underline">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        123 Digital Avenue
                        <br />
                        Suite 456
                        <br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <h3 className="font-medium mb-3">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="rounded-lg overflow-hidden border border-white/10 h-[400px] relative animate-on-scroll">
            <Image src="/placeholder.svg?height=400&width=1200" alt="Map" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glassmorphism-dark rounded-lg p-6 max-w-md text-center">
                <h3 className="font-heading text-xl font-semibold mb-2">Visit Our Office</h3>
                <p className="text-muted-foreground mb-4">
                  123 Digital Avenue, Suite 456
                  <br />
                  San Francisco, CA 94103
                </p>
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 md:py-32 bg-black/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Other Ways to Connect</h2>
            <p className="text-muted-foreground">Choose the method that works best for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism-dark rounded-lg p-8 text-center animate-on-scroll">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Schedule a Call</h3>
              <p className="text-muted-foreground mb-6">Book a convenient time for a phone or video consultation.</p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full"
                onClick={handleCalendlyClick}
              >
                Book Appointment
              </Button>
            </div>

            <div className="glassmorphism-dark rounded-lg p-8 text-center animate-on-scroll">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Live Chat</h3>
              <p className="text-muted-foreground mb-6">Chat with our team in real-time during business hours.</p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full"
                onClick={handleIntercomClick}
              >
                Start Chat
              </Button>
            </div>

            <div className="glassmorphism-dark rounded-lg p-8 text-center animate-on-scroll">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Email Support</h3>
              <p className="text-muted-foreground mb-6">Send us an email and we'll respond within 24 hours.</p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full"
                onClick={handleEmailClick}
              >
                Email Us
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
              <p className="text-muted-foreground">Find quick answers to common questions.</p>
            </div>

            <div className="space-y-6">
              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">How quickly do you respond to inquiries?</h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24 business hours. For urgent matters, please call our
                  office directly.
                </p>
              </div>

              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">
                  Do you work with clients outside of San Francisco?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we work with clients globally. Most of our communication can be handled remotely via email,
                  phone, or video calls.
                </p>
              </div>

              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-2">
                  What information should I prepare before contacting you?
                </h3>
                <p className="text-muted-foreground">
                  It's helpful to have a general idea of your project goals, timeline, and budget. Any existing brand
                  materials or website links are also useful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

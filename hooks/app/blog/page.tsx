"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import LoadMorePosts from "./load-more"

export default function BlogPage() {
  const [showMorePosts, setShowMorePosts] = useState(false)

  useEffect(() => {
    // Delay showing the load more functionality to ensure hydration
    const timer = setTimeout(() => {
      setShowMorePosts(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Insights, tips, and strategies to help you succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container">
          <div className="relative overflow-hidden rounded-lg border border-white/10 animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=web design trends"
                  alt="Featured blog post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>May 1, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>John Doe</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  10 Web Design Trends That Will Dominate in 2023
                </h2>
                <p className="text-muted-foreground mb-6">
                  Stay ahead of the curve with these cutting-edge web design trends that are set to dominate the digital
                  landscape in 2023.
                </p>
                <Button className="nextjs-button" asChild>
                  <Link href="/blog/web-design-trends-2023">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <div className="group overflow-hidden rounded-lg border border-white/10 transition-all hover:border-white/30 hover:shadow-md hover:shadow-white/5 animate-on-scroll">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=website conversion"
                  alt="Blog post"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Apr 15, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>3 min read</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  How to Improve Your Website's Conversion Rate
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn proven strategies to turn more of your website visitors into customers.
                </p>
                <Link
                  href="/blog/improve-conversion-rate"
                  className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-gray-300"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Post 2 */}
            <div className="group overflow-hidden rounded-lg border border-white/10 transition-all hover:border-white/30 hover:shadow-md hover:shadow-white/5 animate-on-scroll">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=seo fundamentals"
                  alt="Blog post"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Mar 22, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>4 min read</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  SEO Fundamentals Every Business Owner Should Know
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover the essential SEO principles that can help your business rank higher in search results.
                </p>
                <Link
                  href="/blog/seo-fundamentals"
                  className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-gray-300"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Post 3 */}
            <div className="group overflow-hidden rounded-lg border border-white/10 transition-all hover:border-white/30 hover:shadow-md hover:shadow-white/5 animate-on-scroll">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=email marketing"
                  alt="Blog post"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Feb 10, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>6 min read</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  The Power of Email Marketing for Small Businesses
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn how to leverage email marketing to nurture leads and drive repeat business.
                </p>
                <Link
                  href="/blog/email-marketing-power"
                  className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-gray-300"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Post 4 */}
            <div className="group overflow-hidden rounded-lg border border-white/10 transition-all hover:border-white/30 hover:shadow-md hover:shadow-white/5 animate-on-scroll">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=content strategy"
                  alt="Blog post"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Jan 28, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>5 min read</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  How to Create a Content Strategy That Drives Results
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Develop a content strategy that attracts, engages, and converts your target audience.
                </p>
                <Link
                  href="/blog/content-strategy"
                  className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-gray-300"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Post 5 */}
            <div className="group overflow-hidden rounded-lg border border-white/10 transition-all hover:border-white/30 hover:shadow-md hover:shadow-white/5 animate-on-scroll">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/color-psychology-wheel.png"
                  alt="Blog post"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Jan 15, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>4 min read</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  The Psychology of Color in Web Design
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Understand how color choices impact user perception and behavior on your website.
                </p>
                <Link
                  href="/blog/color-psychology"
                  className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-gray-300"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Post 6 */}
            <div className="group overflow-hidden rounded-lg border border-white/10 transition-all hover:border-white/30 hover:shadow-md hover:shadow-white/5 animate-on-scroll">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=website speed"
                  alt="Blog post"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Dec 5, 2022</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>3 min read</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  5 Ways to Speed Up Your Website Loading Time
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Practical tips to improve your website's performance and provide a better user experience.
                </p>
                <Link
                  href="/blog/speed-up-website"
                  className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-gray-300"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {showMorePosts && <LoadMorePosts />}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-32 bg-black/50 border-y border-white/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-8">
                Stay updated with the latest trends, tips, and insights in web design and digital marketing. Join our
                community of business owners and digital enthusiasts.
              </p>
            </div>

            <div className="animate-on-scroll">
              <div className="glassmorphism-dark rounded-lg p-8">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full rounded-md border border-white/10 bg-black/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full rounded-md border border-white/10 bg-black/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-white/10 bg-black/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <Button type="submit" className="nextjs-button w-full">
                    Subscribe
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

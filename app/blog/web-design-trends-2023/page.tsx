import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"

export default function BlogPostPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </div>

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

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              10 Web Design Trends That Will Dominate in 2023
            </h1>

            <p className="text-lg text-muted-foreground">
              Stay ahead of the curve with these cutting-edge web design trends that are set to dominate the digital
              landscape in 2023.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden border border-white/10">
              <Image
                src="/placeholder.svg?height=600&width=1200&query=web design trends 2023"
                alt="Web Design Trends 2023"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 animate-on-scroll">
              <article className="prose prose-invert prose-lg max-w-none">
                <p>
                  The digital landscape is constantly evolving, and web design trends are no exception. As we move
                  further into 2023, several innovative design approaches are gaining momentum, reshaping how websites
                  look, feel, and function. Whether you're planning a website redesign or building a new site from
                  scratch, staying informed about these trends can help you create a modern, engaging digital presence.
                </p>

                <h2>1. Dark Mode as Standard</h2>
                <p>
                  Dark mode has transitioned from a novel feature to a standard expectation. Not only does it reduce eye
                  strain and save battery life on mobile devices, but it also creates a sleek, sophisticated aesthetic
                  that many users prefer. In 2023, we're seeing more websites offering dark mode as the default option,
                  with light mode as an alternative.
                </p>
                <p>
                  The key to effective dark mode design is not simply inverting colors but thoughtfully considering
                  contrast, readability, and visual hierarchy. Successful dark mode implementations use subtle
                  gradients, carefully selected accent colors, and appropriate spacing to create depth and dimension.
                </p>

                <h2>2. Immersive 3D Elements</h2>
                <p>
                  Advancements in web technologies have made it easier to incorporate 3D elements into websites without
                  sacrificing performance. From subtle 3D illustrations to fully interactive 3D models, these elements
                  add depth and engagement to the user experience.
                </p>
                <p>
                  The most effective implementations use 3D elements purposefully, enhancing the content rather than
                  distracting from it. Product showcases, interactive data visualizations, and immersive storytelling
                  are all areas where 3D can significantly improve user engagement.
                </p>

                <h2>3. Micro-Interactions</h2>
                <p>
                  Micro-interactions are small, subtle animations that provide feedback when users interact with your
                  website. These tiny details—like button hover effects, form field animations, or loading
                  indicators—might seem insignificant individually, but collectively they create a more intuitive and
                  engaging user experience.
                </p>
                <p>
                  In 2023, we're seeing more sophisticated and purposeful micro-interactions that guide users through
                  their journey, provide feedback, and add personality to digital interfaces. The key is to keep them
                  subtle and meaningful, enhancing rather than hindering the user experience.
                </p>

                <h2>4. Glassmorphism</h2>
                <p>
                  Glassmorphism—a design style featuring frosted glass-like elements with background blur effects—has
                  evolved from a trend to a mainstay in modern web design. This aesthetic creates depth through
                  translucency while maintaining a clean, minimal interface.
                </p>
                <p>
                  The most effective implementations of glassmorphism balance the visual appeal of the effect with
                  practical considerations like readability and accessibility. When used thoughtfully, glassmorphism can
                  create a sense of hierarchy and dimension that enhances the user experience.
                </p>

                <h2>5. Horizontal Scrolling</h2>
                <p>
                  While vertical scrolling remains the standard for web navigation, horizontal scrolling is gaining
                  popularity for specific content sections. This approach works particularly well for portfolios,
                  product showcases, and image galleries, allowing users to browse through content in a more intuitive,
                  app-like manner.
                </p>
                <p>
                  The key to successful horizontal scrolling is clear signposting and intuitive controls. Users should
                  immediately understand how to navigate the content, whether through visible scroll bars, arrow
                  indicators, or swipe gestures on touch devices.
                </p>

                <h2>6. Minimalist Navigation</h2>
                <p>
                  As websites become more content-rich, there's a growing trend toward simplifying navigation to reduce
                  cognitive load. Hidden menus, hamburger icons, and streamlined navigation paths are becoming more
                  common, even on desktop sites where space isn't as limited as on mobile.
                </p>
                <p>
                  The challenge with minimalist navigation is balancing simplicity with discoverability. Successful
                  implementations ensure that important content remains easily accessible while reducing visual clutter
                  and decision fatigue.
                </p>

                <h2>7. Scrollytelling</h2>
                <p>
                  Scrollytelling—using scroll-triggered animations to tell a story as users move down the page—continues
                  to evolve in 2023. This technique creates an immersive, interactive narrative that unfolds as users
                  engage with the content.
                </p>
                <p>
                  The most effective scrollytelling experiences are those that enhance the content rather than
                  overshadowing it. Subtle animations, progressive reveals, and thoughtful pacing can create a
                  compelling narrative that keeps users engaged throughout their journey.
                </p>

                <h2>8. Accessibility-First Design</h2>
                <p>
                  Accessibility is no longer an afterthought but a fundamental aspect of web design. In 2023, we're
                  seeing more websites adopting an accessibility-first approach, ensuring that digital experiences are
                  inclusive and usable for people of all abilities.
                </p>
                <p>
                  This trend encompasses everything from proper color contrast and keyboard navigation to screen reader
                  compatibility and alternative text for images. The goal is to create websites that everyone can use,
                  regardless of their abilities or the devices they use to access the web.
                </p>

                <h2>9. Data Visualization</h2>
                <p>
                  As data becomes increasingly central to our digital experiences, creative data visualization is
                  emerging as a key design trend. Interactive charts, infographics, and data-driven illustrations help
                  users make sense of complex information in an engaging, accessible way.
                </p>
                <p>
                  The most successful data visualizations strike a balance between aesthetic appeal and clarity,
                  presenting information in a way that's both visually engaging and easy to understand. This approach is
                  particularly valuable for businesses that need to communicate complex data to their audiences.
                </p>

                <h2>10. Voice User Interface (VUI) Integration</h2>
                <p>
                  As voice assistants become more prevalent in our daily lives, websites are beginning to incorporate
                  voice user interfaces alongside traditional visual interfaces. This trend is still in its early
                  stages, but we're seeing more websites offering voice search, navigation, and interaction options.
                </p>
                <p>
                  The challenge with VUI integration is creating an experience that feels natural and intuitive. This
                  involves not just the technical implementation but also thoughtful consideration of voice commands,
                  feedback mechanisms, and the overall user journey.
                </p>

                <h2>Conclusion</h2>
                <p>
                  The web design trends of 2023 reflect a broader shift toward more immersive, accessible, and
                  user-centered digital experiences. From dark mode and 3D elements to micro-interactions and voice
                  interfaces, these trends offer exciting opportunities to create websites that are not just visually
                  appealing but also functional, inclusive, and engaging.
                </p>
                <p>
                  As you consider incorporating these trends into your own web projects, remember that the most
                  successful designs are those that prioritize user needs and business goals over fleeting aesthetic
                  trends. By focusing on creating meaningful, purposeful digital experiences, you can ensure that your
                  website remains relevant and effective long after these trends have evolved.
                </p>
              </article>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Tags:</span>
                <Link
                  href="/blog/tag/web-design"
                  className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
                >
                  Web Design
                </Link>
                <Link
                  href="/blog/tag/trends"
                  className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
                >
                  Trends
                </Link>
                <Link
                  href="/blog/tag/ui-ux"
                  className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
                >
                  UI/UX
                </Link>
                <Link
                  href="/blog/tag/2023"
                  className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
                >
                  2023
                </Link>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Share this article:</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Copy link</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="mt-12 glassmorphism-dark rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80&query=portrait"
                    alt="John Doe"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-heading text-lg font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">
                      Lead Web Designer at DigitalWhirl with over 10 years of experience in creating stunning,
                      conversion-focused websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Recent Posts */}
              <div className="glassmorphism-dark rounded-lg p-6 mb-8 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-md overflow-hidden shrink-0">
                      <Image
                        src="/placeholder.svg?height=64&width=64&query=website conversion"
                        alt="Recent post"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 hover:text-white transition-colors">
                        <Link href="/blog/improve-conversion-rate">How to Improve Your Website's Conversion Rate</Link>
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">Apr 15, 2023</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-md overflow-hidden shrink-0">
                      <Image
                        src="/placeholder.svg?height=64&width=64&query=seo fundamentals"
                        alt="Recent post"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 hover:text-white transition-colors">
                        <Link href="/blog/seo-fundamentals">SEO Fundamentals Every Business Owner Should Know</Link>
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">Mar 22, 2023</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-md overflow-hidden shrink-0">
                      <Image
                        src="/placeholder.svg?height=64&width=64&query=email marketing"
                        alt="Recent post"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 hover:text-white transition-colors">
                        <Link href="/blog/email-marketing-power">
                          The Power of Email Marketing for Small Businesses
                        </Link>
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">Feb 10, 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="glassmorphism-dark rounded-lg p-6 mb-8 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/blog/category/web-design"
                      className="text-sm text-muted-foreground hover:text-white transition-colors flex justify-between items-center"
                    >
                      <span>Web Design</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">12</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/category/seo"
                      className="text-sm text-muted-foreground hover:text-white transition-colors flex justify-between items-center"
                    >
                      <span>SEO</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">8</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/category/marketing"
                      className="text-sm text-muted-foreground hover:text-white transition-colors flex justify-between items-center"
                    >
                      <span>Digital Marketing</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">15</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/category/development"
                      className="text-sm text-muted-foreground hover:text-white transition-colors flex justify-between items-center"
                    >
                      <span>Web Development</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">10</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/category/business"
                      className="text-sm text-muted-foreground hover:text-white transition-colors flex justify-between items-center"
                    >
                      <span>Business Tips</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">7</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="glassmorphism-dark rounded-lg p-6 animate-on-scroll">
                <h3 className="font-heading text-xl font-semibold mb-4">Subscribe</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest articles and insights delivered straight to your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-md border border-white/10 bg-black/50 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <Button type="submit" className="nextjs-button w-full">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 md:py-32 bg-black/50">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">You Might Also Like</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related Post 1 */}
            <div className="group overflow-hidden rounded-lg border border-white/10 transition-all hover:border-white/30 hover:shadow-md hover:shadow-white/5 animate-on-scroll">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=ui design"
                  alt="Related post"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Apr 5, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>4 min read</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  UI Design Principles Every Designer Should Know
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Master the fundamental principles of UI design to create intuitive, engaging user interfaces.
                </p>
                <Link
                  href="/blog/ui-design-principles"
                  className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-gray-300"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Related Post 2 */}
            <div className="group overflow-hidden rounded-lg border border-white/10 transition-all hover:border-white/30 hover:shadow-md hover:shadow-white/5 animate-on-scroll">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=responsive design"
                  alt="Related post"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Mar 18, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>5 min read</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  Responsive Design Best Practices for 2023
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ensure your website looks and functions perfectly on all devices with these responsive design tips.
                </p>
                <Link
                  href="/blog/responsive-design-best-practices"
                  className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-gray-300"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Related Post 3 */}
            <div className="group overflow-hidden rounded-lg border border-white/10 transition-all hover:border-white/30 hover:shadow-md hover:shadow-white/5 animate-on-scroll">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=typography"
                  alt="Related post"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Feb 25, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>3 min read</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  Typography in Web Design: Choosing the Right Fonts
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A guide to selecting and pairing fonts that enhance readability and brand identity.
                </p>
                <Link
                  href="/blog/typography-web-design"
                  className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-gray-300"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

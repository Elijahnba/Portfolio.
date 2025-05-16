"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

// Blog post data
const allPosts = [
  {
    id: 7,
    title: "The Future of Web Design: AI and Machine Learning",
    excerpt:
      "Explore how artificial intelligence and machine learning are revolutionizing web design and what it means for businesses.",
    date: "Nov 15, 2022",
    readTime: "7 min read",
    slug: "future-web-design-ai",
    image: "/placeholder-kffzc.png",
  },
  {
    id: 8,
    title: "Accessibility in Web Design: Why It Matters",
    excerpt:
      "Learn why designing accessible websites is not just a legal requirement but also good for business and user experience.",
    date: "Oct 28, 2022",
    readTime: "5 min read",
    slug: "accessibility-web-design",
    image: "/placeholder-97i6b.png",
  },
  {
    id: 9,
    title: "How to Choose the Right CMS for Your Business",
    excerpt:
      "A comprehensive guide to selecting the content management system that best fits your business needs and goals.",
    date: "Oct 12, 2022",
    readTime: "8 min read",
    slug: "choose-right-cms",
    image: "/placeholder-ewyrn.png",
  },
  {
    id: 10,
    title: "The Psychology of Colors in Marketing",
    excerpt:
      "Discover how different colors affect consumer behavior and how to use this knowledge in your marketing strategy.",
    date: "Sep 30, 2022",
    readTime: "6 min read",
    slug: "psychology-colors-marketing",
    image: "/color-psychology-wheel.png",
  },
  {
    id: 11,
    title: "10 Common Web Design Mistakes to Avoid",
    excerpt:
      "Learn about the most common web design mistakes that can hurt your user experience and how to avoid them.",
    date: "Sep 15, 2022",
    readTime: "4 min read",
    slug: "common-web-design-mistakes",
    image: "/placeholder-jexyn.png",
  },
  {
    id: 12,
    title: "The Rise of Voice Search: Optimizing Your Website",
    excerpt:
      "How to optimize your website for voice search to stay ahead of the curve in the evolving digital landscape.",
    date: "Aug 22, 2022",
    readTime: "5 min read",
    slug: "voice-search-optimization",
    image: "/placeholder-e19px.png",
  },
]

export default function LoadMorePosts() {
  const [visiblePosts, setVisiblePosts] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLoadMore = () => {
    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setVisiblePosts((prev) => prev + 6)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPosts.slice(0, visiblePosts).map((post) => (
          <div
            key={post.id}
            className="group overflow-hidden rounded-lg border border-white/10 transition-all hover:border-white/30 hover:shadow-md hover:shadow-white/5 animate-on-scroll"
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-gray-300"
              >
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {visiblePosts < allPosts.length && (
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                Loading
                <span className="loading-dots ml-2">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </>
            ) : (
              "Load More Articles"
            )}
          </Button>
        </div>
      )}
    </>
  )
}

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Client <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 md:py-32 bg-black/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            { /*

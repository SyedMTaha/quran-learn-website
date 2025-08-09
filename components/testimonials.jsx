import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      location: "London, UK",
      rating: 5,
      text: "The teachers are incredibly patient and knowledgeable. My daughter has improved so much in her Quran recitation. Highly recommended!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Muhammad Hassan",
      location: "New York, USA",
      rating: 5,
      text: "Excellent online platform with flexible timing. The one-on-one sessions have helped me perfect my Tajweed significantly.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Fatima Ali",
      location: "Toronto, Canada",
      rating: 5,
      text: "As a working mother, the flexible scheduling is perfect for me. The teachers are professional and very supportive.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Ahmed Ibrahim",
      location: "Sydney, Australia",
      rating: 5,
      text: "My son started from zero and now he can recite beautifully. The progress tracking feature keeps us motivated.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Students Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of satisfied students who have transformed their Quran learning journey with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-6 h-6 text-amber-400 mb-2" />
                <p className="text-slate-700 italic leading-relaxed">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


import { Check, Star } from "lucide-react"

export default function Packages() {
  const packages = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for beginners starting their Quran learning journey",
      features: [
        "2 classes per week",
        "30-minute sessions",
        "Basic Quran recitation",
        "Progress tracking",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "$49",
      period: "/month",
      description: "Most popular choice for serious learners",
      features: [
        "3 classes per week",
        "45-minute sessions",
        "Quran + Tajweed",
        "Homework assignments",
        "Progress reports",
        "WhatsApp support",
        "Recording access",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$79",
      period: "/month",
      description: "Comprehensive program for advanced learning",
      features: [
        "5 classes per week",
        "60-minute sessions",
        "Complete Islamic studies",
        "Memorization program",
        "Monthly assessments",
        "24/7 support",
        "Certificate upon completion",
        "Family discount available",
      ],
      popular: false,
    },
  ]

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Choose Your Learning Package</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Flexible pricing options to suit your learning needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${pkg.popular ? "ring-2 ring-amber-500 scale-105 md:scale-105" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{pkg.name}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{pkg.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-slate-800">{pkg.price}</span>
                  <span className="text-slate-600 ml-1">{pkg.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${pkg.popular ? "bg-amber-600 hover:bg-amber-700 shadow-lg hover:shadow-xl" : "bg-slate-800 hover:bg-slate-900"} text-white`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

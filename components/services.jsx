"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, Mic, Users, GraduationCap, Heart, Star } from "lucide-react"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: BookOpen,
      title: "Quran Recitation",
      description: "Learn proper pronunciation and recitation of the Holy Quran with Tajweed rules.",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      delay: "delay-100",
    },
    {
      icon: Mic,
      title: "Tajweed Classes",
      description: "Master the art of beautiful Quran recitation with proper Tajweed techniques.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: "delay-200",
    },
    {
      icon: Heart,
      title: "Quran Memorization",
      description: "Systematic Hifz program to help you memorize the complete Holy Quran.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      delay: "delay-300",
    },
    {
      icon: GraduationCap,
      title: "Islamic Studies",
      description: "Comprehensive Islamic education including Hadith, Fiqh, and Islamic history.",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50",
      delay: "delay-[400ms]",
    },
    {
      icon: Users,
      title: "Family Classes",
      description: "Special programs designed for families to learn together.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      delay: "delay-500",
    },
    // {
    //   icon: Star,
    //   title: "Arabic Language",
    //   description: "Learn Arabic language to better understand the Quran and Islamic texts.",
    //   gradient: "from-indigo-500 to-blue-500",
    //   bgGradient: "from-indigo-50 to-blue-50",
    //   delay: "delay-[600ms]",
    // },
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className={`text-center mb-16 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Comprehensive <span className="gradient-text">Islamic Education</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Programs designed to meet your spiritual and educational needs with modern teaching methods
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group hover-lift bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 ${
                isVisible ? `animate-fadeInUp ${service.delay}` : "opacity-0"
              }`}
            >
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div
                  className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${service.bgGradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>

              {/* Hover Effect Line */}
              <div
                className={`w-0 h-1 bg-gradient-to-r ${service.gradient} mt-4 group-hover:w-full transition-all duration-500 rounded-full`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
    
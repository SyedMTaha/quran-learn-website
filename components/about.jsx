import { CheckCircle, Heart, Globe, Clock } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Noor ul Quran </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Noor-ul-Quran is an online Quran learning platform dedicated to teaching the Holy Quran with proper Tajweed to learners of all ages across the world, especially children and women. Our aim is to make Quranic education simple, accessible, and spiritually enriching from the comfort of your home.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To spread the beautiful teachings of the Holy Quran through qualified instructors, innovative teaching
                methods, and personalized learning experiences that cater to students of all ages and backgrounds.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Certified and experienced Quran teachers",
                "Flexible scheduling to fit your lifestyle",
                "One-on-one personalized instruction",
                "Interactive learning materials and tools",
                "Progress tracking and regular assessments",
                "Affordable pricing with multiple packages",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl text-center">
              <Heart className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Passionate Teaching</h4>
              <p className="text-slate-600 text-sm">Our teachers are passionate about sharing Islamic knowledge</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Global Reach</h4>
              <p className="text-slate-600 text-sm">Students from over 50 countries learn with us</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Flexible Timing</h4>
              <p className="text-slate-600 text-sm">Learn at your own pace with flexible schedules</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Quality Assured</h4>
              <p className="text-slate-600 text-sm">Certified curriculum and qualified instructors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

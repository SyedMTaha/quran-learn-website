import { Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your Quran learning journey? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Phone Numbers</p>
                    <p className="text-slate-600">PK: +92 123 4567890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Email Address</p>
                    <p className="text-slate-600">info@noorulquran.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Available Hours</p>
                    <p className="text-slate-600">24/7 Online Support</p>
                    <p className="text-slate-600">Classes: 09 AM - 05 PM (PKT)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Free Trial Available</h4>
              <p className="text-slate-600 mb-4">
                Experience our teaching quality with a complimentary 30-minute trial session. No commitment required!
              </p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 outline-none">
                Book Free Trial
              </button>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your learning goals and any questions you have..."
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all duration-200 resize-vertical"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

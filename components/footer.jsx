import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa"
import { Mail, Phone, Clock, Award } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                {/* <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="text-white font-bold text-xl">Q</div>
                </div> */}
                <img 
                   src="/images/logo4.png" 
                   alt="Noor ul Quran Logo" 
                   className="w-12 h-12 object-contain"
                 />
                {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900"></div> */}
              </div>
              <div>
                <h3 className="text-xl font-bold">Noor ul Quran</h3>
                <p className="text-sm text-amber-400 font-medium">Learn • Understand • Practice</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Dedicated to providing authentic Islamic education through modern technology, making Quran learning
              accessible to everyone, everywhere with certified instructors.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-800">
              <div className="text-center">
                <div className="text-amber-400 font-bold text-lg">500+</div>
                <div className="text-slate-400 text-xs">Students</div>
              </div>
              <div className="text-center">
                <div className="text-amber-400 font-bold text-lg">50+</div>
                <div className="text-slate-400 text-xs">Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-amber-400 font-bold text-lg">10+</div>
                <div className="text-slate-400 text-xs">Courses</div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <FaFacebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <FaInstagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <FaTwitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <FaYoutube className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Our Services", href: "#services" },
                { name: "Packages", href: "#packages" },
                // { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
                { name: "Free Trial", href: "#trial" },
                { name: "Blog", href: "#blog" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Our Services</h4>
            <div className="space-y-3">
              {[
                "Quran Recitation",
                "Tajweed Classes",
                "Quran Memorization (Hifz)",
                "Islamic Studies",
                // "Arabic Language",
                "Family Classes",
                "Kids Programs",
                "Adult Learning",
              ].map((service) => (
                <Link
                  key={service}
                  href="#"
                  className="block text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Phone Numbers</p>
                  <p className="text-slate-400">PK: +92 123 4567890</p>
                  <p className="text-slate-400">UK: +44 203 289 9880</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Email</p>
                  <p className="text-slate-400">info@noorulquran.com</p>
                  <p className="text-slate-400">support@noorulquran.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Available Hours</p>
                  <p className="text-slate-400">24/7 Online Support</p>
                  <p className="text-slate-400">Classes:  09 AM - 05 PM PKT</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Certification</p>
                  <p className="text-slate-400">Certified Teachers</p>
                  <p className="text-slate-400">Completion Certificates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm text-center md:text-left">
              © 2025 Noor ul Quran. All rights reserved. Made with ❤️ for the Ummah.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Refund Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

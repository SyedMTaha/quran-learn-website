import Navbar from "../../components/navbar"
import Hero from "../../components/hero"
import Services from "../../components/services"
import About from "../../components/about"
import Packages from "../../components/packages"
import Testimonials from "../../components/testimonials"
import Contact from "../../components/contact"
import Footer from "../../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

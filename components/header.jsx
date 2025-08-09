import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

export default function Header() {
  return (
    <div className="bg-slate-800 text-white py-3 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="text-slate-300">Welcome to Quran Learn Academy - Start your spiritual journey today</div>
        <div className="flex items-center space-x-4">
          <FaFacebook className="w-4 h-4 text-slate-400 hover:text-amber-400 cursor-pointer transition-colors" />
          <FaInstagram className="w-4 h-4 text-slate-400 hover:text-amber-400 cursor-pointer transition-colors" />
          <FaTwitter className="w-4 h-4 text-slate-400 hover:text-amber-400 cursor-pointer transition-colors" />
          <FaYoutube className="w-4 h-4 text-slate-400 hover:text-amber-400 cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  )
}

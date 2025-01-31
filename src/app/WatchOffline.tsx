import Image from "next/image"
import { Download, Wifi, WifiOff, CheckCircle2 } from "lucide-react"

export default function WatchOffline() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 py-16 w-full mt-72">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <WifiOff className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Watch Offline
            </h2>
          </div>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mx-auto max-w-4xl">
            Download your favorite movies and shows to watch anytime, anywhere. No internet? No problem! 
            Castle lets you enjoy unlimited entertainment even without a connection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-blue-900/40 p-6 rounded-xl border border-blue-800/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Download className="w-6 h-6 text-purple-400" />
                Easy Downloads
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Download in HD quality
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Choose video quality for storage optimization
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Fast download speeds
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/40 p-6 rounded-xl border border-blue-800/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Wifi className="w-6 h-6 text-purple-400" />
                Smart Features
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Auto-download feature for series
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Schedule downloads for off-peak hours
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  Storage management tools
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <div className="w-full max-w-xs mx-auto aspect-[9/19] h-[600px]">
                <Image
                  src="/castle1.png"
                  alt="Castle app offline viewing interface"
                  fill
                  className="object-contain rounded-3xl shadow-2xl shadow-purple-500/20"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <span className="bg-blue-900/40 px-4 py-2 rounded-full text-gray-300 text-sm">
            Multiple Downloads
          </span>
          <span className="bg-blue-900/40 px-4 py-2 rounded-full text-gray-300 text-sm">
            Background Downloads
          </span>
          <span className="bg-blue-900/40 px-4 py-2 rounded-full text-gray-300 text-sm">
            Download Manager
          </span>
          <span className="bg-blue-900/40 px-4 py-2 rounded-full text-gray-300 text-sm">
            Quality Options
          </span>
          <span className="bg-blue-900/40 px-4 py-2 rounded-full text-gray-300 text-sm">
            Storage Control
          </span>
        </div>
      </div>
    </div>
  )
}
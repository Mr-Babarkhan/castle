import Image from "next/image"
import { Sparkles, Monitor, Smartphone, Laptop } from "lucide-react"

export default function DazzlingInterface() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Stunning Interface
            </h2>
          </div>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mx-auto max-w-4xl">
            Experience entertainment like never before with Castle intuitive and elegant interface. 
            Designed for seamless navigation, our crystal-clear layout puts all your favorite content 
            at your fingertips.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-900/40 p-6 rounded-xl border border-blue-800/50 backdrop-blur-sm">
            <Monitor className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">Smart Organization</h3>
            <p className="text-gray-300">
              Content perfectly categorized by genres, platforms, and your preferences
            </p>
          </div>

          <div className="bg-blue-900/40 p-6 rounded-xl border border-blue-800/50 backdrop-blur-sm">
            <Smartphone className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">Smooth Navigation</h3>
            <p className="text-gray-300">
              Effortlessly browse through movies, shows, and live channels
            </p>
          </div>

          <div className="bg-blue-900/40 p-6 rounded-xl border border-blue-800/50 backdrop-blur-sm">
            <Laptop className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">User Friendly</h3>
            <p className="text-gray-300">
              Clean and intuitive design that everyone can navigate with ease
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-3xl aspect-[9/19] h-[600px] md:h-[800px]">
              <Image
                src="/daz1.png"
                alt="Castle streaming interface showcase"
                fill
                className="object-contain rounded-3xl shadow-2xl shadow-purple-500/20"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <span className="bg-blue-900/40 px-4 py-2 rounded-full text-gray-300 text-sm">
            Intelligent Search
          </span>
          <span className="bg-blue-900/40 px-4 py-2 rounded-full text-gray-300 text-sm">
            Easy Downloads
          </span>
          <span className="bg-blue-900/40 px-4 py-2 rounded-full text-gray-300 text-sm">
            Quick Access
          </span>
          <span className="bg-blue-900/40 px-4 py-2 rounded-full text-gray-300 text-sm">
            Multiple Categories
          </span>
          <span className="bg-blue-900/40 px-4 py-2 rounded-full text-gray-300 text-sm">
            Regular Updates
          </span>
        </div>
      </div>
    </div>
  )
}
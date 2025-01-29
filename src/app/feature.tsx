import { User, Film, Download, Music, Moon } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Snaptube Apk</h1>

      <p className="text-gray-600 text-center text-lg md:text-xl leading-relaxed mb-16 max-w-4xl mx-auto">
        Are you fond of watching and downloading videos and looking for an incredible multimedia application that allows
        you to download and enjoy your favorite content across various platforms effortlessly? If your answer is yes
        then you are at the right place and in this article, we will explain an outstanding application named Snaptube.
        With time the demand for versatile multimedia apps is higher than ever and every user seeks an amazing
        multimedia platform that helps them to watch and download their favorite content from numerous platforms.
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Features</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
        {[
          { icon: User, title: "Dazzling Interface" },
          { icon: Film, title: "Quality Resolution" },
          { icon: Download, title: "Download Videos" },
          { icon: Music, title: "MP3 Download" },
          { icon: Moon, title: "Dark Mode" },
        ].map((feature) => (
          <div key={feature.title} className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-3xl bg-gray-50 flex items-center justify-center shadow-lg">
              <feature.icon className="w-12 h-12 text-black" strokeWidth={1.5} />
            </div>
            <p className="text-gray-800 text-lg font-medium text-center">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


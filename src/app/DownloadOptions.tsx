import Image from "next/image"

export default function Downloadoptions() {
  return (
    <div className="bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 py-8 md:py-16 px-4 w-full lg:w-[1000px] min-h-screen lg:h-[1200px] mx-auto mt-8 lg:mt-16">
      <div className="container mx-auto lg:max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Download Options:
          </h2>
          <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed mx-auto max-w-4xl">
            The users of Snaptube Apk get the best ever experience while using the application. The interface of
            Snaptube Apk is very intelligent and smooth. All the functions and key points are clearly visible. Everyone
            can easily understand all the features of this application due to its smooth and crystal-clear interface.
            People are attracted to this application due to its dazzling interface.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-[400px] aspect-[9/19]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dazzling-OCS3IzUNOPQEE7wYVN0X30k3ciSulg.png"
              alt="Snaptube interface showing social media platforms like YouTube, Facebook, Instagram and video content"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
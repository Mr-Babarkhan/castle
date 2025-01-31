"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FeaturesPage from "./feature"
import DazzlingInterface from "./Dazzling"
import WatchOffline from "./WatchOffline"
import Downloadoptions from "./DownloadOptions"
import FAQ from "./faqs"
import Info from "./Info"
import { ShieldCheck, Shield, ShieldAlert } from "lucide-react"

export default function Page() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/snaptube.apk';
    link.download = 'snaptube.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="bg-gradient-to-tr from-[#ff4d4d] via-[#ff8533] to-[#ffff33] overflow-hidden">
        <main className="container mx-auto px-4 py-4 md:py-8 -mt-2">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2 md:space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#333]">
                  Snaptube App
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#333]">
                  Download Latest Version
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl text-[#333]">
                  Free/Simple/Fast
                </p>
              </div>

              <Button 
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold rounded-md w-full sm:w-auto" 
                onClick={handleDownload}
              >
                Download Snaptube
              </Button>

              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-semibold text-[#333]">
                  Security Verified
                </h3>
                <div className="flex flex-wrap items-center gap-3 md:gap-6">
                  <div className="flex items-center gap-2 bg-white px-3 md:px-4 py-2 rounded-lg">
                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    <span className="text-xs md:text-sm font-medium">CM Security</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 md:px-4 py-2 rounded-lg">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                    <span className="text-xs md:text-sm font-medium">Lookout</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 md:px-4 py-2 rounded-lg">
                    <ShieldAlert className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                    <span className="text-xs md:text-sm font-medium">McAfee</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px]">
              <Image
                src="/heropng.png"
                alt="Snaptube App Screenshot"
                fill
                className="object-contain"
                priority 
              />
            </div>
          </div>
        </main>
      </div>
      <FeaturesPage />
      <DazzlingInterface />
      <WatchOffline />
      <Downloadoptions />
      <FAQ />
      <Info />
    </>
  )
}
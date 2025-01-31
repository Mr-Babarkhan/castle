"use client"
import React from 'react'
import Image from 'next/image'
import {  Download, Film, Tv, Radio, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import DazzlingInterface from './Dazzling'
import Downloadoptions from './DownloadOptions'
import FAQ from './faqs'
import FeaturesPage from './feature'
import WatchOffline from './WatchOffline'
import Info from './Info'



export default function Page() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://castleapps.co.uk/Files/CastleTV_v1.0.8_1227_10_55_official%20(1).apk';
    link.download = 'https://castleapps.co.uk/Files/CastleTV_v1.0.8_1227_10_55_official%20(1).apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 overflow-hidden min-h-screen">
        <main className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                  Unlimited Entertainment
                  <span className="block text-purple-400">Completely Free</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Watch your favorite Movies, TV Shows, Web Series & Live TV channels without any subscription
                </p>
              </div>

              <Button
                className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg flex items-center gap-2 shadow-lg shadow-purple-500/20"
                onClick={handleDownload}
              >
                <Download className="w-5 h-5" />
                Download Castle App
              </Button>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="bg-blue-900/40 p-4 rounded-lg border border-blue-800/50">
                  <Film className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-white text-sm font-medium">Latest Movies</div>
                  <div className="text-gray-400 text-xs mt-1">Netflix, Prime & More</div>
                </div>
                <div className="bg-blue-900/40 p-4 rounded-lg border border-blue-800/50">
                  <Tv className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-white text-sm font-medium">TV Shows</div>
                  <div className="text-gray-400 text-xs mt-1">Popular Series</div>
                </div>
                <div className="bg-blue-900/40 p-4 rounded-lg border border-blue-800/50">
                  <Radio className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-white text-sm font-medium">Live TV</div>
                  <div className="text-gray-400 text-xs mt-1">Selected Channels</div>
                </div>
                <div className="bg-blue-900/40 p-4 rounded-lg border border-blue-800/50">
                  <Sparkles className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-white text-sm font-medium">High Quality</div>
                  <div className="text-gray-400 text-xs mt-1">HD Streaming</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                <span className="bg-blue-900/40 px-3 py-1 rounded-full">Netflix Content</span>
                <span className="bg-blue-900/40 px-3 py-1 rounded-full">Prime Video</span>
                <span className="bg-blue-900/40 px-3 py-1 rounded-full">Zee5</span>
                <span className="bg-blue-900/40 px-3 py-1 rounded-full">Hotstar</span>
                <span className="bg-blue-900/40 px-3 py-1 rounded-full">Sony</span>
                <span className="bg-blue-900/40 px-3 py-1 rounded-full">Daily Updates</span>
              </div>
            </div>

            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              <Image
                src="/castle.png"
                alt="Castle App Interface"
                fill
                className="object-contain drop-shadow-2xl"
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
               <Info/>   
                 
    </>
  )
}
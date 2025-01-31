"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 relative">
      <header className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/castle.jpg"
              alt="Castle Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-2xl font-bold text-white">CASTLE</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-8 text-lg font-medium">
              <Link href="/" className="text-gray-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/download" className="text-gray-200 hover:text-white transition-colors">
                Downlaod
              </Link>
              <Link href="#feature" className="text-gray-200 hover:text-white transition-colors">
                Features
              </Link>
              
            </div>

            <Select defaultValue="english">
              <SelectTrigger className="w-[120px] bg-blue-900/50 border-blue-700 text-gray-200">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent className="bg-blue-900 border-blue-700">
                <SelectItem value="english">English ▼</SelectItem>
              </SelectContent>
            </Select>

            <button
              className="md:hidden text-gray-200 p-2 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`md:hidden absolute w-full bg-blue-900/95 py-4 px-4 backdrop-blur-sm transition-all duration-300 z-50 border-t border-blue-800 ${
          isMenuOpen ? 'opacity-100 visible top-full' : 'opacity-0 invisible -top-full'
        }`}
      >
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-gray-200 hover:text-white" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/movies" className="text-gray-200 hover:text-white" onClick={() => setIsMenuOpen(false)}>
           Download
          </Link>
          <Link href="#feature" className="text-gray-200 hover:text-white" onClick={() => setIsMenuOpen(false)}>
            Features
          </Link>
          
        </div>
      </div>
    </div>
  )
}
"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-tr from-[#ff4d4d] via-[#ff8533] to-[#ffff33] relative">
      <header className="container mx-auto px-4 py-2">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/castle.jpg"
              alt="Snaptube Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-2xl font-bold text-[#333]">CASTLE</span>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-lg font-medium">
              <Link href="/" className="text-white hover:text-yellow-100">
                Home
              </Link>
              <Link
                href="/download"
                className="text-white hover:text-yellow-100 font-medium"
              >
                Download
              </Link>
              <a href="https://zoroxtv.mom" className="text-white hover:text-yellow-100">
                Blog
              </a>
            </div>

            <Select defaultValue="english">
              <SelectTrigger className="w-[120px] bg-yellow-100/90 border-none">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English ▼</SelectItem>
              </SelectContent>
            </Select>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute w-full bg-gradient-to-r from-[#ff4d4d] to-[#ff8533] py-4 px-4 shadow-lg transition-all duration-300 z-50 ${
          isMenuOpen ? 'opacity-100 visible top-full' : 'opacity-0 invisible -top-full'
        }`}
      >
        <div className="flex flex-col gap-4">
          <Link 
            href="/" 
            className="text-white hover:text-yellow-100 text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/download"
            className="text-white hover:text-yellow-100 text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Download
          </Link>
          <a 
            href="https://zoroxtv.mom" 
            className="text-white hover:text-yellow-100 text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
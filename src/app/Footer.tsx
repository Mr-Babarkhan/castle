import Link from "next/link";

export function Footer() {
    return (
      <footer className="w-full">
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="flex flex-wrap justify-center gap-8 mb-6 text-lg">
              <Link href="/disclaimer" className="hover:underline transition-colors text-gray-300">
                Disclaimer
              </Link>
              <Link href="/dmca" className="hover:underline transition-colors text-gray-300">
                DMCA Policy
              </Link>
              <a href="/privacy" className="hover:underline transition-colors text-gray-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:underline transition-colors text-gray-300">
                Terms and Conditions
              </a>
            </nav>
            <div className="text-center text-lg text-gray-300">
              Contact Us: <a href="mailto:contact@Castles.me" className="hover:underline">contact@Castles.me</a>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-700 via-blue-600-700  to-blue-900 text-white py-4">
          <div className="text-center">
            Copyright © Castle All rights reserved
          </div>
        </div>
      </footer>
    )
  }
  
import Link from "next/link";

export function Footer() {
    return (
      <footer className="w-full">
        <div className="bg-yellow-300 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="flex flex-wrap justify-center gap-8 mb-6 text-lg">
              <Link href="/disclaimer" className="hover:underline transition-colors">
                Disclaimer
              </Link>
              <Link href="/dmca" className="hover:underline transition-colors">
                DMCA Policy
              </Link>
              <a href="/privacy" className="hover:underline transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:underline transition-colors">
                Terms and Conditions
              </a>
            </nav>
            <div className="text-center text-lg">
              Contact Us: <a href="mailto:contact@snaptubes.me" className="hover:underline">contact@snaptubes.me</a>
            </div>
          </div>
        </div>
        <div className="bg-black text-white py-4">
          <div className="text-center">
            Copyright © Snaptube All rights reserved
          </div>
        </div>
      </footer>
    )
  }
  
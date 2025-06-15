import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left: Brand Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Eventin</h2>
          <p className="text-sm text-gray-400">
            Discover, attend, and manage events effortlessly.
          </p>
        </div>

        {/* Middle: Navigation */}
        <div className="flex flex-col space-y-2 md:items-center">
          <Link
            href="/about"
            className="hover:text-indigo-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-indigo-400 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="hover:text-indigo-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-indigo-400 transition-colors"
          >
            Terms of Service
          </Link>
        </div>

        {/* Right: Social Media */}
        <div className="flex space-x-4 md:justify-end">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Eventin Management Platform. All rights
        reserved.
      </div>
    </footer>
  );
}

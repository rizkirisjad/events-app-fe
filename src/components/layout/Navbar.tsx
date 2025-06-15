"use client";

import Link from "next/link";
import Logo from "./navbar/Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-600 hover:text-indigo-600"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/events"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Events
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              About
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="px-4 py-2 text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`md:hidden flex flex-col gap-2 mt-2 px-2 transition-all duration-300 transform origin-top ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <Link
            href="/events"
            className="block text-gray-600 hover:text-indigo-600 py-1"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/about"
            className="block text-gray-600 hover:text-indigo-600 py-1"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/login"
            className="block text-gray-600 hover:text-indigo-600 py-1"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/register"
            className="block bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

import Link from "next/link";
import Logo from "./navbar/Logo";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="flex items-center space-x-6">
            <Link href="/events" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Events
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">
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
      </div>
    </nav>
  );
}

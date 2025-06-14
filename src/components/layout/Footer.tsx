import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Eventin Management Platform. All
              rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

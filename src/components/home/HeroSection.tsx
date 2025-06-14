import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/pattern.svg"
          alt="Background Pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover Amazing Events Near You
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Find and book tickets for concerts, sports, arts, theater, and more.
            Join thousands of event enthusiasts and create unforgettable memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/events"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Browse Events
            </Link>
            <Link
              href="/events/create"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
            >
              Create Event
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10k+</div>
              <div className="text-blue-100">Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.8</div>
              <div className="text-blue-100">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
} 
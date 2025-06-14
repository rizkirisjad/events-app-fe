import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Event Not Found</h2>
        <p className="text-gray-600">
          Sorry, we couldn't find the event you're looking for.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Events
        </Link>
      </div>
    </div>
  );
} 
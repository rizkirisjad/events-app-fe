import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { Calendar, MapPin, Tag, Users } from 'lucide-react';

// Temporary mock data
const mockEvent = {
  id: '1',
  title: 'Summer Music Festival',
  description: 'Join us for the biggest music festival of the year!',
  date: '2024-07-15',
  time: '14:00',
  location: 'Jakarta',
  category: 'Music',
  price: 500000,
  imageUrl: '/images/event1.jpg',
  availableSeats: 1000,
  longDescription: `Experience the ultimate summer music festival featuring top artists from around the world. 
  This year's lineup includes international stars and local talents performing across multiple stages. 
  Enjoy delicious food, refreshing drinks, and create unforgettable memories with friends and fellow music lovers.`,
  organizer: {
    name: 'Event Pro Indonesia',
    email: 'contact@eventpro.id',
    phone: '+62 812-3456-7890',
  },
};

interface EventDetailsPageProps {
  params: {
    id: string;
  };
}

export default function EventDetailsPage({ params }: EventDetailsPageProps) {
  // In a real app, fetch event data based on params.id
  const event = mockEvent;

  if (!event) {
    notFound();
  }

  const formattedDate = format(new Date(event.date), 'EEEE, MMMM dd, yyyy');
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(event.price);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {event.title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{formattedDate} at {event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-5 w-5 mr-2" />
                <span>{event.category}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>{event.availableSeats} seats left</span>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">{event.longDescription}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Event Organizer</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> {event.organizer.name}</p>
              <p><span className="font-medium">Email:</span> {event.organizer.email}</p>
              <p><span className="font-medium">Phone:</span> {event.organizer.phone}</p>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-600">
                  {event.price === 0 ? 'Free' : formattedPrice}
                </p>
                <p className="text-sm text-gray-500">
                  {event.availableSeats} seats available
                </p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
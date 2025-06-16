import { notFound } from "next/navigation";
import axios from "@/lib/axios";
import { format } from "date-fns";
import Image from "next/image";
import { Calendar, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IDR } from "@/lib/formatter";

interface EventDetail {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price: number;
  imageUrl: string;
  availableSeats: number;
}

type PageProps = {
  params: {
    id: string;
  };
};

export default async function EventDetailPage({ params }: PageProps) {
  try {
    const response = await axios.get<EventDetail>(`/v1/events/${params.id}`);
    const event = response.data;

    const formattedDate = format(new Date(event.date), "EEEE, MMMM dd, yyyy");
    const formattedPrice = IDR(event.price);

    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-6 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {event.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {formattedDate} at {event.time}
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              {event.location}
            </div>
            <div className="flex items-center">
              <Tag className="w-5 h-5 mr-2" />
              {event.category}
            </div>
          </div>

          <div className="text-gray-700 text-lg leading-relaxed">
            {event.description}
          </div>

          <div className="pt-4 border-t mt-6 flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold text-blue-600">
                {event.price === 0 ? "Free" : formattedPrice}
              </p>
              <p className="text-gray-500 text-sm">
                {event.availableSeats} seats available
              </p>
            </div>

            {event.availableSeats > 0 ? (
              <Button size="lg">Buy Ticket</Button>
            ) : (
              <p className="text-red-500 font-medium">Sold Out</p>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to load event:", error);
    notFound();
  }
}

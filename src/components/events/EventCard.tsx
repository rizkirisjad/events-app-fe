"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import { Calendar, MapPin, Tag } from "lucide-react";
import { Loader2 } from "lucide-react";
import { IDR } from "@/lib/formatter";

interface Event {
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

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formattedDate = format(new Date(event.date), "MMM dd, yyyy");
  const formattedPrice = IDR(event.price);

  const handleClick = () => {
    setIsLoading(true);
    router.push(`/event/${event.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
    >
      {/* Spinner overlay saat loading */}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 z-50 flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
        </div>
      )}

      <div className="relative h-48 w-full">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
          {event.title}
        </h3>

        <p className="text-gray-600 line-clamp-2">{event.description}</p>

        <div className="space-y-2">
          <div className="flex items-center text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span>
              {formattedDate} at {event.time}
            </span>
          </div>

          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.location}</span>
          </div>

          <div className="flex items-center text-gray-500">
            <Tag className="h-4 w-4 mr-2" />
            <span>{event.category}</span>
          </div>
        </div>

        <div className="pt-2">
          <span className="text-lg font-semibold text-blue-600">
            {event.price === 0 ? "Free" : formattedPrice}
          </span>
          <span className="text-sm text-gray-500 ml-2">
            • {event.availableSeats} seats left
          </span>
        </div>
      </div>
    </div>
  );
}

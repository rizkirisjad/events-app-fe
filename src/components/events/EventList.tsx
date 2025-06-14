import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import Pagination from "./Pagination";
import { Event, EventsResponse } from "@/lib/types/event";
import axios from "@/lib/axios";

interface EventListProps {
  searchQuery?: string;
  filters?: {
    category: string;
    location: string;
  };
}

export default function EventList({
  searchQuery = "",
  filters,
}: EventListProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const eventsPerPage = 6;

  // Reset page when filters or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filters?.category, filters?.location]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const params = new URLSearchParams({
          page: currentPage.toString(),
          limit: eventsPerPage.toString(),
          ...(searchQuery && { q: searchQuery }),
          ...(filters?.category && filters.category !== "All Categories" && {
            category: filters.category,
          }),
          ...(filters?.location && filters.location !== "All Locations" && {
            location: filters.location,
          }),
        });

        const response = await axios.get<EventsResponse>(
          `/v1/events?${params}`
        );
        setEvents(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        setError("Failed to fetch events. Please try again later.");
        console.error("Error fetching events:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [currentPage, searchQuery, filters?.category, filters?.location]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="border rounded-lg p-4 space-y-4 animate-pulse"
          >
            <div className="h-48 bg-gray-200 rounded" />
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {events.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No events found</p>
        </div>
      )}
    </div>
  );
}

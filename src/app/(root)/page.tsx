"use client";

import { useState } from "react";
import EventList from "@/components/events/EventList";
import SearchBar from "@/components/events/SearchBar";
import FilterBar from "@/components/events/FilterBar";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "All Categories",
    location: "All Locations",
  });

  return (
    <main>
      <HeroSection />
      
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <SearchBar onSearch={setSearchQuery} />
            <FilterBar onFilterChange={setFilters} />
          </div>

          <EventList searchQuery={searchQuery} filters={filters} />
        </div>
      </div>
    </main>
  );
}

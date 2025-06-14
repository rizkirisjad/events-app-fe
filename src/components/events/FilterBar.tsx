import { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

interface FilterBarProps {
  onFilterChange?: (filters: { category: string; location: string }) => void;
}

const categories = [
  'All Categories',
  'Music',
  'Sports',
  'Arts & Theater',
  'Food & Drink',
  'Business',
  'Technology',
];

const locations = [
  'All Locations',
  'Jakarta',
  'Bandung',
  'Surabaya',
  'Yogyakarta',
  'Bali',
];

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  const handleFilterChange = (type: 'category' | 'location', value: string) => {
    if (type === 'category') {
      setSelectedCategory(value);
      onFilterChange?.({
        category: value,
        location: selectedLocation,
      });
    } else {
      setSelectedLocation(value);
      onFilterChange?.({
        category: selectedCategory,
        location: value,
      });
    }
  };

  return (
    <div className="flex gap-4">
      <Select.Root
        value={selectedCategory}
        onValueChange={(value) => handleFilterChange('category', value)}
      >
        <Select.Trigger className="inline-flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <Select.Value placeholder="Select category" />
          <Select.Icon>
            <ChevronDown className="h-4 w-4" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg">
            <Select.Viewport className="p-2">
              {categories.map((category) => (
                <Select.Item
                  key={category}
                  value={category}
                  className="relative flex items-center px-8 py-2 text-sm text-gray-700 rounded-md cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  <Select.ItemText>{category}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <Select.Root
        value={selectedLocation}
        onValueChange={(value) => handleFilterChange('location', value)}
      >
        <Select.Trigger className="inline-flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <Select.Value placeholder="Select location" />
          <Select.Icon>
            <ChevronDown className="h-4 w-4" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg">
            <Select.Viewport className="p-2">
              {locations.map((location) => (
                <Select.Item
                  key={location}
                  value={location}
                  className="relative flex items-center px-8 py-2 text-sm text-gray-700 rounded-md cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  <Select.ItemText>{location}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
} 
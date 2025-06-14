export interface TicketType {
  id: string;
  name: string;
  price: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  imageUrl: string;
  price: number;
  isFree: boolean;
  availableSeats: number;
  ticketTypes: TicketType[];
}

export interface EventsResponse {
  data: Event[];
  page: number;
  total: number;
  totalPages: number;
  hasMore: boolean;
} 
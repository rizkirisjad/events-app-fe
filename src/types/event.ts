export interface Event {
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
  organizer: {
    name: string;
  };
}
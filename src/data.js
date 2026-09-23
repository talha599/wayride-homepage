import { CarFront, Clock3, Plane, Route, ShieldCheck, Star, Users } from 'lucide-react';

export const images = {
  hero: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=85',
  business: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
  club: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=85',
  vms: 'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=1200&q=85',
  family: 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1000&q=85',
  airport: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85',
  tour: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=85',
  app: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85'
};

export const stats = [['12K+', 'Trip Requests'], ['8K+', 'Total Customers'], ['1.2K+', 'Active Drivers'], ['64', 'Districts Covered']];
export const services = [
  ['Intercity Car Rental', 'Travel between cities with comfort and confidence.', Route],
  ['Ride Share', 'Go anywhere in the city, quickly and easily.', Users],
  ['Airport Rental', 'Comfortable, worry-free airport journeys from pickup to arrival.', Plane],
  ['Hourly Rental', 'Rent a car by the hour, tailored to your needs.', Clock3]
];
export const journeyCards = [
  ['Choose the Car', 'Pick what suits your comfort.', CarFront],
  ['Choose the Driver', 'Based on ratings and reviews.', Star],
  ['Choose the Fare', 'Select the bid that fits your budget.', ShieldCheck]
];

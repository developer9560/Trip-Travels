export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Flight & Hotel Bookings",
    description: "Secure the best deals on flights and premium accommodations worldwide with our global partners.",
    icon: "fas fa-plane-departure"
  },
  {
    id: 2,
    title: "Customized Tour Packages",
    description: "Personalized itineraries designed to match your interests, schedule, and budget requirements.",
    icon: "fas fa-map-marked-alt"
  },
  {
    id: 3,
    title: "Visa Assistance",
    description: "Expert guidance through visa application processes for hassle-free international travel.",
    icon: "fas fa-passport"
  },
  {
    id: 4,
    title: "Corporate Travel",
    description: "Specialized business travel solutions with priority support and group coordination.",
    icon: "fas fa-building"
  },
  {
    id: 5,
    title: "Honeymoon Packages",
    description: "Romantic getaways with special touches to create unforgettable memories for newlyweds.",
    icon: "fas fa-heart"
  },
  {
    id: 6,
    title: "Luxury & Cruise Travel",
    description: "Premium experiences on world-class cruise lines with exclusive amenities and excursions.",
    icon: "fas fa-ship"
  }
];

export default services;

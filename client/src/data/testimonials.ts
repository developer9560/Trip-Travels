export interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
  tour: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Our family trip to Bali was absolutely amazing! The itinerary was perfect, accommodations were excellent, and the local guides were so knowledgeable. Couldn't have asked for a better experience!",
    tour: "Bali Tour",
    date: "June 2023"
  },
  {
    id: 2,
    name: "Michael Roberts",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "My wife and I had the most incredible honeymoon in Santorini. The private sunset cruise was the highlight of our trip. The team at Trips & Travel made everything stress-free and memorable!",
    tour: "Greece Tour",
    date: "May 2023"
  },
  {
    id: 3,
    name: "Jennifer Chen",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
    text: "The Swiss Alps tour exceeded all our expectations. The attention to detail was impressive, and when we had a last-minute change, the support team handled everything perfectly. Highly recommend!",
    tour: "Switzerland Tour",
    date: "July 2023"
  },
  {
    id: 4,
    name: "David Wilson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The Dubai experience was truly luxurious from start to finish. The desert safari and Burj Khalifa visit were highlights. Exceptional service throughout our entire journey!",
    tour: "Dubai Tour",
    date: "August 2023"
  }
];

export default testimonials;

import { motion } from "framer-motion";
import testimonials from "@/data/testimonials";

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  const stars = [];
  const fullStars = Math.floor(testimonial.rating);
  const hasHalfStar = testimonial.rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fas fa-star"></i>);
  }
  
  if (hasHalfStar) {
    stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
  }
  
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="text-[#D4AF37] mb-3">
        {stars}
      </div>
      <p className="text-neutral-700 mb-4">"{testimonial.text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-neutral-800">{testimonial.name}</h4>
          <p className="text-sm text-neutral-600">{testimonial.tour}, {testimonial.date}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-800 mb-3">What Our Travelers Say</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">Hear from travelers who have experienced our services firsthand.</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#" className="text-primary font-medium hover:text-primary-dark transition-all">
            View All Reviews <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

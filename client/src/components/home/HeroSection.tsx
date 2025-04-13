import { Link } from "wouter";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[600px] md:h-[650px] bg-neutral-800">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            Explore the World with Ease!
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Discover affordable trips & unforgettable adventures tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/packages">
              <motion.a 
                className="font-poppins bg-[#D4AF37] hover:bg-[#B79020] text-white font-medium px-8 py-3 rounded-md text-center transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Packages
              </motion.a>
            </Link>
            <Link href="/contact">
              <motion.a 
                className="font-poppins bg-white hover:bg-neutral-100 text-primary font-medium px-8 py-3 rounded-md text-center transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

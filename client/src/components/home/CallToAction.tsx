import { Link } from "wouter";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Ready to Start Your Adventure?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">Join thousands of satisfied travelers who have discovered their perfect getaway with us.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/packages">
              <motion.a 
                className="font-poppins bg-white text-primary hover:bg-neutral-100 font-medium px-8 py-3 rounded-md transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Packages
              </motion.a>
            </Link>
            <Link href="/contact">
              <motion.a 
                className="font-poppins bg-[#D4AF37] hover:bg-[#B79020] text-white font-medium px-8 py-3 rounded-md transition-all"
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

export default CallToAction;

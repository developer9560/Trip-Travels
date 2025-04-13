import { motion } from "framer-motion";
import CallToAction from "@/components/home/CallToAction";

const About = () => {
  return (
    <>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">About Trips & Travel</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              Your trusted partner for exceptional travel experiences around the world.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* About Content */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-800 mb-4">About Trips & Travel</h2>
                <p className="text-neutral-600 mb-4">With over 15 years of experience in the travel industry, we've helped thousands of travelers create unforgettable memories across the globe.</p>
                <p className="text-neutral-600 mb-4">Our team of passionate travel experts brings together global connections and local knowledge to design exceptional experiences tailored to your preferences.</p>
                <p className="text-neutral-600">We believe travel should be accessible, stress-free, and transformative – and our commitment to these principles has made us a trusted name in the industry.</p>
              </div>
              
              <div className="mb-8">
                <h3 className="font-poppins font-semibold text-xl mb-3">Our Mission & Vision</h3>
                <p className="text-neutral-600">We aim to create the best travel experiences tailored to your needs, making extraordinary journeys accessible to everyone while promoting responsible tourism practices.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-primary text-xl mb-2">
                    <i className="fas fa-award"></i>
                  </div>
                  <h4 className="font-medium text-neutral-800 mb-1">Travel Excellence Award</h4>
                  <p className="text-sm text-neutral-600">2022 & 2023</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-primary text-xl mb-2">
                    <i className="fas fa-users"></i>
                  </div>
                  <h4 className="font-medium text-neutral-800 mb-1">10,000+ Happy Clients</h4>
                  <p className="text-sm text-neutral-600">And counting</p>
                </div>
              </div>
              
              <a href="/contact" className="font-poppins inline-block bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-md transition-all">
                Start Your Journey with Us
              </a>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Travel destination" className="w-full h-[200px] object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Luxury resort" className="w-full h-[250px] object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Adventure activity" className="w-full h-[250px] object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Beach destination" className="w-full h-[200px] object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-800 mb-3">Meet Our Expert Team</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">Our passionate travel consultants are dedicated to creating unforgettable experiences for you.</p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="rounded-xl overflow-hidden shadow-md mb-4">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="David Miller" className="w-full h-64 object-cover" />
              </div>
              <h3 className="font-poppins font-semibold text-lg">David Miller</h3>
              <p className="text-primary">Founder & CEO</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="rounded-xl overflow-hidden shadow-md mb-4">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Sarah Johnson" className="w-full h-64 object-cover" />
              </div>
              <h3 className="font-poppins font-semibold text-lg">Sarah Johnson</h3>
              <p className="text-primary">Travel Specialist</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="rounded-xl overflow-hidden shadow-md mb-4">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Michael Chen" className="w-full h-64 object-cover" />
              </div>
              <h3 className="font-poppins font-semibold text-lg">Michael Chen</h3>
              <p className="text-primary">Destination Expert</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="rounded-xl overflow-hidden shadow-md mb-4">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Emily Rodriguez" className="w-full h-64 object-cover" />
              </div>
              <h3 className="font-poppins font-semibold text-lg">Emily Rodriguez</h3>
              <p className="text-primary">Customer Relations</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default About;

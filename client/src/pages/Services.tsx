import { motion } from "framer-motion";
import services from "@/data/services";
import CallToAction from "@/components/home/CallToAction";

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <motion.div 
      className="bg-neutral-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="text-primary text-4xl mb-4">
        <i className={service.icon}></i>
      </div>
      <h3 className="font-poppins font-semibold text-xl mb-3">{service.title}</h3>
      <p className="text-neutral-600 mb-4">{service.description}</p>
      <a href="#" className="text-primary font-medium hover:text-primary-dark transition-all inline-flex items-center">
        Learn More <i className="fas fa-chevron-right ml-2 text-sm"></i>
      </a>
    </motion.div>
  );
};

const Services = () => {
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
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">Our Services</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              Comprehensive travel solutions tailored to your needs and preferences.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-800 mb-3">How We Work</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Our simple process ensures you get the best travel experience with minimal effort.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Tell Us Your Requirements</h3>
              <p className="text-neutral-600">
                Share your travel preferences, dates, budget, and any special requirements.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Receive Customized Plan</h3>
              <p className="text-neutral-600">
                Our experts craft the perfect itinerary tailored specifically to your needs.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Book & Enjoy Your Trip</h3>
              <p className="text-neutral-600">
                Confirm your booking and embark on your hassle-free travel experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default Services;

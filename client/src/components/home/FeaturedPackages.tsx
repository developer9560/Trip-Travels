import { Link } from "wouter";
import { motion } from "framer-motion";
import travelPackages, { TravelPackage } from "@/data/packages";

const PackageCard = ({ pkg, index }: { pkg: TravelPackage, index: number }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.destination} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-3 bg-[#D4AF37] text-white text-sm font-medium py-1 px-3 rounded-full">
          {pkg.duration}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-poppins font-semibold text-lg text-neutral-800">{pkg.destination}</h3>
          <div className="text-sm font-medium text-neutral-600">
            <i className="fas fa-star text-[#D4AF37]"></i> {pkg.rating} ({pkg.reviews})
          </div>
        </div>
        <p className="text-sm text-neutral-600 mb-4">{pkg.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg text-primary">${pkg.price}</span>
            <span className="text-sm text-neutral-500">/person</span>
          </div>
          <Link href={`/packages`}>
            <a className="text-primary font-medium text-sm hover:text-primary-dark">
              View Details <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedPackages = () => {
  // Filter featured packages
  const featuredPackages = travelPackages.filter(pkg => pkg.featured);

  return (
    <section id="packages" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-800 mb-3">Popular Travel Packages</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">Discover our most loved destinations and experiences handpicked for unforgettable adventures.</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredPackages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/packages">
            <a className="font-poppins inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-3 rounded-md transition-all">
              View All Packages
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPackages;

import { useState } from "react";
import { motion } from "framer-motion";
import travelPackages, { TravelPackage } from "@/data/packages";
import CallToAction from "@/components/home/CallToAction";

interface FilterOptions {
  destination: string;
  budget: string;
  duration: string;
}

const PackageCard = ({ pkg, index }: { pkg: TravelPackage, index: number }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * (index % 4), duration: 0.5 }}
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
          <a href="#" className="text-primary font-medium text-sm hover:text-primary-dark">
            View Details <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Packages = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    destination: "",
    budget: "",
    duration: ""
  });
  
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const filteredPackages = travelPackages.filter(pkg => {
    // Apply destination filter
    if (filters.destination && !pkg.destination.toLowerCase().includes(filters.destination.toLowerCase())) {
      return false;
    }
    
    // Apply budget filter
    if (filters.budget) {
      const price = pkg.price;
      if (filters.budget === "economy" && (price < 1000 || price > 2000)) return false;
      if (filters.budget === "standard" && (price < 2000 || price > 4000)) return false;
      if (filters.budget === "luxury" && price < 4000) return false;
    }
    
    // Apply duration filter
    if (filters.duration) {
      const days = parseInt(pkg.duration.split(' ')[0]);
      if (filters.duration === "short" && days > 4) return false;
      if (filters.duration === "medium" && (days < 5 || days > 7)) return false;
      if (filters.duration === "long" && days < 8) return false;
    }
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        pkg.name.toLowerCase().includes(query) ||
        pkg.destination.toLowerCase().includes(query) ||
        pkg.description.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

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
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">Travel Packages</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              Discover our handpicked travel packages designed to create unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div className="md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-neutral-700 mb-1">Search Packages</label>
              <input 
                type="text"
                id="search"
                placeholder="Search destinations, experiences..."
                className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-neutral-700 mb-1">Destination</label>
              <select 
                id="destination"
                name="destination"
                className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                value={filters.destination}
                onChange={handleFilterChange}
              >
                <option value="">All Destinations</option>
                <option value="greece">Greece</option>
                <option value="bali">Bali</option>
                <option value="switzerland">Switzerland</option>
                <option value="dubai">Dubai</option>
                <option value="japan">Japan</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-1">Budget</label>
              <select 
                id="budget"
                name="budget"
                className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                value={filters.budget}
                onChange={handleFilterChange}
              >
                <option value="">All Budgets</option>
                <option value="economy">Economy ($1000-$2000)</option>
                <option value="standard">Standard ($2000-$4000)</option>
                <option value="luxury">Luxury ($4000+)</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-neutral-700 mb-1">Duration</label>
              <select 
                id="duration"
                name="duration"
                className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                value={filters.duration}
                onChange={handleFilterChange}
              >
                <option value="">All Durations</option>
                <option value="short">Short (1-4 days)</option>
                <option value="medium">Medium (5-7 days)</option>
                <option value="long">Long (8+ days)</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Packages List */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-5xl text-neutral-400 mb-4">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">No packages found</h3>
              <p className="text-neutral-600">Try adjusting your filters or search criteria.</p>
            </div>
          )}
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default Packages;

import { useState } from "react";
import { motion } from "framer-motion";

const SearchSection = () => {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [budget, setBudget] = useState("");
  const [travelers, setTravelers] = useState("1");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would search for matching packages
    console.log("Search values:", { destination, dates, budget, travelers });
    // For now, just redirect to packages page
    window.location.href = "/packages";
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-white shadow-lg rounded-lg p-6 md:p-8 -mt-20 relative z-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="font-poppins font-bold text-2xl text-neutral-800 mb-6 text-center">Find Your Perfect Trip</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" onSubmit={handleSearch}>
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-neutral-700 mb-1">Destination</label>
              <select 
                id="destination" 
                className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="">Select Destination</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="america">North America</option>
                <option value="australia">Australia</option>
                <option value="africa">Africa</option>
              </select>
            </div>
            <div>
              <label htmlFor="dates" className="block text-sm font-medium text-neutral-700 mb-1">Travel Dates</label>
              <input 
                type="text" 
                id="dates" 
                placeholder="MM/DD/YYYY - MM/DD/YYYY" 
                className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-1">Budget</label>
              <select 
                id="budget" 
                className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="">Select Budget</option>
                <option value="economy">Economy ($1000-$2000)</option>
                <option value="standard">Standard ($2000-$4000)</option>
                <option value="luxury">Luxury ($4000+)</option>
              </select>
            </div>
            <div>
              <label htmlFor="travelers" className="block text-sm font-medium text-neutral-700 mb-1">Travelers</label>
              <select 
                id="travelers" 
                className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
              >
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4 Travelers</option>
                <option value="5+">5+ Travelers</option>
              </select>
            </div>
            <div className="mt-6 text-center md:col-span-2 lg:col-span-4">
              <motion.button 
                type="submit"
                className="font-poppins font-medium bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Search Trips
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchSection;

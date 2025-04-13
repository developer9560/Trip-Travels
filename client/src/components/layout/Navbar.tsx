import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-mobile";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  // Close mobile menu when screen size changes from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);
    }
  }, [isMobile]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/packages" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="relative bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-primary text-2xl">
            <i className="fas fa-globe-americas"></i>
          </div>
          <div>
            <h1 className="font-poppins font-bold text-primary text-xl md:text-2xl">Trips & Travel</h1>
            <p className="text-xs text-neutral-600">Your Journey, Our Expertise</p>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className={cn(
                "font-medium transition-all",
                location === link.path 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-neutral-700 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="font-poppins font-medium bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-md transition-all"
          >
            Book Now
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div 
        className="md:hidden bg-white absolute w-full border-t border-neutral-200 overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                href={link.path} 
                className={cn(
                  "font-medium py-2 border-b border-neutral-100",
                  location === link.path ? "text-primary" : "text-neutral-700"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="font-poppins font-medium bg-primary text-white py-2 px-4 rounded-md text-center"
            >
              Book Now
            </Link>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;

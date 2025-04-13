import { useState } from "react";
import { Link } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/subscribe", { email });
      toast({
        title: "Success!",
        description: "You have successfully subscribed to our newsletter"
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-neutral-800 text-neutral-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-white text-2xl">
                <i className="fas fa-globe-americas"></i>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-white text-xl">Trips & Travel</h3>
              </div>
            </div>
            <p className="mb-4">Your trusted partner for exceptional travel experiences around the world.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-all">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-all">Home</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-all">Packages</Link></li>
              <li><Link href="/services" className="hover:text-white transition-all">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-all">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-all">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Popular Destinations */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-lg mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><Link href="/packages" className="hover:text-white transition-all">Bali, Indonesia</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-all">Santorini, Greece</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-all">Swiss Alps, Switzerland</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-all">Dubai, UAE</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-all">Maldives</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-lg mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-4">Get the latest travel deals and updates delivered to your inbox.</p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="p-3 flex-grow bg-neutral-700 text-white border-none rounded-l-md focus:outline-none focus:ring-2 focus:ring-secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                className="bg-secondary hover:bg-secondary-dark text-white p-3 rounded-r-md transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  <i className="fas fa-paper-plane"></i>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-700 text-center text-sm">
          <p>© {new Date().getFullYear()} Trips & Travel. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all">Terms of Service</a>
            <a href="#" className="hover:text-white transition-all">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

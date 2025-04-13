import { motion } from "framer-motion";

const features = [
  {
    icon: "fas fa-dollar-sign",
    title: "Affordable Prices",
    description: "We offer competitive rates and value-packed deals for every budget."
  },
  {
    icon: "fas fa-headset",
    title: "24/7 Customer Support",
    description: "Our dedicated team is available around the clock to assist you."
  },
  {
    icon: "fas fa-map-marked-alt",
    title: "Customized Tours",
    description: "Tailor-made experiences designed to match your preferences."
  },
  {
    icon: "fas fa-user-shield",
    title: "Trusted by 10,000+",
    description: "Join thousands of satisfied travelers who chose our services."
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.div 
      className="text-center p-6 bg-neutral-50 rounded-xl shadow-md hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
        <i className={`${feature.icon} text-2xl`}></i>
      </div>
      <h3 className="font-poppins font-semibold text-xl mb-2">{feature.title}</h3>
      <p className="text-neutral-600">{feature.description}</p>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-800 mb-3">Why Choose Us?</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">We are dedicated to providing exceptional travel experiences that exceed your expectations.</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

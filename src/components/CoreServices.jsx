import { motion } from "framer-motion";

const services = [
  "Custom Software",
  "Web & Mobile Apps",
  "Cloud & DevOps",
  "Digital Transformation",
  "IT Consulting"
];

export default function CoreServices() {
  return (
    <section className="section" id="services">
      <h2>Core Services</h2>
      <div className="card-grid">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            className="service-card"
            whileHover={{ scale: 1.08 }}
          >
            {service}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
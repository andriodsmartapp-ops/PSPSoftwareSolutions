import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Migrate Your Web App in 10 Minutes!</h1>
        <p className="hero-subtitle">
          Premium migration kits: performance, SEO, notifications, maps, and app-store ready packaging.
        </p>
        <div className="features">
          <span>Push Notifications</span>
          <span>GPS & Maps</span>
          <span>Easy Backlinks</span>
          <span>SEO Optimization</span>
        </div>
      </motion.div>

      {/* Decorative floating elements (no external assets required) */}
      <motion.div className="float-orb orb-1" animate={{ y: [0, -18, 0] }} transition={{ duration: 5, repeat: Infinity }} />
      <motion.div className="float-orb orb-2" animate={{ y: [0, 22, 0] }} transition={{ duration: 6, repeat: Infinity }} />
      <motion.div className="float-orb orb-3" animate={{ y: [0, -14, 0] }} transition={{ duration: 4.5, repeat: Infinity }} />
    </section>
  );
}
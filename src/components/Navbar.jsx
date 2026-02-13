import { motion } from "framer-motion";
import { FaRobot, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const links = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "AI", id: "ai" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="logo">⭐ PSG Software Solutions</div>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.id}>
            <button className="nav-link" onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="nav-icons">
        <FaRobot />
        <FaUserCircle />
      </div>
    </motion.nav>
  );
}
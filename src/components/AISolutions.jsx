import { motion } from "framer-motion";

const data = [
  { title: "AI Chatbots", desc: "Conversational AI assistants for engagement." },
  { title: "Predictive Analytics", desc: "Smart business forecasting insights." },
  { title: "AI Automation", desc: "Automate workflows intelligently." }
];

export default function AISolutions() {
  return (
    <section className="section" id="ai">
      <h2>AI Powered Solutions</h2>
      <div className="card-grid">
        {data.map((item, i) => (
          <motion.div 
            key={i}
            className="ai-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
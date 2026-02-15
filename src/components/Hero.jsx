// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="hero" id="home">
//       <motion.div
//         className="hero-card"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h1>Migrate Your Web App in 10 Minutes!</h1>
//         <p className="hero-subtitle">
//           Premium migration kits: performance, SEO, notifications, maps, and app-store ready packaging.
//         </p>
//         <div className="features">
//           <span>Push Notifications</span>
//           <span>GPS & Maps</span>
//           <span>Easy Backlinks</span>
//           <span>SEO Optimization</span>
//         </div>
//       </motion.div>

//       {/* Decorative floating elements (no external assets required) */}
//       <motion.div className="float-orb orb-1" animate={{ y: [0, -18, 0] }} transition={{ duration: 5, repeat: Infinity }} />
//       <motion.div className="float-orb orb-2" animate={{ y: [0, 22, 0] }} transition={{ duration: 6, repeat: Infinity }} />
//       <motion.div className="float-orb orb-3" animate={{ y: [0, -14, 0] }} transition={{ duration: 4.5, repeat: Infinity }} />
//     </section>
//   );
// }

import { motion } from "framer-motion";
import Footer from "./Footer";

export default function Hero() {
  return (
    <section className="hero">
      {/* Star Background */}
      <div className="stars"></div>

      {/* Main Banner Card */}
      <motion.div
        className="banner"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Floating Corner Elements INSIDE banner */}
        <img src="/message.png" className="corner message" />
        <img src="/rocket.png" className="corner rocket" />
        <img src="/maps.png" className="corner maps" />
        <img src="/aeroplaneenvelop.png" className="corner aeroplaneenvelop" />
        <h1>
          Migrate Your Web App <br />
          <span>in 10 Minutes!</span>
        </h1>

        {/* Feature Icons Row */}
        <div className="big-icons">
          <div className="icon-block">
            <img src="/android.png" alt="android" />
            <p>Push Notifications</p>
          </div>

          <div className="icon-block">
            <img src="/map.png" alt="map" />
            <p>GPS & Maps</p>
          </div>

          <div className="icon-block">
            <img src="/link.png" alt="link" />
            <p>Easy Backlinks</p>
          </div>

          <div className="icon-block">
            <img src="/seo.png" alt="seo" />
            <p>SEO Optimization</p>
          </div>
     
        </div>
      </motion.div>

            <Footer/>
    </section>

   
  );
}

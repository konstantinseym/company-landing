import { motion } from "motion/react";

export default function FadeInBlock({ children }) {
  return (
    <motion.div
      style={{ width: "100%" }}
      initial={{ opacity: 0, y: "24px" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.875, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

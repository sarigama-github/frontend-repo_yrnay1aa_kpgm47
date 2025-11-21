import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Section wrapper that adds a subtle crossfade/wipe transition when a new
 * section enters the viewport. Designed to create a smooth, seamless feeling
 * as you scroll from one section to the next.
 */
export default function Section({ id, children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  return (
    <section id={id} ref={ref} className={`relative ${className}`}>
      {/* Wipe overlay: slides softly across the section on first reveal */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        initial={{ x: "-110%", opacity: 0.0 }}
        animate={inView ? { x: "110%", opacity: [0, 0.6, 0] } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background:
            "linear-gradient(90deg, rgba(231,223,216,0) 0%, rgba(231,223,216,0.9) 18%, rgba(231,223,216,0.9) 82%, rgba(231,223,216,0) 100%)",
        }}
      />

      {/* Soft crossfade veil for gentle brightness shift */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0, 0.08, 0] } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ backgroundColor: "#e7dfd8" }}
      />

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>

      {/* Divider that appears as sections change to signal handoff */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-px left-0 right-0 h-8 z-0"
        initial={{ opacity: 0, scaleY: 0.6 }}
        animate={inView ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.0) 100%)",
          transformOrigin: "top",
        }}
      />
    </section>
  );
}

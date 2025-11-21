import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const accent = "#e7dfd8"; // light beige accent

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556228724-4c1d68a5f48c?q=80&w=1800&auto=format&fit=crop"
          alt="Barbershop vibe"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full text-sm tracking-wide" style={{ backgroundColor: accent, color: "#111" }}>
            Stewie's Barbershop
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-serif font-black tracking-tight leading-[0.95]">
            Strakke cuts.
            <br />
            Geen bullshit.
          </h1>

          <p className="mt-5 text-lg md:text-xl text-neutral-200 font-semibold max-w-xl">
            Mannelijk. Minimalistisch. Altijd scherp. Boek je plek en loop strakker naar buiten dan je binnenkwam.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#booking" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:opacity-90 transition">
              Boek nu <ArrowRight size={18} />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition">
              Bekijk services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative blades / tools sliding in */}
      <div className="pointer-events-none absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1628686635197-4ad8d93ac9ac?q=80&w=1200&auto=format&fit=crop"
          alt="Scissors"
          className="absolute -right-24 bottom-12 w-72 h-72 object-cover opacity-30 mix-blend-screen rounded"
          initial={{ x: 200, rotate: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 0.3 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1605497787865-e6d2e0a7c612?q=80&w=1200&auto=format&fit=crop"
          alt="Brush"
          className="absolute -left-20 top-24 w-64 h-64 object-cover opacity-30 mix-blend-screen rounded"
          initial={{ x: -200, rotate: -8, opacity: 0 }}
          animate={{ x: 0, opacity: 0.3 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </div>
    </section>
  );
}

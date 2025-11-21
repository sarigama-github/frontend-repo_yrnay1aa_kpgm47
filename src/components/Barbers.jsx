import { motion } from "framer-motion";
import Section from "./Section";

const accent = "#e7dfd8";

export default function Barbers() {
  return (
    <Section id="barbers" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-serif font-black mb-10"
        >
          Over Stewie & Tyler
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=1600&auto=format&fit=crop"
            alt="Twee stoere barbers"
            className="w-full h-[420px] object-cover rounded-2xl border border-white/10"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <p className="text-neutral-200 text-lg leading-relaxed">
              Wij zijn Stewie en Tyler. Geen poeha. Gewoon vakmanschap, strakke fades en scherpe lijnen. 
              Jij bepaalt de vibe — wij maken 'm af.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { name: "Geen voorkeur" },
                { name: "Stewie" },
                { name: "Tyler" },
              ].map((b, i) => (
                <motion.button
                  key={b.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                  className="px-4 py-3 rounded-xl font-bold text-black" style={{ backgroundColor: accent }}
                  onClick={() => {
                    const el = document.getElementById("booking-preference");
                    if (el) el.value = b.name;
                    const sc = document.querySelector('#booking');
                    if (sc) sc.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {b.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

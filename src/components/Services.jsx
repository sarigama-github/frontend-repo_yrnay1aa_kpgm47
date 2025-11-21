import { motion } from "framer-motion";
import { Scissors, ShieldCheck, Sparkles, User, BadgeCheck } from "lucide-react";

const services = [
  { title: "Knippen", icon: Scissors, price: "€28" },
  { title: "Knippen t/m 11 jaar", icon: User, price: "€22" },
  { title: "Alles met tondeuse (1 lengte)", icon: ShieldCheck, price: "€20" },
  { title: "Knippen + baardscheren", icon: Sparkles, price: "€40" },
  { title: "65+ knippen", icon: BadgeCheck, price: "€24" },
  { title: "Knippen + baard trimmen", icon: Sparkles, price: "€38" },
  { title: "Baard in model", icon: ShieldCheck, price: "€18" },
];

export default function Services() {
  return (
    <section id="services" className="bg-white text-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-black">Diensten & prijzen</h2>
          <a href="#booking" className="hidden md:inline-block px-5 py-2 rounded-full border border-black/10 hover:bg-black/5 transition font-bold">Plan afspraak</a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="group border border-black/10 rounded-2xl p-6 bg-neutral-50 hover:bg-neutral-100 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <s.icon className="w-6 h-6" />
                <h3 className="text-xl font-extrabold">{s.title}</h3>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-black">{s.price}</span>
                <a href="#booking" className="px-4 py-2 rounded-full bg-black text-white font-bold group-hover:translate-x-1 transition">Plan afspraak</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

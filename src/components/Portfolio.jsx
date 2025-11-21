import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1556229010-aa3a09b07d7c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621600411668-228d0e90a962?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601315484003-c5818d6ba2b1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white text-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-serif font-black mb-10"
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="aspect-square overflow-hidden rounded-xl border border-black/10"
            >
              <motion.img
                src={src}
                alt="Barber work"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-neutral-600">Later komen hier echte foto's. Voor nu placeholders.</p>
      </div>
    </section>
  );
}

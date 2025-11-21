import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Send } from "lucide-react";

const accent = "#e7dfd8";

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pref, setPref] = useState("Geen voorkeur");

  return (
    <section id="booking" className="bg-white text-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-serif font-black mb-10"
        >
          Afspraken boeken
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-black/10 p-6 bg-neutral-50"
          >
            <p className="text-neutral-700 mb-6">Nog geen integratie met een agenda. Hier komt binnenkort onze widget. Laat je gegevens achter, dan bellen we je terug.</p>
            <div className="grid gap-4">
              <input id="booking-preference" type="hidden" value={pref} onChange={()=>{}} />
              <label className="text-sm font-bold">Naam</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} className="px-4 py-3 rounded-xl bg-white border border-black/10" placeholder="Je naam" />
              <label className="text-sm font-bold">Telefoon</label>
              <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="px-4 py-3 rounded-xl bg-white border border-black/10" placeholder="06…" />
              <label className="text-sm font-bold">Barber voorkeur</label>
              <select value={pref} onChange={(e)=>setPref(e.target.value)} className="px-4 py-3 rounded-xl bg-white border border-black/10">
                <option>Geen voorkeur</option>
                <option>Stewie</option>
                <option>Tyler</option>
              </select>
              <button className="mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-black font-bold" style={{ backgroundColor: accent }}
                onClick={()=> alert(`Thanks ${name || "legend"}! We bellen je terug. (Voorkeur: ${pref})`)}
              >
                <Send size={18} /> Verzenden
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-2xl border border-black/10 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar />
              <p className="font-bold">Hier komt de agenda-widget</p>
            </div>
            <p className="text-neutral-600">We maken ruimte voor een externe tool. Tot die tijd: boek via de knoppen of WhatsApp.</p>
          </motion.div>
        </div>
      </div>

      {/* Sticky floating booking button */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href="#booking"
        className="fixed right-4 bottom-4 z-50 px-5 py-3 rounded-full font-bold shadow-lg border border-black/10 bg-black text-white hover:bg-neutral-900 transition"
      >
        Boek nu
      </motion.a>
    </section>
  );
}

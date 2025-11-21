import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const accent = "#e7dfd8";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-black mb-10">Contact & locatie</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1" />
              <p>Boerhaaveplein 3, Bovenkarspel</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-1" />
              <div>
                <p className="font-bold mb-2">Openingstijden</p>
                <ul className="text-neutral-300 grid grid-cols-2 gap-y-1">
                  <li>Ma 12:00 – 18:00</li>
                  <li>Di 09:00 – 18:00</li>
                  <li>Wo 09:00 – 18:00</li>
                  <li>Do 09:00 – 21:00</li>
                  <li>Vr 09:00 – 21:00</li>
                  <li>Za 08:30 – 16:00</li>
                </ul>
              </div>
            </div>
            <p className="text-neutral-400">Genoeg gratis parkeergelegenheid voor de deur.</p>
            <a
              href="https://wa.me/31600000000"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-black font-bold"
              style={{ backgroundColor: accent }}
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=5.269%2C52.694%2C5.300%2C52.707&layer=mapnik&marker=52.700%2C5.285"
              className="w-full h-[360px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

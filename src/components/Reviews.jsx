import { Star } from "lucide-react";
import Section from "./Section";

const reviews = [
  { name: "Milan", text: "Altijd strak. Geen gezeik, gewoon top werk.", stars: 5 },
  { name: "Jesse", text: "Beste fade in de regio. Snel, strak, vriendelijk.", stars: 5 },
  { name: "Erik", text: "Ook voor 65+ relaxed en netjes. Aanrader!", stars: 5 },
  { name: "Daan", text: "Baard perfect in model. Gaat nergens anders heen.", stars: 5 },
  { name: "Youssef", text: "Stoere vibe en goede muziek. Heerlijk.", stars: 5 },
];

export default function Reviews() {
  return (
    <Section id="reviews" className="bg-black text-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h2 className="text-4xl md:text-5xl font-serif font-black">Reviews</h2>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
        <div className="flex gap-6 animate-[marquee_30s_linear_infinite] will-change-transform">
          {[...reviews, ...reviews, ...reviews].map((r, i) => (
            <div key={i} className="min-w-[320px] max-w-[360px] bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {Array.from({ length: r.stars }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-neutral-200">{r.text}</p>
              <p className="mt-3 text-sm text-neutral-400">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Section>
  );
}

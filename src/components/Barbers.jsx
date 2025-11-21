const accent = "#e7dfd8";

export default function Barbers() {
  return (
    <section id="barbers" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-black mb-10">Over Stewie & Tyler</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=1600&auto=format&fit=crop"
            alt="Twee stoere barbers"
            className="w-full h-[420px] object-cover rounded-2xl border border-white/10"
          />

          <div>
            <p className="text-neutral-200 text-lg leading-relaxed">
              Wij zijn Stewie en Tyler. Geen poeha. Gewoon vakmanschap, strakke fades en scherpe lijnen. 
              Jij bepaalt de vibe — wij maken 'm af.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { name: "Geen voorkeur" },
                { name: "Stewie" },
                { name: "Tyler" },
              ].map((b) => (
                <button
                  key={b.name}
                  className="px-4 py-3 rounded-xl font-bold text-black" style={{ backgroundColor: accent }}
                  onClick={() => {
                    const el = document.getElementById("booking-preference");
                    if (el) el.value = b.name;
                    const sc = document.querySelector('#booking');
                    if (sc) sc.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

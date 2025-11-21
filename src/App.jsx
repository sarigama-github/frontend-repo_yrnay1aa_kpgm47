import Hero from "./components/Hero";
import Services from "./components/Services";
import Barbers from "./components/Barbers";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Minimal top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur border-b border-white/10 bg-black/40 text-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white" />
          <span className="font-extrabold tracking-wide">Stewie's Barbershop</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:opacity-80">Diensten</a>
          <a href="#barbers" className="hover:opacity-80">Over</a>
          <a href="#portfolio" className="hover:opacity-80">Portfolio</a>
          <a href="#reviews" className="hover:opacity-80">Reviews</a>
          <a href="#booking" className="px-4 py-2 rounded-full bg-white text-black font-bold hover:opacity-90">Boek nu</a>
        </nav>
      </header>

      <main className="pt-16">
        <Hero />
        <Services />
        <Barbers />
        <Portfolio />
        <Reviews />
        <Booking />
        <Contact />
      </main>

      <footer className="bg-black text-white py-10 text-center text-sm">
        © {new Date().getFullYear()} Stewie's Barbershop • All rights reserved
      </footer>
    </div>
  );
}

export default App;

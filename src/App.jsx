import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import LuxuryCard from './components/LuxuryCard';
import { inventory } from './data/inventory';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-accent selection:text-slate-900">
      <Hero />
      <TrustBar />

      <main className="max-w-7xl mx-auto px-4 py-24">
        <div className="mb-24 text-center">
          <span className="text-accent uppercase tracking-[0.3em] text-sm font-bold mb-6 block">The Sky & Sea Collection</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Curated Excellence</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {inventory.map((item) => (
            <LuxuryCard key={item.id} item={item} />
          ))}
        </div>
      </main>

      <footer className="bg-slate-950 py-12 text-center text-gray-500 border-t border-slate-800">
        <p className="text-sm tracking-wider">© 2025 SKY & SEA LUXURY. EST. 2025</p>
      </footer>
    </div>
  );
}

export default App;

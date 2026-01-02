import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import LuxuryCard from '../components/LuxuryCard';
import { inventory } from '../data/inventory';

export default function Home() {
    return (
        <>
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


        </>
    );
}

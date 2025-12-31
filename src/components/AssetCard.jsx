import { ArrowRight } from 'lucide-react';

export default function AssetCard({ item }) {
    return (
        <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:border-accent transition-colors group">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700">
                    <span className="text-accent text-sm font-bold">{item.category}</span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.price}</p>

                <ul className="mb-6 space-y-2">
                    {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                            {feature}
                        </li>
                    ))}
                </ul>

                <a
                    href={item.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 bg-accent text-slate-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
                >
                    Check Availability <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}

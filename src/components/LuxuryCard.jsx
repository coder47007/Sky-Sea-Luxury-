import { ArrowRight } from 'lucide-react';

export default function LuxuryCard({ item }) {
    return (
        <div className="group relative bg-slate-900 border border-slate-800 hover:border-accent/50 transition-all duration-500 overflow-hidden rounded-sm">
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-0 right-0 bg-accent text-slate-900 px-6 py-2 font-serif font-bold tracking-wide z-20">
                    {item.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                    <h3 className="text-3xl font-serif text-white">{item.name}</h3>
                    <p className="text-accent font-medium tracking-wide border-b border-accent/30 pb-1">{item.price}</p>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8 font-light text-lg">
                    {item.description}
                </p>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-slate-800">
                    {/* Features */}
                    <ul className="flex flex-wrap gap-4">
                        {item.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-500 uppercase tracking-widest font-medium">
                                • {feature}
                            </li>
                        ))}
                    </ul>

                    {/* Action */}
                    <a
                        href={item.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3 text-white hover:text-accent uppercase tracking-widest text-sm font-bold"
                    >
                        Inquire Now <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}

import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    const handleSearch = () => {
        // Redirect to request page
        navigate('/request-quote');
    };

    return (
        <div className="relative h-[80vh] flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Private Jet"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Travel Without <span className="text-accent">Limits</span>
                </h1>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Access over 10,000 private jets, luxury yachts instantly.
                </p>

                {/* Search Widget Look-alike */}
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1 w-full">
                        <label className="block text-left text-xs text-gray-400 mb-1 uppercase tracking-wider">Departure</label>
                        <input type="text" placeholder="New York (TEB)" className="w-full bg-transparent border-b border-gray-600 focus:border-accent text-white py-2 focus:outline-none placeholder-gray-500" />
                    </div>
                    <div className="flex-1 w-full">
                        <label className="block text-left text-xs text-gray-400 mb-1 uppercase tracking-wider">Destination</label>
                        <input type="text" placeholder="London (LHR)" className="w-full bg-transparent border-b border-gray-600 focus:border-accent text-white py-2 focus:outline-none placeholder-gray-500" />
                    </div>
                    <div className="w-full md:w-auto">
                        <button onClick={handleSearch} className="w-full md:w-auto px-8 py-4 bg-accent text-slate-900 font-bold rounded-xl hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                            <Search className="w-5 h-5" /> Search Flights
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

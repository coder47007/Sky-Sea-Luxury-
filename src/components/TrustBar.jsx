import { ShieldCheck, CheckCircle, Clock, Lock } from 'lucide-react';

const TrustItem = ({ icon: Icon, text }) => (
    <div className="flex items-center space-x-2 text-gold-500">
        <Icon className="w-6 h-6 text-accent" />
        <span className="text-gray-300 font-medium">{text}</span>
    </div>
);

export default function TrustBar() {
    return (
        <div className="bg-slate-800 py-6 border-y border-slate-700">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between gap-4">
                <TrustItem icon={CheckCircle} text="Verified Fleet" />
                <TrustItem icon={ShieldCheck} text="Best Price Guarantee" />
                <TrustItem icon={Clock} text="24/7 Concierge" />
                <TrustItem icon={Lock} text="Secure Booking" />
            </div>
        </div>
    );
}

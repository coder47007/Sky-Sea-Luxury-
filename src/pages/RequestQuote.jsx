import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, Plane, Anchor, Calendar, Users, MapPin, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function RequestQuote() {
    const [searchParams] = useSearchParams();
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        phone: '',
        type: 'jet', // jet or yacht
        departure: '',
        destination: '',
        date: '',
        passengers: '',
        details: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Pre-fill from URL params if available
        const interest = searchParams.get('interest');
        if (interest) {
            setFormData(prev => ({
                ...prev,
                details: `I am interested in booking the ${interest}.`
            }));

            // Auto-select type based on interest
            if (interest.toLowerCase().includes('yacht') || interest.toLowerCase().includes('amore') || interest.toLowerCase().includes('opari')) {
                setFormData(prev => ({ ...prev, type: 'yacht' }));
            }
        }
    }, [searchParams]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setError('');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_fci0jc1';
        const TEMPLATE_ID = 'template_6nznvla';
        const PUBLIC_KEY = 'zK4WawgoKwaOzradN';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setSubmitted(true);
                setSending(false);
            }, (error) => {
                console.error('Failed to send email:', error.text);
                setError('Something went wrong. Please try again or email us directly.');
                setSending(false);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (submitted) {
        return (
            <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
                <div className="bg-slate-800 p-10 rounded-sm border border-accent/20 max-w-2xl w-full text-center slide-in">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-accent" />
                    </div>
                    <h2 className="text-4xl font-serif text-white mb-4">Request Received</h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Thank you for your inquiry, {formData.user_name}. Our concierge team has received your request and will contact you shortly with a tailored quote.
                    </p>
                    <button
                        onClick={() => { setSubmitted(false); setFormData({ ...formData, details: '' }); }}
                        className="text-accent underline hover:text-white transition-colors"
                    >
                        Submit another request
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-accent uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Concierge Services</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Request a Quote</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Tell us about your journey. Whether it's a transcontinental flight or a Mediterranean voyage, we arrange every detail.
                    </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-sm shadow-2xl">
                    <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                        {/* Type Selection - Hidden Input for EmailJS */}
                        <input type="hidden" name="type" value={formData.type} />

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, type: 'jet' })}
                                className={`p-4 flex flex-col items-center gap-3 border transition-all duration-300 ${formData.type === 'jet' ? 'border-accent bg-accent/10 text-white' : 'border-slate-700 text-gray-500 hover:border-slate-600'}`}
                            >
                                <Plane className="w-8 h-8" />
                                <span className="uppercase tracking-widest text-sm font-bold">Private Jet</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, type: 'yacht' })}
                                className={`p-4 flex flex-col items-center gap-3 border transition-all duration-300 ${formData.type === 'yacht' ? 'border-accent bg-accent/10 text-white' : 'border-slate-700 text-gray-500 hover:border-slate-600'}`}
                            >
                                <Anchor className="w-8 h-8" />
                                <span className="uppercase tracking-widest text-sm font-bold">Luxury Yacht</span>
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-accent font-bold">Full Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border-b border-slate-700 focus:border-accent text-white py-3 px-4 focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-accent font-bold">Email Address</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border-b border-slate-700 focus:border-accent text-white py-3 px-4 focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        {/* Trip Details */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-gray-500 font-bold flex items-center gap-2">
                                    <MapPin className="w-3 h-3" /> From
                                </label>
                                <input
                                    type="text"
                                    name="departure"
                                    value={formData.departure}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border-b border-slate-700 focus:border-accent text-white py-3 px-4 focus:outline-none transition-colors"
                                    placeholder="City or Airport Code"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-gray-500 font-bold flex items-center gap-2">
                                    <MapPin className="w-3 h-3" /> To
                                </label>
                                <input
                                    type="text"
                                    name="destination"
                                    value={formData.destination}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border-b border-slate-700 focus:border-accent text-white py-3 px-4 focus:outline-none transition-colors"
                                    placeholder="City or Airport Code"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-gray-500 font-bold flex items-center gap-2">
                                    <Calendar className="w-3 h-3" /> Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border-b border-slate-700 focus:border-accent text-white py-3 px-4 focus:outline-none transition-colors [color-scheme:dark]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider text-gray-500 font-bold flex items-center gap-2">
                                    <Users className="w-3 h-3" /> Passengers
                                </label>
                                <input
                                    type="number"
                                    name="passengers"
                                    min="1"
                                    value={formData.passengers}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border-b border-slate-700 focus:border-accent text-white py-3 px-4 focus:outline-none transition-colors"
                                    placeholder="Number of guests"
                                />
                            </div>
                        </div>

                        {/* Additional Details */}
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-gray-500 font-bold">Additional Requirements</label>
                            <textarea
                                name="details"
                                rows="4"
                                value={formData.details}
                                onChange={handleChange}
                                className="w-full bg-slate-950 border-b border-slate-700 focus:border-accent text-white py-3 px-4 focus:outline-none transition-colors resize-none"
                                placeholder="Any specific requirements? (e.g., Catering, Pet friendly, specific aircraft model)"
                            ></textarea>
                        </div>

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <button
                            type="submit"
                            disabled={sending}
                            className="w-full bg-accent text-slate-900 font-bold uppercase tracking-widest py-5 hover:bg-white transition-colors duration-300 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {sending ? 'Sending Request...' : 'Submit Request'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

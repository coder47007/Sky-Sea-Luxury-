import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 p-6">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <Link to="/">
                        <img
                            src="/logo.png"
                            alt="Sky & Sea Luxury"
                            className="h-16 md:h-24 w-auto object-contain drop-shadow-lg"
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

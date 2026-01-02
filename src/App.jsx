import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RequestQuote from './pages/RequestQuote';
import Footer from './components/Footer';
import './App.css'; // Ensure CSS is applied

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-accent selection:text-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-quote" element={<RequestQuote />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

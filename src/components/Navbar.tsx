import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              🦊 KITSU INU
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-500 font-medium transition">
                About
              </button>
              <button onClick={() => scrollToSection('tokenomics')} className="text-gray-700 hover:text-orange-500 font-medium transition">
                Tokenomics
              </button>
              <button onClick={() => scrollToSection('roadmap')} className="text-gray-700 hover:text-orange-500 font-medium transition">
                Roadmap
              </button>
              <button onClick={() => scrollToSection('community')} className="text-gray-700 hover:text-orange-500 font-medium transition">
                Community
              </button>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition">
                Buy Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded">
              About
            </button>
            <button onClick={() => scrollToSection('tokenomics')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Tokenomics
            </button>
            <button onClick={() => scrollToSection('roadmap')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Roadmap
            </button>
            <button onClick={() => scrollToSection('community')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 rounded">
              Community
            </button>
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold mt-2">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
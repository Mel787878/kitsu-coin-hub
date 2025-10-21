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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              🦊 KITSU INU
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={scrollToTop}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('tokenomics')}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Community
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={scrollToTop}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('tokenomics')}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left"
              >
                Tokenomics
              </button>
              <button
                onClick={() => scrollToSection('roadmap')}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection('community')}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left"
              >
                Community
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
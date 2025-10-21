import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              🦊 KITSU INU
            </h3>
            <p className="text-gray-400">
              The legendary fox spirit bringing fortune to the crypto world.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition">About</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-orange-400 transition">Tokenomics</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-orange-400 transition">Roadmap</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-orange-400 transition">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Audit Report</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Contract</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">How to Buy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 Kitsu Inu. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="text-red-500" size={16} fill="currentColor" /> by the Kitsu Community
            </p>
          </div>
          <p className="text-gray-500 text-xs mt-4 text-center">
            Disclaimer: Cryptocurrency investments carry risk. Please do your own research before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}
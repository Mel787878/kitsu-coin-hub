import { TrendingUp, Zap, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-8 animate-bounce">
            <div className="text-9xl">🦊</div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              KITSU INU
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The Most Kawaii Fox on the Blockchain! 🚀
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Join the pack of cunning foxes taking over the crypto world. 
            Smart, fast, and ready to moon! 🌙
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition">
              Buy KITSU Now
            </button>
            <button className="bg-white text-orange-500 border-2 border-orange-500 px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-50 transition">
              View Chart
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <TrendingUp className="text-orange-500" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">1000x Potential</h3>
              <p className="text-gray-600">Early adopters get the biggest rewards</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <Zap className="text-orange-500" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Built on cutting-edge blockchain tech</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <Users className="text-orange-500" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Strong Community</h3>
              <p className="text-gray-600">Join thousands of fox lovers worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
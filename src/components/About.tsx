import { Sparkles, Shield, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              About Kitsu Inu
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The legendary fox spirit bringing fortune to the crypto world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-8xl mb-8 text-center lg:text-left">🦊✨</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              The Legend of Kitsu
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              In Japanese folklore, Kitsune are mystical fox spirits known for their intelligence, 
              magical abilities, and bringing prosperity to those who honor them. Kitsu Inu combines 
              this legendary wisdom with the power of decentralized finance.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our community-driven token is designed to reward holders while creating a fun, 
              engaging ecosystem where everyone can thrive. With automatic rewards, strategic 
              burns, and a passionate community, Kitsu Inu is more than just a meme coin – 
              it's a movement!
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Magical Rewards</h4>
                  <p className="text-gray-600">
                    Earn passive income just by holding KITSU. Our smart contract automatically 
                    distributes rewards to all holders with every transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Safe &amp; Secure</h4>
                  <p className="text-gray-600">
                    Audited smart contract, locked liquidity, and renounced ownership. 
                    Your investment is protected by the best security practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Rocket className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">To The Moon</h4>
                  <p className="text-gray-600">
                    Strategic marketing campaigns, exchange listings, and partnerships 
                    planned to take KITSU to astronomical heights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
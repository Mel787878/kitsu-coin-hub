import { PieChart, Lock, Flame, Gift } from 'lucide-react';

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Designed for sustainable growth and maximum rewards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <PieChart className="text-orange-500" size={32} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">1 Billion</h3>
            <p className="text-gray-600 font-medium">Total Supply</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-4 rounded-full">
                <Gift className="text-green-500" size={32} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">3%</h3>
            <p className="text-gray-600 font-medium">Holder Rewards</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 p-4 rounded-full">
                <Flame className="text-red-500" size={32} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">2%</h3>
            <p className="text-gray-600 font-medium">Auto Burn</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <Lock className="text-blue-500" size={32} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">95%</h3>
            <p className="text-gray-600 font-medium">Liquidity Locked</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Token Distribution</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">Presale</span>
                <span className="font-bold text-orange-500">40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-4 rounded-full" ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">Liquidity Pool</span>
                <span className="font-bold text-orange-500">35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-4 rounded-full" ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">Marketing &amp; Development</span>
                <span className="font-bold text-orange-500">15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-4 rounded-full" ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">Team (Vested 12 months)</span>
                <span className="font-bold text-orange-500">5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-4 rounded-full" ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">Community Rewards</span>
                <span className="font-bold text-orange-500">5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-4 rounded-full" ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
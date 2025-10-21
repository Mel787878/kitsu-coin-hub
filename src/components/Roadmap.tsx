import { CheckCircle2, Circle, Sparkles } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Launch',
      status: 'completed',
      items: [
        'Website Launch',
        'Smart Contract Deployment',
        'Audit Completion',
        'Community Building',
        'Initial Marketing Campaign'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Growth',
      status: 'current',
      items: [
        'CoinGecko Listing',
        'CoinMarketCap Listing',
        '10,000+ Holders',
        'Strategic Partnerships',
        'Influencer Collaborations'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Expansion',
      status: 'upcoming',
      items: [
        'Major CEX Listings',
        'NFT Collection Launch',
        'Staking Platform',
        '50,000+ Holders',
        'Global Marketing Push'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Ecosystem',
      status: 'upcoming',
      items: [
        'Kitsu Swap DEX',
        'Mobile App',
        'Metaverse Integration',
        'Charity Initiatives',
        'Cross-chain Bridge'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Our journey to the moon and beyond 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div key={index} className={`rounded-2xl p-6 ${
              phase.status === 'completed' ? 'bg-green-50 border-2 border-green-500' :
              phase.status === 'current' ? 'bg-orange-50 border-2 border-orange-500' :
              'bg-gray-50 border-2 border-gray-300'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                  phase.status === 'completed' ? 'bg-green-500 text-white' :
                  phase.status === 'current' ? 'bg-orange-500 text-white' :
                  'bg-gray-400 text-white'
                }`}>
                  {phase.phase}
                </span>
                {phase.status === 'current' && (
                  <Sparkles className="text-orange-500" size={20} />
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{phase.title}</h3>
              
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    {phase.status === 'completed' ? (
                      <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    ) : (
                      <Circle className="text-gray-400 flex-shrink-0 mt-0.5" size={20} />
                    )}
                    <span className={`text-sm ${
                      phase.status === 'completed' ? 'text-gray-700' : 'text-gray-600'
                    }`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
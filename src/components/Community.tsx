import { MessageCircle, Send, Twitter, Globe } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Join The Pack
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Connect with thousands of Kitsu lovers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a href="#" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center group">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-500 transition">
                <Send className="text-blue-500 group-hover:text-white transition" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Telegram</h3>
            <p className="text-gray-600">Join our main chat</p>
            <p className="text-orange-500 font-semibold mt-2">25,000+ Members</p>
          </a>

          <a href="#" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center group">
            <div className="flex justify-center mb-4">
              <div className="bg-sky-100 p-4 rounded-full group-hover:bg-sky-500 transition">
                <Twitter className="text-sky-500 group-hover:text-white transition" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Twitter</h3>
            <p className="text-gray-600">Follow for updates</p>
            <p className="text-orange-500 font-semibold mt-2">15,000+ Followers</p>
          </a>

          <a href="#" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center group">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-4 rounded-full group-hover:bg-purple-500 transition">
                <MessageCircle className="text-purple-500 group-hover:text-white transition" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Discord</h3>
            <p className="text-gray-600">Chat with the team</p>
            <p className="text-orange-500 font-semibold mt-2">10,000+ Members</p>
          </a>

          <a href="#" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center group">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 p-4 rounded-full group-hover:bg-orange-500 transition">
                <Globe className="text-orange-500 group-hover:text-white transition" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Reddit</h3>
            <p className="text-gray-600">Join discussions</p>
            <p className="text-orange-500 font-semibold mt-2">5,000+ Members</p>
          </a>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Join the Revolution?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Don't miss out on the next 1000x gem! 🦊✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition transform hover:scale-105">
              Buy KITSU Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition">
              Read Whitepaper
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
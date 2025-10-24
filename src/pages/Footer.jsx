import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 py-14 mt-0">
        <div className="w-11/12 mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Trade<span className="text-orange-500">Skill</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your local hub for skill exchange — learn what you love, teach
              what you know. Together, we grow smarter. 🌱
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-orange-500 rounded-full transition-colors duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-orange-500 rounded-full transition-colors duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-orange-500 rounded-full transition-colors duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/explore"
                  className="hover:text-orange-400 transition-colors"
                >
                  Explore Skills
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-orange-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-orange-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/how-it-works"
                  className="hover:text-orange-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/community"
                  className="hover:text-orange-400 transition-colors"
                >
                  Community Stories
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="hover:text-orange-400 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-orange-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest skill trends and learning tips right in your inbox.
            </p>
            <form className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-transparent text-sm focus:outline-none text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} TradeSkill — Empowering local learners &
          creators.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

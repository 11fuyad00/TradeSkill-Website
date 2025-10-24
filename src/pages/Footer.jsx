import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10 mt-0">
        <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">TradeSkill</h4>
            <p className="text-gray-400 text-sm">
              Empowering communities to learn, teach, and grow together.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Home</li>
              <li>Explore</li>
              <li>About</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">
              Email: support@tradeskill.com
            </p>
            <div className="flex space-x-4 mt-4">
              <i className="fab fa-facebook text-lg"></i>
              <i className="fab fa-twitter text-lg"></i>
              <i className="fab fa-linkedin text-lg"></i>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">
          © 2025 TradeSkill. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;

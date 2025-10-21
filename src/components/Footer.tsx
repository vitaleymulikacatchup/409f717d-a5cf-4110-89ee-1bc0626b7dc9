import React from 'react';
import { ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-75 py-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-netflix-gray-400 text-sm">
            Questions? Call 0800 609 226 (Toll-Free)
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="space-y-3">
            <a href="#" className="block text-netflix-gray-400 text-sm hover:underline">
              FAQ
            </a>
            <a href="#" className="block text-netflix-gray-400 text-sm hover:underline">
              Cookie Preferences
            </a>
          </div>
          
          <div className="space-y-3">
            <a href="#" className="block text-netflix-gray-400 text-sm hover:underline">
              Help Center
            </a>
            <a href="#" className="block text-netflix-gray-400 text-sm hover:underline">
              Corporate Information
            </a>
          </div>
          
          <div className="space-y-3">
            <a href="#" className="block text-netflix-gray-400 text-sm hover:underline">
              Terms of Use
            </a>
          </div>
          
          <div className="space-y-3">
            <a href="#" className="block text-netflix-gray-400 text-sm hover:underline">
              Privacy
            </a>
          </div>
        </div>
        
        <div className="relative inline-block">
          <select className="appearance-none bg-black border border-netflix-gray-600 text-netflix-gray-400 text-sm px-4 py-2 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-white">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-netflix-gray-400 pointer-events-none" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

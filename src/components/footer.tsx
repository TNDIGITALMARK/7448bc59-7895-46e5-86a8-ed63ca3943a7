import Link from 'next/link';
import { Heart, Mail, Globe, Users } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🐄</div>
              <div>
                <span className="text-xl font-bold">Pasture</span>
                <span className="text-xl font-bold text-green-300">Perfect</span>
              </div>
            </div>
            <p className="text-green-100 mb-4 leading-relaxed">
              Your comprehensive guide to cattle breeds worldwide.
              Discover fascinating facts and educational resources about these magnificent animals.
            </p>
            <div className="flex items-center gap-2 text-green-200">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Made with love for cattle enthusiasts</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/breeds" className="text-green-200 hover:text-white transition-colors">
                  All Breeds
                </Link>
              </li>
              <li>
                <Link href="/breeds?category=dairy" className="text-green-200 hover:text-white transition-colors">
                  Dairy Breeds
                </Link>
              </li>
              <li>
                <Link href="/breeds?category=beef" className="text-green-200 hover:text-white transition-colors">
                  Beef Breeds
                </Link>
              </li>
              <li>
                <Link href="/breeds/compare" className="text-green-200 hover:text-white transition-colors">
                  Compare Breeds
                </Link>
              </li>
              <li>
                <Link href="/facts" className="text-green-200 hover:text-white transition-colors">
                  Amazing Facts
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/facts" className="text-green-200 hover:text-white transition-colors">
                  Cow Facts
                </Link>
              </li>
              <li>
                <Link href="/facts#quiz" className="text-green-200 hover:text-white transition-colors">
                  Knowledge Quiz
                </Link>
              </li>
              <li>
                <a href="#statistics" className="text-green-200 hover:text-white transition-colors">
                  Statistics
                </a>
              </li>
              <li>
                <a href="#breeds" className="text-green-200 hover:text-white transition-colors">
                  Breed Database
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-300" />
                <span className="text-green-200 text-sm">info@pastureperfect.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-green-300" />
                <span className="text-green-200 text-sm">Global Community</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-300" />
                <span className="text-green-200 text-sm">Join 10,000+ Members</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Follow Our Updates</h4>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-xs">📘</span>
                </div>
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-xs">🐦</span>
                </div>
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-xs">📸</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-green-200 text-sm">
              © 2024 Pasture Perfect. All rights reserved. Educational content for cattle enthusiasts worldwide.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-green-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-green-200 hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#accessibility" className="text-green-200 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
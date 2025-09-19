'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const navigation = [
  {
    name: 'Breeds',
    href: '/breeds',
    description: 'Explore different cattle breeds',
    submenu: [
      { name: 'All Breeds', href: '/breeds', description: 'Browse all cattle breeds' },
      { name: 'Dairy Breeds', href: '/breeds?category=dairy', description: 'Milk-producing breeds' },
      { name: 'Beef Breeds', href: '/breeds?category=beef', description: 'Meat-producing breeds' },
      { name: 'Compare Breeds', href: '/breeds/compare', description: 'Side-by-side comparison' }
    ]
  },
  {
    name: 'Facts',
    href: '/facts',
    description: 'Amazing cow facts and statistics'
  },
  {
    name: 'Gallery',
    href: '/gallery',
    description: 'Beautiful cow photography'
  },
  {
    name: 'Contact',
    href: '/contact',
    description: 'Get in touch with us'
  }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl">🐄</div>
              <div>
                <span className="text-xl font-bold text-gray-900">Pasture</span>
                <span className="text-xl font-bold text-green-600">Perfect</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="font-medium text-gray-700 hover:text-green-600 transition-colors">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-80 p-6">
                            <div className="mb-4">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h4>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                            <ul className="space-y-3">
                              {item.submenu.map((subItem) => (
                                <li key={subItem.name}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={subItem.href}
                                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                      <div className="font-medium text-gray-900 mb-1">
                                        {subItem.name}
                                      </div>
                                      <div className="text-sm text-gray-600">
                                        {subItem.description}
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="font-medium text-gray-700 hover:text-green-600 transition-colors px-3 py-2 rounded-md"
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
              Learn More
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    className="block font-medium text-gray-700 hover:text-green-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-green-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
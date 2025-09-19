'use client';
import React from 'react';

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
  NavigationMenuTrigger } from
'@/components/ui/navigation-menu';

const navigation = [
{
  name: 'Breeds',
  href: '/breeds',
  description: 'Explore different cattle breeds',
  submenu: [
  { name: 'All Breeds', href: '/breeds', description: 'Browse all cattle breeds' },
  { name: 'Dairy Breeds', href: '/breeds?category=dairy', description: 'Milk-producing breeds' },
  { name: 'Beef Breeds', href: '/breeds?category=beef', description: 'Meat-producing breeds' },
  { name: 'Compare Breeds', href: '/breeds/compare', description: 'Side-by-side comparison' }]

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
}];


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (/*#__PURE__*/
    React.createElement("header", { className: "sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border", "data-phoenix-id": "phoenix-7448bc59-1" }, /*#__PURE__*/
    React.createElement("nav", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-2" }, /*#__PURE__*/
    React.createElement("div", { className: "flex items-center justify-between h-16", "data-phoenix-id": "phoenix-7448bc59-3" }, /*#__PURE__*/

    React.createElement("div", { className: "flex items-center", "data-phoenix-id": "phoenix-7448bc59-4" }, /*#__PURE__*/
    React.createElement(Link, { href: "/", className: "flex items-center space-x-3", "data-phoenix-id": "phoenix-7448bc59-5" }, /*#__PURE__*/
    React.createElement("img", { 
      src: "/generated/patsture-logo-icon.png",
      alt: "Patsture Perfect Logo",
      className: "w-10 h-10 rounded-full",
      "data-phoenix-id": "phoenix-7448bc59-6" 
    }), /*#__PURE__*/
    React.createElement("div", { className: "font-brand", "data-phoenix-id": "phoenix-7448bc59-7" }, /*#__PURE__*/
    React.createElement("span", { className: "text-2xl font-bold text-foreground tracking-tight", "data-phoenix-id": "phoenix-7448bc59-8" }, "patsture"), /*#__PURE__*/
    React.createElement("span", { className: "text-2xl font-bold text-accent tracking-tight ml-1", "data-phoenix-id": "phoenix-7448bc59-9" }, "perfect")
    )
    )
    ), /*#__PURE__*/


    React.createElement("div", { className: "hidden lg:block", "data-phoenix-id": "phoenix-7448bc59-10" }, /*#__PURE__*/
    React.createElement(NavigationMenu, { "data-phoenix-id": "phoenix-7448bc59-11" }, /*#__PURE__*/
    React.createElement(NavigationMenuList, { className: "space-x-2", "data-phoenix-id": "phoenix-7448bc59-12" },
    navigation.map((item) => /*#__PURE__*/
    React.createElement(NavigationMenuItem, { key: item.name, "data-phoenix-id": "phoenix-7448bc59-13" },
    item.submenu ? /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(NavigationMenuTrigger, { className: "font-medium text-muted-foreground hover:text-accent transition-colors", "data-phoenix-id": "phoenix-7448bc59-14" },
    item.name
    ), /*#__PURE__*/
    React.createElement(NavigationMenuContent, { "data-phoenix-id": "phoenix-7448bc59-15" }, /*#__PURE__*/
    React.createElement("div", { className: "w-80 p-6", "data-phoenix-id": "phoenix-7448bc59-16" }, /*#__PURE__*/
    React.createElement("div", { className: "mb-4", "data-phoenix-id": "phoenix-7448bc59-17" }, /*#__PURE__*/
    React.createElement("h4", { className: "text-lg font-semibold text-foreground mb-2", "data-phoenix-id": "phoenix-7448bc59-18" }, item.name), /*#__PURE__*/
    React.createElement("p", { className: "text-sm text-muted-foreground", "data-phoenix-id": "phoenix-7448bc59-19" }, item.description)
    ), /*#__PURE__*/
    React.createElement("ul", { className: "space-y-3", "data-phoenix-id": "phoenix-7448bc59-20" },
    item.submenu.map((subItem) => /*#__PURE__*/
    React.createElement("li", { key: subItem.name, "data-phoenix-id": "phoenix-7448bc59-21" }, /*#__PURE__*/
    React.createElement(NavigationMenuLink, { asChild: true, "data-phoenix-id": "phoenix-7448bc59-22" }, /*#__PURE__*/
    React.createElement(Link, {
      href: subItem.href,
      className: "block p-3 rounded-lg hover:bg-muted transition-colors", "data-phoenix-id": "phoenix-7448bc59-23" }, /*#__PURE__*/

    React.createElement("div", { className: "font-medium text-foreground mb-1", "data-phoenix-id": "phoenix-7448bc59-24" },
    subItem.name
    ), /*#__PURE__*/
    React.createElement("div", { className: "text-sm text-muted-foreground", "data-phoenix-id": "phoenix-7448bc59-25" },
    subItem.description
    )
    )
    )
    )
    )
    )
    )
    )
    ) : /*#__PURE__*/

    React.createElement(NavigationMenuLink, { asChild: true, "data-phoenix-id": "phoenix-7448bc59-26" }, /*#__PURE__*/
    React.createElement(Link, {
      href: item.href,
      className: "font-medium text-muted-foreground hover:text-accent transition-colors px-3 py-2 rounded-md", "data-phoenix-id": "phoenix-7448bc59-27" },

    item.name
    )
    )

    )
    )
    )
    )
    ), /*#__PURE__*/


    React.createElement("div", { className: "hidden lg:flex items-center space-x-4", "data-phoenix-id": "phoenix-7448bc59-28" }, /*#__PURE__*/
    React.createElement(Button, { variant: "ghost", size: "icon", "data-phoenix-id": "phoenix-7448bc59-29" }, /*#__PURE__*/
    React.createElement(Search, { className: "h-5 w-5", "data-phoenix-id": "phoenix-7448bc59-30" })
    ), /*#__PURE__*/
    React.createElement(Button, { className: "hero-gradient text-background font-semibold hover:opacity-90 transition-opacity", "data-phoenix-id": "phoenix-7448bc59-31" }, "Learn More"

    )
    ), /*#__PURE__*/


    React.createElement("div", { className: "lg:hidden", "data-phoenix-id": "phoenix-7448bc59-32" }, /*#__PURE__*/
    React.createElement(Button, {
      variant: "ghost",
      size: "icon",
      onClick: () => setIsMenuOpen(!isMenuOpen), "data-phoenix-id": "phoenix-7448bc59-33" },

    isMenuOpen ? /*#__PURE__*/React.createElement(X, { className: "h-6 w-6", "data-phoenix-id": "phoenix-7448bc59-34" }) : /*#__PURE__*/React.createElement(Menu, { className: "h-6 w-6", "data-phoenix-id": "phoenix-7448bc59-35" })
    )
    )
    ),


    isMenuOpen && /*#__PURE__*/
    React.createElement("div", { className: "lg:hidden border-t border-border py-4", "data-phoenix-id": "phoenix-7448bc59-36" }, /*#__PURE__*/
    React.createElement("div", { className: "space-y-4", "data-phoenix-id": "phoenix-7448bc59-37" },
    navigation.map((item) => /*#__PURE__*/
    React.createElement("div", { key: item.name, className: "space-y-2", "data-phoenix-id": "phoenix-7448bc59-38" }, /*#__PURE__*/
    React.createElement(Link, {
      href: item.href,
      className: "block font-medium text-muted-foreground hover:text-accent transition-colors",
      onClick: () => setIsMenuOpen(false), "data-phoenix-id": "phoenix-7448bc59-39" },

    item.name
    ),
    item.submenu && /*#__PURE__*/
    React.createElement("div", { className: "ml-4 space-y-2", "data-phoenix-id": "phoenix-7448bc59-40" },
    item.submenu.map((subItem) => /*#__PURE__*/
    React.createElement(Link, {
      key: subItem.name,
      href: subItem.href,
      className: "block text-sm text-muted-foreground hover:text-accent transition-colors",
      onClick: () => setIsMenuOpen(false), "data-phoenix-id": "phoenix-7448bc59-41" },

    subItem.name
    )
    )
    )

    )
    ), /*#__PURE__*/
    React.createElement("div", { className: "pt-4 border-t border-border", "data-phoenix-id": "phoenix-7448bc59-42" }, /*#__PURE__*/
    React.createElement(Button, { className: "w-full hero-gradient text-background font-semibold hover:opacity-90 transition-opacity", "data-phoenix-id": "phoenix-7448bc59-43" }, "Learn More"

    )
    )
    )
    )

    )
    ));

}
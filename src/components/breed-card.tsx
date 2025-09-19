'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Heart, Info } from 'lucide-react';








export function BreedCard({ breed, onCompare, isSelected = false }) {
  const [imageError, setImageError] = useState(false);

  const getPrimaryUseColor = (use) => {
    switch (use) {
      case 'Dairy':
        return 'hsl(var(--sky-blue))';
      case 'Beef':
        return 'hsl(var(--barn-red))';
      case 'Dual-Purpose':
        return 'hsl(var(--grass-green))';
      default:
        return 'hsl(var(--cow-brown))';
    }
  };

  return (/*#__PURE__*/
    React.createElement(Card, {
      className: `cow-card group overflow-hidden transition-all duration-300 ${
      isSelected ? 'ring-2 ring-green-500 ring-opacity-50' : ''}`, "data-phoenix-id": "phoenix-7448bc59-1" }, /*#__PURE__*/


    React.createElement("div", { className: "relative aspect-[4/3] overflow-hidden", "data-phoenix-id": "phoenix-7448bc59-2" },
    !imageError ? /*#__PURE__*/
    React.createElement(Image, {
      src: breed.image,
      alt: breed.name,
      fill: true,
      className: "object-cover group-hover:scale-105 transition-transform duration-300",
      onError: () => setImageError(true), "data-phoenix-id": "phoenix-7448bc59-3" }
    ) : /*#__PURE__*/

    React.createElement("div", { className: "w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center", "data-phoenix-id": "phoenix-7448bc59-4" }, /*#__PURE__*/
    React.createElement("div", { className: "text-6xl opacity-50", "data-phoenix-id": "phoenix-7448bc59-5" }, "\uD83D\uDC04")
    ), /*#__PURE__*/



    React.createElement("div", { className: "absolute top-3 left-3", "data-phoenix-id": "phoenix-7448bc59-6" }, /*#__PURE__*/
    React.createElement(Badge, { variant: "secondary", className: "bg-white/90 text-gray-800 backdrop-blur-sm", "data-phoenix-id": "phoenix-7448bc59-7" }, /*#__PURE__*/
    React.createElement(MapPin, { className: "w-3 h-3 mr-1", "data-phoenix-id": "phoenix-7448bc59-8" }),
    breed.origin
    )
    ), /*#__PURE__*/


    React.createElement("div", { className: "absolute top-3 right-3", "data-phoenix-id": "phoenix-7448bc59-9" }, /*#__PURE__*/
    React.createElement(Badge, {
      className: "text-white backdrop-blur-sm",
      style: { backgroundColor: getPrimaryUseColor(breed.primaryUse) }, "data-phoenix-id": "phoenix-7448bc59-10" },

    breed.primaryUse
    )
    ),


    onCompare && /*#__PURE__*/
    React.createElement(Button, {
      variant: "outline",
      size: "sm",
      className: `absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm transition-all ${
      isSelected ?
      'bg-green-100 border-green-500 text-green-700' :
      'hover:bg-white'}`,

      onClick: (e) => {
        e.preventDefault();
        onCompare(breed);
      }, "data-phoenix-id": "phoenix-7448bc59-11" },

    isSelected ? /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(Heart, { className: "w-4 h-4 mr-2 fill-current", "data-phoenix-id": "phoenix-7448bc59-12" }), "Added"

    ) : /*#__PURE__*/

    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(Heart, { className: "w-4 h-4 mr-2", "data-phoenix-id": "phoenix-7448bc59-13" }), "Compare"

    )

    )

    ), /*#__PURE__*/

    React.createElement(CardContent, { className: "p-6", "data-phoenix-id": "phoenix-7448bc59-14" }, /*#__PURE__*/
    React.createElement("div", { className: "mb-4", "data-phoenix-id": "phoenix-7448bc59-15" }, /*#__PURE__*/
    React.createElement("h3", { className: "text-2xl font-bold text-gray-900 mb-2", "data-phoenix-id": "phoenix-7448bc59-16" }, breed.name), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600 leading-relaxed line-clamp-3", "data-phoenix-id": "phoenix-7448bc59-17" },
    breed.description
    )
    ), /*#__PURE__*/

    React.createElement("div", { className: "space-y-3 mb-6", "data-phoenix-id": "phoenix-7448bc59-18" }, /*#__PURE__*/
    React.createElement("div", { className: "flex justify-between items-center", "data-phoenix-id": "phoenix-7448bc59-19" }, /*#__PURE__*/
    React.createElement("span", { className: "text-sm font-medium text-gray-500", "data-phoenix-id": "phoenix-7448bc59-20" }, "Average Weight"), /*#__PURE__*/
    React.createElement("span", { className: "text-sm font-semibold text-gray-900", "data-phoenix-id": "phoenix-7448bc59-21" }, breed.avgWeight.cow)
    ),

    breed.milkProduction && /*#__PURE__*/
    React.createElement("div", { className: "flex justify-between items-center", "data-phoenix-id": "phoenix-7448bc59-22" }, /*#__PURE__*/
    React.createElement("span", { className: "text-sm font-medium text-gray-500", "data-phoenix-id": "phoenix-7448bc59-23" }, "Milk Production"), /*#__PURE__*/
    React.createElement("span", { className: "text-sm font-semibold text-gray-900", "data-phoenix-id": "phoenix-7448bc59-24" }, breed.milkProduction)
    ), /*#__PURE__*/


    React.createElement("div", { className: "flex justify-between items-center", "data-phoenix-id": "phoenix-7448bc59-25" }, /*#__PURE__*/
    React.createElement("span", { className: "text-sm font-medium text-gray-500", "data-phoenix-id": "phoenix-7448bc59-26" }, "Temperament"), /*#__PURE__*/
    React.createElement("span", { className: "text-sm font-semibold text-gray-900", "data-phoenix-id": "phoenix-7448bc59-27" }, breed.temperament)
    ), /*#__PURE__*/

    React.createElement("div", { className: "flex justify-between items-center", "data-phoenix-id": "phoenix-7448bc59-28" }, /*#__PURE__*/
    React.createElement("span", { className: "text-sm font-medium text-gray-500", "data-phoenix-id": "phoenix-7448bc59-29" }, "Horn Type"), /*#__PURE__*/
    React.createElement("span", { className: "text-sm font-semibold text-gray-900", "data-phoenix-id": "phoenix-7448bc59-30" }, breed.hornType)
    )
    ), /*#__PURE__*/


    React.createElement("div", { className: "flex flex-wrap gap-2 mb-4", "data-phoenix-id": "phoenix-7448bc59-31" },
    breed.characteristics.slice(0, 3).map((characteristic, index) => /*#__PURE__*/
    React.createElement("span", {
      key: index,
      className: "breed-tag", "data-phoenix-id": "phoenix-7448bc59-32" },

    characteristic
    )
    ),
    breed.characteristics.length > 3 && /*#__PURE__*/
    React.createElement("span", { className: "breed-tag bg-gray-200 text-gray-700", "data-phoenix-id": "phoenix-7448bc59-33" }, "+",
    breed.characteristics.length - 3
    )

    ), /*#__PURE__*/

    React.createElement(Button, { className: "w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold", "data-phoenix-id": "phoenix-7448bc59-34" }, /*#__PURE__*/
    React.createElement(Info, { className: "w-4 h-4 mr-2", "data-phoenix-id": "phoenix-7448bc59-35" }), "Learn More"

    )
    )
    ));

}
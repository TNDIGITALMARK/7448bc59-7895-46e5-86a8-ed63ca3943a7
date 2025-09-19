'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { cowBreeds } from '@/lib/data/breeds';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
'@/components/ui/select';
import { ArrowLeft, Plus, X, MapPin, Scale, Heart, Timer } from 'lucide-react';
import Link from 'next/link';

export default function CompareBreeds() {
  const searchParams = useSearchParams();
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [availableBreeds, setAvailableBreeds] = useState([]);

  useEffect(() => {
    const breedIds = searchParams.get('breeds')?.split(',') || [];
    const breeds = breedIds.
    map((id) => cowBreeds.find((breed) => breed.id === id)).
    filter(Boolean);

    setSelectedBreeds(breeds);
    setAvailableBreeds(cowBreeds);
  }, [searchParams]);

  const addBreed = (breedId) => {
    const breed = cowBreeds.find((b) => b.id === breedId);
    if (breed && selectedBreeds.length < 4 && !selectedBreeds.find((b) => b.id === breed.id)) {
      setSelectedBreeds([...selectedBreeds, breed]);
    }
  };

  const removeBreed = (breedId) => {
    setSelectedBreeds(selectedBreeds.filter((breed) => breed.id !== breedId));
  };

  const comparisonRows = [
  {
    label: 'Origin',
    key: 'origin',
    icon: <MapPin className="w-4 h-4" data-phoenix-id="phoenix-7448bc59-1" />,
    type: 'text'
  },
  {
    label: 'Primary Use',
    key: 'primaryUse',
    icon: <Heart className="w-4 h-4" data-phoenix-id="phoenix-7448bc59-2" />,
    type: 'badge'
  },
  {
    label: 'Average Weight (Cow)',
    key: 'avgWeight',
    icon: <Scale className="w-4 h-4" data-phoenix-id="phoenix-7448bc59-3" />,
    type: 'weight'
  },
  {
    label: 'Average Height',
    key: 'avgHeight',
    icon: <Scale className="w-4 h-4" data-phoenix-id="phoenix-7448bc59-4" />,
    type: 'text'
  },
  {
    label: 'Milk Production',
    key: 'milkProduction',
    icon: <Scale className="w-4 h-4" data-phoenix-id="phoenix-7448bc59-5" />,
    type: 'text'
  },
  {
    label: 'Temperament',
    key: 'temperament',
    icon: <Heart className="w-4 h-4" data-phoenix-id="phoenix-7448bc59-6" />,
    type: 'text'
  },
  {
    label: 'Lifespan',
    key: 'lifespan',
    icon: <Timer className="w-4 h-4" data-phoenix-id="phoenix-7448bc59-7" />,
    type: 'text'
  },
  {
    label: 'Horn Type',
    key: 'hornType',
    icon: <Scale className="w-4 h-4" data-phoenix-id="phoenix-7448bc59-8" />,
    type: 'text'
  }];


  const renderComparisonValue = (breed, row) => {
    const value = breed[row.key];

    switch (row.type) {
      case 'badge':
        const colors = {
          'Dairy': 'bg-blue-100 text-blue-800',
          'Beef': 'bg-red-100 text-red-800',
          'Dual-Purpose': 'bg-green-100 text-green-800'
        };
        return (/*#__PURE__*/
          React.createElement(Badge, { className: colors[value] || 'bg-gray-100 text-gray-800', "data-phoenix-id": "phoenix-7448bc59-9" },
          value
          ));

      case 'weight':
        return breed.avgWeight?.cow || 'N/A';
      case 'text':
        return value || 'N/A';
      default:
        return value || 'N/A';
    }
  };

  return (/*#__PURE__*/
    React.createElement("div", { className: "min-h-screen bg-gradient-to-b from-white to-amber-50", "data-phoenix-id": "phoenix-7448bc59-10" }, /*#__PURE__*/
    React.createElement("section", { className: "py-12 bg-gradient-to-r from-green-600 to-green-700", "data-phoenix-id": "phoenix-7448bc59-11" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-12" }, /*#__PURE__*/
    React.createElement("div", { className: "flex items-center gap-4 mb-6", "data-phoenix-id": "phoenix-7448bc59-13" }, /*#__PURE__*/
    React.createElement(Button, { variant: "outline", size: "sm", asChild: true, className: "bg-white/10 border-white/20 text-white hover:bg-white hover:text-green-700", "data-phoenix-id": "phoenix-7448bc59-14" }, /*#__PURE__*/
    React.createElement(Link, { href: "/breeds", "data-phoenix-id": "phoenix-7448bc59-15" }, /*#__PURE__*/
    React.createElement(ArrowLeft, { className: "w-4 h-4 mr-2", "data-phoenix-id": "phoenix-7448bc59-16" }), "Back to Breeds"

    )
    )
    ), /*#__PURE__*/
    React.createElement("h1", { className: "text-4xl lg:text-5xl font-bold text-white mb-4", "data-phoenix-id": "phoenix-7448bc59-17" }, "Compare Cattle Breeds"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-xl text-green-100 max-w-3xl", "data-phoenix-id": "phoenix-7448bc59-18" }, "Compare different cattle breeds side by side to find the perfect match for your needs. Select up to 4 breeds to see detailed comparisons."

    )
    )
    ), /*#__PURE__*/

    React.createElement("section", { className: "py-8 bg-white border-b", "data-phoenix-id": "phoenix-7448bc59-19" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-20" }, /*#__PURE__*/
    React.createElement("div", { className: "flex flex-col lg:flex-row gap-6 items-center justify-between", "data-phoenix-id": "phoenix-7448bc59-21" }, /*#__PURE__*/
    React.createElement("div", { "data-phoenix-id": "phoenix-7448bc59-22" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-xl font-semibold text-gray-900 mb-2", "data-phoenix-id": "phoenix-7448bc59-23" }, "Selected Breeds (",
    selectedBreeds.length, "/4)"
    ), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600", "data-phoenix-id": "phoenix-7448bc59-24" }, "Choose breeds to compare their characteristics and specifications"

    )
    ),

    selectedBreeds.length < 4 && /*#__PURE__*/
    React.createElement("div", { className: "flex items-center gap-4", "data-phoenix-id": "phoenix-7448bc59-25" }, /*#__PURE__*/
    React.createElement(Select, { onValueChange: addBreed, "data-phoenix-id": "phoenix-7448bc59-26" }, /*#__PURE__*/
    React.createElement(SelectTrigger, { className: "w-64", "data-phoenix-id": "phoenix-7448bc59-27" }, /*#__PURE__*/
    React.createElement(SelectValue, { placeholder: "Add a breed to compare", "data-phoenix-id": "phoenix-7448bc59-28" })
    ), /*#__PURE__*/
    React.createElement(SelectContent, { "data-phoenix-id": "phoenix-7448bc59-29" },
    availableBreeds.
    filter((breed) => !selectedBreeds.find((s) => s.id === breed.id)).
    map((breed) => /*#__PURE__*/
    React.createElement(SelectItem, { key: breed.id, value: breed.id, "data-phoenix-id": "phoenix-7448bc59-30" },
    breed.name, " - ", breed.origin
    )
    )
    )
    ), /*#__PURE__*/
    React.createElement(Button, { size: "icon", variant: "outline", "data-phoenix-id": "phoenix-7448bc59-31" }, /*#__PURE__*/
    React.createElement(Plus, { className: "w-4 h-4", "data-phoenix-id": "phoenix-7448bc59-32" })
    )
    ),


    selectedBreeds.length > 0 && /*#__PURE__*/
    React.createElement("div", { className: "flex flex-wrap gap-3 mt-6", "data-phoenix-id": "phoenix-7448bc59-33" },
    selectedBreeds.map((breed) => /*#__PURE__*/
    React.createElement("div", { key: breed.id, className: "flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-full", "data-phoenix-id": "phoenix-7448bc59-34" }, /*#__PURE__*/
    React.createElement("span", { className: "font-medium", "data-phoenix-id": "phoenix-7448bc59-35" }, breed.name), /*#__PURE__*/
    React.createElement(Button, {
      variant: "ghost",
      size: "icon",
      className: "h-5 w-5 text-green-600 hover:text-green-800",
      onClick: () => removeBreed(breed.id), "data-phoenix-id": "phoenix-7448bc59-36" }, /*#__PURE__*/

    React.createElement(X, { className: "w-3 h-3", "data-phoenix-id": "phoenix-7448bc59-37" })
    )
    )
    )
    )

    )
    )
    ),

    selectedBreeds.length === 0 ? /*#__PURE__*/
    React.createElement("section", { className: "py-20", "data-phoenix-id": "phoenix-7448bc59-38" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8 text-center", "data-phoenix-id": "phoenix-7448bc59-39" }, /*#__PURE__*/
    React.createElement("div", { className: "text-6xl mb-6", "data-phoenix-id": "phoenix-7448bc59-40" }, "\uD83D\uDC04"), /*#__PURE__*/
    React.createElement("h3", { className: "text-2xl font-semibold text-gray-900 mb-4", "data-phoenix-id": "phoenix-7448bc59-41" }, "No breeds selected for comparison"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600 mb-8 max-w-md mx-auto", "data-phoenix-id": "phoenix-7448bc59-42" }, "Select at least 2 breeds from the dropdown above or go back to the breeds page to choose breeds to compare."

    ), /*#__PURE__*/
    React.createElement("div", { className: "flex gap-4 justify-center", "data-phoenix-id": "phoenix-7448bc59-43" }, /*#__PURE__*/
    React.createElement(Button, { asChild: true, "data-phoenix-id": "phoenix-7448bc59-44" }, /*#__PURE__*/
    React.createElement(Link, { href: "/breeds", "data-phoenix-id": "phoenix-7448bc59-45" }, "Browse Breeds")
    )
    )
    )
    ) : /*#__PURE__*/

    React.createElement("section", { className: "py-12", "data-phoenix-id": "phoenix-7448bc59-46" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-47" }, /*#__PURE__*/
    React.createElement("div", { className: "mb-12", "data-phoenix-id": "phoenix-7448bc59-48" }, /*#__PURE__*/
    React.createElement("div", { className: `grid gap-6 ${
      selectedBreeds.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
      selectedBreeds.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
      selectedBreeds.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
      'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`, "data-phoenix-id": "phoenix-7448bc59-49" },

    selectedBreeds.map((breed) => /*#__PURE__*/
    React.createElement(Card, { key: breed.id, className: "cow-card overflow-hidden", "data-phoenix-id": "phoenix-7448bc59-50" }, /*#__PURE__*/
    React.createElement("div", { className: "relative aspect-[4/3]", "data-phoenix-id": "phoenix-7448bc59-51" }, /*#__PURE__*/
    React.createElement(Image, {
      src: breed.image,
      alt: breed.name,
      fill: true,
      className: "object-cover", "data-phoenix-id": "phoenix-7448bc59-52" }
    ), /*#__PURE__*/
    React.createElement(Button, {
      variant: "outline",
      size: "icon",
      className: "absolute top-3 right-3 bg-white/90 hover:bg-white",
      onClick: () => removeBreed(breed.id), "data-phoenix-id": "phoenix-7448bc59-53" }, /*#__PURE__*/

    React.createElement(X, { className: "w-4 h-4", "data-phoenix-id": "phoenix-7448bc59-54" })
    )
    ), /*#__PURE__*/
    React.createElement(CardContent, { className: "p-6 text-center", "data-phoenix-id": "phoenix-7448bc59-55" }, /*#__PURE__*/
    React.createElement("h3", { className: "text-xl font-bold text-gray-900 mb-2", "data-phoenix-id": "phoenix-7448bc59-56" }, breed.name), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600 text-sm mb-3", "data-phoenix-id": "phoenix-7448bc59-57" }, breed.origin), /*#__PURE__*/
    React.createElement(Badge, { className:
      breed.primaryUse === 'Dairy' ? 'bg-blue-100 text-blue-800' :
      breed.primaryUse === 'Beef' ? 'bg-red-100 text-red-800' :
      'bg-green-100 text-green-800', "data-phoenix-id": "phoenix-7448bc59-58" },

    breed.primaryUse
    )
    )
    )
    )
    ),

    selectedBreeds.length > 1 && /*#__PURE__*/
    React.createElement(Card, { className: "cow-card", "data-phoenix-id": "phoenix-7448bc59-59" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-60" }, /*#__PURE__*/
    React.createElement(CardTitle, { className: "text-2xl text-center", "data-phoenix-id": "phoenix-7448bc59-61" }, "Detailed Comparison"

    )
    ), /*#__PURE__*/
    React.createElement(CardContent, { "data-phoenix-id": "phoenix-7448bc59-62" }, /*#__PURE__*/
    React.createElement("div", { className: "overflow-x-auto", "data-phoenix-id": "phoenix-7448bc59-63" }, /*#__PURE__*/
    React.createElement("table", { className: "w-full", "data-phoenix-id": "phoenix-7448bc59-64" }, /*#__PURE__*/
    React.createElement("thead", { "data-phoenix-id": "phoenix-7448bc59-65" }, /*#__PURE__*/
    React.createElement("tr", { className: "border-b", "data-phoenix-id": "phoenix-7448bc59-66" }, /*#__PURE__*/
    React.createElement("th", { className: "text-left p-4 font-semibold text-gray-900", "data-phoenix-id": "phoenix-7448bc59-67" }, "Characteristic"

    ),
    selectedBreeds.map((breed) => /*#__PURE__*/
    React.createElement("th", { key: breed.id, className: "text-center p-4 font-semibold text-gray-900 min-w-[200px]", "data-phoenix-id": "phoenix-7448bc59-68" },
    breed.name
    )
    )
    )
    ), /*#__PURE__*/
    React.createElement("tbody", { "data-phoenix-id": "phoenix-7448bc59-69" },
    comparisonRows.map((row, index) => /*#__PURE__*/
    React.createElement("tr", { key: row.label, className: index % 2 === 0 ? 'bg-gray-50' : 'bg-white', "data-phoenix-id": "phoenix-7448bc59-70" }, /*#__PURE__*/
    React.createElement("td", { className: "p-4", "data-phoenix-id": "phoenix-7448bc59-71" }, /*#__PURE__*/
    React.createElement("div", { className: "flex items-center gap-2 font-medium text-gray-900", "data-phoenix-id": "phoenix-7448bc59-72" },
    row.icon,
    row.label
    )
    ),
    selectedBreeds.map((breed) => /*#__PURE__*/
    React.createElement("td", { key: breed.id, className: "p-4 text-center", "data-phoenix-id": "phoenix-7448bc59-73" },
    renderComparisonValue(breed, row)
    )
    )
    )
    )
    )
    )
    )
    )
    ),


    selectedBreeds.length > 1 && /*#__PURE__*/
    React.createElement("div", { className: "mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8", "data-phoenix-id": "phoenix-7448bc59-74" }, /*#__PURE__*/
    React.createElement(Card, { className: "cow-card", "data-phoenix-id": "phoenix-7448bc59-75" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-76" }, /*#__PURE__*/
    React.createElement(CardTitle, { className: "flex items-center gap-2", "data-phoenix-id": "phoenix-7448bc59-77" }, /*#__PURE__*/
    React.createElement(Heart, { className: "w-5 h-5", "data-phoenix-id": "phoenix-7448bc59-78" }), "Key Characteristics"

    )
    ), /*#__PURE__*/
    React.createElement(CardContent, { "data-phoenix-id": "phoenix-7448bc59-79" }, /*#__PURE__*/
    React.createElement("div", { className: "space-y-6", "data-phoenix-id": "phoenix-7448bc59-80" },
    selectedBreeds.map((breed) => /*#__PURE__*/
    React.createElement("div", { key: breed.id, "data-phoenix-id": "phoenix-7448bc59-81" }, /*#__PURE__*/
    React.createElement("h4", { className: "font-semibold text-gray-900 mb-3", "data-phoenix-id": "phoenix-7448bc59-82" }, breed.name), /*#__PURE__*/
    React.createElement("div", { className: "flex flex-wrap gap-2", "data-phoenix-id": "phoenix-7448bc59-83" },
    breed.characteristics.map((char, index) => /*#__PURE__*/
    React.createElement(Badge, { key: index, variant: "outline", className: "text-xs", "data-phoenix-id": "phoenix-7448bc59-84" },
    char
    )
    )
    )
    )
    )
    )
    )
    ), /*#__PURE__*/

    React.createElement(Card, { className: "cow-card", "data-phoenix-id": "phoenix-7448bc59-85" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-86" }, /*#__PURE__*/
    React.createElement(CardTitle, { "data-phoenix-id": "phoenix-7448bc59-87" }, "Colors")
    ), /*#__PURE__*/
    React.createElement(CardContent, { "data-phoenix-id": "phoenix-7448bc59-88" }, /*#__PURE__*/
    React.createElement("div", { className: "space-y-6", "data-phoenix-id": "phoenix-7448bc59-89" },
    selectedBreeds.map((breed) => /*#__PURE__*/
    React.createElement("div", { key: breed.id, "data-phoenix-id": "phoenix-7448bc59-90" }, /*#__PURE__*/
    React.createElement("h4", { className: "font-semibold text-gray-900 mb-3", "data-phoenix-id": "phoenix-7448bc59-91" }, breed.name), /*#__PURE__*/
    React.createElement("div", { className: "flex flex-wrap gap-2", "data-phoenix-id": "phoenix-7448bc59-92" },
    breed.colors.map((color, index) => /*#__PURE__*/
    React.createElement(Badge, { key: index, variant: "secondary", className: "text-xs", "data-phoenix-id": "phoenix-7448bc59-93" },
    color
    )
    )
    )
    )
    )
    )
    )
    )
    ),


    selectedBreeds.length > 0 && /*#__PURE__*/
    React.createElement("div", { className: "mt-12", "data-phoenix-id": "phoenix-7448bc59-94" }, /*#__PURE__*/
    React.createElement("h3", { className: "text-2xl font-bold text-gray-900 mb-8 text-center", "data-phoenix-id": "phoenix-7448bc59-95" }, "Fun Facts About Your Selected Breeds"

    ), /*#__PURE__*/
    React.createElement("div", { className: `grid gap-8 ${
      selectedBreeds.length === 1 ? 'grid-cols-1' :
      selectedBreeds.length === 2 ? 'grid-cols-1 lg:grid-cols-2' :
      'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'}`, "data-phoenix-id": "phoenix-7448bc59-96" },

    selectedBreeds.map((breed) => /*#__PURE__*/
    React.createElement(Card, { key: breed.id, className: "cow-card", "data-phoenix-id": "phoenix-7448bc59-97" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-98" }, /*#__PURE__*/
    React.createElement(CardTitle, { className: "text-lg", "data-phoenix-id": "phoenix-7448bc59-99" }, breed.name, " Fun Facts")
    ), /*#__PURE__*/
    React.createElement(CardContent, { "data-phoenix-id": "phoenix-7448bc59-100" }, /*#__PURE__*/
    React.createElement("ul", { className: "space-y-3", "data-phoenix-id": "phoenix-7448bc59-101" },
    breed.funFacts.map((fact, index) => /*#__PURE__*/
    React.createElement("li", { key: index, className: "text-sm text-gray-700 flex items-start gap-2", "data-phoenix-id": "phoenix-7448bc59-102" }, /*#__PURE__*/
    React.createElement("span", { className: "text-green-600 font-bold", "data-phoenix-id": "phoenix-7448bc59-103" }, "\u2022"),
    fact
    )
    )
    )
    )
    )
    )
    )
    )

    )
    )
    )

    ));

}
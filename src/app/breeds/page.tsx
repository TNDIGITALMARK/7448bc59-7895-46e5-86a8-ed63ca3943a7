'use client';

import React, { useState, useMemo } from 'react';
import { BreedCard } from '@/components/breed-card';
import { cowBreeds, breedCategories } from '@/lib/data/breeds';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
'@/components/ui/select';
import { Search, Filter, X, GitCompare, ArrowUpDown } from 'lucide-react';
import Link from 'next/link';

export default function BreedsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort breeds
  const filteredAndSortedBreeds = useMemo(() => {
    let filtered = cowBreeds;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((breed) =>
      breed.primaryUse.toLowerCase() === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter((breed) =>
      breed.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      breed.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      breed.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      breed.characteristics.some((char) =>
      char.toLowerCase().includes(searchQuery.toLowerCase())
      )
      );
    }

    // Sort breeds
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'origin':
          return a.origin.localeCompare(b.origin);
        case 'weight':
          return parseInt(a.avgWeight.cow) - parseInt(b.avgWeight.cow);
        case 'milk':
          if (!a.milkProduction || !b.milkProduction) return 0;
          return parseInt(a.milkProduction) - parseInt(b.milkProduction);
        default:
          return 0;
      }
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const handleCompareBreed = (breed) => {
    setSelectedBreeds((prev) => {
      const isAlreadySelected = prev.find((b) => b.id === breed.id);
      if (isAlreadySelected) {
        return prev.filter((b) => b.id !== breed.id);
      } else if (prev.length < 3) {
        return [...prev, breed];
      }
      return prev;
    });
  };

  const clearSelectedBreeds = () => {
    setSelectedBreeds([]);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('name');
  };

  return (/*#__PURE__*/
    React.createElement("div", { className: "min-h-screen bg-gradient-to-b from-white to-amber-50", "data-phoenix-id": "phoenix-7448bc59-1" }, /*#__PURE__*/
    React.createElement("section", { className: "py-16 bg-gradient-to-r from-green-600 to-green-700", "data-phoenix-id": "phoenix-7448bc59-2" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8 text-center", "data-phoenix-id": "phoenix-7448bc59-3" }, /*#__PURE__*/
    React.createElement("h1", { className: "text-4xl lg:text-6xl font-bold text-white mb-6", "data-phoenix-id": "phoenix-7448bc59-4" }, "Cattle Breeds Explorer"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-xl text-green-100 max-w-3xl mx-auto leading-relaxed", "data-phoenix-id": "phoenix-7448bc59-5" }, "Discover detailed information about cattle breeds from around the world. Compare breeds, learn about their characteristics, and find the perfect match for your needs."

    )
    )
    ), /*#__PURE__*/

    React.createElement("section", { className: "py-8 bg-white border-b", "data-phoenix-id": "phoenix-7448bc59-6" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-7" }, /*#__PURE__*/
    React.createElement("div", { className: "flex flex-col lg:flex-row gap-4 items-center justify-between", "data-phoenix-id": "phoenix-7448bc59-8" }, /*#__PURE__*/
    React.createElement("div", { className: "relative flex-1 max-w-md", "data-phoenix-id": "phoenix-7448bc59-9" }, /*#__PURE__*/
    React.createElement(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5", "data-phoenix-id": "phoenix-7448bc59-10" }), /*#__PURE__*/
    React.createElement(Input, {
      placeholder: "Search breeds, origins, or characteristics...",
      value: searchQuery,
      onChange: (e) => setSearchQuery(e.target.value),
      className: "pl-10", "data-phoenix-id": "phoenix-7448bc59-11" }
    )
    ), /*#__PURE__*/

    React.createElement("div", { className: "flex flex-wrap gap-4 items-center", "data-phoenix-id": "phoenix-7448bc59-12" }, /*#__PURE__*/
    React.createElement(Select, { value: selectedCategory, onValueChange: setSelectedCategory, "data-phoenix-id": "phoenix-7448bc59-13" }, /*#__PURE__*/
    React.createElement(SelectTrigger, { className: "w-40", "data-phoenix-id": "phoenix-7448bc59-14" }, /*#__PURE__*/
    React.createElement(SelectValue, { placeholder: "Category", "data-phoenix-id": "phoenix-7448bc59-15" })
    ), /*#__PURE__*/
    React.createElement(SelectContent, { "data-phoenix-id": "phoenix-7448bc59-16" },
    breedCategories.map((category) => /*#__PURE__*/
    React.createElement(SelectItem, { key: category.id, value: category.id, "data-phoenix-id": "phoenix-7448bc59-17" },
    category.name, " (", category.count, ")"
    )
    )
    )
    ), /*#__PURE__*/

    React.createElement(Select, { value: sortBy, onValueChange: setSortBy, "data-phoenix-id": "phoenix-7448bc59-18" }, /*#__PURE__*/
    React.createElement(SelectTrigger, { className: "w-40", "data-phoenix-id": "phoenix-7448bc59-19" }, /*#__PURE__*/
    React.createElement(SelectValue, { placeholder: "Sort by", "data-phoenix-id": "phoenix-7448bc59-20" })
    ), /*#__PURE__*/
    React.createElement(SelectContent, { "data-phoenix-id": "phoenix-7448bc59-21" }, /*#__PURE__*/
    React.createElement(SelectItem, { value: "name", "data-phoenix-id": "phoenix-7448bc59-22" }, "Name"), /*#__PURE__*/
    React.createElement(SelectItem, { value: "origin", "data-phoenix-id": "phoenix-7448bc59-23" }, "Origin"), /*#__PURE__*/
    React.createElement(SelectItem, { value: "weight", "data-phoenix-id": "phoenix-7448bc59-24" }, "Weight"), /*#__PURE__*/
    React.createElement(SelectItem, { value: "milk", "data-phoenix-id": "phoenix-7448bc59-25" }, "Milk Production")
    )
    ), /*#__PURE__*/

    React.createElement(Button, {
      variant: "outline",
      size: "icon",
      onClick: () => setShowFilters(!showFilters), "data-phoenix-id": "phoenix-7448bc59-26" }, /*#__PURE__*/

    React.createElement(Filter, { className: "w-4 h-4", "data-phoenix-id": "phoenix-7448bc59-27" })
    ),

    (searchQuery || selectedCategory !== 'all' || sortBy !== 'name') && /*#__PURE__*/
    React.createElement(Button, { variant: "ghost", onClick: clearAllFilters, size: "sm", "data-phoenix-id": "phoenix-7448bc59-28" }, /*#__PURE__*/
    React.createElement(X, { className: "w-4 h-4 mr-2", "data-phoenix-id": "phoenix-7448bc59-29" }), "Clear Filters"

    )

    )
    ),

    (searchQuery || selectedCategory !== 'all') && /*#__PURE__*/
    React.createElement("div", { className: "flex flex-wrap gap-2 mt-4", "data-phoenix-id": "phoenix-7448bc59-30" },
    searchQuery && /*#__PURE__*/
    React.createElement(Badge, { variant: "secondary", "data-phoenix-id": "phoenix-7448bc59-31" }, "Search: ",
    searchQuery, /*#__PURE__*/
    React.createElement(X, {
      className: "w-3 h-3 ml-2 cursor-pointer",
      onClick: () => setSearchQuery(''), "data-phoenix-id": "phoenix-7448bc59-32" }
    )
    ),

    selectedCategory !== 'all' && /*#__PURE__*/
    React.createElement(Badge, { variant: "secondary", "data-phoenix-id": "phoenix-7448bc59-33" }, "Category: ",
    breedCategories.find((c) => c.id === selectedCategory)?.name, /*#__PURE__*/
    React.createElement(X, {
      className: "w-3 h-3 ml-2 cursor-pointer",
      onClick: () => setSelectedCategory('all'), "data-phoenix-id": "phoenix-7448bc59-34" }
    )
    )

    )

    )
    ),

    selectedBreeds.length > 0 && /*#__PURE__*/
    React.createElement("section", { className: "py-4 bg-green-50 border-b", "data-phoenix-id": "phoenix-7448bc59-35" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-36" }, /*#__PURE__*/
    React.createElement("div", { className: "flex items-center justify-between", "data-phoenix-id": "phoenix-7448bc59-37" }, /*#__PURE__*/
    React.createElement("div", { className: "flex items-center gap-4", "data-phoenix-id": "phoenix-7448bc59-38" }, /*#__PURE__*/
    React.createElement("div", { className: "flex items-center gap-2", "data-phoenix-id": "phoenix-7448bc59-39" }, /*#__PURE__*/
    React.createElement(GitCompare, { className: "w-5 h-5 text-green-600", "data-phoenix-id": "phoenix-7448bc59-40" }), /*#__PURE__*/
    React.createElement("span", { className: "font-medium", "data-phoenix-id": "phoenix-7448bc59-41" }, "Comparing ",
    selectedBreeds.length, "/3 breeds"
    )
    ), /*#__PURE__*/
    React.createElement("div", { className: "flex gap-2", "data-phoenix-id": "phoenix-7448bc59-42" },
    selectedBreeds.map((breed) => /*#__PURE__*/
    React.createElement(Badge, { key: breed.id, variant: "secondary", "data-phoenix-id": "phoenix-7448bc59-43" },
    breed.name, /*#__PURE__*/
    React.createElement(X, {
      className: "w-3 h-3 ml-2 cursor-pointer",
      onClick: () => handleCompareBreed(breed), "data-phoenix-id": "phoenix-7448bc59-44" }
    )
    )
    )
    )
    ), /*#__PURE__*/
    React.createElement("div", { className: "flex gap-2", "data-phoenix-id": "phoenix-7448bc59-45" }, /*#__PURE__*/
    React.createElement(Button, { size: "sm", asChild: true, disabled: selectedBreeds.length < 2, "data-phoenix-id": "phoenix-7448bc59-46" }, /*#__PURE__*/
    React.createElement(Link, { href: `/breeds/compare?breeds=${selectedBreeds.map((b) => b.id).join(',')}`, "data-phoenix-id": "phoenix-7448bc59-47" }, "Compare Now"

    )
    ), /*#__PURE__*/
    React.createElement(Button, { variant: "ghost", size: "sm", onClick: clearSelectedBreeds, "data-phoenix-id": "phoenix-7448bc59-48" }, "Clear All"

    )
    )
    )
    )
    ), /*#__PURE__*/


    React.createElement("section", { className: "py-12", "data-phoenix-id": "phoenix-7448bc59-49" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-50" }, /*#__PURE__*/
    React.createElement("div", { className: "flex items-center justify-between mb-8", "data-phoenix-id": "phoenix-7448bc59-51" }, /*#__PURE__*/
    React.createElement("div", { "data-phoenix-id": "phoenix-7448bc59-52" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-2xl font-bold text-gray-900", "data-phoenix-id": "phoenix-7448bc59-53" },
    filteredAndSortedBreeds.length, " Breeds Found"
    ), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600 mt-1", "data-phoenix-id": "phoenix-7448bc59-54" },
    selectedCategory !== 'all' ?
    `Showing ${breedCategories.find((c) => c.id === selectedCategory)?.name.toLowerCase()} breeds` :
    'Showing all cattle breeds'
    )
    ), /*#__PURE__*/
    React.createElement("div", { className: "flex items-center gap-2 text-sm text-gray-500", "data-phoenix-id": "phoenix-7448bc59-55" }, /*#__PURE__*/
    React.createElement(ArrowUpDown, { className: "w-4 h-4", "data-phoenix-id": "phoenix-7448bc59-56" }), "Sorted by ",
    sortBy
    )
    ),

    filteredAndSortedBreeds.length === 0 ? /*#__PURE__*/
    React.createElement(Card, { className: "text-center py-12", "data-phoenix-id": "phoenix-7448bc59-57" }, /*#__PURE__*/
    React.createElement(CardContent, { "data-phoenix-id": "phoenix-7448bc59-58" }, /*#__PURE__*/
    React.createElement("div", { className: "text-6xl mb-4", "data-phoenix-id": "phoenix-7448bc59-59" }, "\uD83D\uDC04"), /*#__PURE__*/
    React.createElement("h3", { className: "text-xl font-semibold text-gray-900 mb-2", "data-phoenix-id": "phoenix-7448bc59-60" }, "No breeds found"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600 mb-4", "data-phoenix-id": "phoenix-7448bc59-61" }, "Try adjusting your search criteria or clearing filters."

    ), /*#__PURE__*/
    React.createElement(Button, { onClick: clearAllFilters, "data-phoenix-id": "phoenix-7448bc59-62" }, "Clear All Filters")
    )
    ) : /*#__PURE__*/

    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8", "data-phoenix-id": "phoenix-7448bc59-63" },
    filteredAndSortedBreeds.map((breed) => /*#__PURE__*/
    React.createElement(BreedCard, {
      key: breed.id,
      breed: breed,
      onCompare: handleCompareBreed,
      isSelected: selectedBreeds.some((b) => b.id === breed.id), "data-phoenix-id": "phoenix-7448bc59-64" }
    )
    )
    )

    )
    ), /*#__PURE__*/

    React.createElement("section", { className: "py-12 bg-white", "data-phoenix-id": "phoenix-7448bc59-65" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-66" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-2xl font-bold text-gray-900 text-center mb-8", "data-phoenix-id": "phoenix-7448bc59-67" }, "Breed Categories"

    ), /*#__PURE__*/
    React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6", "data-phoenix-id": "phoenix-7448bc59-68" },
    breedCategories.slice(1).map((category) => /*#__PURE__*/
    React.createElement(Card, {
      key: category.id,
      className: `cursor-pointer transition-all hover:shadow-lg ${
      selectedCategory === category.id ? 'ring-2 ring-green-500' : ''}`,

      onClick: () => setSelectedCategory(category.id), "data-phoenix-id": "phoenix-7448bc59-69" }, /*#__PURE__*/

    React.createElement(CardHeader, { className: "text-center", "data-phoenix-id": "phoenix-7448bc59-70" }, /*#__PURE__*/
    React.createElement(CardTitle, { className: "text-lg", "data-phoenix-id": "phoenix-7448bc59-71" }, category.name), /*#__PURE__*/
    React.createElement("div", { className: "text-3xl font-bold text-green-600", "data-phoenix-id": "phoenix-7448bc59-72" },
    category.count
    ), /*#__PURE__*/
    React.createElement("p", { className: "text-sm text-gray-600", "data-phoenix-id": "phoenix-7448bc59-73" }, "breeds available")
    )
    )
    )
    )
    )
    )
    ));

}
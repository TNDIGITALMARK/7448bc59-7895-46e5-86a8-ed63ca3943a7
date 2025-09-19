'use client';

import { useState, useMemo } from 'react';
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
  SelectValue,
} from '@/components/ui/select';
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Cattle Breeds Explorer
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Discover detailed information about cattle breeds from around the world. Compare breeds, learn about their characteristics, and find the perfect match for your needs.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search breeds, origins, or characteristics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {breedCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="origin">Origin</SelectItem>
                  <SelectItem value="weight">Weight</SelectItem>
                  <SelectItem value="milk">Milk Production</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4" />
              </Button>

              {(searchQuery || selectedCategory !== 'all' || sortBy !== 'name') && (
                <Button variant="ghost" onClick={clearAllFilters} size="sm">
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          {(searchQuery || selectedCategory !== 'all') && (
            <div className="flex flex-wrap gap-2 mt-4">
              {searchQuery && (
                <Badge variant="secondary">
                  Search: {searchQuery}
                  <X
                    className="w-3 h-3 ml-2 cursor-pointer"
                    onClick={() => setSearchQuery('')}
                  />
                </Badge>
              )}
              {selectedCategory !== 'all' && (
                <Badge variant="secondary">
                  Category: {breedCategories.find((c) => c.id === selectedCategory)?.name}
                  <X
                    className="w-3 h-3 ml-2 cursor-pointer"
                    onClick={() => setSelectedCategory('all')}
                  />
                </Badge>
              )}
            </div>
          )}
        </div>
      </section>

      {selectedBreeds.length > 0 && (
        <section className="py-4 bg-green-50 border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <GitCompare className="w-5 h-5 text-green-600" />
                  <span className="font-medium">
                    Comparing {selectedBreeds.length}/3 breeds
                  </span>
                </div>
                <div className="flex gap-2">
                  {selectedBreeds.map((breed) => (
                    <Badge key={breed.id} variant="secondary">
                      {breed.name}
                      <X
                        className="w-3 h-3 ml-2 cursor-pointer"
                        onClick={() => handleCompareBreed(breed)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" asChild disabled={selectedBreeds.length < 2}>
                  <Link href={`/breeds/compare?breeds=${selectedBreeds.map((b) => b.id).join(',')}`}>
                    Compare Now
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" onClick={clearSelectedBreeds}>
                  Clear All
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredAndSortedBreeds.length} Breeds Found
              </h2>
              <p className="text-gray-600 mt-1">
                {selectedCategory !== 'all'
                  ? `Showing ${breedCategories.find((c) => c.id === selectedCategory)?.name.toLowerCase()} breeds`
                  : 'Showing all cattle breeds'}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ArrowUpDown className="w-4 h-4" />
              Sorted by {sortBy}
            </div>
          </div>

          {filteredAndSortedBreeds.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <div className="text-6xl mb-4">🐄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No breeds found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or clearing filters.
                </p>
                <Button onClick={clearAllFilters}>Clear All Filters</Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredAndSortedBreeds.map((breed) => (
                <BreedCard
                  key={breed.id}
                  breed={breed}
                  onCompare={handleCompareBreed}
                  isSelected={selectedBreeds.some((b) => b.id === breed.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Breed Categories
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {breedCategories.slice(1).map((category) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedCategory === category.id ? 'ring-2 ring-green-500' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <div className="text-3xl font-bold text-green-600">
                    {category.count}
                  </div>
                  <p className="text-sm text-gray-600">breeds available</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
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
  SelectValue,
} from '@/components/ui/select';
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
      icon: <MapPin className="w-4 h-4" />,
      type: 'text'
    },
    {
      label: 'Primary Use',
      key: 'primaryUse',
      icon: <Heart className="w-4 h-4" />,
      type: 'badge'
    },
    {
      label: 'Average Weight (Cow)',
      key: 'avgWeight',
      icon: <Scale className="w-4 h-4" />,
      type: 'weight'
    },
    {
      label: 'Average Height',
      key: 'avgHeight',
      icon: <Scale className="w-4 h-4" />,
      type: 'text'
    },
    {
      label: 'Milk Production',
      key: 'milkProduction',
      icon: <Scale className="w-4 h-4" />,
      type: 'text'
    },
    {
      label: 'Temperament',
      key: 'temperament',
      icon: <Heart className="w-4 h-4" />,
      type: 'text'
    },
    {
      label: 'Lifespan',
      key: 'lifespan',
      icon: <Timer className="w-4 h-4" />,
      type: 'text'
    },
    {
      label: 'Horn Type',
      key: 'hornType',
      icon: <Scale className="w-4 h-4" />,
      type: 'text'
    }
  ];

  const renderComparisonValue = (breed, row) => {
    const value = breed[row.key];

    switch (row.type) {
      case 'badge':
        const colors = {
          'Dairy': 'bg-blue-100 text-blue-800',
          'Beef': 'bg-red-100 text-red-800',
          'Dual-Purpose': 'bg-green-100 text-green-800'
        };
        return (
          <Badge className={colors[value] || 'bg-gray-100 text-gray-800'}>
            {value}
          </Badge>
        );
      case 'weight':
        return breed.avgWeight?.cow || 'N/A';
      case 'text':
        return value || 'N/A';
      default:
        return value || 'N/A';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <section className="py-12 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" size="sm" asChild className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-green-700">
              <Link href="/breeds">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Breeds
              </Link>
            </Button>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Compare Cattle Breeds
          </h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Compare different cattle breeds side by side to find the perfect match for your needs. Select up to 4 breeds to see detailed comparisons.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Selected Breeds ({selectedBreeds.length}/4)
              </h2>
              <p className="text-gray-600">
                Choose breeds to compare their characteristics and specifications
              </p>
            </div>

            {selectedBreeds.length < 4 && (
              <div className="flex items-center gap-4">
                <Select onValueChange={addBreed}>
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Add a breed to compare" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableBreeds.
                    filter((breed) => !selectedBreeds.find((s) => s.id === breed.id)).
                    map((breed) => (
                      <SelectItem key={breed.id} value={breed.id}>
                        {breed.name} - {breed.origin}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button size="icon" variant="outline">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            )}

            {selectedBreeds.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-6">
                {selectedBreeds.map((breed) => (
                  <div key={breed.id} className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-full">
                    <span className="font-medium">{breed.name}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5 text-green-600 hover:text-green-800"
                      onClick={() => removeBreed(breed.id)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedBreeds.length === 0 ? (
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="text-6xl mb-6">🐄</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              No breeds selected for comparison
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Select at least 2 breeds from the dropdown above or go back to the breeds page to choose breeds to compare.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link href="/breeds">Browse Breeds</Link>
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <div className={`grid gap-6 ${
                selectedBreeds.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                selectedBreeds.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                selectedBreeds.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
              }`}>
                {selectedBreeds.map((breed) => (
                  <Card key={breed.id} className="cow-card overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={breed.image}
                        alt={breed.name}
                        fill
                        className="object-cover"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute top-3 right-3 bg-white/90 hover:bg-white"
                        onClick={() => removeBreed(breed.id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{breed.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{breed.origin}</p>
                      <Badge className={
                        breed.primaryUse === 'Dairy' ? 'bg-blue-100 text-blue-800' :
                        breed.primaryUse === 'Beef' ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'
                      }>
                        {breed.primaryUse}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedBreeds.length > 1 && (
                <Card className="cow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      Detailed Comparison
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4 font-semibold text-gray-900">
                              Characteristic
                            </th>
                            {selectedBreeds.map((breed) => (
                              <th key={breed.id} className="text-center p-4 font-semibold text-gray-900 min-w-[200px]">
                                {breed.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {comparisonRows.map((row, index) => (
                            <tr key={row.label} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                              <td className="p-4">
                                <div className="flex items-center gap-2 font-medium text-gray-900">
                                  {row.icon}
                                  {row.label}
                                </div>
                              </td>
                              {selectedBreeds.map((breed) => (
                                <td key={breed.id} className="p-4 text-center">
                                  {renderComparisonValue(breed, row)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              )}

              {selectedBreeds.length > 1 && (
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="cow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        Key Characteristics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {selectedBreeds.map((breed) => (
                          <div key={breed.id}>
                            <h4 className="font-semibold text-gray-900 mb-3">{breed.name}</h4>
                            <div className="flex flex-wrap gap-2">
                              {breed.characteristics.map((char, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {char}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cow-card">
                    <CardHeader>
                      <CardTitle>Colors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {selectedBreeds.map((breed) => (
                          <div key={breed.id}>
                            <h4 className="font-semibold text-gray-900 mb-3">{breed.name}</h4>
                            <div className="flex flex-wrap gap-2">
                              {breed.colors.map((color, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {color}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {selectedBreeds.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    Fun Facts About Your Selected Breeds
                  </h3>
                  <div className={`grid gap-8 ${
                    selectedBreeds.length === 1 ? 'grid-cols-1' :
                    selectedBreeds.length === 2 ? 'grid-cols-1 lg:grid-cols-2' :
                    'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
                  }`}>
                    {selectedBreeds.map((breed) => (
                      <Card key={breed.id} className="cow-card">
                        <CardHeader>
                          <CardTitle className="text-lg">{breed.name} Fun Facts</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {breed.funFacts.map((fact, index) => (
                              <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-green-600 font-bold">•</span>
                                {fact}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
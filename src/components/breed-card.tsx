'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Heart, Info } from 'lucide-react';
import { BreedInfo } from '@/lib/data/breeds';

interface BreedCardProps {
  breed: BreedInfo;
  onCompare?: (breed: BreedInfo) => void;
  isSelected?: boolean;
}

export function BreedCard({ breed, onCompare, isSelected = false }: BreedCardProps) {
  const [imageError, setImageError] = useState(false);

  const getPrimaryUseColor = (use: string) => {
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

  return (
    <Card
      className={`cow-card group overflow-hidden transition-all duration-300 ${
        isSelected ? 'ring-2 ring-green-500 ring-opacity-50' : ''
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {!imageError ? (
          <Image
            src={breed.image}
            alt={breed.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
            <div className="text-6xl opacity-50">🐄</div>
          </div>
        )}

        {/* Origin badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-800 backdrop-blur-sm">
            <MapPin className="w-3 h-3 mr-1" />
            {breed.origin}
          </Badge>
        </div>

        {/* Primary use badge */}
        <div className="absolute top-3 right-3">
          <Badge
            className="text-white backdrop-blur-sm"
            style={{ backgroundColor: getPrimaryUseColor(breed.primaryUse) }}
          >
            {breed.primaryUse}
          </Badge>
        </div>

        {/* Compare button */}
        {onCompare && (
          <Button
            variant="outline"
            size="sm"
            className={`absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm transition-all ${
              isSelected
                ? 'bg-green-100 border-green-500 text-green-700'
                : 'hover:bg-white'
            }`}
            onClick={(e) => {
              e.preventDefault();
              onCompare(breed);
            }}
          >
            {isSelected ? (
              <>
                <Heart className="w-4 h-4 mr-2 fill-current" />
                Added
              </>
            ) : (
              <>
                <Heart className="w-4 h-4 mr-2" />
                Compare
              </>
            )}
          </Button>
        )}
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{breed.name}</h3>
          <p className="text-gray-600 leading-relaxed line-clamp-3">
            {breed.description}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Average Weight</span>
            <span className="text-sm font-semibold text-gray-900">{breed.avgWeight.cow}</span>
          </div>

          {breed.milkProduction && (
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Milk Production</span>
              <span className="text-sm font-semibold text-gray-900">{breed.milkProduction}</span>
            </div>
          )}

          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Temperament</span>
            <span className="text-sm font-semibold text-gray-900">{breed.temperament}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Horn Type</span>
            <span className="text-sm font-semibold text-gray-900">{breed.hornType}</span>
          </div>
        </div>

        {/* Characteristics tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {breed.characteristics.slice(0, 3).map((characteristic, index) => (
            <span
              key={index}
              className="breed-tag"
            >
              {characteristic}
            </span>
          ))}
          {breed.characteristics.length > 3 && (
            <span className="breed-tag bg-gray-200 text-gray-700">
              +{breed.characteristics.length - 3}
            </span>
          )}
        </div>

        <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold">
          <Info className="w-4 h-4 mr-2" />
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
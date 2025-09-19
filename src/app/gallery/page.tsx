'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  X, 
  Camera, 
  Heart,
  Share2,
  Download,
  Eye
} from 'lucide-react';

// Gallery data with actual images from the public directory
const galleryImages = [
  {
    id: 1,
    src: '/generated/holstein-cow-hero.jpg',
    title: 'Holstein Cow in Pasture',
    category: 'dairy',
    description: 'A beautiful Holstein dairy cow grazing in a green pasture',
    tags: ['holstein', 'dairy', 'pasture', 'grazing'],
    photographer: 'Patsture Perfect',
    likes: 45,
    views: 1200
  },
  {
    id: 2,
    src: '/generated/highland-cow-hero.jpg',
    title: 'Highland Cow Portrait',
    category: 'beef',
    description: 'Majestic Highland cow with characteristic long hair',
    tags: ['highland', 'beef', 'portrait', 'majestic'],
    photographer: 'Patsture Perfect',
    likes: 67,
    views: 1850
  },
  {
    id: 3,
    src: '/generated/jersey-cow-hero.jpg',
    title: 'Jersey Cow in Sunshine',
    category: 'dairy',
    description: 'A gentle Jersey cow enjoying the warm sunshine',
    tags: ['jersey', 'dairy', 'sunshine', 'peaceful'],
    photographer: 'Patsture Perfect',
    likes: 32,
    views: 890
  },
  {
    id: 4,
    src: '/generated/angus-cow.jpg',
    title: 'Black Angus Cattle',
    category: 'beef',
    description: 'Prime Black Angus cattle in their natural habitat',
    tags: ['angus', 'beef', 'black', 'prime'],
    photographer: 'Patsture Perfect',
    likes: 55,
    views: 1340
  },
  {
    id: 5,
    src: '/generated/hereford-cow-card.jpg',
    title: 'Hereford Beauty',
    category: 'beef',
    description: 'A stunning Hereford cow with classic red and white markings',
    tags: ['hereford', 'beef', 'red', 'white'],
    photographer: 'Patsture Perfect',
    likes: 41,
    views: 1150
  },
  {
    id: 6,
    src: '/generated/charolais-cow-card.jpg',
    title: 'Charolais Excellence',
    category: 'beef',
    description: 'Magnificent Charolais cattle showcasing breed excellence',
    tags: ['charolais', 'beef', 'excellence', 'white'],
    photographer: 'Patsture Perfect',
    likes: 38,
    views: 920
  },
  {
    id: 7,
    src: '/generated/simmental-cow.jpg',
    title: 'Simmental in Field',
    category: 'dual',
    description: 'Simmental cow demonstrating dual-purpose breed characteristics',
    tags: ['simmental', 'dual-purpose', 'field', 'versatile'],
    photographer: 'Patsture Perfect',
    likes: 29,
    views: 780
  },
  {
    id: 8,
    src: '/generated/angus-cow-card.jpg',
    title: 'Young Angus Calf',
    category: 'beef',
    description: 'Adorable young Angus calf in spring pasture',
    tags: ['angus', 'calf', 'young', 'spring'],
    photographer: 'Patsture Perfect',
    likes: 89,
    views: 2100
  }
];

const categories = [
  { id: 'all', name: 'All Photos', count: galleryImages.length },
  { id: 'dairy', name: 'Dairy Breeds', count: galleryImages.filter(img => img.category === 'dairy').length },
  { id: 'beef', name: 'Beef Breeds', count: galleryImages.filter(img => img.category === 'beef').length },
  { id: 'dual', name: 'Dual Purpose', count: galleryImages.filter(img => img.category === 'dual').length }
];

export default function GalleryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());

  // Filter images based on search and category
  const filteredImages = galleryImages.filter(image => {
    const matchesSearch = searchQuery === '' || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleLike = (imageId) => {
    const newLikedImages = new Set(likedImages);
    if (newLikedImages.has(imageId)) {
      newLikedImages.delete(imageId);
    } else {
      newLikedImages.add(imageId);
    }
    setLikedImages(newLikedImages);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Camera className="w-12 h-12 text-primary-foreground" />
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground">
              Cow Gallery
            </h1>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Explore our beautiful collection of cow photography showcasing the majesty and 
            diversity of cattle breeds from around the world.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-card border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search photos, breeds, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="hover:bg-accent hover:text-accent-foreground"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Clear Filters */}
            {(searchQuery || selectedCategory !== 'all') && (
              <Button 
                variant="ghost" 
                onClick={clearFilters}
                size="sm"
                className="flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Clear
              </Button>
            )}
          </div>

          {/* Active Filters */}
          {(searchQuery || selectedCategory !== 'all') && (
            <div className="flex flex-wrap gap-2 mt-4">
              {searchQuery && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Search: {searchQuery}
                  <X 
                    className="w-3 h-3 cursor-pointer hover:text-destructive" 
                    onClick={() => setSearchQuery('')}
                  />
                </Badge>
              )}
              {selectedCategory !== 'all' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Category: {categories.find(c => c.id === selectedCategory)?.name}
                  <X 
                    className="w-3 h-3 cursor-pointer hover:text-destructive" 
                    onClick={() => setSelectedCategory('all')}
                  />
                </Badge>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {filteredImages.length} {filteredImages.length === 1 ? 'Photo' : 'Photos'} Found
              </h2>
              <p className="text-muted-foreground mt-1">
                {selectedCategory !== 'all' 
                  ? `Showing ${categories.find(c => c.id === selectedCategory)?.name.toLowerCase()}`
                  : 'Showing all photos'
                }
              </p>
            </div>
          </div>

          {filteredImages.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent className="space-y-4">
                <div className="text-6xl">🐄</div>
                <h3 className="text-xl font-semibold">No photos found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or clearing filters.
                </p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <Card key={image.id} className="group cow-card overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-2">
                        <Button 
                          size="icon" 
                          variant="secondary"
                          onClick={() => handleLike(image.id)}
                          className="hover:bg-red-100 hover:text-red-600"
                        >
                          <Heart 
                            className={`w-4 h-4 ${likedImages.has(image.id) ? 'fill-red-500 text-red-500' : ''}`} 
                          />
                        </Button>
                        <Button size="icon" variant="secondary">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="secondary">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg leading-tight">{image.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {image.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {image.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {image.likes + (likedImages.has(image.id) ? 1 : 0)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {image.views}
                          </span>
                        </div>
                        <span className="text-xs">by {image.photographer}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Gallery Statistics</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => (
              <Card 
                key={category.id}
                className={`text-center cursor-pointer transition-all hover:shadow-lg ${
                  selectedCategory === category.id ? 'ring-2 ring-accent' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {category.count}
                  </div>
                  <div className="font-medium">{category.name}</div>
                  <div className="text-sm text-muted-foreground">photos available</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
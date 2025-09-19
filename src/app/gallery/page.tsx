'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Search,

  X,
  Camera,
  Heart,
  Share2,
  Download,
  Eye } from
'lucide-react';

// Gallery data with actual images from the public directory
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";const galleryImages = [
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
}];


const categories = [
{ id: 'all', name: 'All Photos', count: galleryImages.length },
{ id: 'dairy', name: 'Dairy Breeds', count: galleryImages.filter((img) => img.category === 'dairy').length },
{ id: 'beef', name: 'Beef Breeds', count: galleryImages.filter((img) => img.category === 'beef').length },
{ id: 'dual', name: 'Dual Purpose', count: galleryImages.filter((img) => img.category === 'dual').length }];


export default function GalleryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());

  // Filter images based on search and category
  const filteredImages = galleryImages.filter((image) => {
    const matchesSearch = searchQuery === '' ||
    image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    image.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

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

  return (/*#__PURE__*/
    _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-1", className: "min-h-screen bg-gradient-to-b from-background to-muted/20", children: [/*#__PURE__*/

      _jsx("section", { "data-phoenix-id": "phoenix-7448bc59-2", className: "py-16 bg-gradient-to-r from-primary to-accent", children: /*#__PURE__*/
        _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-3", className: "container mx-auto px-4 lg:px-8 text-center", children: [/*#__PURE__*/
          _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-4", className: "flex items-center justify-center gap-3 mb-6", children: [/*#__PURE__*/
            _jsx(Camera, { "data-phoenix-id": "phoenix-7448bc59-5", className: "w-12 h-12 text-primary-foreground" }), /*#__PURE__*/
            _jsx("h1", { "data-phoenix-id": "phoenix-7448bc59-6", className: "text-4xl lg:text-6xl font-bold text-primary-foreground", children: "Cow Gallery" }

            )] }
          ), /*#__PURE__*/
          _jsx("p", { "data-phoenix-id": "phoenix-7448bc59-7", className: "text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed", children: "Explore our beautiful collection of cow photography showcasing the majesty and diversity of cattle breeds from around the world." }


          )] }
        ) }
      ), /*#__PURE__*/


      _jsx("section", { "data-phoenix-id": "phoenix-7448bc59-8", className: "py-8 bg-card border-b", children: /*#__PURE__*/
        _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-9", className: "container mx-auto px-4 lg:px-8", children: [/*#__PURE__*/
          _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-10", className: "flex flex-col lg:flex-row gap-4 items-center justify-between", children: [/*#__PURE__*/

            _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-11", className: "relative flex-1 max-w-md", children: [/*#__PURE__*/
              _jsx(Search, { "data-phoenix-id": "phoenix-7448bc59-12", className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" }), /*#__PURE__*/
              _jsx(Input, { "data-phoenix-id": "phoenix-7448bc59-13",
                placeholder: "Search photos, breeds, or tags...",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "pl-10" }
              )] }
            ), /*#__PURE__*/


            _jsx("div", { "data-phoenix-id": "phoenix-7448bc59-14", className: "flex flex-wrap gap-2 items-center", children:
              categories.map((category) => /*#__PURE__*/
              _jsxs(Button, { "data-phoenix-id": "phoenix-7448bc59-15",

                variant: selectedCategory === category.id ? "default" : "outline",
                size: "sm",
                onClick: () => setSelectedCategory(category.id),
                className: "hover:bg-accent hover:text-accent-foreground", children: [

                category.name, " (", category.count, ")"] }, category.id
              )
              ) }
            ),


            (searchQuery || selectedCategory !== 'all') && /*#__PURE__*/
            _jsxs(Button, { "data-phoenix-id": "phoenix-7448bc59-16",
              variant: "ghost",
              onClick: clearFilters,
              size: "sm",
              className: "flex items-center gap-2", children: [/*#__PURE__*/

              _jsx(X, { "data-phoenix-id": "phoenix-7448bc59-17", className: "w-4 h-4" }), "Clear"] }

            )] }

          ),


          (searchQuery || selectedCategory !== 'all') && /*#__PURE__*/
          _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-18", className: "flex flex-wrap gap-2 mt-4", children: [
            searchQuery && /*#__PURE__*/
            _jsxs(Badge, { "data-phoenix-id": "phoenix-7448bc59-19", variant: "secondary", className: "flex items-center gap-1", children: ["Search: ",
              searchQuery, /*#__PURE__*/
              _jsx(X, { "data-phoenix-id": "phoenix-7448bc59-20",
                className: "w-3 h-3 cursor-pointer hover:text-destructive",
                onClick: () => setSearchQuery('') }
              )] }
            ),

            selectedCategory !== 'all' && /*#__PURE__*/
            _jsxs(Badge, { "data-phoenix-id": "phoenix-7448bc59-21", variant: "secondary", className: "flex items-center gap-1", children: ["Category: ",
              categories.find((c) => c.id === selectedCategory)?.name, /*#__PURE__*/
              _jsx(X, { "data-phoenix-id": "phoenix-7448bc59-22",
                className: "w-3 h-3 cursor-pointer hover:text-destructive",
                onClick: () => setSelectedCategory('all') }
              )] }
            )] }

          )] }

        ) }
      ), /*#__PURE__*/


      _jsx("section", { "data-phoenix-id": "phoenix-7448bc59-23", className: "py-12", children: /*#__PURE__*/
        _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-24", className: "container mx-auto px-4 lg:px-8", children: [/*#__PURE__*/
          _jsx("div", { "data-phoenix-id": "phoenix-7448bc59-25", className: "flex items-center justify-between mb-8", children: /*#__PURE__*/
            _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-26", children: [/*#__PURE__*/
              _jsxs("h2", { "data-phoenix-id": "phoenix-7448bc59-27", className: "text-2xl font-bold text-foreground", children: [
                filteredImages.length, " ", filteredImages.length === 1 ? 'Photo' : 'Photos', " Found"] }
              ), /*#__PURE__*/
              _jsx("p", { "data-phoenix-id": "phoenix-7448bc59-28", className: "text-muted-foreground mt-1", children:
                selectedCategory !== 'all' ?
                `Showing ${categories.find((c) => c.id === selectedCategory)?.name.toLowerCase()}` :
                'Showing all photos' }

              )] }
            ) }
          ),

          filteredImages.length === 0 ? /*#__PURE__*/
          _jsx(Card, { "data-phoenix-id": "phoenix-7448bc59-29", className: "text-center py-12", children: /*#__PURE__*/
            _jsxs(CardContent, { "data-phoenix-id": "phoenix-7448bc59-30", className: "space-y-4", children: [/*#__PURE__*/
              _jsx("div", { "data-phoenix-id": "phoenix-7448bc59-31", className: "text-6xl", children: "\uD83D\uDC04" }), /*#__PURE__*/
              _jsx("h3", { "data-phoenix-id": "phoenix-7448bc59-32", className: "text-xl font-semibold", children: "No photos found" }), /*#__PURE__*/
              _jsx("p", { "data-phoenix-id": "phoenix-7448bc59-33", className: "text-muted-foreground", children: "Try adjusting your search criteria or clearing filters." }

              ), /*#__PURE__*/
              _jsx(Button, { "data-phoenix-id": "phoenix-7448bc59-34", onClick: clearFilters, children: "Clear All Filters" })] }
            ) }
          ) : /*#__PURE__*/

          _jsx("div", { "data-phoenix-id": "phoenix-7448bc59-35", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children:
            filteredImages.map((image) => /*#__PURE__*/
            _jsxs(Card, { "data-phoenix-id": "phoenix-7448bc59-36", className: "group cow-card overflow-hidden", children: [/*#__PURE__*/
              _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-37", className: "relative aspect-square overflow-hidden", children: [/*#__PURE__*/
                _jsx("img", { "data-phoenix-id": "phoenix-7448bc59-38",
                  src: image.src,
                  alt: image.title,
                  className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" }
                ), /*#__PURE__*/
                _jsx("div", { "data-phoenix-id": "phoenix-7448bc59-39", className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", children: /*#__PURE__*/
                  _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-40", className: "flex gap-2", children: [/*#__PURE__*/
                    _jsx(Button, { "data-phoenix-id": "phoenix-7448bc59-41",
                      size: "icon",
                      variant: "secondary",
                      onClick: () => handleLike(image.id),
                      className: "hover:bg-red-100 hover:text-red-600", children: /*#__PURE__*/

                      _jsx(Heart, { "data-phoenix-id": "phoenix-7448bc59-42",
                        className: `w-4 h-4 ${likedImages.has(image.id) ? 'fill-red-500 text-red-500' : ''}` }
                      ) }
                    ), /*#__PURE__*/
                    _jsx(Button, { "data-phoenix-id": "phoenix-7448bc59-43", size: "icon", variant: "secondary", children: /*#__PURE__*/
                      _jsx(Share2, { "data-phoenix-id": "phoenix-7448bc59-44", className: "w-4 h-4" }) }
                    ), /*#__PURE__*/
                    _jsx(Button, { "data-phoenix-id": "phoenix-7448bc59-45", size: "icon", variant: "secondary", children: /*#__PURE__*/
                      _jsx(Download, { "data-phoenix-id": "phoenix-7448bc59-46", className: "w-4 h-4" }) }
                    )] }
                  ) }
                )] }
              ), /*#__PURE__*/
              _jsx(CardContent, { "data-phoenix-id": "phoenix-7448bc59-47", className: "p-4", children: /*#__PURE__*/
                _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-48", className: "space-y-2", children: [/*#__PURE__*/
                  _jsx("h3", { "data-phoenix-id": "phoenix-7448bc59-49", className: "font-semibold text-lg leading-tight", children: image.title }), /*#__PURE__*/
                  _jsx("p", { "data-phoenix-id": "phoenix-7448bc59-50", className: "text-sm text-muted-foreground line-clamp-2", children:
                    image.description }
                  ), /*#__PURE__*/
                  _jsx("div", { "data-phoenix-id": "phoenix-7448bc59-51", className: "flex flex-wrap gap-1", children:
                    image.tags.slice(0, 3).map((tag) => /*#__PURE__*/
                    _jsx(Badge, { "data-phoenix-id": "phoenix-7448bc59-52", variant: "outline", className: "text-xs", children:
                      tag }, tag
                    )
                    ) }
                  ), /*#__PURE__*/
                  _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-53", className: "flex items-center justify-between pt-2 text-sm text-muted-foreground", children: [/*#__PURE__*/
                    _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-54", className: "flex items-center gap-3", children: [/*#__PURE__*/
                      _jsxs("span", { "data-phoenix-id": "phoenix-7448bc59-55", className: "flex items-center gap-1", children: [/*#__PURE__*/
                        _jsx(Heart, { "data-phoenix-id": "phoenix-7448bc59-56", className: "w-3 h-3" }),
                        image.likes + (likedImages.has(image.id) ? 1 : 0)] }
                      ), /*#__PURE__*/
                      _jsxs("span", { "data-phoenix-id": "phoenix-7448bc59-57", className: "flex items-center gap-1", children: [/*#__PURE__*/
                        _jsx(Eye, { "data-phoenix-id": "phoenix-7448bc59-58", className: "w-3 h-3" }),
                        image.views] }
                      )] }
                    ), /*#__PURE__*/
                    _jsxs("span", { "data-phoenix-id": "phoenix-7448bc59-59", className: "text-xs", children: ["by ", image.photographer] })] }
                  )] }
                ) }
              )] }, image.id
            )
            ) }
          )] }

        ) }
      ), /*#__PURE__*/


      _jsx("section", { "data-phoenix-id": "phoenix-7448bc59-60", className: "py-12 bg-muted/30", children: /*#__PURE__*/
        _jsxs("div", { "data-phoenix-id": "phoenix-7448bc59-61", className: "container mx-auto px-4 lg:px-8", children: [/*#__PURE__*/
          _jsx("h2", { "data-phoenix-id": "phoenix-7448bc59-62", className: "text-2xl font-bold text-center mb-8", children: "Gallery Statistics" }), /*#__PURE__*/
          _jsx("div", { "data-phoenix-id": "phoenix-7448bc59-63", className: "grid grid-cols-2 lg:grid-cols-4 gap-6", children:
            categories.slice(1).map((category) => /*#__PURE__*/
            _jsx(Card, { "data-phoenix-id": "phoenix-7448bc59-64",

              className: `text-center cursor-pointer transition-all hover:shadow-lg ${
              selectedCategory === category.id ? 'ring-2 ring-accent' : ''}`,

              onClick: () => setSelectedCategory(category.id), children: /*#__PURE__*/

              _jsxs(CardContent, { "data-phoenix-id": "phoenix-7448bc59-65", className: "p-6", children: [/*#__PURE__*/
                _jsx("div", { "data-phoenix-id": "phoenix-7448bc59-66", className: "text-3xl font-bold text-accent mb-2", children:
                  category.count }
                ), /*#__PURE__*/
                _jsx("div", { "data-phoenix-id": "phoenix-7448bc59-67", className: "font-medium", children: category.name }), /*#__PURE__*/
                _jsx("div", { "data-phoenix-id": "phoenix-7448bc59-68", className: "text-sm text-muted-foreground", children: "photos available" })] }
              ) }, category.id
            )
            ) }
          )] }
        ) }
      )] }
    ));

}
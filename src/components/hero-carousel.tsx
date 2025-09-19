'use client';
import React from 'react';

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const heroSlides = [
{
  id: 1,
  image: '/generated/highland-cow-hero.jpg',
  title: 'Highland Cattle',
  subtitle: 'Scotland\'s Hardy Highland Warriors',
  description: 'Discover the majestic Highland cattle with their flowing coats and impressive horns, perfectly adapted to harsh Scottish climates.',
  cta: 'Learn More',
  link: '/breeds/highland'
},
{
  id: 2,
  image: '/generated/holstein-cow-hero.jpg',
  title: 'Holstein Dairy',
  subtitle: 'World\'s Premier Milk Producers',
  description: 'Meet the Holstein breed, renowned globally for exceptional milk production and distinctive black and white markings.',
  cta: 'Explore Breeds',
  link: '/breeds/holstein'
},
{
  id: 3,
  image: '/generated/jersey-cow-hero.jpg',
  title: 'Jersey Excellence',
  subtitle: 'Rich, Golden Milk Perfection',
  description: 'Experience the Jersey breed, small in size but mighty in producing the richest, creamiest milk of all dairy breeds.',
  cta: 'Discover More',
  link: '/breeds/jersey'
}];


export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();

    let autoplayInterval;

    if (isPlaying) {
      autoplayInterval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
    }

    return () => {
      if (autoplayInterval) clearInterval(autoplayInterval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect, isPlaying]);

  return (/*#__PURE__*/
    React.createElement("div", { className: "relative w-full h-[70vh] min-h-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-green-50", "data-phoenix-id": "phoenix-7448bc59-1" }, /*#__PURE__*/
    React.createElement("div", { className: "embla h-full", ref: emblaRef, "data-phoenix-id": "phoenix-7448bc59-2" }, /*#__PURE__*/
    React.createElement("div", { className: "embla__container flex h-full", "data-phoenix-id": "phoenix-7448bc59-3" },
    heroSlides.map((slide) => /*#__PURE__*/
    React.createElement("div", { key: slide.id, className: "embla__slide relative min-w-0 flex-[0_0_100%] h-full", "data-phoenix-id": "phoenix-7448bc59-4" }, /*#__PURE__*/
    React.createElement("div", { className: "relative w-full h-full", "data-phoenix-id": "phoenix-7448bc59-5" }, /*#__PURE__*/
    React.createElement(Image, {
      src: slide.image,
      alt: slide.title,
      fill: true,
      className: "object-cover",
      priority: slide.id === 1, "data-phoenix-id": "phoenix-7448bc59-6" }
    ), /*#__PURE__*/


    React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent", "data-phoenix-id": "phoenix-7448bc59-7" }), /*#__PURE__*/


    React.createElement("div", { className: "absolute inset-0 flex items-center", "data-phoenix-id": "phoenix-7448bc59-8" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-9" }, /*#__PURE__*/
    React.createElement("div", { className: "max-w-2xl text-white animate-fade-in-up", "data-phoenix-id": "phoenix-7448bc59-10" }, /*#__PURE__*/
    React.createElement("div", { className: "mb-4", "data-phoenix-id": "phoenix-7448bc59-11" }, /*#__PURE__*/
    React.createElement("span", { className: "inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4", "data-phoenix-id": "phoenix-7448bc59-12" },
    slide.subtitle
    )
    ), /*#__PURE__*/
    React.createElement("h1", { className: "text-5xl lg:text-7xl font-bold mb-6 leading-tight", "data-phoenix-id": "phoenix-7448bc59-13" },
    slide.title
    ), /*#__PURE__*/
    React.createElement("p", { className: "text-xl lg:text-2xl mb-8 leading-relaxed opacity-90", "data-phoenix-id": "phoenix-7448bc59-14" },
    slide.description
    ), /*#__PURE__*/
    React.createElement("div", { className: "flex flex-col sm:flex-row gap-4", "data-phoenix-id": "phoenix-7448bc59-15" }, /*#__PURE__*/
    React.createElement(Button, {
      size: "lg",
      className: "bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg",
      asChild: true, "data-phoenix-id": "phoenix-7448bc59-16" }, /*#__PURE__*/

    React.createElement(Link, { href: slide.link, "data-phoenix-id": "phoenix-7448bc59-17" },
    slide.cta
    )
    ), /*#__PURE__*/
    React.createElement(Button, {
      variant: "outline",
      size: "lg",
      className: "border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg",
      asChild: true, "data-phoenix-id": "phoenix-7448bc59-18" }, /*#__PURE__*/

    React.createElement(Link, { href: "/breeds", "data-phoenix-id": "phoenix-7448bc59-19" }, "View All Breeds"

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
    ), /*#__PURE__*/


    React.createElement(Button, {
      variant: "outline",
      size: "icon",
      className: "absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all z-10",
      onClick: scrollPrev,
      "aria-label": "Previous slide", "data-phoenix-id": "phoenix-7448bc59-20" }, /*#__PURE__*/

    React.createElement(ChevronLeft, { className: "h-6 w-6", "data-phoenix-id": "phoenix-7448bc59-21" })
    ), /*#__PURE__*/

    React.createElement(Button, {
      variant: "outline",
      size: "icon",
      className: "absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all z-10",
      onClick: scrollNext,
      "aria-label": "Next slide", "data-phoenix-id": "phoenix-7448bc59-22" }, /*#__PURE__*/

    React.createElement(ChevronRight, { className: "h-6 w-6", "data-phoenix-id": "phoenix-7448bc59-23" })
    ), /*#__PURE__*/


    React.createElement(Button, {
      variant: "outline",
      size: "icon",
      className: "absolute top-4 right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all z-10",
      onClick: () => setIsPlaying(!isPlaying),
      "aria-label": isPlaying ? 'Pause slideshow' : 'Play slideshow', "data-phoenix-id": "phoenix-7448bc59-24" }, /*#__PURE__*/

    React.createElement(Play, { className: `h-4 w-4 ${isPlaying ? 'opacity-100' : 'opacity-50'}`, "data-phoenix-id": "phoenix-7448bc59-25" })
    ), /*#__PURE__*/


    React.createElement("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10", "data-phoenix-id": "phoenix-7448bc59-26" },
    heroSlides.map((_, index) => /*#__PURE__*/
    React.createElement("button", {
      key: index,
      className: `w-3 h-3 rounded-full transition-all ${
      index === selectedIndex ?
      'bg-white scale-110' :
      'bg-white/50 hover:bg-white/75'}`,

      onClick: () => emblaApi?.scrollTo(index),
      "aria-label": `Go to slide ${index + 1}`, "data-phoenix-id": "phoenix-7448bc59-27" }
    )
    )
    )
    ));

}
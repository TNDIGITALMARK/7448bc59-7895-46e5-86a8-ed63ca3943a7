import React from 'react';
import { HeroCarousel } from '@/components/hero-carousel';
import { BreedCard } from '@/components/breed-card';
import { cowBreeds } from '@/lib/data/breeds';
import { cowStatistics } from '@/lib/data/cow-facts';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, Award, Globe } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const featuredBreeds = cowBreeds.slice(0, 3);
  const topStats = cowStatistics.slice(0, 4);

  return (/*#__PURE__*/
    React.createElement("div", { className: "min-h-screen", "data-phoenix-id": "phoenix-7448bc59-1" }, /*#__PURE__*/

    React.createElement("section", { className: "container mx-auto px-4 lg:px-8 py-8", "data-phoenix-id": "phoenix-7448bc59-2" }, /*#__PURE__*/
    React.createElement(HeroCarousel, { "data-phoenix-id": "phoenix-7448bc59-3" })
    ), /*#__PURE__*/


    React.createElement("section", { className: "py-16 bg-gradient-to-b from-amber-50 to-white", "data-phoenix-id": "phoenix-7448bc59-4" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8 text-center", "data-phoenix-id": "phoenix-7448bc59-5" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6", "data-phoenix-id": "phoenix-7448bc59-6" }, "Discover the World of ", /*#__PURE__*/
    React.createElement("span", { className: "text-green-600", "data-phoenix-id": "phoenix-7448bc59-7" }, "Cattle")
    ), /*#__PURE__*/
    React.createElement("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed", "data-phoenix-id": "phoenix-7448bc59-8" }, "Welcome to Pasture Perfect, your comprehensive guide to cattle breeds worldwide. Explore fascinating facts, learn about different breeds, and discover the amazing world of these magnificent animals."


    ), /*#__PURE__*/


    React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12", "data-phoenix-id": "phoenix-7448bc59-9" },
    topStats.map((stat, index) => /*#__PURE__*/
    React.createElement(Card, { key: stat.id, className: "cow-card text-center", "data-phoenix-id": "phoenix-7448bc59-10" }, /*#__PURE__*/
    React.createElement(CardContent, { className: "p-6", "data-phoenix-id": "phoenix-7448bc59-11" }, /*#__PURE__*/
    React.createElement("div", { className: "text-3xl mb-2", "data-phoenix-id": "phoenix-7448bc59-12" }, stat.icon), /*#__PURE__*/
    React.createElement("div", { className: "stat-counter text-3xl lg:text-4xl font-bold mb-2", style: { color: stat.color }, "data-phoenix-id": "phoenix-7448bc59-13" },
    stat.value.toLocaleString()
    ), /*#__PURE__*/
    React.createElement("div", { className: "text-sm text-gray-500 mb-1", "data-phoenix-id": "phoenix-7448bc59-14" }, stat.unit), /*#__PURE__*/
    React.createElement("div", { className: "text-sm font-medium text-gray-700", "data-phoenix-id": "phoenix-7448bc59-15" }, stat.label)
    )
    )
    )
    ), /*#__PURE__*/

    React.createElement("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", "data-phoenix-id": "phoenix-7448bc59-16" }, /*#__PURE__*/
    React.createElement(Button, { size: "lg", asChild: true, className: "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4", "data-phoenix-id": "phoenix-7448bc59-17" }, /*#__PURE__*/
    React.createElement(Link, { href: "/breeds", "data-phoenix-id": "phoenix-7448bc59-18" }, "Explore Breeds ", /*#__PURE__*/
    React.createElement(ArrowRight, { className: "ml-2 h-5 w-5", "data-phoenix-id": "phoenix-7448bc59-19" })
    )
    ), /*#__PURE__*/
    React.createElement(Button, { size: "lg", variant: "outline", asChild: true, className: "px-8 py-4", "data-phoenix-id": "phoenix-7448bc59-20" }, /*#__PURE__*/
    React.createElement(Link, { href: "/facts", "data-phoenix-id": "phoenix-7448bc59-21" }, "Amazing Facts"

    )
    )
    )
    )
    ), /*#__PURE__*/


    React.createElement("section", { className: "py-16", "data-phoenix-id": "phoenix-7448bc59-22" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-23" }, /*#__PURE__*/
    React.createElement("div", { className: "text-center mb-12", "data-phoenix-id": "phoenix-7448bc59-24" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4", "data-phoenix-id": "phoenix-7448bc59-25" }, "Featured Breeds"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", "data-phoenix-id": "phoenix-7448bc59-26" }, "Discover some of the most popular and distinctive cattle breeds from around the world."

    )
    ), /*#__PURE__*/

    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12", "data-phoenix-id": "phoenix-7448bc59-27" },
    featuredBreeds.map((breed) => /*#__PURE__*/
    React.createElement(BreedCard, { key: breed.id, breed: breed, "data-phoenix-id": "phoenix-7448bc59-28" })
    )
    ), /*#__PURE__*/

    React.createElement("div", { className: "text-center", "data-phoenix-id": "phoenix-7448bc59-29" }, /*#__PURE__*/
    React.createElement(Button, { size: "lg", variant: "outline", asChild: true, "data-phoenix-id": "phoenix-7448bc59-30" }, /*#__PURE__*/
    React.createElement(Link, { href: "/breeds", "data-phoenix-id": "phoenix-7448bc59-31" }, "View All Breeds ", /*#__PURE__*/
    React.createElement(ArrowRight, { className: "ml-2 h-5 w-5", "data-phoenix-id": "phoenix-7448bc59-32" })
    )
    )
    )
    )
    ), /*#__PURE__*/


    React.createElement("section", { className: "py-16 bg-gradient-to-b from-white to-amber-50", "data-phoenix-id": "phoenix-7448bc59-33" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-34" }, /*#__PURE__*/
    React.createElement("div", { className: "text-center mb-12", "data-phoenix-id": "phoenix-7448bc59-35" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4", "data-phoenix-id": "phoenix-7448bc59-36" }, "Why Choose Pasture Perfect?"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", "data-phoenix-id": "phoenix-7448bc59-37" }, "Your ultimate resource for cattle breed information, facts, and education."

    )
    ), /*#__PURE__*/

    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", "data-phoenix-id": "phoenix-7448bc59-38" }, /*#__PURE__*/
    React.createElement("div", { className: "text-center", "data-phoenix-id": "phoenix-7448bc59-39" }, /*#__PURE__*/
    React.createElement("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4", "data-phoenix-id": "phoenix-7448bc59-40" }, /*#__PURE__*/
    React.createElement(Globe, { className: "w-8 h-8 text-green-600", "data-phoenix-id": "phoenix-7448bc59-41" })
    ), /*#__PURE__*/
    React.createElement("h3", { className: "text-xl font-semibold text-gray-900 mb-2", "data-phoenix-id": "phoenix-7448bc59-42" }, "Global Coverage"), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600", "data-phoenix-id": "phoenix-7448bc59-43" }, "Comprehensive information on cattle breeds from every continent."

    )
    ), /*#__PURE__*/

    React.createElement("div", { className: "text-center", "data-phoenix-id": "phoenix-7448bc59-44" }, /*#__PURE__*/
    React.createElement("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4", "data-phoenix-id": "phoenix-7448bc59-45" }, /*#__PURE__*/
    React.createElement(Award, { className: "w-8 h-8 text-blue-600", "data-phoenix-id": "phoenix-7448bc59-46" })
    ), /*#__PURE__*/
    React.createElement("h3", { className: "text-xl font-semibold text-gray-900 mb-2", "data-phoenix-id": "phoenix-7448bc59-47" }, "Expert Content"), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600", "data-phoenix-id": "phoenix-7448bc59-48" }, "Carefully researched and verified information by cattle experts."

    )
    ), /*#__PURE__*/

    React.createElement("div", { className: "text-center", "data-phoenix-id": "phoenix-7448bc59-49" }, /*#__PURE__*/
    React.createElement("div", { className: "w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4", "data-phoenix-id": "phoenix-7448bc59-50" }, /*#__PURE__*/
    React.createElement(TrendingUp, { className: "w-8 h-8 text-purple-600", "data-phoenix-id": "phoenix-7448bc59-51" })
    ), /*#__PURE__*/
    React.createElement("h3", { className: "text-xl font-semibold text-gray-900 mb-2", "data-phoenix-id": "phoenix-7448bc59-52" }, "Interactive Tools"), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600", "data-phoenix-id": "phoenix-7448bc59-53" }, "Compare breeds, take quizzes, and explore interactive features."

    )
    ), /*#__PURE__*/

    React.createElement("div", { className: "text-center", "data-phoenix-id": "phoenix-7448bc59-54" }, /*#__PURE__*/
    React.createElement("div", { className: "w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4", "data-phoenix-id": "phoenix-7448bc59-55" }, /*#__PURE__*/
    React.createElement(Users, { className: "w-8 h-8 text-amber-600", "data-phoenix-id": "phoenix-7448bc59-56" })
    ), /*#__PURE__*/
    React.createElement("h3", { className: "text-xl font-semibold text-gray-900 mb-2", "data-phoenix-id": "phoenix-7448bc59-57" }, "Community"), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600", "data-phoenix-id": "phoenix-7448bc59-58" }, "Join a community of farmers, researchers, and cattle enthusiasts."

    )
    )
    )
    )
    ), /*#__PURE__*/


    React.createElement("section", { className: "py-16 bg-gradient-to-r from-green-600 to-green-700", "data-phoenix-id": "phoenix-7448bc59-59" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8 text-center", "data-phoenix-id": "phoenix-7448bc59-60" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-3xl lg:text-4xl font-bold text-white mb-6", "data-phoenix-id": "phoenix-7448bc59-61" }, "Ready to Explore the World of Cattle?"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-xl text-green-100 max-w-2xl mx-auto mb-8", "data-phoenix-id": "phoenix-7448bc59-62" }, "Start your journey into the fascinating world of cattle breeds, facts, and farming knowledge."

    ), /*#__PURE__*/
    React.createElement("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", "data-phoenix-id": "phoenix-7448bc59-63" }, /*#__PURE__*/
    React.createElement(Button, { size: "lg", className: "bg-white text-green-700 hover:bg-gray-100 px-8 py-4", "data-phoenix-id": "phoenix-7448bc59-64" }, /*#__PURE__*/
    React.createElement(Link, { href: "/breeds", "data-phoenix-id": "phoenix-7448bc59-65" }, "Start Exploring")
    ), /*#__PURE__*/
    React.createElement(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white hover:text-green-700 px-8 py-4", "data-phoenix-id": "phoenix-7448bc59-66" }, /*#__PURE__*/
    React.createElement(Link, { href: "/facts", "data-phoenix-id": "phoenix-7448bc59-67" }, "Learn Facts")
    )
    )
    )
    )
    ));

}
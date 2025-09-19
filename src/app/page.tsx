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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-8">
        <HeroCarousel />
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Discover the World of <span className="text-green-600">Cattle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Welcome to Pasture Perfect, your comprehensive guide to cattle breeds worldwide.
            Explore fascinating facts, learn about different breeds, and discover the amazing world of these magnificent animals.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {topStats.map((stat, index) => (
              <Card key={stat.id} className="cow-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="stat-counter text-3xl lg:text-4xl font-bold mb-2" style={{ color: stat.color }}>
                    {stat.value.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{stat.unit}</div>
                  <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4">
              <Link href="/breeds">
                Explore Breeds <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 py-4">
              <Link href="/facts">
                Amazing Facts
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Breeds */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Breeds
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover some of the most popular and distinctive cattle breeds from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredBreeds.map((breed) => (
              <BreedCard key={breed.id} breed={breed} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/breeds">
                View All Breeds <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pasture Perfect?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your ultimate resource for cattle breed information, facts, and education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Coverage</h3>
              <p className="text-gray-600">
                Comprehensive information on cattle breeds from every continent.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Content</h3>
              <p className="text-gray-600">
                Carefully researched and verified information by cattle experts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Tools</h3>
              <p className="text-gray-600">
                Compare breeds, take quizzes, and explore interactive features.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                Join a community of farmers, researchers, and cattle enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Explore the World of Cattle?
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Start your journey into the fascinating world of cattle breeds, facts, and farming knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4">
              <Link href="/breeds">Start Exploring</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-4">
              <Link href="/facts">Learn Facts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
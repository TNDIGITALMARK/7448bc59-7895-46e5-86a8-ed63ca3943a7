'use client';

import { useState, useEffect } from 'react';
import { cowFacts, cowStatistics, quizQuestions, factCategories, type CowFact } from '@/lib/data/cow-facts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  TrendingUp,
  Brain,
  Trophy,
  Share,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  XCircle,
  Lightbulb
} from 'lucide-react';

interface QuizState {
  currentQuestion: number;
  answers: (number | null)[];
  showResults: boolean;
  score: number;
}

export default function FactsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [animateCounters, setAnimateCounters] = useState(false);
  const [quiz, setQuiz] = useState<QuizState>({
    currentQuestion: 0,
    answers: new Array(quizQuestions.length).fill(null),
    showResults: false,
    score: 0
  });

  const filteredFacts = selectedCategory === 'all'
    ? cowFacts
    : cowFacts.filter(fact => fact.category === selectedCategory);

  useEffect(() => {
    setAnimateCounters(true);
  }, []);

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...quiz.answers];
    newAnswers[quiz.currentQuestion] = answerIndex;

    if (quiz.currentQuestion === quizQuestions.length - 1) {
      // Calculate final score
      const score = newAnswers.reduce((total, answer, index) => {
        return answer === quizQuestions[index].correctAnswer ? total + 1 : total;
      }, 0);

      setQuiz({
        ...quiz,
        answers: newAnswers,
        showResults: true,
        score
      });
    } else {
      setQuiz({
        ...quiz,
        answers: newAnswers,
        currentQuestion: quiz.currentQuestion + 1
      });
    }
  };

  const resetQuiz = () => {
    setQuiz({
      currentQuestion: 0,
      answers: new Array(quizQuestions.length).fill(null),
      showResults: false,
      score: 0
    });
  };

  const goToPreviousQuestion = () => {
    if (quiz.currentQuestion > 0) {
      setQuiz(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  const nextFact = () => {
    setCurrentFactIndex((prev) => (prev + 1) % filteredFacts.length);
  };

  const previousFact = () => {
    setCurrentFactIndex((prev) => (prev - 1 + filteredFacts.length) % filteredFacts.length);
  };

  const shareCurrentFact = () => {
    const fact = filteredFacts[currentFactIndex];
    if (navigator.share) {
      navigator.share({
        title: `Cow Fact: ${fact.title}`,
        text: fact.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${fact.title}: ${fact.description}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Amazing Cow Facts
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Discover fascinating facts about cows, test your knowledge with interactive quizzes,
            and explore amazing statistics about these incredible animals.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Incredible Cattle Statistics
            </h2>
            <p className="text-lg text-gray-600">
              Mind-blowing numbers about our bovine friends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cowStatistics.map((stat, index) => (
              <Card key={stat.id} className="cow-card text-center">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div
                    className={`stat-counter text-4xl lg:text-5xl font-bold mb-4 ${
                      animateCounters ? 'animate-count-up' : ''
                    }`}
                    style={{ color: stat.color, animationDelay: `${index * 200}ms` }}
                  >
                    {stat.value.toLocaleString()}
                  </div>
                  <div className="text-lg font-medium text-gray-600 mb-2">
                    {stat.unit}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-3">
                    {stat.label}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue="facts" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="facts" className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                Cow Facts
              </TabsTrigger>
              <TabsTrigger value="quiz" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Knowledge Quiz
              </TabsTrigger>
            </TabsList>

            {/* Facts Tab */}
            <TabsContent value="facts">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Category Filter */}
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {factCategories.map((category) => (
                          <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? "default" : "ghost"}
                            className="w-full justify-start"
                            onClick={() => {
                              setSelectedCategory(category.id);
                              setCurrentFactIndex(0);
                            }}
                          >
                            <span className="mr-2">{category.icon}</span>
                            {category.name}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Current Fact Display */}
                <div className="lg:col-span-2">
                  {filteredFacts.length > 0 && (
                    <Card className="cow-card">
                      <CardHeader className="text-center">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">
                            {factCategories.find(c => c.id === filteredFacts[currentFactIndex]?.category)?.name}
                          </Badge>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost" onClick={shareCurrentFact}>
                              <Share className="w-4 h-4" />
                            </Button>
                            <span className="text-sm text-gray-500">
                              {currentFactIndex + 1} of {filteredFacts.length}
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl lg:text-3xl">
                          {filteredFacts[currentFactIndex]?.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-6xl mb-6">
                          {filteredFacts[currentFactIndex]?.icon}
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                          {filteredFacts[currentFactIndex]?.description}
                        </p>

                        {filteredFacts[currentFactIndex]?.statValue && (
                          <div className="bg-green-50 rounded-lg p-6 mb-6">
                            <div className="text-4xl font-bold text-green-600 mb-2">
                              {filteredFacts[currentFactIndex].statValue}
                            </div>
                            <div className="text-green-700 font-medium">
                              {filteredFacts[currentFactIndex].statUnit}
                            </div>
                          </div>
                        )}

                        <div className="flex justify-between items-center">
                          <Button variant="outline" onClick={previousFact}>
                            <ChevronLeft className="w-4 h-4 mr-2" />
                            Previous
                          </Button>
                          <Button onClick={nextFact}>
                            Next
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Quiz Tab */}
            <TabsContent value="quiz">
              <div className="max-w-4xl mx-auto">
                {!quiz.showResults ? (
                  <Card className="cow-card">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-4">
                        <Badge variant="secondary">
                          Question {quiz.currentQuestion + 1} of {quizQuestions.length}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={goToPreviousQuestion}
                          disabled={quiz.currentQuestion === 0}
                        >
                          <ChevronLeft className="w-4 h-4 mr-2" />
                          Previous
                        </Button>
                      </div>
                      <Progress
                        value={(quiz.currentQuestion / quizQuestions.length) * 100}
                        className="mb-4"
                      />
                      <CardTitle className="text-2xl lg:text-3xl">
                        {quizQuestions[quiz.currentQuestion]?.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {quizQuestions[quiz.currentQuestion]?.options.map((option, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="h-auto p-6 text-left justify-start hover:bg-green-50"
                            onClick={() => handleQuizAnswer(index)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-semibold">
                                {String.fromCharCode(65 + index)}
                              </div>
                              {option}
                            </div>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="cow-card text-center">
                    <CardHeader>
                      <div className="text-6xl mb-4">
                        {quiz.score >= quizQuestions.length * 0.8 ? '🏆' : quiz.score >= quizQuestions.length * 0.6 ? '🎉' : '📚'}
                      </div>
                      <CardTitle className="text-3xl">
                        {quiz.score >= quizQuestions.length * 0.8
                          ? 'Excellent! You\'re a cow expert!'
                          : quiz.score >= quizQuestions.length * 0.6
                          ? 'Good job! You know your cows!'
                          : 'Keep learning about these amazing animals!'
                        }
                      </CardTitle>
                      <div className="text-2xl font-bold text-green-600 mt-4">
                        {quiz.score} out of {quizQuestions.length} correct
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mb-8">
                        {quizQuestions.map((question, index) => (
                          <div
                            key={index}
                            className={`p-4 rounded-lg border-2 ${
                              quiz.answers[index] === question.correctAnswer
                                ? 'border-green-200 bg-green-50'
                                : 'border-red-200 bg-red-50'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0">
                                {quiz.answers[index] === question.correctAnswer ? (
                                  <CheckCircle className="w-6 h-6 text-green-600" />
                                ) : (
                                  <XCircle className="w-6 h-6 text-red-600" />
                                )}
                              </div>
                              <div className="text-left">
                                <div className="font-semibold mb-2">
                                  Q{index + 1}: {question.question}
                                </div>
                                <div className="text-sm text-gray-600">
                                  <strong>Correct Answer:</strong> {question.options[question.correctAnswer]}
                                </div>
                                <div className="text-sm text-gray-700 mt-1">
                                  {question.explanation}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button onClick={resetQuiz} size="lg">
                        <RotateCcw className="w-5 h-5 mr-2" />
                        Take Quiz Again
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
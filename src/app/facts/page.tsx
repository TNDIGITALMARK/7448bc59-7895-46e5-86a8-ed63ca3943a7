'use client';

import React, { useState, useEffect } from 'react';
import { cowFacts, cowStatistics, quizQuestions, factCategories } from '@/lib/data/cow-facts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Brain,
  Share,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  XCircle,
  Lightbulb } from
'lucide-react';

export default function FactsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [animateCounters, setAnimateCounters] = useState(false);
  const [quiz, setQuiz] = useState({
    currentQuestion: 0,
    answers: new Array(quizQuestions.length).fill(null),
    showResults: false,
    score: 0
  });

  const filteredFacts = selectedCategory === 'all' ?
  cowFacts :
  cowFacts.filter((fact) => fact.category === selectedCategory);

  useEffect(() => {
    setAnimateCounters(true);
  }, []);

  const handleQuizAnswer = (answerIndex) => {
    const newAnswers = [...quiz.answers];
    newAnswers[quiz.currentQuestion] = answerIndex;

    if (quiz.currentQuestion === quizQuestions.length - 1) {
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
      setQuiz((prev) => ({
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

  return (/*#__PURE__*/
    React.createElement("div", { className: "min-h-screen bg-gradient-to-b from-white to-amber-50", "data-phoenix-id": "phoenix-7448bc59-1" }, /*#__PURE__*/
    React.createElement("section", { className: "py-16 bg-gradient-to-r from-amber-600 to-amber-700", "data-phoenix-id": "phoenix-7448bc59-2" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8 text-center", "data-phoenix-id": "phoenix-7448bc59-3" }, /*#__PURE__*/
    React.createElement("h1", { className: "text-4xl lg:text-6xl font-bold text-white mb-6", "data-phoenix-id": "phoenix-7448bc59-4" }, "Amazing Cow Facts"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed", "data-phoenix-id": "phoenix-7448bc59-5" }, "Discover fascinating facts about cows, test your knowledge with interactive quizzes, and explore amazing statistics about these incredible animals."

    )
    )
    ), /*#__PURE__*/

    React.createElement("section", { className: "py-12 bg-white", "data-phoenix-id": "phoenix-7448bc59-6" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-7" }, /*#__PURE__*/
    React.createElement("div", { className: "text-center mb-12", "data-phoenix-id": "phoenix-7448bc59-8" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-3xl font-bold text-gray-900 mb-4", "data-phoenix-id": "phoenix-7448bc59-9" }, "Incredible Cattle Statistics"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-lg text-gray-600", "data-phoenix-id": "phoenix-7448bc59-10" }, "Mind-blowing numbers about our bovine friends"

    )
    ), /*#__PURE__*/

    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", "data-phoenix-id": "phoenix-7448bc59-11" },
    cowStatistics.map((stat, index) => /*#__PURE__*/
    React.createElement(Card, { key: stat.id, className: "cow-card text-center", "data-phoenix-id": "phoenix-7448bc59-12" }, /*#__PURE__*/
    React.createElement(CardContent, { className: "p-8", "data-phoenix-id": "phoenix-7448bc59-13" }, /*#__PURE__*/
    React.createElement("div", { className: "text-5xl mb-4", "data-phoenix-id": "phoenix-7448bc59-14" }, stat.icon), /*#__PURE__*/
    React.createElement("div", {
      className: `stat-counter text-4xl lg:text-5xl font-bold mb-4 ${
      animateCounters ? 'animate-count-up' : ''}`,

      style: { color: stat.color, animationDelay: `${index * 200}ms` }, "data-phoenix-id": "phoenix-7448bc59-15" },

    stat.value.toLocaleString()
    ), /*#__PURE__*/
    React.createElement("div", { className: "text-lg font-medium text-gray-600 mb-2", "data-phoenix-id": "phoenix-7448bc59-16" },
    stat.unit
    ), /*#__PURE__*/
    React.createElement("div", { className: "text-xl font-semibold text-gray-900 mb-3", "data-phoenix-id": "phoenix-7448bc59-17" },
    stat.label
    ), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600 text-sm", "data-phoenix-id": "phoenix-7448bc59-18" },
    stat.description
    )
    )
    )
    )
    )
    )
    ), /*#__PURE__*/

    React.createElement("section", { className: "py-12", "data-phoenix-id": "phoenix-7448bc59-19" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-20" }, /*#__PURE__*/
    React.createElement(Tabs, { defaultValue: "facts", className: "w-full", "data-phoenix-id": "phoenix-7448bc59-21" }, /*#__PURE__*/
    React.createElement(TabsList, { className: "grid w-full grid-cols-2 mb-8", "data-phoenix-id": "phoenix-7448bc59-22" }, /*#__PURE__*/
    React.createElement(TabsTrigger, { value: "facts", className: "flex items-center gap-2", "data-phoenix-id": "phoenix-7448bc59-23" }, /*#__PURE__*/
    React.createElement(Lightbulb, { className: "w-4 h-4", "data-phoenix-id": "phoenix-7448bc59-24" }), "Cow Facts"

    ), /*#__PURE__*/
    React.createElement(TabsTrigger, { value: "quiz", className: "flex items-center gap-2", "data-phoenix-id": "phoenix-7448bc59-25" }, /*#__PURE__*/
    React.createElement(Brain, { className: "w-4 h-4", "data-phoenix-id": "phoenix-7448bc59-26" }), "Knowledge Quiz"

    )
    ), /*#__PURE__*/

    React.createElement(TabsContent, { value: "facts", "data-phoenix-id": "phoenix-7448bc59-27" }, /*#__PURE__*/
    React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", "data-phoenix-id": "phoenix-7448bc59-28" }, /*#__PURE__*/
    React.createElement("div", { className: "lg:col-span-1", "data-phoenix-id": "phoenix-7448bc59-29" }, /*#__PURE__*/
    React.createElement(Card, { "data-phoenix-id": "phoenix-7448bc59-30" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-31" }, /*#__PURE__*/
    React.createElement(CardTitle, { "data-phoenix-id": "phoenix-7448bc59-32" }, "Categories")
    ), /*#__PURE__*/
    React.createElement(CardContent, { "data-phoenix-id": "phoenix-7448bc59-33" }, /*#__PURE__*/
    React.createElement("div", { className: "space-y-2", "data-phoenix-id": "phoenix-7448bc59-34" },
    factCategories.map((category) => /*#__PURE__*/
    React.createElement(Button, {
      key: category.id,
      variant: selectedCategory === category.id ? "default" : "ghost",
      className: "w-full justify-start",
      onClick: () => {
        setSelectedCategory(category.id);
        setCurrentFactIndex(0);
      }, "data-phoenix-id": "phoenix-7448bc59-35" }, /*#__PURE__*/

    React.createElement("span", { className: "mr-2", "data-phoenix-id": "phoenix-7448bc59-36" }, category.icon),
    category.name
    )
    )
    )
    )
    )
    ), /*#__PURE__*/

    React.createElement("div", { className: "lg:col-span-2", "data-phoenix-id": "phoenix-7448bc59-37" },
    filteredFacts.length > 0 && /*#__PURE__*/
    React.createElement(Card, { className: "cow-card", "data-phoenix-id": "phoenix-7448bc59-38" }, /*#__PURE__*/
    React.createElement(CardHeader, { className: "text-center", "data-phoenix-id": "phoenix-7448bc59-39" }, /*#__PURE__*/
    React.createElement("div", { className: "flex items-center justify-between", "data-phoenix-id": "phoenix-7448bc59-40" }, /*#__PURE__*/
    React.createElement(Badge, { variant: "secondary", "data-phoenix-id": "phoenix-7448bc59-41" },
    factCategories.find((c) => c.id === filteredFacts[currentFactIndex]?.category)?.name
    ), /*#__PURE__*/
    React.createElement("div", { className: "flex gap-2", "data-phoenix-id": "phoenix-7448bc59-42" }, /*#__PURE__*/
    React.createElement(Button, { size: "sm", variant: "ghost", onClick: shareCurrentFact, "data-phoenix-id": "phoenix-7448bc59-43" }, /*#__PURE__*/
    React.createElement(Share, { className: "w-4 h-4", "data-phoenix-id": "phoenix-7448bc59-44" })
    ), /*#__PURE__*/
    React.createElement("span", { className: "text-sm text-gray-500", "data-phoenix-id": "phoenix-7448bc59-45" },
    currentFactIndex + 1, " of ", filteredFacts.length
    )
    )
    ), /*#__PURE__*/
    React.createElement(CardTitle, { className: "text-2xl lg:text-3xl", "data-phoenix-id": "phoenix-7448bc59-46" },
    filteredFacts[currentFactIndex]?.title
    )
    ), /*#__PURE__*/
    React.createElement(CardContent, { className: "text-center", "data-phoenix-id": "phoenix-7448bc59-47" }, /*#__PURE__*/
    React.createElement("div", { className: "text-6xl mb-6", "data-phoenix-id": "phoenix-7448bc59-48" },
    filteredFacts[currentFactIndex]?.icon
    ), /*#__PURE__*/
    React.createElement("p", { className: "text-lg text-gray-700 leading-relaxed mb-8", "data-phoenix-id": "phoenix-7448bc59-49" },
    filteredFacts[currentFactIndex]?.description
    ),

    filteredFacts[currentFactIndex]?.statValue && /*#__PURE__*/
    React.createElement("div", { className: "bg-green-50 rounded-lg p-6 mb-6", "data-phoenix-id": "phoenix-7448bc59-50" }, /*#__PURE__*/
    React.createElement("div", { className: "text-4xl font-bold text-green-600 mb-2", "data-phoenix-id": "phoenix-7448bc59-51" },
    filteredFacts[currentFactIndex].statValue
    ), /*#__PURE__*/
    React.createElement("div", { className: "text-green-700 font-medium", "data-phoenix-id": "phoenix-7448bc59-52" },
    filteredFacts[currentFactIndex].statUnit
    )
    ), /*#__PURE__*/


    React.createElement("div", { className: "flex justify-between items-center", "data-phoenix-id": "phoenix-7448bc59-53" }, /*#__PURE__*/
    React.createElement(Button, { variant: "outline", onClick: previousFact, "data-phoenix-id": "phoenix-7448bc59-54" }, /*#__PURE__*/
    React.createElement(ChevronLeft, { className: "w-4 h-4 mr-2", "data-phoenix-id": "phoenix-7448bc59-55" }), "Previous"

    ), /*#__PURE__*/
    React.createElement(Button, { onClick: nextFact, "data-phoenix-id": "phoenix-7448bc59-56" }, "Next", /*#__PURE__*/

    React.createElement(ChevronRight, { className: "w-4 h-4 ml-2", "data-phoenix-id": "phoenix-7448bc59-57" })
    )
    )
    )
    )

    )
    )
    ), /*#__PURE__*/

    React.createElement(TabsContent, { value: "quiz", "data-phoenix-id": "phoenix-7448bc59-58" }, /*#__PURE__*/
    React.createElement("div", { className: "max-w-4xl mx-auto", "data-phoenix-id": "phoenix-7448bc59-59" },
    !quiz.showResults ? /*#__PURE__*/
    React.createElement(Card, { className: "cow-card", "data-phoenix-id": "phoenix-7448bc59-60" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-61" }, /*#__PURE__*/
    React.createElement("div", { className: "flex justify-between items-center mb-4", "data-phoenix-id": "phoenix-7448bc59-62" }, /*#__PURE__*/
    React.createElement(Badge, { variant: "secondary", "data-phoenix-id": "phoenix-7448bc59-63" }, "Question ",
    quiz.currentQuestion + 1, " of ", quizQuestions.length
    ), /*#__PURE__*/
    React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: goToPreviousQuestion,
      disabled: quiz.currentQuestion === 0, "data-phoenix-id": "phoenix-7448bc59-64" }, /*#__PURE__*/

    React.createElement(ChevronLeft, { className: "w-4 h-4 mr-2", "data-phoenix-id": "phoenix-7448bc59-65" }), "Previous"

    )
    ), /*#__PURE__*/
    React.createElement(Progress, {
      value: quiz.currentQuestion / quizQuestions.length * 100,
      className: "mb-4", "data-phoenix-id": "phoenix-7448bc59-66" }
    ), /*#__PURE__*/
    React.createElement(CardTitle, { className: "text-2xl lg:text-3xl", "data-phoenix-id": "phoenix-7448bc59-67" },
    quizQuestions[quiz.currentQuestion]?.question
    )
    ), /*#__PURE__*/
    React.createElement(CardContent, { "data-phoenix-id": "phoenix-7448bc59-68" }, /*#__PURE__*/
    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", "data-phoenix-id": "phoenix-7448bc59-69" },
    quizQuestions[quiz.currentQuestion]?.options.map((option, index) => /*#__PURE__*/
    React.createElement(Button, {
      key: index,
      variant: "outline",
      className: "h-auto p-6 text-left justify-start hover:bg-green-50",
      onClick: () => handleQuizAnswer(index), "data-phoenix-id": "phoenix-7448bc59-70" }, /*#__PURE__*/

    React.createElement("div", { className: "flex items-center gap-3", "data-phoenix-id": "phoenix-7448bc59-71" }, /*#__PURE__*/
    React.createElement("div", { className: "w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-semibold", "data-phoenix-id": "phoenix-7448bc59-72" },
    String.fromCharCode(65 + index)
    ),
    option
    )
    )
    )
    )
    )
    ) : /*#__PURE__*/

    React.createElement(Card, { className: "cow-card text-center", "data-phoenix-id": "phoenix-7448bc59-73" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-74" }, /*#__PURE__*/
    React.createElement("div", { className: "text-6xl mb-4", "data-phoenix-id": "phoenix-7448bc59-75" },
    quiz.score >= quizQuestions.length * 0.8 ? '🏆' :
    quiz.score >= quizQuestions.length * 0.6 ? '🎉' : '📚'
    ), /*#__PURE__*/
    React.createElement(CardTitle, { className: "text-3xl", "data-phoenix-id": "phoenix-7448bc59-76" },
    quiz.score >= quizQuestions.length * 0.8 ?
    'Excellent! You\'re a cow expert!' :
    quiz.score >= quizQuestions.length * 0.6 ?
    'Good job! You know your cows!' :
    'Keep learning about these amazing animals!'
    ), /*#__PURE__*/
    React.createElement("div", { className: "text-2xl font-bold text-green-600 mt-4", "data-phoenix-id": "phoenix-7448bc59-77" },
    quiz.score, " out of ", quizQuestions.length, " correct"
    )
    ), /*#__PURE__*/
    React.createElement(CardContent, { "data-phoenix-id": "phoenix-7448bc59-78" }, /*#__PURE__*/
    React.createElement("div", { className: "space-y-4 mb-8", "data-phoenix-id": "phoenix-7448bc59-79" },
    quizQuestions.map((question, index) => /*#__PURE__*/
    React.createElement("div", {
      key: index,
      className: `p-4 rounded-lg border-2 ${
      quiz.answers[index] === question.correctAnswer ?
      'border-green-200 bg-green-50' :
      'border-red-200 bg-red-50'}`, "data-phoenix-id": "phoenix-7448bc59-80" }, /*#__PURE__*/


    React.createElement("div", { className: "flex items-start gap-3", "data-phoenix-id": "phoenix-7448bc59-81" }, /*#__PURE__*/
    React.createElement("div", { className: "flex-shrink-0", "data-phoenix-id": "phoenix-7448bc59-82" },
    quiz.answers[index] === question.correctAnswer ? /*#__PURE__*/
    React.createElement(CheckCircle, { className: "w-6 h-6 text-green-600", "data-phoenix-id": "phoenix-7448bc59-83" }) : /*#__PURE__*/

    React.createElement(XCircle, { className: "w-6 h-6 text-red-600", "data-phoenix-id": "phoenix-7448bc59-84" })

    ), /*#__PURE__*/
    React.createElement("div", { className: "text-left", "data-phoenix-id": "phoenix-7448bc59-85" }, /*#__PURE__*/
    React.createElement("div", { className: "font-semibold mb-2", "data-phoenix-id": "phoenix-7448bc59-86" }, "Q",
    index + 1, ": ", question.question
    ), /*#__PURE__*/
    React.createElement("div", { className: "text-sm text-gray-600", "data-phoenix-id": "phoenix-7448bc59-87" }, /*#__PURE__*/
    React.createElement("strong", { "data-phoenix-id": "phoenix-7448bc59-88" }, "Correct Answer:"), " ", question.options[question.correctAnswer]
    ), /*#__PURE__*/
    React.createElement("div", { className: "text-sm text-gray-700 mt-1", "data-phoenix-id": "phoenix-7448bc59-89" },
    question.explanation
    )
    )
    )
    )
    )
    ), /*#__PURE__*/
    React.createElement(Button, { onClick: resetQuiz, size: "lg", "data-phoenix-id": "phoenix-7448bc59-90" }, /*#__PURE__*/
    React.createElement(RotateCcw, { className: "w-5 h-5 mr-2", "data-phoenix-id": "phoenix-7448bc59-91" }), "Take Quiz Again"

    )
    )
    )

    )
    )
    )
    )
    )
    ));

}
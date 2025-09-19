export interface CowFact {
  id: string;
  category: 'anatomy' | 'behavior' | 'production' | 'history' | 'environment' | 'nutrition';
  title: string;
  description: string;
  statValue?: string;
  statUnit?: string;
  icon: string;
}

export interface CowStatistic {
  id: string;
  label: string;
  value: number;
  unit: string;
  description: string;
  icon: string;
  color: string;
}

export const cowFacts: CowFact[] = [
  {
    id: 'stomachs',
    category: 'anatomy',
    title: 'Four Stomach Chambers',
    description: 'Cows are ruminants with four stomach chambers: rumen, reticulum, omasum, and abomasum. This allows them to digest grass and other plant materials efficiently.',
    icon: '🐄'
  },
  {
    id: 'tongue-length',
    category: 'anatomy',
    title: 'Super Long Tongues',
    description: 'A cow\'s tongue can be 18-24 inches long! They use their powerful tongues to grasp grass and pull it into their mouths.',
    statValue: '18-24',
    statUnit: 'inches',
    icon: '👅'
  },
  {
    id: 'milk-production',
    category: 'production',
    title: 'Daily Milk Production',
    description: 'A high-producing dairy cow can produce 6-7 gallons of milk per day, which equals about 50,000 glasses of milk per year!',
    statValue: '6-7',
    statUnit: 'gallons/day',
    icon: '🥛'
  },
  {
    id: 'social-animals',
    category: 'behavior',
    title: 'Best Friends Forever',
    description: 'Cows form close friendships and can become stressed when separated from their best friends. They have complex social hierarchies within herds.',
    icon: '👥'
  },
  {
    id: 'memory',
    category: 'behavior',
    title: 'Excellent Memory',
    description: 'Cows can remember faces and locations for years. They can recognize up to 50-70 different individuals in their herd.',
    statValue: '50-70',
    statUnit: 'individuals',
    icon: '🧠'
  },
  {
    id: 'sleep-standing',
    category: 'behavior',
    title: 'Standing Sleep',
    description: 'Cows can sleep while standing up, but they need to lie down for deep REM sleep. They sleep about 4 hours per day total.',
    statValue: '4',
    statUnit: 'hours/day',
    icon: '😴'
  },
  {
    id: 'global-population',
    category: 'history',
    title: 'Global Cattle Population',
    description: 'There are approximately 1 billion cattle worldwide, making them one of the most numerous large mammals on Earth.',
    statValue: '1',
    statUnit: 'billion',
    icon: '🌍'
  },
  {
    id: 'greenhouse-gas',
    category: 'environment',
    title: 'Methane Production',
    description: 'Cows produce methane as part of their digestion process. A single cow produces about 220-440 pounds of methane per year.',
    statValue: '220-440',
    statUnit: 'lbs/year',
    icon: '💨'
  },
  {
    id: 'water-consumption',
    category: 'nutrition',
    title: 'Daily Water Intake',
    description: 'A dairy cow drinks 30-50 gallons of water per day - that\'s about the same as a bathtub full of water!',
    statValue: '30-50',
    statUnit: 'gallons/day',
    icon: '💧'
  },
  {
    id: 'grass-consumption',
    category: 'nutrition',
    title: 'Grass Eating Champions',
    description: 'Cows spend 6-8 hours a day grazing and can eat up to 40 pounds of grass and forage daily.',
    statValue: '40',
    statUnit: 'pounds/day',
    icon: '🌱'
  },
  {
    id: 'domestication',
    category: 'history',
    title: 'Ancient Domestication',
    description: 'Cattle were first domesticated around 10,000 years ago in the Middle East, making them one of humanity\'s oldest agricultural partners.',
    statValue: '10,000',
    statUnit: 'years ago',
    icon: '🏺'
  },
  {
    id: 'vision',
    category: 'anatomy',
    title: '360-Degree Vision',
    description: 'Cows have nearly 360-degree panoramic vision due to the positioning of their eyes on the sides of their heads, helping them spot predators.',
    statValue: '360',
    statUnit: 'degrees',
    icon: '👁️'
  }
];

export const cowStatistics: CowStatistic[] = [
  {
    id: 'breeds',
    label: 'Cattle Breeds Worldwide',
    value: 800,
    unit: 'breeds',
    description: 'There are over 800 recognized cattle breeds globally',
    icon: '🐄',
    color: 'hsl(var(--cow-brown))'
  },
  {
    id: 'milk-production',
    label: 'Annual Milk Production',
    value: 12000,
    unit: 'kg/year',
    description: 'Top dairy cows can produce this much milk annually',
    icon: '🥛',
    color: 'hsl(var(--sky-blue))'
  },
  {
    id: 'weight',
    label: 'Average Cow Weight',
    value: 650,
    unit: 'kg',
    description: 'Average weight of a mature dairy cow',
    icon: '⚖️',
    color: 'hsl(var(--golden-wheat))'
  },
  {
    id: 'lifespan',
    label: 'Average Lifespan',
    value: 20,
    unit: 'years',
    description: 'Typical lifespan of well-cared cattle',
    icon: '🎂',
    color: 'hsl(var(--grass-green))'
  },
  {
    id: 'gestation',
    label: 'Gestation Period',
    value: 9,
    unit: 'months',
    description: 'How long cows carry their calves',
    icon: '👶',
    color: 'hsl(var(--barn-red))'
  },
  {
    id: 'heart-rate',
    label: 'Resting Heart Rate',
    value: 60,
    unit: 'BPM',
    description: 'Beats per minute when at rest',
    icon: '💓',
    color: 'hsl(var(--cow-brown))'
  }
];

export const quizQuestions = [
  {
    id: 1,
    question: "How many stomach chambers do cows have?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    explanation: "Cows have four stomach chambers: rumen, reticulum, omasum, and abomasum."
  },
  {
    id: 2,
    question: "Which breed is known for producing the richest milk?",
    options: ["Holstein", "Jersey", "Angus", "Hereford"],
    correctAnswer: 1,
    explanation: "Jersey cows produce milk with the highest butterfat and protein content."
  },
  {
    id: 3,
    question: "How long can a cow's tongue be?",
    options: ["6-8 inches", "12-14 inches", "18-24 inches", "30-36 inches"],
    correctAnswer: 2,
    explanation: "Cow tongues can reach 18-24 inches in length, helping them grasp grass effectively."
  },
  {
    id: 4,
    question: "Which breed is naturally polled (hornless)?",
    options: ["Highland", "Hereford", "Angus", "Charolais"],
    correctAnswer: 2,
    explanation: "Angus cattle are naturally polled, meaning they don't grow horns."
  },
  {
    id: 5,
    question: "How much water does a dairy cow drink per day?",
    options: ["10-20 gallons", "30-50 gallons", "60-70 gallons", "80-100 gallons"],
    correctAnswer: 1,
    explanation: "Dairy cows drink 30-50 gallons of water daily to support milk production."
  },
  {
    id: 6,
    question: "Which country is the origin of Holstein cattle?",
    options: ["Germany", "Netherlands", "England", "Scotland"],
    correctAnswer: 1,
    explanation: "Holstein cattle originated in the Netherlands, though they were also developed in Germany."
  }
];

export const factCategories = [
  { id: 'all', name: 'All Facts', icon: '🐄' },
  { id: 'anatomy', name: 'Anatomy', icon: '🫀' },
  { id: 'behavior', name: 'Behavior', icon: '🧠' },
  { id: 'production', name: 'Production', icon: '🥛' },
  { id: 'history', name: 'History', icon: '📚' },
  { id: 'environment', name: 'Environment', icon: '🌱' },
  { id: 'nutrition', name: 'Nutrition', icon: '🌾' }
];
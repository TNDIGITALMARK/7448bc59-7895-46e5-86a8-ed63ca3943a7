export interface BreedInfo {
  id: string;
  name: string;
  image: string;
  origin: string;
  primaryUse: 'Dairy' | 'Beef' | 'Dual-Purpose';
  avgWeight: {
    bull: string;
    cow: string;
  };
  avgHeight: string;
  milkProduction?: string;
  temperament: string;
  lifespan: string;
  characteristics: string[];
  description: string;
  funFacts: string[];
  colors: string[];
  hornType: 'Horned' | 'Polled' | 'Variable';
  climate?: string[];
  specialFeatures?: string[];
}

export const cowBreeds: BreedInfo[] = [
  {
    id: 'holstein',
    name: 'Holstein',
    image: '/generated/holstein-cow-hero.jpg',
    origin: 'Netherlands',
    primaryUse: 'Dairy',
    avgWeight: {
      bull: '1,100 kg',
      cow: '680 kg'
    },
    avgHeight: '147-150 cm',
    milkProduction: '8,000-12,000 kg/year',
    temperament: 'Docile and calm',
    lifespan: '18-22 years',
    characteristics: [
      'Black and white markings',
      'Large frame',
      'High milk production',
      'Excellent feed conversion'
    ],
    description: 'Holstein cattle are the most popular dairy breed worldwide, known for their distinctive black and white markings and exceptional milk production. They are large, hardy animals that adapt well to various climates.',
    funFacts: [
      'A Holstein cow can produce up to 9 gallons of milk per day',
      'Their black and white pattern is unique to each animal',
      'Originally from the Netherlands and Germany',
      'Account for about 90% of the US dairy herd'
    ],
    colors: ['Black and white', 'Red and white'],
    hornType: 'Variable',
    climate: ['Temperate', 'Continental'],
    specialFeatures: ['Highest milk production', 'Distinctive markings', 'Large size']
  },
  {
    id: 'jersey',
    name: 'Jersey',
    image: '/generated/jersey-cow-hero.jpg',
    origin: 'Jersey Island, UK',
    primaryUse: 'Dairy',
    avgWeight: {
      bull: '540-820 kg',
      cow: '380-450 kg'
    },
    avgHeight: '120-125 cm',
    milkProduction: '5,500-7,000 kg/year',
    temperament: 'Gentle and intelligent',
    lifespan: '15-20 years',
    characteristics: [
      'Small to medium size',
      'High butterfat content in milk',
      'Efficient grazers',
      'Hardy and adaptable'
    ],
    description: 'Jersey cattle are known for producing the richest milk of all dairy breeds, with high butterfat and protein content. Despite their smaller size, they are extremely efficient milk producers.',
    funFacts: [
      'Jersey milk has 20% more protein than average milk',
      'They are one of the oldest dairy breeds',
      'Can live comfortably in hot climates',
      'Their milk is naturally golden due to beta-carotene'
    ],
    colors: ['Light brown', 'Fawn', 'Dark brown'],
    hornType: 'Variable',
    climate: ['Tropical', 'Temperate', 'Warm'],
    specialFeatures: ['Richest milk', 'Heat tolerance', 'Efficient feed conversion']
  },
  {
    id: 'angus',
    name: 'Angus',
    image: '/generated/angus-cow-card.jpg',
    origin: 'Scotland',
    primaryUse: 'Beef',
    avgWeight: {
      bull: '850-1,000 kg',
      cow: '550-650 kg'
    },
    avgHeight: '140-150 cm',
    temperament: 'Docile and easy to handle',
    lifespan: '15-20 years',
    characteristics: [
      'Naturally polled (hornless)',
      'Excellent marbling in meat',
      'Good mothering ability',
      'Fast growth rate'
    ],
    description: 'Angus cattle are renowned for producing high-quality beef with excellent marbling. They are naturally hornless and known for their docile temperament and excellent maternal instincts.',
    funFacts: [
      'Certified Angus Beef is a premium brand',
      'They adapt well to various climates',
      'Originally developed in northeast Scotland',
      'Both black and red varieties exist'
    ],
    colors: ['Black', 'Red'],
    hornType: 'Polled',
    climate: ['Temperate', 'Continental', 'Cold'],
    specialFeatures: ['Premium beef quality', 'Naturally hornless', 'Excellent marbling']
  },
  {
    id: 'hereford',
    name: 'Hereford',
    image: '/generated/hereford-cow-card.jpg',
    origin: 'England',
    primaryUse: 'Beef',
    avgWeight: {
      bull: '1,000-1,200 kg',
      cow: '650-750 kg'
    },
    avgHeight: '145-155 cm',
    temperament: 'Calm and docile',
    lifespan: '15-20 years',
    characteristics: [
      'White face with red body',
      'Hardy and adaptable',
      'Good foraging ability',
      'Excellent beef quality'
    ],
    description: 'Hereford cattle are easily recognizable by their distinctive white faces and red bodies. They are one of the most popular beef breeds worldwide, known for their hardiness and excellent beef quality.',
    funFacts: [
      'One of the first British breeds exported globally',
      'Can thrive in harsh weather conditions',
      'Developed in Herefordshire, England',
      'Known for their longevity and fertility'
    ],
    colors: ['Red with white face', 'White markings on legs'],
    hornType: 'Horned',
    climate: ['Temperate', 'Continental', 'Arid'],
    specialFeatures: ['Distinctive white face', 'Extreme hardiness', 'Global adaptability']
  },
  {
    id: 'highland',
    name: 'Highland',
    image: '/generated/highland-cow-hero.jpg',
    origin: 'Scotland',
    primaryUse: 'Beef',
    avgWeight: {
      bull: '650-800 kg',
      cow: '450-550 kg'
    },
    avgHeight: '120-140 cm',
    temperament: 'Hardy but gentle',
    lifespan: '15-22 years',
    characteristics: [
      'Long, shaggy hair',
      'Large, curved horns',
      'Extremely hardy',
      'Good foragers'
    ],
    description: 'Highland cattle are instantly recognizable with their long, shaggy coats and impressive horns. They are one of the hardiest cattle breeds, able to survive in harsh Scottish highland conditions.',
    funFacts: [
      'Their hair can grow up to 13 inches long',
      'They can survive in temperatures as low as -18°C',
      'Both males and females have horns',
      'They are excellent mothers and very protective'
    ],
    colors: ['Red', 'Black', 'Brindle', 'Yellow', 'White', 'Dun'],
    hornType: 'Horned',
    climate: ['Cold', 'Harsh', 'Highland'],
    specialFeatures: ['Double coat', 'Cold tolerance', 'Iconic appearance']
  },
  {
    id: 'charolais',
    name: 'Charolais',
    image: '/generated/charolais-cow-card.jpg',
    origin: 'France',
    primaryUse: 'Beef',
    avgWeight: {
      bull: '1,100-1,400 kg',
      cow: '700-800 kg'
    },
    avgHeight: '150-165 cm',
    temperament: 'Calm and manageable',
    lifespan: '15-18 years',
    characteristics: [
      'Creamy white color',
      'Large, muscular frame',
      'Fast growth rate',
      'High feed conversion'
    ],
    description: 'Charolais cattle are large, muscular animals known for their creamy white color and excellent beef production. They are one of the most popular beef breeds in Europe.',
    funFacts: [
      'One of the oldest French cattle breeds',
      'Originally used as draft animals',
      'Known for their excellent growth rate',
      'Popular for crossbreeding programs'
    ],
    colors: ['Creamy white', 'Light wheat colored'],
    hornType: 'Variable',
    climate: ['Temperate', 'Continental'],
    specialFeatures: ['Large size', 'Fast growth', 'Muscular build']
  },
  {
    id: 'simmental',
    name: 'Simmental',
    image: '/generated/simmental-cow.jpg',
    origin: 'Switzerland',
    primaryUse: 'Dual-Purpose',
    avgWeight: {
      bull: '1,000-1,300 kg',
      cow: '650-750 kg'
    },
    avgHeight: '145-155 cm',
    milkProduction: '6,000-8,000 kg/year',
    temperament: 'Docile and calm',
    lifespan: '16-20 years',
    characteristics: [
      'Golden red with white markings',
      'Large frame',
      'Good milk and beef production',
      'Hardy and adaptable'
    ],
    description: 'Simmental cattle are versatile dual-purpose animals that excel in both milk and beef production. They are known for their golden-red color with distinctive white markings.',
    funFacts: [
      'One of the most popular breeds in Europe',
      'Originated in the Simme Valley of Switzerland',
      'Excellent mothers with easy calving',
      'Used for milk, beef, and draft work historically'
    ],
    colors: ['Golden red', 'Yellow', 'White markings'],
    hornType: 'Horned',
    climate: ['Alpine', 'Temperate', 'Continental'],
    specialFeatures: ['Dual-purpose', 'Alpine adaptation', 'Distinctive coloring']
  },
  {
    id: 'limousin',
    name: 'Limousin',
    image: '/generated/limousin-cow.jpg',
    origin: 'France',
    primaryUse: 'Beef',
    avgWeight: {
      bull: '1,000-1,200 kg',
      cow: '650-750 kg'
    },
    avgHeight: '145-155 cm',
    temperament: 'Active but manageable',
    lifespan: '15-18 years',
    characteristics: [
      'Golden wheat colored',
      'Muscular and lean',
      'High meat-to-bone ratio',
      'Efficient feed conversion'
    ],
    description: 'Limousin cattle are known for their lean, muscular build and efficient meat production. They have a distinctive golden wheat color and are prized for their high-quality beef.',
    funFacts: [
      'Naturally lean with low fat content',
      'Excellent feed-to-meat conversion ratio',
      'Originally from the Limousin region of France',
      'Popular for crossbreeding to improve meat quality'
    ],
    colors: ['Golden wheat', 'Light gold'],
    hornType: 'Horned',
    climate: ['Temperate', 'Mediterranean'],
    specialFeatures: ['Lean meat', 'High muscle-to-bone ratio', 'Efficient growth']
  },
  {
    id: 'brahman',
    name: 'Brahman',
    image: '/generated/brahman-cow.jpg',
    origin: 'India (developed in USA)',
    primaryUse: 'Beef',
    avgWeight: {
      bull: '800-1,100 kg',
      cow: '500-650 kg'
    },
    avgHeight: '140-150 cm',
    temperament: 'Intelligent and adaptable',
    lifespan: '15-20 years',
    characteristics: [
      'Large hump on shoulders',
      'Loose skin and dewlap',
      'Heat tolerance',
      'Insect resistance'
    ],
    description: 'Brahman cattle are distinguished by their prominent shoulder hump and excellent heat tolerance. They are well-adapted to hot, humid climates and are resistant to many tropical diseases.',
    funFacts: [
      'Can withstand extreme heat and humidity',
      'Have natural resistance to many parasites',
      'Developed from Indian Zebu cattle',
      'Sweat glands help with temperature regulation'
    ],
    colors: ['Light gray', 'Red', 'Black'],
    hornType: 'Horned',
    climate: ['Tropical', 'Hot', 'Humid'],
    specialFeatures: ['Heat tolerance', 'Disease resistance', 'Distinctive hump']
  },
  {
    id: 'guernsey',
    name: 'Guernsey',
    image: '/generated/guernsey-cow.jpg',
    origin: 'Guernsey Island, UK',
    primaryUse: 'Dairy',
    avgWeight: {
      bull: '600-900 kg',
      cow: '450-500 kg'
    },
    avgHeight: '125-135 cm',
    milkProduction: '5,000-7,000 kg/year',
    temperament: 'Gentle and docile',
    lifespan: '15-18 years',
    characteristics: [
      'Fawn and white coloring',
      'Golden milk',
      'Medium size',
      'Efficient grazers'
    ],
    description: 'Guernsey cattle are known for their beautiful fawn and white coloring and their golden-colored milk rich in beta-carotene. They are efficient producers of high-quality dairy products.',
    funFacts: [
      'Their milk is naturally golden in color',
      'High in beta-carotene and protein',
      'Known as "The Golden Guernsey"',
      'Excellent for cheese production'
    ],
    colors: ['Fawn', 'Reddish-brown', 'White'],
    hornType: 'Variable',
    climate: ['Temperate', 'Coastal'],
    specialFeatures: ['Golden milk', 'High beta-carotene', 'Beautiful coloring']
  },
  {
    id: 'brown-swiss',
    name: 'Brown Swiss',
    image: '/generated/brown-swiss-cow.jpg',
    origin: 'Switzerland',
    primaryUse: 'Dual-Purpose',
    avgWeight: {
      bull: '900-1,200 kg',
      cow: '600-700 kg'
    },
    avgHeight: '140-150 cm',
    milkProduction: '6,500-8,500 kg/year',
    temperament: 'Calm and intelligent',
    lifespan: '16-20 years',
    characteristics: [
      'Solid brown color',
      'Large frame',
      'Good milk production',
      'Hardy constitution'
    ],
    description: 'Brown Swiss cattle are one of the oldest dairy breeds, known for their solid brown color and excellent milk production. They are hardy animals well-suited to mountainous regions.',
    funFacts: [
      'One of the oldest and purest dairy breeds',
      'Originated in the Swiss Alps',
      'Known for longevity and disease resistance',
      'Their milk is excellent for cheese making'
    ],
    colors: ['Solid brown', 'Light brown to dark brown'],
    hornType: 'Horned',
    climate: ['Alpine', 'Mountainous', 'Cool'],
    specialFeatures: ['Ancient breed', 'Mountain adaptation', 'Longevity']
  },
  {
    id: 'ayrshire',
    name: 'Ayrshire',
    image: '/generated/ayrshire-cow.jpg',
    origin: 'Scotland',
    primaryUse: 'Dairy',
    avgWeight: {
      bull: '700-900 kg',
      cow: '500-600 kg'
    },
    avgHeight: '135-145 cm',
    milkProduction: '6,000-8,000 kg/year',
    temperament: 'Alert and active',
    lifespan: '15-18 years',
    characteristics: [
      'Red and white markings',
      'Medium size',
      'Hardy constitution',
      'Good udder quality'
    ],
    description: 'Ayrshire cattle are medium-sized dairy cows known for their red and white markings and excellent udder conformation. They are hardy animals that adapt well to various climates.',
    funFacts: [
      'Known for their perfect udder shape',
      'Originated in Ayrshire, Scotland',
      'Good grazers on rough terrain',
      'Milk has good composition for cheese'
    ],
    colors: ['Red and white', 'Mahogany and white'],
    hornType: 'Horned',
    climate: ['Temperate', 'Cool', 'Wet'],
    specialFeatures: ['Excellent udder', 'Hardy grazing', 'Climate adaptable']
  },
  {
    id: 'shorthorn',
    name: 'Shorthorn',
    image: '/generated/shorthorn-cow.jpg',
    origin: 'England',
    primaryUse: 'Dual-Purpose',
    avgWeight: {
      bull: '900-1,200 kg',
      cow: '600-750 kg'
    },
    avgHeight: '140-150 cm',
    milkProduction: '5,500-7,500 kg/year',
    temperament: 'Docile and calm',
    lifespan: '15-18 years',
    characteristics: [
      'Red, white, or roan colored',
      'Medium to large frame',
      'Good milk and beef',
      'Easy calving'
    ],
    description: 'Shorthorn cattle are versatile dual-purpose animals that come in various colors including red, white, and roan. They are known for their docile temperament and good performance in both milk and beef production.',
    funFacts: [
      'One of the first improved breeds',
      'Helped develop many other breeds',
      'Come in three distinct color patterns',
      'Known for easy handling and management'
    ],
    colors: ['Red', 'White', 'Roan'],
    hornType: 'Variable',
    climate: ['Temperate', 'Continental'],
    specialFeatures: ['Color variety', 'Dual-purpose', 'Easy management']
  },
  {
    id: 'devon',
    name: 'Devon',
    image: '/generated/devon-cow.jpg',
    origin: 'England',
    primaryUse: 'Beef',
    avgWeight: {
      bull: '800-1,000 kg',
      cow: '500-650 kg'
    },
    avgHeight: '130-145 cm',
    temperament: 'Hardy and docile',
    lifespan: '16-20 years',
    characteristics: [
      'Rich red color',
      'Medium size',
      'Hardy constitution',
      'Good foraging ability'
    ],
    description: 'Devon cattle are known for their rich red color and hardy constitution. They are excellent foragers and well-adapted to rough terrain and harsh conditions.',
    funFacts: [
      'One of the oldest British breeds',
      'Brought to America by the Pilgrims',
      'Known as "Red Rubies"',
      'Excellent mothers with strong maternal instincts'
    ],
    colors: ['Rich red', 'Deep red'],
    hornType: 'Horned',
    climate: ['Temperate', 'Maritime'],
    specialFeatures: ['Ancient heritage', 'Hardy foraging', 'Rich red color']
  },
  {
    id: 'galloway',
    name: 'Galloway',
    image: '/generated/galloway-cow.jpg',
    origin: 'Scotland',
    primaryUse: 'Beef',
    avgWeight: {
      bull: '750-950 kg',
      cow: '450-650 kg'
    },
    avgHeight: '125-140 cm',
    temperament: 'Hardy and calm',
    lifespan: '16-22 years',
    characteristics: [
      'Thick, curly coat',
      'Naturally polled',
      'Cold hardy',
      'Good mothers'
    ],
    description: 'Galloway cattle are known for their thick, curly coats that protect them from harsh weather. They are naturally polled and extremely hardy, making them ideal for rough terrain.',
    funFacts: [
      'Can survive outdoors year-round in harsh climates',
      'Their coat changes thickness with seasons',
      'Belted Galloway variety has a white "belt"',
      'Excellent conservation grazers'
    ],
    colors: ['Black', 'Red', 'White', 'Dun'],
    hornType: 'Polled',
    climate: ['Cold', 'Harsh', 'Wet'],
    specialFeatures: ['Weather-resistant coat', 'Cold hardy', 'Natural conservation']
  },
  {
    id: 'texas-longhorn',
    name: 'Texas Longhorn',
    image: '/generated/texas-longhorn-cow.jpg',
    origin: 'United States',
    primaryUse: 'Beef',
    avgWeight: {
      bull: '650-900 kg',
      cow: '400-550 kg'
    },
    avgHeight: '130-145 cm',
    temperament: 'Independent and hardy',
    lifespan: '20-25 years',
    characteristics: [
      'Extremely long horns',
      'Various colors',
      'Heat tolerant',
      'Disease resistant'
    ],
    description: 'Texas Longhorn cattle are famous for their extremely long horns that can span up to 8 feet. They are hardy, independent animals well-adapted to hot, dry climates.',
    funFacts: [
      'Horn spread can reach up to 8 feet',
      'Can live on poor quality forage',
      'Symbol of the American West',
      'Excellent mothers with few calving problems'
    ],
    colors: ['Many colors and patterns possible'],
    hornType: 'Horned',
    climate: ['Hot', 'Dry', 'Arid'],
    specialFeatures: ['Iconic horns', 'Heat tolerance', 'American heritage']
  },
  {
    id: 'belted-galloway',
    name: 'Belted Galloway',
    image: '/generated/belted-galloway-cow.jpg',
    origin: 'Scotland',
    primaryUse: 'Beef',
    avgWeight: {
      bull: '750-950 kg',
      cow: '450-650 kg'
    },
    avgHeight: '125-140 cm',
    temperament: 'Docile and hardy',
    lifespan: '16-20 years',
    characteristics: [
      'Distinctive white "belt"',
      'Thick, curly coat',
      'Naturally polled',
      'Cold resistant'
    ],
    description: 'Belted Galloway cattle, also known as "Belties," are instantly recognizable by their distinctive white belt around their middle. They have the same hardy characteristics as regular Galloways.',
    funFacts: [
      'Known affectionately as "Belties" or "Oreo Cows"',
      'The belt must completely encircle the body',
      'Can graze in all weather conditions',
      'Popular for conservation grazing'
    ],
    colors: ['Black with white belt', 'Red with white belt'],
    hornType: 'Polled',
    climate: ['Cold', 'Wet', 'Harsh'],
    specialFeatures: ['Distinctive belt', 'Weather hardy', 'Conservation grazing']
  },
  {
    id: 'murray-grey',
    name: 'Murray Grey',
    image: '/generated/murray-grey-cow.jpg',
    origin: 'Australia',
    primaryUse: 'Beef',
    avgWeight: {
      bull: '900-1,200 kg',
      cow: '550-750 kg'
    },
    avgHeight: '140-150 cm',
    temperament: 'Very docile and quiet',
    lifespan: '15-18 years',
    characteristics: [
      'Silver-grey color',
      'Naturally polled',
      'Excellent temperament',
      'Good marbling'
    ],
    description: 'Murray Grey cattle are known for their beautiful silver-grey color and exceptionally docile temperament. They are naturally polled and produce high-quality beef with excellent marbling.',
    funFacts: [
      'Developed from a single grey calf born in 1905',
      'Known for their extremely quiet temperament',
      'Naturally polled with no horns',
      'Popular for their ease of handling'
    ],
    colors: ['Silver-grey', 'Light grey'],
    hornType: 'Polled',
    climate: ['Temperate', 'Semi-arid'],
    specialFeatures: ['Exceptional temperament', 'Beautiful color', 'Easy handling']
  },
  {
    id: 'santa-gertrudis',
    name: 'Santa Gertrudis',
    image: '/generated/santa-gertrudis-cow.jpg',
    origin: 'United States (Texas)',
    primaryUse: 'Beef',
    avgWeight: {
      bull: '900-1,200 kg',
      cow: '600-750 kg'
    },
    avgHeight: '140-155 cm',
    temperament: 'Calm and manageable',
    lifespan: '15-18 years',
    characteristics: [
      'Deep red color',
      'Heat tolerant',
      'Good growth rate',
      'Adaptable'
    ],
    description: 'Santa Gertrudis cattle were the first breed developed in America, combining the heat tolerance of Brahman with the meat quality of Shorthorn. They are known for their deep red color.',
    funFacts: [
      'First breed developed in the United States',
      'Created by crossing Brahman and Shorthorn',
      'Named after a Spanish land grant',
      'Officially recognized in 1940'
    ],
    colors: ['Deep red', 'Cherry red'],
    hornType: 'Horned',
    climate: ['Hot', 'Humid', 'Tropical'],
    specialFeatures: ['First American breed', 'Heat adaptation', 'Hybrid vigor']
  },
  {
    id: 'gelbvieh',
    name: 'Gelbvieh',
    image: '/generated/gelbvieh-cow.jpg',
    origin: 'Germany',
    primaryUse: 'Dual-Purpose',
    avgWeight: {
      bull: '1,000-1,300 kg',
      cow: '650-750 kg'
    },
    avgHeight: '145-155 cm',
    milkProduction: '5,000-7,000 kg/year',
    temperament: 'Docile and intelligent',
    lifespan: '16-20 years',
    characteristics: [
      'Golden red color',
      'Large frame',
      'Good milk production',
      'Fast growth'
    ],
    description: 'Gelbvieh cattle are large, golden-red colored animals that excel in both milk and beef production. They are known for their excellent maternal abilities and fast growth rates.',
    funFacts: [
      'Name means "yellow cattle" in German',
      'Developed in Bavaria, Germany',
      'Known for excellent mothering ability',
      'Popular for crossbreeding programs'
    ],
    colors: ['Golden red', 'Light gold'],
    hornType: 'Variable',
    climate: ['Continental', 'Temperate'],
    specialFeatures: ['Dual-purpose excellence', 'Fast growth', 'Maternal ability']
  }
];

export const breedCategories = [
  { id: 'all', name: 'All Breeds', count: cowBreeds.length },
  { id: 'dairy', name: 'Dairy', count: cowBreeds.filter(b => b.primaryUse === 'Dairy').length },
  { id: 'beef', name: 'Beef', count: cowBreeds.filter(b => b.primaryUse === 'Beef').length },
  { id: 'dual-purpose', name: 'Dual Purpose', count: cowBreeds.filter(b => b.primaryUse === 'Dual-Purpose').length }
];

export const breedsByOrigin = cowBreeds.reduce((acc, breed) => {
  if (!acc[breed.origin]) {
    acc[breed.origin] = [];
  }
  acc[breed.origin].push(breed);
  return acc;
}, {} as Record<string, BreedInfo[]>);

export const breedsByClimate = cowBreeds.reduce((acc, breed) => {
  if (breed.climate) {
    breed.climate.forEach(climate => {
      if (!acc[climate]) {
        acc[climate] = [];
      }
      acc[climate].push(breed);
    });
  }
  return acc;
}, {} as Record<string, BreedInfo[]>);
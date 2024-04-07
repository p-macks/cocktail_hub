import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

// Sample array of objects
const objects = [
  {
    image: "/images/margarita.jpg",
    name: "margarita",
    ingredients: "tequila,lime juice,sugar syrup ",
    preparation:
      "mix contents and shake properly or add contents in a blender and serve on a salt rimmed glass",
  },
  {
    image: "/images/cosmopolitan.jpg",
    name: "cosmopolitan",
    ingredients: "vodka, lime, cranberry juice and triple sec",
    preparation: "shake contents and serve in a chilled glass",
  },
  {
    image: "/images/mojito.jpg",
    name: "mojito",
    ingredients: "barcadi, lime wedges, mint leaves and sugar syrup",
    preparation:
      "mould wedges and mint leaves, add syrup and rum then top up with soda water",
  },
  {
    image: "/images/pimms.jpg",
    name: "pimm's cup",
    ingredients: "pimms, sprite, cucumber, orange, lemon, lime, mint and strawberries",
    preparation:
      "Stir together the Pimm's and Sprite or ginger ale in a serving pitcher. Add the cucumber wedge, apple, orange, lemon, lime, strawberries, and mint. Serve in tall glasses over ice.",
  },
  {
    image: "/images/pinacolada.jpg",
    name: "pina colada",
    ingredients: " Coconut cream,  White rum and Pineapple juice",
    preparation:
      "Mix with crushed ice until smooth. Pour into chilled glass, garnish and serve",
  },
  {
    image: "/images/sex on the beach.jpg",
    name: "sex on the beach",
    ingredients: "vodka, peach schnapps, orange juice and cranberry juice",
    preparation:
      "Build all ingredients in a highball glass filled with ice. Garnish with orange slice.",
  },
  {
    image: "/images/old fashioned.jpg",
    name: "old fashioned",
    ingredients: "bourbon, bitters, ice  and orange slice garnish",
    preparation:
      "Stir the simple syrup, water, and bitters in a glass. Add the ice cubes and bourbon. Garnish.",
  },
  {
    image: "/images/classic negroni.jpg",
    name: "classic negroni",
    ingredients: "gin, vermouth, campari, carbonated water and lemon wedge",
    preparation:
      "In a rocks glass over ice, combine Campari, gin, and sweet vermouth. Add carbonated water and garnish with lemon wedge.",
  },
  {
    image: "/images/espresso martini.jpg",
    name: "espresso martini",
    ingredients: "vodka, coffee liqueur, crème de cacao, espresso and ice",
    preparation:
      "Pour vodka, coffee liqueur, crème de cacao, and espresso into a cocktail shaker; add ice, cover and shake until chilled.",
  },
  {
    image: "/images/passion fruit martini.jpg",
    name: "passion fruit martini",
    ingredients: "gin, dry vermouth, passion fruit and ice",
    preparation:
      "Scoop ice into a shaker. Pour in gin, vermouth, and passion fruit juice. Cover shaker, and gently shake to mix. Strain drink into a martini glass. Serve",
  },
];

let currentIndex = 0;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Set the path for static files (like images)
app.use(express.static(path.join(__dirname, 'public')));

// Route to display the object
app.get('/', (req, res) => {
    const currentObject = objects[currentIndex];
    res.render('index', { object: currentObject });
});

// Route to handle the "Next" button click
app.post('/next', (req, res) => {
    currentIndex = (currentIndex + 1) % objects.length; // Loop back to the beginning if at the end
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
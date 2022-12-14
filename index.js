/* Spaghetti alla Carbonara Recipe
Ingredients are in grams except eggYolk that is the number of yolks 
agedPecorino = aged grated Pecorino Romano cheese
blackPepper = raw black pepper
*/
let spaghetti = 400;
let guanciale = 250;
let eggYolk = 6;
let eggYolkWeight = eggYolk * 50;
let agedPecorino = 50;
let blackPepper = 4;
//START OF THE RECIPE
console.log("First cut the guanciale into 1cm layers, then into long strips");
let yolkCheeseMix = eggYolkWeight + agedPecorino;
console.log(
  "After combining the grated cheese and the yolks you should have",
  yolkCheeseMix,
  "grams"
);
let roastedPepper = blackPepper;
//
let smallAmountPepper = roastedPepper / 8;
roastedPepper = roastedPepper - smallAmountPepper;
let pepperYolkCheeseMix = smallAmountPepper + yolkCheeseMix;
console.log(
  "Roast the black pepper and add a little amount of it to the yolk and cheese mixture and put aside"
);
let brownGuanciale = guanciale;
console.log(
  "Brown the strips of guanciale for 3 minutes at medium heat, then 1 minute on high heat til crisp"
);
console.log(
  "Then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down"
);
console.log(
  "Cook the pasta with a pinch of salt in the water (guanciale is already very salty)"
);
//new ingredient that was not on the list = water
let water = 2000;
let absorptionRate = 1.7;
let cookedSpaghettiWeight = spaghetti * absorptionRate;
let absorbedWater = cookedSpaghettiWeight - spaghetti;
let remainingWater = water - absorbedWater;
let glassOfWater = 200;
console.log(
  "After the Spaghetti absorbed water you should have",
  cookedSpaghettiWeight,
  "grams, (al Dente way)"
);
console.log(
  "Remaining water in the pod",
  remainingWater,
  "grams, put a aside a glass of that water",
  glassOfWater,
  "grams approx"
);
//a spoon contains 15 grams
let spoon = 15;
console.log(
  "Pour 2 spoons of the reserved hot water",
  "(",
  spoon * 2,
  "grams approx) into the part of the frying pan containing the cooled guanciale and turn on the heat"
);
console.log(
  "   This will create a creamy sauce with the pasta starch contained in that water"
);
console.log(
  "TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix together"
);
let greasyPanMix = brownGuanciale + cookedSpaghettiWeight;
console.log("Add the yolk and cheese mixture, stirring rapidly");
let mainMix = greasyPanMix + pepperYolkCheeseMix;
console.log(
  "In the warm pan with the hot pasta, the eggs will cook gently and become creamy"
);
console.log(
  "It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs"
);
console.log("Add the remaining roasted black pepper and serve immediately");
let carbonara = mainMix + roastedPepper;
console.log("Enjoy yours", carbonara, "grams of Carbonara");

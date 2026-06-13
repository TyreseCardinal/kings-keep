// Import the tools from card.js
import { Card, suits, ranks, specialRanks } from "./card.js";

const deck = [];

// 1. Loop for standard numbered cards
for (const suit of suits) {
  for (const rank of ranks) {
    deck.push(new Card(rank, suit));
  }
}

// 2. Loop for special face cards
for (const suit of suits) {
  for (const rank of specialRanks) {
    deck.push(new Card(rank, suit)); // Changed specialRanks to rank
  }
}

// Shuffle array function (Fisher-Yates Standard)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(deck);
export { deck, shuffle };

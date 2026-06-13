// Import the tools from card.js
import { Card, suits, ranks, specialRanks } from "./card.js";

const deck = [];

// 1. Loop for standard numbered cards
for (const suit of suits) {
  for (const rank of ranks) {
    deck.push(new Card(rank, suit));
  }
}

// 2. Loop for special face cards (Fixed ChatGPT's bug here)
for (const suit of suits) {
  for (const rank of specialRanks) {
    deck.push(new Card(rank, suit)); // Changed specialRanks to rank
  }
}

console.log(deck); // Your full 52-card deck lives here!
export { deck };

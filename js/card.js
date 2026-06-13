const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
const specialRanks = ["A", "J", "Q", "K"];

// The Blueprint
function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
}

// Export everything so deck.js can access them
export { Card, suits, ranks, specialRanks };

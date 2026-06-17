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
function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

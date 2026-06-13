import { deck, shuffle } from "./deck.js";
import { ranks } from "./card.js";

function startGame() {
  console.log("Game started!");
  towerCreationPhase();
}

function towerCreationPhase() {
  const cards_to_deal = 7;
  const towerCreationDeck = deck.filter((card) => ranks.includes(card.rank));

  for (let i = 0; i < cards_to_deal; i++) {
    if (towerCards.length > 0) playerA.tower.push(towerCards.pop());
    if (towerCards.length > 0) playerB.tower.push(towerCards.pop());
  }
}

startGame();

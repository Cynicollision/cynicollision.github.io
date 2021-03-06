﻿/**
 * Represents the deck of 52 cards and contains a function for shuffling.
 */

// Constructor.
function Deck() {
    // all cards in the deck
    this.cards = [];

    // add one card of each suit and rank to the deck
    for (var s in SUIT) {
        if (SUIT.hasOwnProperty(s)) {
            for (var r = 1; r <= 13; r++) {
                this.cards.push(new Card(r, s));
            }
        }
    }
}



// shuffle the deck the given number of times
Deck.prototype.shuffle = function (times) {
    if (times === undefined) {
        times = 1;
    }

    for (var i = 0; i < times; i++) {
        for (var j = 0; j < this.cards.length; j++) {
            var swap = getRandomInt(0, this.cards.length - 1);
            this.swapCards(j, swap);
        }
    }
}

// swaps card at position (in deck) pos1 with the card at pos2 
Deck.prototype.swapCards = function (pos1, pos2) {
    var swap = this.cards[pos1];
    this.cards[pos1] = this.cards[pos2];
    this.cards[pos2] = swap;
}

// draw the next card from the top of the deck
Deck.prototype.drawCard = function () {
    return this.cards.pop();
}

// inclusive random integer generator.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
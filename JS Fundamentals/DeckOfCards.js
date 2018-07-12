function Deck() {
  this.deck = [];
}
Deck.prototype.reset = function() {
  this.deck = [];
  var suits = ["Clubs", "Hearts", "Diamonds", "Spades"];
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
  for (var suit in suits) {
    for (var value in values) {
      this.deck.push(values[value] + " of " + suits[suit]);
    }
  }
  return this;
};
Deck.prototype.shuffle = function() {
  var m = this.deck.length,
    var temp,
    var idx;
  while (m) {
    var idx = Math.floor(Math.random() * m--);
    var temp = this.deck[m];
    this.deck[m] = this.deck[idx];
    this.deck[idx] = temp;
  }
  return this;
};
Deck.prototype.deal = function() {
  return this.deck.pop();
};
function Player(name) {
  this.name = name;
  this.hand = [];
}
Player.prototype.draw = function(deck) {
  this.hand.push(deck.deal());
  return this;
};
Player.prototype.discard = function() {
  this.hand.pop();
  return this;
};

var deck1 = new Deck();
deck1.reset().shuffle();
console.log(deck1);

var player1 = new Player("Nala");
player1.draw(deck1).draw(deck1);
console.log(player1);

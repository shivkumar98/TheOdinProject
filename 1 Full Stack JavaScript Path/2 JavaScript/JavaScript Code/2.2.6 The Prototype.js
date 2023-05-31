function Player(name, score){
    this.name = name;
    this.score = score;
}

const player1 = new Player("Shiv", 1);

console.log(Object.getPrototypeOf(player1) === Player.prototype) // true

console.log( Object.getPrototypeOf(Player.prototype) == Object.prototype) // true
console.log(player1.valueOf()) // Player { name: 'Shiv', score: 1 }

console.log(Object.prototype.hasOwnProperty('valueOf')) // true

console.log( Player.prototype.hasOwnProperty('valueOf')) // false

console.log( Object.prototype.hasOwnProperty('hasOwnProperty'))
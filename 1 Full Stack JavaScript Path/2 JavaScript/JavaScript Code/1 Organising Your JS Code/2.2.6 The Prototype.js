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

console.log( Object.prototype.hasOwnProperty('hasOwnProperty')) // true


function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}`)
}

function PlayerWithInheritance(name, marker){
    this.name = name;
    this.marker = marker
}

Object.setPrototypeOf(PlayerWithInheritance.prototype, Person.prototype)

const playerOne = new PlayerWithInheritance("Shiv", "X")
playerOne.sayName() // Hello, I'm Shiv
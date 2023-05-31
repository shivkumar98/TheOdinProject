
// tic tac toe

const playerOneName = "Shiv"
const playerTwoName = "Sammy"
const playerOneMarker = "X"
const playerTwoMarker = "O"

const playerOne = {
    name: "Shiv",
    marker: "X",
    points: 10
}

const playerTwo = {
    name: "Sammy",
    marker: "O",
    points: 5
}

function printName(player){
    console.log(player.name)
}

printName(playerOne) // Shiv

function gameOver(winningPlayer) {
    console.log(winningPlayer.name + " is the winner!")
}

function keepScore() {
    if (playerOne.points >=10 )
        gameOver(playerOne)
    else if (playerTwo.points >=10) 
        gameOver(playerTwo)
}

keepScore() // Shiv is the winner!

// we can define a constructor to instantiate a player and initialise its properties:

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

// we use the "new" keyword to call this constructor:
const player = new Player("Steve", "X")
console.log(printName(player)) // Steve

// lets update the Player constructor so that it has a method to print the name

function Player(name, marker){
    this.name=name;
    this.marker=marker;
    this.sayName = function() { console.log(this.name)}
}

const player1 = new Player("steve", "X")
const player2 = new Player("stephanies", "O")

player1.sayName() // steve
player2.sayName() // stephanies


// Every object has a prototype
// a prototype is an object which objects inherit from
// The object has access to variables and names of the prototype


function Student(name, grade){
    this.name = name;
    this.grade = grade;
}

// suppose we wanted to have a saveName() method for every Student
// We COULD define it in the constructor but this would make each instance have its own method
// It's more efficient just to define a prototype method which each instance can call

Student.prototype.sayName = function() {
    console.log("name: "+this.name)
}

const studentOne = new Student("Shiv", 11)
studentOne.sayName() // name: Shiv

Student.prototype.goToProm = function() {
    console.log("Eh.. go to prom?")
}

studentOne.goToProm() // Eh.. go to prom?

// We can use Object.create to create a prototype using another prototype

EigthGrader.prototype = Object.create(Student.prototype);

function EigthGrader(name) {
    this.name = name;
    this.grade = 8;
}

const eighthGrader = new EigthGrader("kid")
// we can access the properties of Student prototype:
eighthGrader.sayName() // name: kid



NinthGrader.prototype = Object.create(Student.prototype);
// IF we did NOT use Object.create then the override will apply
// to all objects which inherit from Student.prototype
// this will be problematic to deal with


function NinthGrader(name) {
    this.name = name;
    this.grade = 9;
}

// lets override the sayName method:
NinthGrader.prototype.sayName = function() {
    console.log("HAHAHHAHAHA")
}

const student1 = new NinthGrader("9th kid")
student1.sayName() // HAHAHHAHAHA


const eightGradeStudent = new EigthGrader("8th kid")
eightGradeStudent.sayName() // name: 8th kid
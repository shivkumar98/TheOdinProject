<link rel="stylesheet" href="../../styles.css">

# 🟪 JavaScript Course

## 🟦 Overview

* I will make dynamic and interactive websites by creating features and stand-alone applications. This module includes projects where I will learn to manipulate the DOM, use OOP principles, and build single page applications with React.


# 🧠 1 Introduction

## 🟦 1.1 How This Course Will Work

### 🔴 1.1.1 Introduction

* JavaScript is becoming a giant in web space, more logic is being passed to the client-side to give fast user experiences. It is also being used on server side with `Node.js`

### 🔴 1.1.2 The Path

* There are no pre-requisites for this course. The final project will integrate everything you've done in this curicullum

### 🔴 1.1.3 Format

* The course is broken up to the bite-sized lessons and their accompanying projects.


## 🟦 1.2 A Quick Review

### 🔴 1.2.1 jQuery?

* jQuery is NOT included in this curriculum.


# 🧠 2 Organising your JavaScript Code

## 🟦 2.1 Introduction

### 🔴 2.1.1 Organising your JavaScript Code

* JavaScript is very forgiving in the way code is organised unlike languages like Java.

* This makes making small additions to your application incredibly easy but maintaining the code gets complex when there are lots of lines of code.

* This series of lessons will cover the most common design patterns which are present in modern JavaScript. These patterns include:

- Plain Old JavaScript Objects and Object Constructors✅

- Factory Functions and the Module Pattern✅

- Classes✅

- ES6 Modules✅

### 🔴 2.1.2 Additional Resources:

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed#titles) - this is a GitHub book about how JavaScript works under the hood

- [Namaste JavaScript](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP) - This is YouTube playlist about JavaScript


## 🟦 2.2 Objects and Object Constructors

### 🔴 2.2.1 Introduction

* We can define objects in different ways, but the best way is to use `object literal` syntax:

```javascript
const myObject = {
    name: 'Shiv Kumar',
    age: 77,
    "obnxious property": function() { /* do stuff*/  }
}
```

* We can access properties from this object in two ways:

1) Dot notation `myObject.propertyName`

2) Bracket notation `myObject[propertyName]

* We can only use dot notation on a property without a space, it will take anything after the '.' as the property name => variables do not work:

```javascript
myObject."property" // COMPILER ERROR

const variable = 'name'
myOject.variable // undefined as this is getting the value for property 'variable'
```

* The bracket notation DOES ALLOW for spaces and variables:

```javascript
myObject["obnxious property"] // [Function: obnxious property]

const variable = 'name'
myObject[variable] // Shiv Kumar
```

### 🔴 2.2.2 Lesson Overview

Here is a general overview of the topics in this lesson:

* How to write an object constructor and instantiate the object ✅

* Describe what's a prototype and how to to use it ✅

* Explain inheritance of prototypes ✅

* Understand the guidelines of prototypical inheritance ✅

* Explain what `Object.create` does ✅

* Explain what the `this` keyword ✅
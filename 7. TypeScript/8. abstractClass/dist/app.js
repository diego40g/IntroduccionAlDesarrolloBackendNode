"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `name: ${this.name}, age: ${this.age}`;
    }
}
class Mammal extends Animal {
    //mas legible usar JSON
    constructor(data) {
        const { name, age, canSwim } = data;
        super(name, age); //primero poner super porque debemos instanciar la clase padre
        this.canSwim = canSwim;
    }
    swim() {
        console.log(`${this.name} can swim ${this.canSwim}`);
    }
}
class Bird extends Animal {
    constructor(name, age, canFly) {
        super(name, age); //constructor de la clase padre
        this.canFly = canFly;
    }
    fly() {
        console.log(`${this.name} can fly ${this.canFly}`);
    }
}
/**
 * Clase no abstract no puede instanciarse
 * new Animal("asd",31)
 * */
const dog = new Mammal({ age: 3, canSwim: false, name: "Baylee" });
const condor = new Bird("Loquillo", 10, true);
console.log("mammal ", dog.toString());
dog.swim();
console.log("birth ", condor.toString());
condor.fly();

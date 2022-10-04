"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.datoPrivado = "no acceso fuera";
    }
    toString() {
        return `name: ${this.name}, age: ${this.age}, datoPrivado: ${this.datoPrivado}`;
    }
}
const dog = new Animal("Lulu", 2);
console.log("dog name", dog.name);
console.log("dog age", dog.age);
//console.log("dog age",dog.datoPrivado);
console.log("dog", dog.toString());

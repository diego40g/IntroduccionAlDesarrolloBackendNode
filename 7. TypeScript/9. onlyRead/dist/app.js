"use strict";
class Person {
    constructor(data) {
        const { dni, name, age } = data;
        this.dni = dni;
        this.name = name;
        this.age = age;
    }
}
const user = new Person({ name: "Diego", dni: "12345687", age: 25 });
console.log("User dni: ", user.dni);
console.log("User name: ", user.name);
console.log("User age: ", user.age);
user.age = 28;
user.name = "Ignacio";
/**
 * Solo puede leer esta propiedad, no puede ser modificado
 * user.dni ="0987654321";
 */
console.log("User dni: ", user.dni);
console.log("User name: ", user.name);
console.log("User age: ", user.age);
/****************************************************** */
class Person1 {
    constructor(dni, data) {
        this.dni = dni;
        const { name, age } = data;
        this.name = name;
        this.age = age;
    }
}
const user1 = new Person1("12345687", { name: "Diego1", age: 25 });
console.log("User dni: ", user1.dni);
console.log("User name: ", user1.name);
console.log("User age: ", user1.age);
user1.age = 28;
user1.name = "Ignacio1";
/**
 * Solo puede leer esta propiedad, no puede ser modificado
 * user.dni ="0987654321";
 */
console.log("User dni: ", user1.dni);
console.log("User name: ", user1.name);
console.log("User age: ", user1.age);

"use strict";
const checkCredentials = (email, password) => {
    return "login ok";
};
const login = (data) => {
    const { email, password, loginType } = data;
    switch (loginType) {
        case "password":
            return checkCredentials(email, password); //pasword es un string
        case "facebook":
            return "login ok";
        case "google":
            return "login OK";
        default:
            return "login invalid";
    }
};
/****************************** Para crear clases apartir de funciones *******************************/
class User {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname,
            this.age = age;
    }
    static fromJson(data) {
        return new User(data.name, data.lastname, data.age);
    }
}
class User1 {
    constructor() { }
    static fromJson(data) {
        const user = new User1();
        user.name = data.name;
        user.lastname = data.lastname;
        user.age = data.age;
        return user;
    }
}
console.log(User.fromJson({ name: "Diego", lastname: "Paz", age: 25 }));
console.log(User1.fromJson({ name: "Diego", lastname: "Paz", age: 25 }));

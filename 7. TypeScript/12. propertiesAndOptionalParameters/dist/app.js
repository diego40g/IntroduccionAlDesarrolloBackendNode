"use strict";
/********************************** USAR UNDEFINED ? **********************************/
class Vehicle {
    constructor(data) {
        const { model, year } = data;
        this.model = model;
        this.year = year;
    }
}
class Employee {
    constructor(data) {
        const { id, name, vehicle } = data;
        this.id = id;
        this.name = name;
        this.vehicle = vehicle;
    }
}
const kia = new Vehicle({ model: "Cerato", year: 2010 });
const diego = new Employee({ id: 123, name: "Diego Paz" });
console.log("Id: ", diego.id);
console.log("Vehiulo: ", diego.vehicle);
const ignacio = new Employee({ id: 123, name: "Ignacio Naula", vehicle: kia });
console.log("Id: ", ignacio.id);
console.log("Vehiulo: ", ignacio.vehicle);
/********************************** PARA PASAR EL PARAMETRO COMO NULL **********************************/
class Vehicle1 {
    constructor(data) {
        const { model, year } = data;
        this.model = model;
        this.year = year;
    }
}
class Employee1 {
    constructor(data) {
        const { id, name, vehicle } = data;
        this.id = id;
        this.name = name;
        this.vehicle = vehicle;
    }
}
const kia1 = new Vehicle1({ model: "Cerato", year: 2010 });
const diego1 = new Employee1({ id: 123, name: "Diego Paz", vehicle: null });
console.log("Id: ", diego1.id);
console.log("Vehiulo: ", diego1.vehicle);
const ignacio1 = new Employee1({ id: 123, name: "Ignacio Naula", vehicle: kia1 });
console.log("Id: ", ignacio1.id);
console.log("Vehiulo: ", ignacio1.vehicle);
/* FUNCIONES CON ? */
const getPrice = (normalPrice, discount) => {
    if (discount) {
        return normalPrice - (normalPrice * discount / 100);
    }
    return normalPrice;
};
console.log("Galleta: ", getPrice(0.50));
console.log("Galleta: ", getPrice(0.50, 10));
/* FUCIONES CON VALOR POR DEFECTO */
const getPrice1 = (normalPrice, discount = 0) => {
    return normalPrice - (normalPrice * discount / 100);
};
console.log("Galleta: ", getPrice1(0.50));
console.log("Galleta: ", getPrice1(0.50, 10));
/* FUNCION LAMDA */
const getPrice2 = (normalPrice, discount = 0) => normalPrice - (normalPrice * discount / 100);
console.log("Galleta: ", getPrice2(0.50));
console.log("Galleta: ", getPrice2(0.50, 10));

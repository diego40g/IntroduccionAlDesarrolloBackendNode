/********************************** USAR UNDEFINED ? **********************************/

class Vehicle {
    model: string;
    year: number;

    constructor(data:{
        model: string;
        year: number;
    }){
        const {model, year}=data;
        this.model=model;
        this.year=year;
    }
}

class Employee{
    id:number;
    name: string;
    vehicle?: Vehicle;

    constructor(data:{id:number;name:string;vehicle?:Vehicle}){
        const {id,name,vehicle}=data;
        this.id=id;
        this.name=name;
        this.vehicle=vehicle;
    }
}

const kia=new Vehicle({model: "Cerato",year:2010});

const diego=new Employee({id:123,name:"Diego Paz"})

console.log("Id: ",diego.id);
console.log("Vehiulo: ",diego.vehicle);

const ignacio=new Employee({id:123,name:"Ignacio Naula",vehicle:kia})
console.log("Id: ",ignacio.id);
console.log("Vehiulo: ",ignacio.vehicle);


/********************************** PARA PASAR EL PARAMETRO COMO NULL **********************************/

class Vehicle1 {
    model: string;
    year: number;

    constructor(data:{
        model: string;
        year: number;
    }){
        const {model, year}=data;
        this.model=model;
        this.year=year;
    }
}

class Employee1{
    id:number;
    name: string;
    vehicle: Vehicle | null;

    constructor(data:{id:number;name:string;vehicle:Vehicle | null}){
        const {id,name,vehicle}=data;
        this.id=id;
        this.name=name;
        this.vehicle=vehicle;
    }
}

const kia1=new Vehicle1({model: "Cerato",year:2010});

const diego1=new Employee1({id:123,name:"Diego Paz",vehicle:null})

console.log("Id: ",diego1.id);
console.log("Vehiulo: ",diego1.vehicle);

const ignacio1=new Employee1({id:123,name:"Ignacio Naula",vehicle:kia1})
console.log("Id: ",ignacio1.id);
console.log("Vehiulo: ",ignacio1.vehicle);


/* FUNCIONES CON ? */

const getPrice = (normalPrice:number, discount?:number): number => {
    if(discount){
        return normalPrice-(normalPrice*discount/100);
    }
    return normalPrice;
}

console.log("Galleta: ", getPrice(0.50));
console.log("Galleta: ", getPrice(0.50,10));


/* FUCIONES CON VALOR POR DEFECTO */

const getPrice1 = (normalPrice:number, discount:number=0): number => {
    return normalPrice-(normalPrice*discount/100);
}

console.log("Galleta: ", getPrice1(0.50));
console.log("Galleta: ", getPrice1(0.50,10));

/* FUNCION LAMDA */

const getPrice2 = (normalPrice:number, discount:number=0): number => normalPrice-(normalPrice*discount/100);

console.log("Galleta: ", getPrice2(0.50));
console.log("Galleta: ", getPrice2(0.50,10));
class Person {
    readonly dni: string;
    private _name: string;
    private _age: number;

    constructor(data: {
        dni: string;
        name: string;
        age: number;
    }) {
        const { dni, name, age } = data;
        this.dni = dni;
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if(value.trim().length===0){//trim elimina espacios vacios
            throw new Error("Invalid name");
        }
        this._name = value;
    }
    
    get age(): number{
        return this._age;
    }
    set age(value: number){
        if(value<0){
            throw new Error("Invalid age");
        }
        this._age = value;
    }
}

const user: Person = new Person({name:"Diego",dni:"12345687",age:25});

console.log("User dni: ", user.dni);
console.log("User name: ", user.name);
console.log("User age: ", user.age);

user.age = -2;
user.name = "           ";

console.log("User dni: ", user.dni);
console.log("User name: ", user.name);
console.log("User age: ", user.age);
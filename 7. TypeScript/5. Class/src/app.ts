class Animal {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
}

const dog = new Animal("Lulu",2);

console.log("dog: ",dog);

abstract class Animal {
    protected name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    toString():string{
        return `name: ${this.name}, age: ${this.age}`;
    }
}

class Mammal extends Animal{
    canSwim: boolean;
    //mas legible usar JSON
    constructor(data: {name:string;age:number;canSwim:boolean;}){
        const { name, age, canSwim } = data;
        super(name,age); //primero poner super porque debemos instanciar la clase padre
        this.canSwim=canSwim;
    }

    swim():void{
        console.log(`${this.name} can swim ${this.canSwim}`);
    }
}

class Bird extends Animal{
    canFly: boolean;
    constructor(name:string,age:number,canFly:boolean){
        super(name,age);//constructor de la clase padre
        this.canFly = canFly;
    }

    fly():void{
        console.log(`${this.name} can fly ${this.canFly}`);
    }
}

/**
 * Clase no abstract no puede instanciarse
 * new Animal("asd",31)
 * */

const dog = new Mammal({age:3,canSwim:false,name:"Baylee"});
const condor = new Bird("Loquillo",10,true)



console.log("mammal ",dog.toString());
dog.swim()
console.log("birth ",condor.toString());
condor.fly();

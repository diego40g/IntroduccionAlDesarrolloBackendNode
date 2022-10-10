

const checkCredentials = (email: string, password:string):string => {
    return "login ok";
}

const login =(data:{email:string, password?:string,password2?:string,loginType:string }):string => {
    const { email, password, loginType } = data;
    switch(loginType){
        case "password":
            return checkCredentials(email,password!);//pasword es un string
        case "facebook":
            return "login ok";
        case "google":
            return "login OK";

        default:
            return "login invalid"
    }
}

console.log(login({email:"email@email.com",loginType:"password",password:undefined,password2:"12312312"}));
console.log(login({email:"email@email.com",loginType:"facebook",password:undefined,password2:"12312312"}));
console.log(login({email:"email@email.com",loginType:"google",password:undefined,password2:"12312312"}));
console.log(login({email:"email@email.com",loginType:"EMAIL",password:undefined,password2:"12312312"}));

/****************************** Para crear clases apartir de funciones *******************************/
class User{
    name: string;
    lastname: string;
    age:number;

    private constructor(name:string,lastname:string,age:number){
        this.name=name
        this.lastname=lastname,
        this.age=age
    }

    static fromJson(data: {name:string;lastname:string;age:number;}):User{
        return new User(data.name,data.lastname,data.age);
    }
}

class User1{
    name!: string;
    lastname!: string;
    age!:number;

    private constructor(){}

    static fromJson(data:{name:string;lastname:string;age:number;}):User1{
        const user=new User1();
        user.name=data.name;
        user.lastname=data.lastname;
        user.age=data.age;
        return user;
    }
}

console.log(User.fromJson({name:"Diego",lastname:"Paz",age:25}));
console.log(User1.fromJson({name:"Diego",lastname:"Paz",age:25}));
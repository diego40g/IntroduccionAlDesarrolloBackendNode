/******************* INTERFACES EN TIPO *****************/
/*type User = {  para isntanciar datos personalizados
    name:string;
    age:number;
    address?:string;
}*/

interface User {
    name:string;
    age: number;
    address?:string;
}

interface Employee extends User{
    job:string;
}

let User1:User = {
    name:"Diego",
    age: 24
}

let Employer1:Employee={
    name:"Ignacio",
    age:25,
    address:"Ecuador",
    job:"Software developer"
}


/******************* INTERFACES EN CLASES *****************/
interface Authentication {
    apiHost?: string;
    login(email:string, password:string):string|null;
    register(data: {username:string, email:string, password:string}):boolean;
}

class AuthenticationClient implements Authentication {
    apiHost?: string;
    
    login(email: string, password: string): string | null {
        return null;
    }
    
    register(data: { username: string; email: string; password:string}): boolean {
        return false;
    }
}
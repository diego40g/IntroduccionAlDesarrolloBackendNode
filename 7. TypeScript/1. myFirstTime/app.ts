/* debe compilar para transaformar a js
tsc app.ts*/

/* Para evitar escribir siempre colocamos 
tsc app.ts --watch
tsc app.ts -w
 */
function addition(num1:number, num2:number):number {
    return num1+num2;
}

console.log("La suma es: ", addition(3,5));


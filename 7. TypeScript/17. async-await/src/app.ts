const sleep=(seconds:number):Promise<void>=>{
    return new Promise<void>((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },seconds*1000);
    });
};
const run1 = () => {
    sleep(2).then(()=>{
        console.log("HOLA !!!");
    });
}
run1();


/******************** USANDO ASYNC Y AWAIT **********************/
const run2 = async (): Promise<void> => {
    await sleep(2);
    console.log("HOLA async-await!!!");
}

run2();


/******************* RETORNO DE NUMERO *************************/
const sleepNumber=(seconds:number):Promise<number>=>{
    return new Promise<number>((resolve,reject)=>{
        setTimeout(()=>{
            resolve(seconds);
        },seconds*1000);
    });
};
const run3 = () => {
    sleepNumber(2).then((value)=>{
        console.log("HOLA !!!",value);
    });
}
run3();
/*************************************/
const run4 = async (): Promise<void> => {
    const value:number = await sleepNumber(2);
    console.log("HOLA async-await!!!",value);
}

run2();
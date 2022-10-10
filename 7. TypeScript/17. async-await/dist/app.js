"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sleep = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
};
const run1 = () => {
    sleep(2).then(() => {
        console.log("HOLA !!!");
    });
};
run1();
/******************** USANDO ASYNC Y AWAIT **********************/
const run2 = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sleep(2);
    console.log("HOLA async-await!!!");
});
run2();
/******************* RETORNO DE NUMERO *************************/
const sleepNumber = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(seconds);
        }, seconds * 1000);
    });
};
const run3 = () => {
    sleepNumber(2).then((value) => {
        console.log("HOLA !!!", value);
    });
};
run3();
/*************************************/
const run4 = () => __awaiter(void 0, void 0, void 0, function* () {
    const value = yield sleepNumber(2);
    console.log("HOLA async-await!!!", value);
});
run2();

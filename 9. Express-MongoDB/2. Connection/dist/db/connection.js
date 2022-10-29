"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connect = async () => {
    try {
        await mongoose_1.default.connect('mongodb://root:example@mongo:27017/api_rest', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true,
        });
        return true;
    }
    catch (e) {
        console.error(e);
        return false;
    }
};
exports.default = connect;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./db/connection"));
const v1_1 = __importDefault(require("./routes/v1"));
const body_parser_1 = __importDefault(require("body-parser"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
(0, v1_1.default)(app);
app.use((req, res) => {
    res.status(404).send("Not Found");
});
(0, connection_1.default)().then((connected) => {
    if (connected) {
        app.listen(PORT, () => {
            console.log("Escuchando en el puerto " + PORT);
        });
    }
    else {
        console.log("Error al conectar a mongo DB");
    }
});

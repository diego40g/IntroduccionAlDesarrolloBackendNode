"use strict";
class AppConfig {
    static getData() {
        return 123;
    }
}
AppConfig.apiKey = "12312312311";
//no necesito instanciar la clase
console.log(AppConfig.apiKey);
console.log(AppConfig.getData());

class AppConfig{
    static apiKey: string = "12312312311";

    static getData():number{
        return 123;
    }
}

//no necesito instanciar la clase
console.log(AppConfig.apiKey);
console.log(AppConfig.getData());
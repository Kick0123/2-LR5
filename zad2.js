// Функция-замыкание
function createLogger(message) {
    return function () {
        console.log("Logged message: ".concat(message));
    };
}
// Использование
var logHello = createLogger("Hello, world!");
var logTypeScript = createLogger("TypeScript is awesome!");
var logClosure = createLogger("Closures are powerful!");
// Вызовы функций
logHello();
logTypeScript();
logClosure();

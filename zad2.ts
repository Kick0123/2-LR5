// Функция-замыкание
function createLogger(message: string): () => void {
    return () => {
        console.log(`Logged message: ${message}`);
    };
}

// Использование
const logHello = createLogger("Hello, world!");
const logTypeScript = createLogger("TypeScript is awesome!");
const logClosure = createLogger("Closures are powerful!");

// Вызовы функций
logHello();
logTypeScript();
logClosure();

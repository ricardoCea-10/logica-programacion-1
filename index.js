const prompt = require('prompt-sync')() // Incluimos Prompt en nuestro programa.

// Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
let num1 = parseInt(prompt("Ingrese el primer número: "))
let num2 = parseInt(prompt("Ingrese el segundo número: "))
let num3 = parseInt(prompt("Ingrese el tercer número: "))

// Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola diciendo que los números son iguales.
console.log("######################################################################")
if (num1 == num2 || num1 == num3 || num2 == num3) {
    console.log("");
    console.log("Hay números que son iguales");
} 

// Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
let mayor = Math.max(num1, num2, num3);
let menor = Math.min(num1, num2, num3);
let centro = num1 + num2 + num3 - mayor - menor;

// Debe imprimir los números por consola ordenados de mayor a menor, y de menor a mayor.
console.log("");
console.log("Números ordenados de mayor a menor:");
console.log(mayor + ", " + centro + ", " + menor);
console.log("Números ordenador de menor a mayor:")
console.log(menor + ", " + centro + ", " + mayor);

// Fin programa
console.log("");
console.log("Fin del programa");

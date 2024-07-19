//constantes de numeros
const num1 = Number(prompt("Ingrese el primer valor"));
const num2 = Number(prompt("Ingrese el segundo valor"));
const num3 = Number(prompt("Ingrese el tercer valor"));
const num4 = Number(prompt("Ingrese el cuarto valor"));
const num5 = Number(prompt("Ingrese el quinto valor"));

//variables de suma de cifras y promedio
let sum = num1+num2+num3+num4+num5;
let average = (num1+num2+num3+num4+num5) / 5;


document.write(`La suma de todos los valores es: ${sum} <br><br> El promedio de todos los valores es de: ${average}`) 

  const num1 = Number(prompt("Ingrese el número 1. Tiene que ser un numero mayor a 0 "));
  const num2 = Number(prompt("Ingrese el número 2. Tiene que ser un numero mayor a 0 y diferente que el primer número"));

  //condicional si ambos numeros tienen mismo valor
  if (num1 === num2){
    alert("Tiene que escoger un número distinto al primer valor. Intente de nuevo");
    location.reload()
  }

  //condicional si uno de los numeros es igual a 0
  if (num1 === 0 || num2 === 0){
    alert("Uno de los valores es 0. Intente de nuevo");
    location.reload()
  }
  //variables de operaciones
  let resultado = num1 + num2;
  let resultadoMultiplicacion = num1 * num2
  let resultadoDivision = num1 / num2
  let resultadoResta = num1 - num2
  let resultadoModulo = num1 % num2
//Mostrar resultados en documento
 document.write(`La suma de ambos números es: ${resultado} <br> la resta de ambos números es: ${resultadoResta} <br> la multiplicación de ambos números es: ${resultadoMultiplicacion} <br> la división de ambos números es: ${resultadoDivision} <br> el resto de la división entre ambos numero es: ${resultadoModulo}`) 
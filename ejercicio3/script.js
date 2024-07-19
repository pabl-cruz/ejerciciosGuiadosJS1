
  const celsius = Number(prompt("Ingrese la temperatura en celsius"));

//variables de temperaturas
  let kelvin = celsius + 273.15;
  let fahrenheit = (celsius * 9/5) + 32;

//mostrar resultados en documento
 document.write(`${celsius}°C Equivalen a:<br><br> ${kelvin} <strong>Kelvin</strong> <br><br> ${fahrenheit}°F <strong>Fahrenheit</strong>`) 
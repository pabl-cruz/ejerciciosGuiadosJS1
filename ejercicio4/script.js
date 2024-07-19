
  const daysNumber = Number(prompt("Ingrese la cantidad de días"));

  //variables
  let year = Math.floor(daysNumber / 365); //año
  let restyear = daysNumber%365 //resto de division de dias 
  let weeks= Math.floor(restyear/7); //semanas
  let restweek = daysNumber%7 //resto de division de dias contra semana
  let days= Math.floor(restweek);

 //mostrar resultado en pantalla
 document.write(`${daysNumber} días Equivalen a:<br><br> ${year} <strong>año(s)</strong>, ${weeks} <strong>Semana(s)</strong>, ${days} <strong>día(s)</strong>`);
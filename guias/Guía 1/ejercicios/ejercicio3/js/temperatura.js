/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Materia: Desarrollo de Aplicaciones Web con                 *
 *         Software Interpretado en el Cliente                 *
 * Archivo: Convertidor.js                                     *
 * Descripción: Convierte metros en otros unidades de medidas. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//Función que funciona como manejador de evento
//al producirse el evento load (carga de la página)

function init() {
  //Elemento div donde se mostrará el menú de las medidas
  let celcius, fahrenheit;

  celcius = prompt("Ingrese la temperatura en grados celcius a Convertir a Fahrenheit",'');

  fahrenheit = (celcius * 9)/5 + 32;

  let resultado = document.getElementById('resultado'), contenido;

  contenido = "<table><tr><th>Celcius</th><th>Fahrenheit</th></tr>";
  contenido += "<tr><th>"+celcius+"°C</th><th>"+fahrenheit+"°F</th></tr></table>";

  resultado.innerHTML = contenido;
}

window.onload = init;
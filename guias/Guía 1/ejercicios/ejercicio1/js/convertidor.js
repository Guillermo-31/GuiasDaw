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
  var medidas = document.getElementById('medidas');
  //Elemento div donde se mostrarán los resultado
  var resultados = document.getElementById('resultados');
  //Creando el contenido a la página
  var contenido = "<header>\n";
  contenido += "\t<h1></h1>\n";
  contenido += "</header>\n";
  contenido += "<nav class='menu'>\n";
  contenido += "<ul>\n";
  contenido += "\t<li>\n";
  contenido += "\t\t<a href=\"javascript:void(0)\" id='ft'><span>Pies</span></a>\n";
  contenido += "</li>\n";
  contenido += "\t<li>\n";
  contenido += "\t\t<a href=\"javascript:void(0)\"id='in'><span>Pulgadas</span></a>\n";
  contenido += "</li>\n";
  contenido += "\t<li>\n";
  contenido += "\t\t<a href=\"javascript:void(0)\" id='yd'><span>Yardas</span></a>\n";
  contenido += "</li>\n";
  contenido += "</ul>\n";
  contenido += "</nav>\n";

  //Colocar el contenido dentro el elemento div
  medidas.innerHTML = contenido;

  //Preparando el manejo del evento click sobre los enlaces del menú
  var opciones = document.getElementsByTagName('a');
  //Recorrer todos los elementos de enlace (elementos a) y asignar el manejador del evento click
  for (i = 0; i < opciones.length; i++) {
      var boton = document.getElementById('ft');
      var boton1 = document.getElementById('in');
      var boton2 = document.getElementById('yd');
    switch(i){
      case 0:
        //Función sumar
        opciones[i].onclick = function(){
          inicializarBotones();
          var cant = prompt('Introduzca (en metros) la cantidad a convertir:','');
          resultados.innerHTML = "<p class=\"letterpress\">Cantidad a Convertir: "+cant+"m<br/> Cantidad Convertida: "+ (parseFloat(cant)*3.281)+"ft</p>\n";
          boton.style.background = "#820d1d";
        }
      break;
      case 1:
        opciones[i].onclick = function(){
          inicializarBotones();
          var cant = prompt('Introduzca (en metros) la cantidad a convertir:','');
          resultados.innerHTML = "<p class=\"letterpress\">Cantidad a Convertir: "+cant+"m<br/> Cantidad Convertida: "+ (parseFloat(cant)*39.37)+"in</p>\n";
          boton1.style.background = "#820d1d";
        }
      break;
      case 2:
        opciones[i].onclick = function(){
          inicializarBotones();
          var cant = prompt('Introduzca (en metros) la cantidad a convertir:','');
          resultados.innerHTML = "<p class=\"letterpress\">Cantidad a Convertir: "+cant+"m<br/> Cantidad Convertida: "+ (parseFloat(cant)*1.094)+"yd</p>\n";
          boton2.style.background = "#820d1d";
        }
      break;
    }
  }
}

function inicializarBotones(){
  var boton = document.getElementById('ft');
  var boton1 = document.getElementById('in');
  var boton2 = document.getElementById('yd');

  boton.style.background = "#b72236";
  boton1.style.background = "#b72236";
  boton2.style.background = "#b72236";
}

window.onload = init;
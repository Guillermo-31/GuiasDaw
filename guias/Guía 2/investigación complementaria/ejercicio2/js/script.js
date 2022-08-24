const arreglo = [1, 2, 3];
let container = document.getElementById("container"), datos = document.getElementById("cont-datos"), contInicial = document.getElementById("cont-Inicial"), contInput = document.getElementById("cont-input"), entrada = document.getElementById("entrada"), contFinal = document.getElementById("cont-Final");

function push(){
  container.style.opacity = 1;
  datos.innerHTML += "<h2>Función Push()</h2>";
  datos.innerHTML += "<p>El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.</p>";

  contInicial.style.opacity = 1;
  contInicial.innerHTML += "<h3>Arreglo Antes de la Función Push()</h3>"

  contInicial.innerHTML += "<p id='parrafo-I'></p>";

  parrafoI = document.getElementById("parrafo-I");

  for (let i = 0; i < arreglo.length; i++) {
    if (i == arreglo.length-1)
      parrafoI.innerHTML += arreglo[i];
    else
      parrafoI.innerHTML += arreglo[i] + ", ";
  }

  do {
    entrada = prompt("Ingrese el número que desee agregar al arreglo");
    if (isNaN(entrada))
      alert("Ha ingresado un valor inválido");
  } while (isNaN(entrada));

  let nuevoElemento = Number(entrada);

  const tam = arreglo.push(nuevoElemento);

  contFinal.style.opacity = 1;

  contFinal.innerHTML += "<h2>Arreglo Final</h2>"

  contFinal.innerHTML += "<h3>Arreglo Después de la Función Push()</h3>";

  contFinal.innerHTML += "<p>Tamaño del arreglo: "+tam+"</p><br/>";

  contFinal.innerHTML += "<p id='parrafo-F'></p>";

  parrafoF = document.getElementById("parrafo-F");

  for (let i = 0; i < arreglo.length; i++) {
    if (i == arreglo.length-1)
      parrafoF.innerHTML += arreglo[i];
    else
      parrafoF.innerHTML += arreglo[i] + ", ";
  }
}

function pop(){
  container.style.opacity = 1;
  datos.innerHTML += "<h2>Función Pop()</h2>";
  datos.innerHTML += "<p>El método pop() elimina el último elemento de un array y devuelve su valor al método que lo llamó.</p>";

  contInicial.style.opacity = 1;

  for (let i = 0; i < arreglo.length; i++) {
    if (i == arreglo.length-1)
      contInicial.innerHTML += arreglo[i];
    else
      contInicial.innerHTML += arreglo[i] + ", ";
  }
}
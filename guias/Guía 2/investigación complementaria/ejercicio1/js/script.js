function absFn(){
  let num, abso;
  alert("La función \"abs\" permite obtener el valor absoluto de un númmero");
  num = Number(prompt("Ingrese un número que desee para ver su valor absoluto."));

  abso = Math.abs(num);

  alert("El número ingresado fue: " + num + " y su valor absoluto es: " + abso);
}

function roundFn(){
  let num, aprox;

  alert("La función \"round\" retorna el valor de un número decimal redondeado al entero más cercano.");
  num = Number(prompt("Ingrese el número decimal que desee"));

  aprox = Math.round(num);

  alert("El número ingresado fue: " + num + " y su valor redondeado es: " + aprox);
}

function ceilFn(){
  let num, numceil;

  alert("La función \"ceil\" devuelve un número entero mayor o igual más próximo a un número dado (este número, puede ser entero o decimal).");

  num = Number(prompt("Ingrese un número (entero o decimal) que desee"));

  numceil = Math.ceil(num);

  alert("El número ingresado fue: " + num + " y el número entero mayor o igual más próximo es: " + numceil);
}

function floorFn(){
  let num, numfloor;

  alert("La función \"floor\" devuelve un número entero menor o igual a un número dado (este número, puede ser entero o decimal).");

  num = Number(prompt("Ingrese un número (entero o decimal) que desee"));

  numfloor = Math.floor(num);

  alert("El número ingresado fue: " + num + " y el número entero menor o igual más próximo es: " + numfloor);
}

function expFn(){
  let num, numexp;

  alert("La función \"exp\" devuelde e^x, donde x es un número ingresado por el usuario.");

  num = Number(prompt("Ingrese un número que desee"));

  numexp = Math.exp(num);

  alert("El número ingresado fue: " + num + " y el resultado de \"e^" + num + "\" es: " + numexp);
}

function logFn(){
  let num, numlog;

  alert("La función \"log\" devuelve la base neutral de un número (base e), esta función es equivalente a \"ln(x)\"");

  num = Number(prompt("Ingrese el número que desee"));

  numlog = Math.log(num);

  alert("El número ingresado fue " + num + " y el resultado es: " + numlog);
}

function randomFn(){
  alert("La función \"random\" devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango. Dicho rango puede ser ampliado hasta los valores deseados. La implementación selecciona la semilla inicial del algoritmo de generación de números aleatorios, no pudiendo ser esta elegida o restablecida por el usuario.");

}
alert("Número aleatorio: " + Math.random());
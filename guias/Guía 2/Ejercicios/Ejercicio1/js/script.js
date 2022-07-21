let num, axuiliar, mayorC, menorC, sumC = cifrasIm = cifrasPar = sumImp = sumPar = 0, i, j, numCifras, cantCifras, negativo = false, cifras, operacion, resultados;
num = Math.abs(prompt('Ingrese el número entero que quiera: ')).toFixed(0);

cantCifras = num.length;

//num = Number(num);

for (i = 0; i < num.length; i++) {
  operacion = num[i] % 2;
  operacion == 0 ? (cifrasPar += 1, sumPar = sumPar + num[i]) : (cifrasIm += 1, sumImp = sumImp + num[i]);
  sumC += num[i];
}

resultados = document.getElementById("resultados");

  resultados.innerHTML = "<h1>RESULTADOS</h1>";
  resultados.innerHTML += "<h3>Cantidad de Cifras: </h3>"
  resultados.innerHTML += "<p>"+cantCifras+"</p>";
  resultados.innerHTML += "<h3>Cantidad de Cifras Impares: </h3>"
  resultados.innerHTML += "<p>"+cifrasIm+"</p>";
  resultados.innerHTML += "<h3>Cantidad de Cifras Pares: </h3>"
  resultados.innerHTML += "<p>"+cifrasPar+"</p>";
  resultados.innerHTML += "<h3>Suma de Cifras Impares: </h3>"
  resultados.innerHTML += "<p>"+sumImp+"</p>";
  resultados.innerHTML += "<h3>Suma de Cifras Pares: </h3>"
  resultados.innerHTML += "<p>"+sumPar+"</p>";
  resultados.innerHTML += "<h3>Suma de Todas las Cifras: </h3>"
  resultados.innerHTML += "<p>"+sumC+"</p>";
  resultados.innerHTML += "<h3>Cifra mayor: </h3>"
  resultados.innerHTML += "<p>"+num[cantCifras-1]+"</p>";
  resultados.innerHTML += "<h3>Cifra menor: </h3>"
  resultados.innerHTML += "<p>"+num[0]+"</p>";
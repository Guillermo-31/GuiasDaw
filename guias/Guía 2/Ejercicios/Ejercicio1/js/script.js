let num, axuiliar, mayorC, menorC, sumC, cifrasIm, cifrasPar, impares, pares, i, j, numCifras, cantCifras, continuar  = true, cifras;
num = prompt('Ingrese el número entero que quiera: ','');

cifras = num.split('');

for (i = 0;  i < cifras.length; i++) {
  alert("La cfira "+i+" es: "+cifras[i]);
}
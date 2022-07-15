let num, axuiliar, mayorC, menorC, sumC, cifrasIm, cifrasPar, impares, pares, i, j, numCifras, cantCifras, negativo = false, cifras;
num = Math.abs(prompt('Ingrese el número entero que quiera: ')).toFixed(0);
cantCifras = num.length;

for (i = 0;  i < num.length; i++) {
  alert("La cifra "+i+" es: "+ num[i]);
}
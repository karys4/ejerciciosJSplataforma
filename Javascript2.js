/* 
Suma de arreglo:
Teniendo un arreglo de enteros encuentra el resultado de la suma de los elementos del arreglo.

Reglas:
ar[i] <= 1000 (El arreglo debe de ser menor a mil datos)
Tienes que crear la función que haga la suma

Ejemplo de entrada
[1,2,3]
Ejemplo del resultado
6
Explicación
1 + 2 + 3 = 6
*/

var arreglo = [1, 2, 3];
var suma = 0;

function sumaArreglo() {
  for (let index = 0; index < arreglo.length; index++) {
    suma += arreglo[index];
  }
  console.log(suma);
}

sumaArreglo();


function encontrarMayorPalabra(str) {
var max = 0;
// crear variable que contenga el string separado en un arreglo
var arr = str.split(" ");
// creamos un for donde recorremos el arreglo creado anteriormente
  for(var x=0;x<arr.length;x++){
    // si la variable es menor al lugar donde esta posicionado el largo del arreglo
    if(max<arr[x].length){
      // si se cumple igualamos la variable max con el largo de esa poscicion del arreglo
      max = arr[x].length;
    }
  }
  // retornamos la variable.
      return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

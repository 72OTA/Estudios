function palindrome(str) {
  // Good luck!
  // creo una variable que contiene el string y lo pasa a minusculas
  var minusculas = str.toLowerCase();
  // creo una variable que reemplaza todos los caracteres especiales por nada
  var quitarCaracteres = minusculas.replace(/[\s_,.\-:()/]/g, "");
  // creo una variable que contiene la palabra en minusculas y sin caracteres especiales para separarla en un arreglo
  var separarString = quitarCaracteres.split("");
  // asigno el valor a str y uno el arreglo
  str = separarString.join('');
  // pone el arreglo al revez y lo asigna a una nueva variable
  var strReverso = separarString.reverse();
  // crea una variable donde almacena el arreglo reverso en un string
  var strRevez = strReverso.join('');
  // compara si el string y la nueva variable con el valor al revez son iguales
  if (str == strRevez) {
    //retorna verdadero si es cierto
    return true;
  }
  // retorna falso si no es cierto
  return false;
}
palindrome("_eye");

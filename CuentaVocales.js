//Funciones que cuentan silabas: Posicionadas desde la menor tiempo de ejecucion

//1
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
//-------------------------------------------------------
//2
function getCount(str) {
 var vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount === null ? 0 : vowelsCount.length;
}


//Se llama a la funcion para que cuente las vocales de la palabra.
/*-----------------------------------------------------------
describe("Case 1", function(){
    it ("should be defined", function(){
        Test.assertEquals(getCount("abracadabra"), 5)
    });
});
---------------------------------------------------------------*/

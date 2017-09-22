//funcion
//1
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
//2
function maskify(cc) {
var replaced = cc.replace(/.(?=.{4,}$)/g, '#');
return replaced;
}

//ejemplo

describe("maskify", function(){
  it("should work for some examples", function(){
    Test.assertEquals(maskify('4556364607935616'), '############5616');
    Test.assertEquals(maskify('1'), '1');
    Test.assertEquals(maskify('11111'), '#1111');
  });
});

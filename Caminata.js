//funcion
//1
function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}
//2
function isValidWalk(walk) {
  var n = 0;
  var s = 0;
  var e = 0;
  var w = 0;
  if (walk.length !== 10) {
    return false;
  }
  for (i = 0; i < walk.length; i++) {
    switch(walk[i]) {
    case "n":
        n++;
        break;
     case "s":
        s++;
        break;
     case "w":
        w++;
        break;
     case "e":
        e++;
}
  }
  if ((n !== s) || (e !== w)) {
    return false;
  }
  else return true; 
}

//ejemplo

Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
Test.expect(!isValidWalk(['w']), 'should return false');
Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

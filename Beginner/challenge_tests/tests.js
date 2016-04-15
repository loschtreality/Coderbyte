QUnit.test( "ABCheck", function( assert ) {
  assert.ok(ABCheck('after baldy') === false, "Returns false when given 'after baldy'" );
  assert.ok(ABCheck('lane borrowed') === true, "Returns true when given 'lane borrowed'"  );
  assert.ok(ABCheck('Laura sobs') === true, "Returns true when given 'Laura sobs'"  );
  assert.ok(ABCheck('aaaaddddd') === false, "Returns false when given 'aaaaddddd'"  );
});


QUnit.test("Additive Persistence",function(assert){
  assert.equal(AdditivePersistence(4),0,'returns 0 when given 4');
  assert.equal(AdditivePersistence(19),2,'returns 2 when given 4');
  assert.equal(AdditivePersistence(2718),2,'returns 2 when given 4');
});


QUnit.test("Alphabet Soup",function(assert){
  assert.equal(AlphabetSoup('coderbyte'),'bcdeeorty', "returns 'bcdeeorty' when given 'coderbyte'");
  assert.equal(AlphabetSoup('helloworld'),'dehllloorw',"returns 'dehllloorw' when given 'helloworld'");
});


QUnit.test("Arith Geo",function(assert){
  assert.equal(ArithGeo([2,6,18,54]),'Geometric',"returns 'Geometric' when given the array [2,6,18,54]");
  assert.equal(ArithGeo([2,4,6,8,10,12]),'Arithmetic',"returns 'Arithmetic' when given the array [2,4,6,8,10,12]");
  assert.equal(ArithGeo([5,12,22,32]),'-1',"returns '-1' when given [5,12,22,32]");
});


QUnit.test("Array Addition I",function(assert){
  assert.ok(ArrayAdditionI([10,20,30,40,100]),"returns true when given the array [10,20,30,40,100]");
  assert.ok(ArrayAdditionI([31,2,90,50,7]),"returns true when given the array [31,2,90,50,7]");
  assert.ok(ArrayAdditionI([3,5,-1,8,12]),"returns true when given the array [3,5,-1,8,12]");
  assert.equal(ArrayAdditionI([1,1,1,1,1,6]),false,"returns false when given the array [1,1,1,1,1,6]");
  assert.equal(ArrayAdditionI([3,-15,-1,2,12]),false,"returns false when given the array [3,-15,-1,2,12]");
  assert.equal(ArrayAdditionI([500,17,32,50,100]),false,"returns false when given the array [500,17,32,50,100]");
});

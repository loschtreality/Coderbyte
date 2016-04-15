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


QUnit.test("Bitwise One", function(assert){
  assert.equal(BitwiseOne(["1001", "0100"]),'1101',"returns '1101' when given ['1001', '0100']");
  assert.equal(BitwiseOne(["100", "000"]),'100',"returns '100' when given ['100', '000']");
  assert.equal(BitwiseOne(["00011", "01010"]),'01011',"returns '01011' when given ['00011', '01010']");

});


QUnit.test("Capitalize Letter",function(assert){
  assert.equal(CapitalizeLetter("hello world"),"Hello World","returns 'Hello World' when given 'hello world'");
  assert.equal(CapitalizeLetter("I PROMISE IM NOT YELLING"),"I PROMISE IM NOT YELLING","returns 'I PROMISE IM NOT YELLING' when given 'I PROMISE IM NOT YELLING'");
  assert.equal(CapitalizeLetter("suprised to see me, mister anderson?"),"Suprised To See Me, Mister Anderson?","returns 'Suprised To See Me, Mister Anderson?' when given 'suprised to see me, mister anderson?'");
});

QUnit.test("Changing Sequence",function(assert){
  assert.equal(ChangingSequence([1, 2, 4, 6, 4, 3, 1]),3,"returns 3 when given [1, 2, 4, 6, 4, 3, 1]");
  assert.equal(ChangingSequence([-4, -2, 9, 10]),-1,"returns -1 when given [-4, -2, 9, 10]");
  assert.equal(ChangingSequence([5, 4, 3, 2, 10, 11]),3,"returns 3 when given [5, 4, 3, 2, 10, 11]");
});

QUnit.test("Check Nums",function(assert) {
  assert.equal(CheckNums(1,1),"-1","returns '-1' when given 1 and 1");
  assert.equal(CheckNums(1337,9001),"true","returns 'true' when given 1337 and 9001");
  assert.equal(CheckNums(1,-49),"false","returns 'false' when given 1 and -49");
});

QUnit.test("Counting Minutes 1",function(assert){
  assert.equal(CountingMinutesI('1:00pm-11:00am'),1320,"returns 1320 when given '1:00pm-11:00am'");
  assert.equal(CountingMinutesI('2:00pm-10:00am'),1200,"returns 1200 when given '2:00pm-10:00am'");
  assert.equal(CountingMinutesI('3:00pm-8:00am'),1020,"returns 1020 when given '3:00pm-8:00am'");
  assert.equal(CountingMinutesI('9:00am-10:00am'),60,"returns 60 when given '9:00am-10:00am'");
});


QUnit.test("Dash Insert",function(assert) {
  assert.equal(DashInsert("454793"),'4547-9-3',"returns '4547-9-3' when given '454793'");
  assert.equal(DashInsert("99946"),'9-9-946',"returns '9-9-946' when given '99946'");
  assert.equal(DashInsert("56730"),'567-30',"returns '567-30' when given '56730'");
});

QUnit.test("Division Stringified",function(assert){
  assert.equal(DivisionStringified(101077282, 21123),'4,785',"returns '4785' when given 101077282 and 21123");
  assert.equal(DivisionStringified(175,24),'7',"returns '7' when given 175 and 24");
  assert.equal(DivisionStringified(123456789,10000),'12,346',"returns '12,346' when given 123456789 and 10000");
});

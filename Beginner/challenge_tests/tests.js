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

QUnit.test("ExOh",function(assert){
  assert.equal(ExOh('xooxxo'),true,"returns true when given 'xooxxo'");
  assert.equal(ExOh('xxxo'),false,"returns false when given 'xxxo'");
  assert.equal(ExOh('xoooooooooo'),false,"returns false when given 'xoooooooooo'");
});


QUnit.test("Hamming Distance",function(assert){
  assert.equal(HammingDistance(["coder", "codec"]),1,"returns 1 when given ['coder', 'codec']");
  assert.equal(HammingDistance(['10011', '10100']),3,"returns 3 when given ['10011', '10100']");
  assert.equal(HammingDistance(['helloworld', 'worldhello']),8,"returns 8 when given ['helloworld', 'worldhello']");
});


QUnit.test("Letter Count I",function(assert){
  assert.equal(LetterCountI('hello apppppppple'),'apppppppple',"returns 'apppppppple' when given 'hello apppppppple''");
  assert.equal(LetterCountI('Today, is the greatest day ever!'),'greatest',"returns 'greates' when given 'Today, is the greatest day ever!'");
  assert.equal(LetterCountI('no matches in this one'),-1,"returns -1 when given 'no matches in this one'");
});

QUnit.test("Longest Word", function(assert){
  assert.equal(LongestWord('there is a very long word in this sentence'),'sentence',"returns 'sentence' when given 'there is a very long word in this sentence'");
  assert.equal(LongestWord('thort and loooooong'),'loooooong',"returns 'sentence' when given 'short and loooooong'");
  assert.equal(LongestWord('equal lauqe'),'equal',"returns 'equal' when given 'equal lauqe'");

});

QUnit.test("Mean Mode",function(assert){
  assert.equal(MeanMode([5, 3, 3, 3, 1]),1,"returns 1 when given [5, 3, 3, 3, 1]");
  assert.equal(MeanMode([4, 4, 4, 6, 2]),1,"returns 1 when given [4, 4, 4, 6, 2]");
});

QUnit.test("Multiplicative Persistence",function(assert){
  assert.equal(MultiplicativePersistence(25),2,"returns 2 when given 25");
  assert.equal(MultiplicativePersistence(4),0,"returns 0 when given 4");
  assert.equal(MultiplicativePersistence(39),3,"returns 3 when given 39");
});

QUnit.test("Number Addition",function(assert){
  assert.equal(NumberAddition("75Number9"),84,"returns 84 when given '75Number9'");
  assert.equal(NumberAddition('88Hello 3World!'),91,"returns 91 when given '88Hello 3World!'");
  assert.equal(NumberAddition('55Hello'),55,"returns 55 when given '55Hello'");
  assert.equal(NumberAddition('5Hello 5'),10,"returns 10 when given '5Hello 5'");
});


QUnit.test("Off Line Minimum",function(assert){
  assert.equal(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]),'4,1,5',"returns '4,1,5' when given ['5','4','6','E','1','7','E','E','3','2']");
  assert.equal(OffLineMinimum(["1","4","1","E","1","7","E","E","3","2"]),'1,1,1',"returns '1,1,1' when given ['1','4','1','E','1','7','E','E','3','2']");
  assert.equal(OffLineMinimum(["1","4","1","1","7","3","2"]),[].join(','),"returns empty string when given ['1','4','1','1','7','3','2']");
});


QUnit.test("Overlapping Ranges",function(assert){
  assert.equal(OverlappingRanges([4, 10, 2, 6, 3]),'true',"returns 'true' when given [4, 10, 2, 6, 3]");
  assert.equal(OverlappingRanges([43, 120, 9, 1, 55]),'false',"returns 'false' when given [43, 120, 9, 1, 55]");

});

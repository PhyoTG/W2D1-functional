
describe('maxOfThree', function () {
    it('Expected output of maxOfThree(5,4,44) is 44', function () {
      assert.equal( maxOfThree(5, 4, 44), 44);
    });

    it('Expected output of maxOfThree(55,4,44) is 55', function () {
        assert.equal( maxOfThree(55, 4, 44), 55);
    });
    it('Expected output of maxOfThree(55,4,44) is 4', function () {
        assert.equal( maxOfThree(55, 4, 44), 4);
    });
});
describe('isVowel', function () {
    it('Expected output of isVowel("a") is true', function () {
      assert.equal( isVowel("a"), true);
    });
    it('Expected output of isVowel("q") is false', function () {
      assert.equal( isVowel("q"), false);
    });
    it('Expected output of isVowel("q") is true', function () {
      assert.equal( isVowel("q"), true);
    });
});

describe('sum', function () {
    it('Expected output of sum([1,2,3,4]) is 10 ', function () {
      assert.equal( sum([1,2,3,4]), 10);
    });
    it('Expected output of sum([1,2,3,5]) is 10 ', function () {
      assert.equal( sum([1,2,3,5]), 10);
    });
});
describe('multiply', function () {
    it('Expected output of multiply([1,2,3,4]) is 24 ', function () {
      assert.equal( multiply([1,2,3,4]), 24);
    });
    it('Expected output of multiply([1,2,3,5]) is 24 ', function () {
      assert.equal( multiply([1,2,3,5]), 24);
    });
});
describe('reverse', function () {
    it('Expected output of reverse(1234]) is 4321 ', function () {
      assert.equal( reverse("1234"), "4321");
    });
    it('Expected output of reverse("hello") is olleh ', function () {
      assert.equal( reverse("hello"), "olleh");
    });
    it('Expected output of reverse("abc") is abc ', function () {
      assert.equal( reverse("abc"), "abc");
    });
});
describe('findLongestWord', function () {
    it("Expected output of findLongestWord(['Hello','World!','Hi']) is 'World!' ", function () {
      assert.equal(findLongestWord(["Hello","World!","Hi"]), "World!");
    });
    it("Expected output of findLongestWord(['Hello','World!','Hi']) is 'Hi' ", function () {
      assert.equal(findLongestWord(["Hello","World!","Hi"]), "Hi");
    });
});
describe('filterLongWords', function () {
    it("Expected output of filterLongWords(['Hello','World!','Hi'],4) is '['Hello','World!']", function () {
      assert.equal(JSON.stringify(filterLongWords(["Hello","World!","Hi"],4)), JSON.stringify(["Hello","World!"]));
    });
    it("Expected output of filterLongWords(['Hello','World!','Hi'],4) is '['World!']", function () {
      assert.equal(JSON.stringify(filterLongWords(["Hello","World!","Hi"],4)), JSON.stringify(["World!"]));
    });
});
// Answer 1
describe("Positive sum", function () {
    it("should return sum of all the positive numbers when all numbers are positive.", function () {
        expect(positiveSum([5, 4, 3, 2, 1, 4])).toBe(19);
        expect(positiveSum([6, 4, 3, 2, 8])).toBe(23);
    });

    it("should not add nagative value if there is nagative value provied in the array.", function () {
        expect(positiveSum([5, 4, 3, 2, 1, -4])).toBe(15);
        expect(positiveSum([-95, 4, 3, -22, 1, -44])).toBe(8);
    });

    it("should return 0 if provided array is empty", function () {
        expect(positiveSum([])).toBe(0);
    });

    it("should return 0 when all elements of array are nagative", function () {
        expect(positiveSum([-5, -4, -3, -2, -1])).toBe(0);
        expect(positiveSum([-58, -42, -33, -24, -10])).toBe(0);
    });

});
// Answer 2
describe("is Divisible", function () {
    it("should return true when the number is divisible by both provided divisiors", function () {
        expect(isDivisible(16, 2, 4)).toBe(true);
        expect(isDivisible(18, 3, 2)).toBe(true);
    });

    it("should return false when the number is smaller then both provided divisor.", function () {
        expect(isDivisible(2, 6, 4)).toBe(false);
        expect(isDivisible(1, 2, 6)).toBe(false);
    });

    it("should return false when the number is not divisible by any one provided divisor", function () {
        expect(isDivisible(9, 3, 2)).toBe(false);
        expect(isDivisible(49, 7, 6)).toBe(false);
    });

    it("should return false when the number is not divisible by any provided divisors", function () {
        expect(isDivisible(9, 2, 4)).toBe(false);
        expect(isDivisible(10, 3, 6)).toBe(false);
    });

});
// Answer 3
describe("Reverse String", function () {
    it("should return string itself when there is only one cherecter in the string", function () {
        expect(solution('l')).toBe('l');
        expect(solution('e')).toBe('e');
    });

    it("should return the reverse string when there is multiple cherecters in the string", function () {
        expect(solution('software')).toBe('erawtfos');
        expect(solution('developer')).toBe('repoleved');
    });

    it("should return empty string when there is no cherecter in string", function () {
        expect(solution('')).toBe('');
    });

});
// Answer 4
describe("Reverse Sequence", function () {
    it("should return reverse sequence of provided number", function () {
        expect(reverseSeq(5)).toEqual([5, 4, 3, 2, 1]);
        expect(reverseSeq(10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });

    it("should return blank array when provided number is 0", function () {
        expect(reverseSeq(0)).toEqual([]);
    });

    it("should return blank array when provided number is nagative", function () {
        expect(reverseSeq(-1)).toEqual([]);
        expect(reverseSeq(-41)).toEqual([]);
    });

});
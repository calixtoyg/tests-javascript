import {getBiggestNumber, getFirstElement, getLastElement, getLowestNumber, getMiddleNumber, order, removeDuplicates} from "./index";

describe('Tests for index.js', function () {
    describe('getFirstElement', function () {

        it('should return the first element of an array', function () {
            const arr = [1,5,6,9]
            let firstElement = getFirstElement(arr);
            expect(firstElement).toBe(1)
        });

    });

    describe('getLastElement', function () {

        it('should return the last element of an array', function () {
            const arr = [1,5,6,9]
            let lastElement = getLastElement(arr);
            console.log("Testing an array of numbers")
            expect(arr.length).toBe(4)
            expect(lastElement).toBe(9)
            expect(arr[0]).toBe(1)
            expect(arr[1]).toBe(5)
            expect(arr[2]).toBe(6)
            expect(arr[3]).toBe(9)
            arr.forEach(v => expect(typeof v).toBe("number"))
            console.log("Tests pass for array of numbers")
            console.log("Testing an array of strings")
            const arrOfStrings = ["1","2", "3"]
            lastElement = getLastElement(arrOfStrings);
            expect(arrOfStrings.length).toBe(3)
            expect(lastElement).toBe("3")
            expect(arrOfStrings[0]).toBe("1")
            expect(arrOfStrings[1]).toBe("2")
            expect(arrOfStrings[2]).toBe("3")
            arrOfStrings.forEach(v => expect(typeof v).toBe("string"))
            console.log("Testing for array of strings passed")
        });

    });


    describe('getMiddleNumber', function () {

        it('should return the number in the middle of the array', function () {
            const arr = [2,5,7];
            expect(getMiddleNumber(arr)).toBe(5)
        });

        it('should throw an error if passed array is not odd', function () {
            expect(() => getMiddleNumber([2,2,5,6])).toThrow();
        });

    });

    describe('getBiggestNumber', function () {

        it('should return the biggest number in an array', function () {
            const arr = [2,7,8,9];
            expect(getBiggestNumber(arr)).toBe(9)
        });

    });


    describe('getLowestNumber', function () {

        it('should return the lowest number in an array', function () {
            const arr = [2,7,8,9];
            expect(getLowestNumber(arr)).toBe(2);
        });

    });


    describe('removeDuplicates', function () {

        it('should remove duplicates from an array of numbers', function () {
            const arr = [2,4,2,6,7,8,8,9,9,2,4,8,9]
            const arrWithoutDuplicates = removeDuplicates(arr);
            expect(arrWithoutDuplicates.length).toBe(2)
        });

    });

    describe('order', function () {

        it('should return ordered array in ascending order', function () {
            const arr = [2,4,2,6,7,8,8,9,9,2,4,8,9]
            const orderArr = order(arr, "desc");
            expect(orderArr).toEqual([9,9,9,8,8,8,7,6,4,4,2,2,2])
        });


        it('should return ordered array in descending order', function () {
            const arr = [2,4,2,6,7,8,8,9,9,2,4,8,9]
            const orderArr = order(arr, "asc");
            expect(orderArr).toEqual( [2, 2, 2, 4, 4, 6, 7, 8, 8, 8, 9, 9, 9])
        });

    });

});

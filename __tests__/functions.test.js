/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { digitize } from "../src/reversedDigitString";
import { exportAllDeclaration } from "@babel/types";
import { positiveSum} from '../src/sumOfPositive';
import { enough } from '../src/enoughSpace';
import { keepOrder } from '../src/keepTheOrder';

describe('digitize',()=>{
  test('should return array of given number in reverse order', () => {
    expect(digitize(123)).toEqual([3,2,1]);
    expect(digitize(1463)).toEqual([3,6,4,1]);
  });
});

describe('positiveSum', ()=>{
  test('should return sum of positive numbers in an array',()=>{
    expect(positiveSum([1,-4,7,12])).toEqual(20);
  });

  describe('enough', () => {
    test('should return 0 if first arg is greater than the sum of the next two, the remainder if less than', () => {
      expect(enough(100, 20, 40)).toEqual(0);
      expect(enough(100, 50, 51)).toEqual(1);
      expect(enough(100,50,50)).toEqual(0);
    });
  });

  describe('keepTheOrder', () => {
    test('should return first index that a given value can enter a given, sorted array', () => {
      expect(keepOrder([1, 2, 3, 4, 7,8], 5)).toEqual(4);
    });

  });

});
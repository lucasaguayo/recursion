import { fib, fibRec } from "./fibonacci";

describe("Fibonacci Recursive.", () => {
  test("Returns an empty array if the the given input is <= 0.", () => {
    expect(fibRec(0)).toEqual([]);
  });
  test("Returns an array with 0.", () => {
    expect(fibRec(1)).toEqual([0])
  });
  test("Returns the first two numbers (0, 1) of the sequence.", () => {
    expect(fibRec(2)).toEqual([0, 1])
  });
  test("Returns the fibonacci sequence with 8 numbers.", () => {
    expect(fibRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

describe("Fibonacci Iterative.", () => {
  test("Returns an empty array if the the given input is <= 0.", () => {
    expect(fib(0)).toEqual([]);
  });
  test("Returns an array with 0.", () => {
    expect(fib(1)).toEqual([0])
  });
  test("Returns the first two numbers (0, 1) of the sequence.", () => {
    expect(fib(2)).toEqual([0, 1])
  });
  test("Returns the fibonacci sequence with 8 numbers.", () => {
    expect(fib(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

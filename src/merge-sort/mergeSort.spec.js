import { mergeSort } from "./mergeSort";

describe("Merge Sort", () => {
  test("mergeSort([]) returns []", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("mergeSort([73]) returns [73]", () => {
    expect(mergeSort([73])).toEqual([73]);
  });
    
  test("mergeSort([4, 2]) returns [2, 4]", () => {
    expect(mergeSort([4, 2])).toEqual([2, 4]);
  });

  test("mergeSort([1, 2, 3, 4, 5]) returns [1, 2, 3, 4, 5]", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) returns [0, 1, 1, 2, 3, 5, 8, 13]", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test("mergeSort([105, 79, 100, 110]) returns [79, 100, 105, 110]", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });

  test("Sorts negative numbers and retains the numbers even if they are duplicates.", () => {
    expect(mergeSort([6, -3, 0, -3, 0, 8, 5])).toEqual([-3, -3, 0, 0, 5, 6, 8]);
  });


});
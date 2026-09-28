function merge(left, right) {
  let i = 0;
  let j = 0;
  const result = [];

  // The cycle ends when one of the halves reaches its end.
  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return [
    ...result,
    // It ensures that the remaining elements are added.
    ...left.slice(i), ...right.slice(j)
  ];
}

export function mergeSort(array) {
  // If the array has a single element it 
  // means that is already sorted.
  if (array.length < 2) return array;
  
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  const left = mergeSort(leftHalf);
  const right = mergeSort(rightHalf);
  const result = merge(left, right);

  return result;
}

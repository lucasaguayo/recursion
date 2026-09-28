// With For Loop.
function fib(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const array = [0, 1];

  for (let i = 0; array.length < n; i++) {
    const nextElement = array[i] + array[i+1];
    array.push(nextElement);
  }

  return array;
}

// With Recursion.
function fibRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  
  // gets the previous sequence.
  const sequence = fibRec(n-1);
  const nextElement = sequence[sequence.length-1] + sequence[sequence.length-2];

  return [...sequence, nextElement];
}

export { fib, fibRec };

// iterative solution
function fibs(n) {
  const array = [];

  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      array.push(i);
      continue;
    }

    const num = array[i - 1] + array[i - 2];
    array.push(num);
  }

  return array;
}

// recursive solution
function fibsRec(n) {
  if (n < 1) return [];

  const array = fibsRec(n - 1);
  return array.concat(n < 3 ? n - 1 : array.at(-1) + array.at(-2));
}

function mergeSort(array) {
  if (array.length < 2) return array;

  const mid = Math.floor(array.length / 2);
  const arrayLeft = mergeSort(array.slice(0, mid));
  const arrayRight = mergeSort(array.slice(mid));

  // merge arrayLeft and arrayRight
  let i = 0;
  let j = 0;
  let mergedArray = [];

  while (i < arrayLeft.length && j < arrayRight.length) {
    const num = arrayLeft[i] < arrayRight[j] ? arrayLeft[i++] : arrayRight[j++];
    mergedArray.push(num);
  }
  while (i < arrayLeft.length) {
    mergedArray.push(arrayLeft[i++]);
  }
  while (j < arrayRight.length) {
    mergedArray.push(arrayRight[j++]);
  }

  return mergedArray;
}

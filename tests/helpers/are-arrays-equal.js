// Checks whether two passed arrays are equal
module.exports = function areArraysEqaul(array1, array2) {
  // if arrays have different lengths return false
  if (array1.length != array2.length) return false;

  // Sort both arrays
  const sortedArray1 = array1.sort();
  const sortedArray2 = array2.sort();

  // Map all arrays elements to check whether they are equal
  const result = sortedArray1.map(
    (value, index) => value === sortedArray2[index]
  );

  // If arrays are equal return true
  return !result.includes(false);
};

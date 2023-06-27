export default function concatArrays(array1, array2, string) {
  const arry = [...array1, ...array2, ...string];
  arry.concat(string);
  return arry;
}

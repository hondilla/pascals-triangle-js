const calculatePascalTriangle = (n, arr = [[1]]) => {
  if (n < 2 || isNaN(n)) return arr;
  const lastRow = arr[arr.length - 1];
  const newRow = lastRow.map((item, index) => (index === 0) ? 1 : lastRow[index - 1] + lastRow[index]).concat(1);
  return calculatePascalTriangle(n - 1, [...arr, newRow]);
}
console.table(calculatePascalTriangle(process.argv.slice(2)));
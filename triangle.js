const calculatePascalTriangle = (n, rows = [[1]]) => {
  if (n < 2 || isNaN(n)) return rows;
  const newRow = rows.at(-1).map((value, index, lastRow) => (index === 0) ? 1 : lastRow[index - 1] + value).concat(1);
  return calculatePascalTriangle(n - 1, [...rows, newRow]);
}
console.table(calculatePascalTriangle(process.argv.slice(2)));

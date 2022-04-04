const calculatePascalTriangle = (n, rows = [[1]]) => {
  if (n < 2 || isNaN(n)) return rows;
  const lastRow = rows[rows.length - 1];
  const newRow = lastRow.map((value, index) => (index === 0) ? 1 : lastRow[index - 1] + value).concat(1);
  return calculatePascalTriangle(n - 1, [...rows, newRow]);
}
console.table(calculatePascalTriangle(process.argv.slice(2)));

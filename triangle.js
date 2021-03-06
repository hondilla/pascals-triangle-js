const calculatePascalTriangle = (height) => {
  if(typeof height !== 'number' || isNaN(height) || height < 1) { 
    return null;
  } 
  if (height == 1) {
    return [[1]];
  }  
  const rows = calculatePascalTriangle(height - 1);
  const newRow = rows.at(-1).map((value, index, lastRow) => (index === 0) ? 1 : lastRow[index - 1] + value);
  return [...rows, [...newRow, 1]];
}
console.table(calculatePascalTriangle(parseInt(process.argv.slice(2))));
export const getColumnNames = items =>
  items.length > 0
    ? items
        .map(item => Object.keys(item))
        .reduce(
          (acc, cur) => [
            ...acc,
            ...cur.filter(key => !acc.find(k => k == key))
          ],
          []
        )
    : [];
export const filterUnusedData = (items, unusedColumns, unusedRows) =>
  items
    .filter(item => !unusedRows.some(row => row == item.id))
    .map(item =>
      Object.keys(item)
        .filter(key => !unusedColumns.find(k => k == key))
        .reduce((acc, key) => ({ ...acc, [key]: item[key] }), {})
    );

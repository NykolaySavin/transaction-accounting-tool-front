export const getColumnNames = items =>items.length>0?
  items
    .map(item => Object.keys(item))
    .reduce((acc, cur) => acc.filter(key => cur.find(k => k == key))):[];

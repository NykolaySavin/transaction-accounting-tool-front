import * as table from "./table";
import XLSX from "xlsx";
export const groupTransactions = (transactions, key) =>
  transactions
    .filter(transaction => transaction[key])
    .reduce((acc, transaction) => {
      const group = acc.find(item => item[key] == transaction[key]);
      if (group) {
        return [
          ...acc.filter(item => item[key] != group[key]),
          { ...group, data: [...group.data, transaction] }
        ];
      } else {
        return [...acc, { [key]: transaction[key], data: [transaction] }];
      }
    }, []);
export const mapTransactionGroup = (categories, transactionGroup) => {
  const category = categories.find(c => c.id == transactionGroup.Category);
  if (!category)
    return table.filterUnusedData(
      transactionGroup.data,
      ["id", "Category"],
      []
    );
  const accumulator = table
    .filterUnusedData(transactionGroup.data, ["id", "Category"], [])
    .map((item, i) => {
      const result = { ...item };
      if (result["Amount"]) {
        result[`Adjusted @ ${category.percent}%`] =
          (result["Amount"] * category.percent) / 100;
      }
      result[`${category.name} @ ${category.percent}%`] = `${
        category.name
      } ${i}`;
      return result;
    });
  return { data: accumulator, name: category.name };
};
export const createExcelOutput = resultGroups => {
  const workbook = XLSX.utils.book_new();
  resultGroups.forEach(group => {
    const worksheet = XLSX.utils.json_to_sheet(group.data);
    setWooksheetLength(worksheet,group.data)
    XLSX.utils.book_append_sheet(workbook, worksheet, group.name);
  });
  XLSX.writeFile(workbook, "result.xlsx");
};
export const setWooksheetLength = (worksheet, data) => {
    const cols = Object.keys(data[0])
        .map(
            key =>
                data
                    .map(item => item[key])
                    .reduce((acc, cur) => (acc.toString().length > cur.toString().length ? acc : cur), key).toString()
                    .length + 2
        )
        .map(length => ({ wch: length }));
    console.dir(cols)
  worksheet["!cols"] = cols;
};

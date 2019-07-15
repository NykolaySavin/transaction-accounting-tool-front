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
    .map(item => {
      const result = { ...item };
      if (result["Amount"]) {
        result[`Adjusted @ ${category.percent}%`] =
          (result["Amount"] * category.percent) / 100;
      }
      return result;
    });
  const total = accumulator.reduce(
    (acc, cur) => acc + cur[`Adjusted @ ${category.percent}%`],
    0
  );
  const sign = category.type == "Credit" ? false : true;
  return { data: accumulator, name: category.name, total, sign };
};
export const createExcelOutput = (
  resultGroups,
  additionalAdjustment,
  monthAdjustment
) => {
  const workbook = XLSX.utils.book_new();
  resultGroups.forEach(group => {
    const worksheet = XLSX.utils.json_to_sheet(group.data);
    setWooksheetLength(worksheet, group.data);
    XLSX.utils.book_append_sheet(workbook, worksheet, group.name);
  });
  const totalCredit = resultGroups
    .filter(group => !group.sign)
    .reduce((acc, cur) => acc + cur.total, 0);
  const totalDebit = resultGroups
    .filter(group => group.sign)
    .reduce((acc, cur) => acc + cur.total, 0);
  const totalDebitMinusCredit =
    totalDebit.round(4) -
    totalCredit.round(4) +
    Number.parseFloat(additionalAdjustment).round(4) +
    Number.parseFloat(monthAdjustment).round(4);
  const total = [
    {
      "Total Expenses": totalDebit,
      "Total from Credits": totalCredit,
      "Additional Adjustment": additionalAdjustment,
      "Current Month Adjustment": monthAdjustment,
      "Total Payout": totalDebitMinusCredit
    }
  ];
  const worksheet = XLSX.utils.json_to_sheet(total);
  setWooksheetLength(worksheet, total);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Totals");
  XLSX.writeFile(workbook, "result.xlsx");
};
export const setWooksheetLength = (worksheet, data) => {
  const cols = Object.keys(data[0])
    .map(
      key =>
        data
          .map(item => item[key])
          .reduce(
            (acc, cur) =>
              (acc ? acc.toString().length : 0) >
              (cur ? cur.toString().length : 0)
                ? acc
                : cur,
            key
          )
          .toString().length + 2
    )
    .map(length => ({ wch: length }));
  worksheet["!cols"] = cols;
};

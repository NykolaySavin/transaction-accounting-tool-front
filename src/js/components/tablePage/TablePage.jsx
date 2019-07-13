import React, { useState } from "react";
import * as table from "../../core/dataFunctions/table";
import CheckboxInput from "../form/input/CheckboxInput";
import SelectInput from "../form/input/SelectInput";

export default function TablePage({
  items,
  categories,
  onCategoryChange,
  unusedRows,
  handleRowCheckbox,
  unusedColumns,
  handleColumnCheckbox,
  onMultipleCategoryChange
}) {
  const [filter, changeFilter] = useState(false);
  const [selectedRows, selectRow] = useState([]);
  const data = filter
    ? table.filterUnusedData(items, unusedColumns, unusedRows)
    : items;
  const allKeys = table.getColumnNames(data);
  const keysWithoutId = allKeys.filter(item => item != "id");
  const findCellClass = key =>
    unusedColumns.some(k => k == key) ? "table-danger" : "";
  const findRowClass = row =>
    unusedRows.find(id => row.id == id)
      ? "table-danger"
      : selectedRows.find(id => row.id == id)
      ? "table-success"
      : "";
  const handleRowSelection = (row, event) => {
    event.stopPropagation();
    if (event.ctrlKey) {
      if (selectedRows.find(id => id == row.id))
        selectRow(selectedRows.filter(id => row.id != id));
      else selectRow([...selectedRows, row.id]);
    } else {
      selectRow([]);
    }
  };
  return (
    <>
      <div className="page tables-page">
        <div className="block ">
          <CheckboxInput
            id={"filterCheckbox"}
            label={"Don`t show unused elements"}
            checked={filter}
            onChange={() => changeFilter(!filter)}
          />
        </div>
        {selectedRows && selectedRows.length > 0 && (
          <div className="block ">
            <div className="form-group ">
              <label htmlFor="multiple-select">
                Multiple Category Selection:
              </label>
              <SelectInput
                id="multiple-select"
                value={
                  items.find(item => item.id == selectedRows[0]).Category
                    ? items.find(item => item.id == selectedRows[0]).Category
                    : "select"
                }
                onChange={event =>
                  onMultipleCategoryChange({
                    categoryId: event.target.value,
                    selectedIds: selectedRows
                  })
                }
                items={categories}
              />
            </div>
          </div>
        )}
        <div className="block table-block">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                {keysWithoutId.map(key => (
                  <th scope="col" key={key}>
                    <CheckboxInput
                      id={key}
                      label={key}
                      checked={!unusedColumns.some(k => k == key)}
                      onChange={() => handleColumnCheckbox(key)}
                    />
                  </th>
                ))}
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr
                  key={item.id}
                  className={findRowClass(item)}
                  onClick={handleRowSelection.bind(null, item)}
                >
                  {keysWithoutId.map(key => {

                    if (key == "Category") {
                      return (
                        <td key={key} className={findCellClass(key)}>
                          <SelectInput
                            value={
                              categories.find(c => c.id == item[key])
                                ? item[key]
                                : "select"
                            }
                            onChange={event =>
                              onCategoryChange({
                                categoryId: event.target.value,
                                id: item.id
                              })
                            }
                            items={categories}
                          />
                        </td>
                      );
                    }
                    return (
                      <td key={key} className={findCellClass(key)}>
                        {item[key]}
                      </td>
                    );
                  })}
                  <td>
                    <CheckboxInput
                      id={item.id}
                      checked={!unusedRows.some(id => id == item.id)}
                      onChange={() => handleRowCheckbox(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

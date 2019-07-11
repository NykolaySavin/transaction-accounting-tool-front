import React, { useState } from "react";
import * as table from "../../core/dataFunctions/table";
import CheckboxInput from "../form/input/CheckboxInput";
export default function TablePage({
  items,
  categories,
  onCategoryChange,
  unusedRows,
  handleRowCheckbox,
  unusedColumns,
  handleColumnCheckbox
}) {
  const [filter, changeFilter] = useState(false);
  const data = filter
    ? table.filterUnusedData(items, unusedColumns, unusedRows)
    : items;
  const allKeys = table.getColumnNames(data);
  const keysWithoutId = allKeys.filter(item => item != "id");
  const findCellClass = key =>
    unusedColumns.some(k => k == key) ? "table-danger" : "";
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
                  className={
                    unusedRows.find(id => item.id == id) ? "table-danger" : ""
                  }
                >
                  {keysWithoutId.map(key => {
                    if (key == "Category") {
                      return (
                        <td key={key} className={findCellClass(key)}>
                          <select
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
                            className="form-control"
                          >
                            <option value="select">Select Value</option>
                            {categories.map(category => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
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

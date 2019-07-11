import React from "react";
import * as table from "../../core/dataFunctions/table";
export default function TablePage({ items, categories, onCategoryChange }) {
  const allKeys = table.getColumnNames(items);
  const keysWithoutId = allKeys.filter(item => item != "id");
  return (
    <>
      <div className="page tables-page">
        <div className="block table-block">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                {keysWithoutId.map(key => (
                  <th scope="col" key={key}>
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {keysWithoutId.map(key => {
                    if (key == "Category") {
                      return (
                        <td key={key}>
                          <select
                            value={categories.find(c=>c.id==item[key])?item[key]:'select'}
                            onChange={event =>
                              onCategoryChange({
                                categoryId: event.target.value,
                                id: item.id
                              })
                            }
                          >
                              <option value='select'>Select Value</option>
                            {categories.map(category => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        </td>
                      );
                    }
                    return <td key={key}>{item[key]}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

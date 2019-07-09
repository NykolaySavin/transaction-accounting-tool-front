import React from "react";
import Button from "../button/Button";
import ButtonLink from '../buttonLink/ButtonLink';

export default function CategoryListPage({ items, handleDeletion }) {
  return (
    <>
      <div className="category-list-page">
          <div >
          <ButtonLink label='Add new' path='/category'/>
          </div>
        <div className="block table-block">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Percent</th>
                <th scope="col">Type</th>
                <th scope="col">Edit</th>
                <th scope="col">Deletion</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.percent}</td>
                  <td>{item.type}</td>
                  <td>
                    <Button
                      label="Edit"
                      onClick={() => handleDeletion(item.id)}
                    />
                  </td>
                  <td>
                    <Button
                      label="Delete"
                      onClick={() => handleDeletion(item.id)}
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

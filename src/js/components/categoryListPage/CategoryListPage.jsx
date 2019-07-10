import React from "react";
import Button from "../button/Button";
import ButtonLink from '../buttonLink/ButtonLink';

export default function CategoryListPage({ items, handleDeletion }) {
  return (
    <>
      <div className="page category-list-page">
          <div className='block button-block'>
          <ButtonLink label='Add new' path='/category'/>
          </div>
        <div className="block table-block">
          <table className="table">
            <thead className="thead-dark">
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
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.percent}</td>
                  <td>{item.type}</td>
                  <td>
                    <ButtonLink
                      label="Edit"
                        path={`/category/${item.id}`}
                      width={100}
                    />
                  </td>
                  <td>
                    <Button
                      label="Delete"
                      onClick={() => handleDeletion(item.id)}
                      width={100}
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

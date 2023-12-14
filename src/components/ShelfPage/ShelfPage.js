import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfForm from '../ShelfForm/ShelfForm';

function ShelfPage() {
  const dispatch = useDispatch();

  const shelf = useSelector((store) => store.shelf);

  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' });
  }, []);

  return (
    <div className="container">
      <ShelfForm />
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {shelf.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>
                <img src={item.image_url} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShelfPage;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfForm from '../ShelfForm/ShelfForm';

function ShelfPage() {
  const dispatch = useDispatch();

  const shelf = useSelector((store) => store.shelf);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' });
  }, []);

  const deleteShelf = (id) => {
    dispatch({ type: 'DELETE_SHELF', payload: id });
  };

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
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {shelf.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>
                <img src={item.image_url} />
              </td>
              <td>
                {
                  /* Only show the delete button if the user ID is the same as whoever created this */
                  item.user_id === user.id && (
                    <button onClick={() => deleteShelf(item.id)}>Delete</button>
                  )
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShelfPage;

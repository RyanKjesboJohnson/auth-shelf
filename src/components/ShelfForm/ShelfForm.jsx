import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ShelfForm() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const [description, setDescription] = useState('');
  const [image_url, setImage_url] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'SUBMIT_SHELF',
      payload: {
        description: description,
        image_url: image_url,
        user_id: user.id,
      },
    });

    setDescription('');
    setImage_url('');
  };

  return (
    <div>
      <h2>Shelf Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="text"
          placeholder="image_url"
          value={image_url}
          onChange={(event) => setImage_url(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

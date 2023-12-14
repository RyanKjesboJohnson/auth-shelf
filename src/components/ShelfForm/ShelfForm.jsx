import React, { useState } from 'react';

export default function ShelfForm() {
  const [description, setDescription] = useState('');
  const [image_url, setImage_url] = useState('');

  return (
    <div>
      <h2>Shelf Form</h2>
      <form>
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

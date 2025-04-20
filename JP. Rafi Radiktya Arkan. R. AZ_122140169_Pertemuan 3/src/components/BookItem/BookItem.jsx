import React, { useState } from 'react';
import { useBooks } from '../../context/BookContext';
import PropTypes from 'prop-types';

/**
 * Komponen BookItem
 * Menampilkan 1 item buku, dengan fitur edit dan hapus
 */
function BookItem({ book }) {
  const { dispatch } = useBooks();
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState({ ...book });

  const handleDelete = () => dispatch({ type: 'DELETE_BOOK', payload: book.id });

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_BOOK', payload: editedBook });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={editedBook.title}
          onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
        />
        <input
          type="text"
          value={editedBook.author}
          onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
        />
        <select
          value={editedBook.status}
          onChange={(e) => setEditedBook({ ...editedBook, status: e.target.value })}
        >
          <option value="milik">Milik</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
        <button type="submit">Simpan</button>
        <button onClick={() => setIsEditing(false)} type="button">Batal</button>
      </form>
    );
  }

  return (
    <li>
      <strong>{book.title}</strong> oleh {book.author} [{book.status}]
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleDelete}>Hapus</button>
    </li>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
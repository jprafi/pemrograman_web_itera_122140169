import React, { useState } from 'react';
import { useBooks } from '../../context/BookContext';

/**
 * Komponen BookForm
 * Menampilkan form untuk menambahkan data buku
 */
function BookForm() {
  const { dispatch } = useBooks();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('milik');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      setError('Judul dan Penulis harus diisi!');
      return;
    }

    dispatch({
      type: 'ADD_BOOK',
      payload: {
        id: Date.now(),
        title,
        author,
        status,
      },
    });

    setTitle('');
    setAuthor('');
    setStatus('milik');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tambah Buku</h2>
      <input
        type="text"
        placeholder="Judul Buku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Penulis"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="milik">Milik</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <button type="submit">Tambah</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default BookForm;
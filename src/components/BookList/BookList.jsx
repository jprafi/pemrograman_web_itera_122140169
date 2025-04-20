import React, { useState } from 'react';
import { useBooks } from '../../context/BookContext';
import BookItem from '../BookItem/BookItem';
import BookFilter from '../BookFilter/BookFilter';

function BookList() {
  const { books } = useBooks();
  const [filter, setFilter] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter berdasarkan status dan pencarian judul
  const filteredBooks = books
    .filter((book) => filter === 'semua' || book.status === filter)
    .filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <h2>Daftar Buku</h2>

      {/* Input pencarian */}
      <input
        type="text"
        placeholder="Cari buku berdasarkan judul..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
      />

      {/* Filter status */}
      <BookFilter filter={filter} setFilter={setFilter} />

      {/* Tampilkan daftar buku */}
      {filteredBooks.length === 0 ? (
        <p>Tidak ada buku yang cocok dengan pencarian.</p>
      ) : (
        <ul>
          {filteredBooks.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
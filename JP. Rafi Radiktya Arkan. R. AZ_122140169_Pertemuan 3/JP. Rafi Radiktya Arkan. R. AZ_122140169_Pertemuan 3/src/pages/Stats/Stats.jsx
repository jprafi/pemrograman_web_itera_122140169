import React from 'react';
import { useBooks } from '../../context/BookContext';

function Stats() {
  const { books } = useBooks();

  const total = books.length;
  const milik = books.filter(book => book.status === 'milik').length;
  const baca = books.filter(book => book.status === 'baca').length;
  const beli = books.filter(book => book.status === 'beli').length;

  return (
    <div>
      <h2>Statistik Buku</h2>
      <ul>
        <li>Total Buku: {total}</li>
        <li>Milik: {milik}</li>
        <li>Sedang Dibaca: {baca}</li>
        <li>Ingin Dibeli: {beli}</li>
      </ul>
    </div>
  );
}

export default Stats;
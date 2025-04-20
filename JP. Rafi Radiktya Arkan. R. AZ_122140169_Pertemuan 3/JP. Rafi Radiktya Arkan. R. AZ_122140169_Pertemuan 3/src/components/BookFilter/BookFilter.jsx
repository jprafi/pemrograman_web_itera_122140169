import React from 'react';
import PropTypes from 'prop-types';

/**
 * Komponen BookFilter
 * Menampilkan dropdown untuk filter status buku
 */
function BookFilter({ filter, setFilter }) {
  return (
    <div>
      <label>Filter: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="semua">Semua</option>
        <option value="milik">Milik</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
    </div>
  );
}

BookFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default BookFilter;
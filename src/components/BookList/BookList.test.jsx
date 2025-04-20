import React from 'react';
import { render, screen } from '@testing-library/react';
import BookList from './BookList';
import { BookProvider } from '../../context/BookContext';

describe('BookList', () => {
  test('menampilkan pesan jika daftar kosong', () => {
    render(<BookProvider><BookList /></BookProvider>);
    expect(screen.getByText(/tidak ada buku yang cocok/i)).toBeInTheDocument();
  });
});
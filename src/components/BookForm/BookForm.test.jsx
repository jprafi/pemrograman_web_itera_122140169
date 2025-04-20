import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';
import { BookProvider } from '../../context/BookContext';

describe('BookForm', () => {
  test('menampilkan input dan tombol', () => {
    render(<BookProvider><BookForm /></BookProvider>);

    expect(screen.getByPlaceholderText('Judul Buku')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Penulis')).toBeInTheDocument();
    expect(screen.getByText('Tambah')).toBeInTheDocument();
  });

  test('menampilkan error jika input kosong', () => {
    render(<BookProvider><BookForm /></BookProvider>);
    fireEvent.click(screen.getByText('Tambah'));
    expect(screen.getByText(/harus diisi/i)).toBeInTheDocument();
  });
});
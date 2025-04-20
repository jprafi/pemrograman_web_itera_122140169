import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookItem from './BookItem';
import { BookProvider } from '../../context/BookContext';

const dummyBook = {
  id: 1,
  title: 'Buku Contoh',
  author: 'Penulis',
  status: 'baca',
};

describe('BookItem', () => {
  test('tampilkan data buku', () => {
    render(<BookProvider><BookItem book={dummyBook} /></BookProvider>);
    expect(screen.getByText(/Buku Contoh/)).toBeInTheDocument();
    expect(screen.getByText(/Penulis/)).toBeInTheDocument();
  });

  test('edit button muncul', () => {
    render(<BookProvider><BookItem book={dummyBook} /></BookProvider>);
    expect(screen.getByText('Edit')).toBeInTheDocument();
  });
});
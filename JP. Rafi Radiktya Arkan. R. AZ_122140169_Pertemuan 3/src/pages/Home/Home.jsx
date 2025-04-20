import React from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';

function Home() {
  return (
    <div>
      <BookForm />
      <BookList />
    </div>
  );
}

export default Home;
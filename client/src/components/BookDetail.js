import {  useQuery } from '@apollo/client';
import React from 'react'
import { GET_Book_Quary } from '../queries/queries';

function BookDetail({ bookId }) {

  const { loading, error, data } = useQuery(GET_Book_Quary, {
    variables: { id: bookId }
  });
  if (loading) {
    return (
      <>loading ....</>
    )
  }

  return (
    <>
    <h3>Book Details</h3>
      <div>name: {data.book.name}</div>
      <div>genre {data.book.genre}</div>
      <div>author :{data.book.author.name}</div>
      <h5> other books:</h5>
      <ul>

        {data.book.author.books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </>
  )
}

export default BookDetail
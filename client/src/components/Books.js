import React from 'react'
import {  gql, useQuery } from '@apollo/client';

function Books() {
    const GET_Books = gql`
    query GetBooks {
      books {
        id
        name
      }
    }
  `;
    const { loading, error, data } = useQuery(GET_Books);
    // console.log(data)
    if (loading) return (
        <div>
            <h5>Loading .....</h5>
        </div>
    )
    return (
        <div>
            <ul>
                {data.books.map((book) => (
                    <div key={book.id}>
                        <li >{book.name}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Books
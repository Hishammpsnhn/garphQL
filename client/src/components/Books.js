import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_Books } from '../queries/queries';
import BookDetail from './BookDetail';

function Books() {
    const [selectedBookId, setSelectedBookId] = useState(null);

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
                        <li onClick={() => setSelectedBookId(book.id)} >{book.name}</li>
                    </div>
                ))}
            </ul>
            {selectedBookId && (
                <BookDetail bookId={selectedBookId} />
            ) }
        </div>
    )
}

export default Books
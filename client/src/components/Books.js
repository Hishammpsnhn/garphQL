import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_Books } from '../queries/queries';


function Books() {

    const { loading, error, data } = useQuery(GET_Books);
    // console.log(data)
    const handleBookDetails = (id) => {
        console.log(id)
    }

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
                        <li onClick={()=>handleBookDetails(book.id)} >{book.name}</li>
                    </div>
                ))}
            </ul>
        
        </div>
    )
}

export default Books
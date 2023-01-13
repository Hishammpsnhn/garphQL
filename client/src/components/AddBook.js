import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { ADD_Books, GET_Author, GET_Books } from '../queries/queries';

function AddBook() {

    const { loading, error4, data } = useQuery(GET_Author);

    const initialData = { name: "", genre: "", authorId: "" };
    const [bookData, setBookData] = useState(initialData)

    const [AddBook] = useMutation(ADD_Books, {
        refetchQueries: [
            { query: GET_Books }, // DocumentNode object parsed with gql
            'GetComments' // Query name
        ],
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        AddBook({
            variables: {
                name: bookData.name,
                genre: bookData.genre,
                authorId: bookData.authorId
            }
        });
    }

    if (loading) return (
        <div>
            <h5>Loading .....</h5>
        </div>
    )

    return (
        <form id="add-book" onSubmit={handleSubmit} >
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => setBookData({ ...bookData, name: e.target.value })} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e) => setBookData({ ...bookData, genre: e.target.value })} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => setBookData({ ...bookData, authorId: e.target.value })} >
                    <option >select Author</option>
                    {data.authors.map((author) => (
                        <option key={author.id} value={author.id}>{author.name}</option>
                    ))}
                </select>
            </div>
            <button>+</button>
        </form>
    )
}

export default AddBook
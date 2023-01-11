import { gql, useQuery } from '@apollo/client';
import React from 'react'

function AddBook() {
    const GET_Author = gql`
    query GetAuthors {
      authors {
        id
        name
      }
    }
  `;
    const { loading, error, data } = useQuery(GET_Author);
    console.log(data)
    if (loading) return (
        <div>
            <h5>Loading .....</h5>
        </div>
    )
    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option >select Author</option>
                    {data.authors.map((author) => (
                        <option key={author.id}>{author.name}</option>
                    ))}
                </select>
            </div>
            <button>+</button>
        </form>
    )
}

export default AddBook
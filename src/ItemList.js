import React from 'react';
import './App.css';
const ItemList = ({ movies, onDelete }) => {
    return (
        <div className='movie-list'>
            <table>
                <thead>
                    <tr>
                        <th>Movie Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {movies.map((movie, index) => (
                        <tr key={index}>
                            <td className='movie-name'>{movie}</td>
                            <td><button onClick={() => onDelete(index)}>Remove</button></td>

                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ItemList;
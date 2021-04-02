import { getAllByPlaceholderText } from '@testing-library/dom';
import React from 'react';

const BookManage = ({ book }) => {

    const handleDelete = (id) => {

        fetch(`http://localhost:4200/deleteProduct/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('successful');
                }
            })
    }

    return (
        <div className="container">
            <table class="table table-sm text-center table-bordered " style={{backgroundColor:"lightblue"}}>
                <div class="table-responsive">
                    <tbody>
                        <td className="w-25">{book.name}</td>
                        <td className="w-25">{book.writer}</td>
                        <td className="w-25">${book.price}</td>
                        <td className="w-25"><img src={book.imageURL} style={{ height: "80px" }} alt="" /></td>
                        <td className="w-25">
                            <button className="btn btn-danger btn-sm m-4" onClick={() => handleDelete(book._id)} >Delete</button>
                        </td>
                    </tbody>
                </div>
            </table>
        </div>
    );
};

export default BookManage;
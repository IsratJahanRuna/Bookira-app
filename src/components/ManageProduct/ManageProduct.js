import React, { useEffect, useState } from 'react';


const ManageProduct = () => {
    const [books ,setBooks] = useState([])
    const deleteProduct  = () =>{
        fetch(`https://secure-bastion-32393.herokuapp.com/events`)
        .then(res =>res.json())
        .then(data => setBooks(data))
       }

    useEffect(()=>{
        fetch(`https://secure-bastion-32393.herokuapp.com/events`)
        .then(res =>res.json())
        .then(data => setBooks(data))
    },[])

    const handleDelete = (id) => {

        fetch(`https://secure-bastion-32393.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('successful');
                    deleteProduct();
                }
            })
    }

    
    return (
            <div className="row mx-auto container mt-5 text-white">
            {
                books.map(book=><div className=" col-md-12 col-sm-12"><table class="table table-sm text-center table-bordered " style={{backgroundColor:"lightblue"}}>
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
            </table></div>)
            }
        </div>
        
    );
};

export default ManageProduct;
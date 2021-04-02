import React, { useEffect, useState } from 'react';
import BookManage from '../BookManage/BookManage';


const ManageProduct = () => {
    const [books ,setBooks] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:4200/events`)
        .then(res =>res.json())
        .then(data => setBooks(data))
    },[])
    return (
            <div className="row mx-auto container mt-5 text-white">
            {
                books.map(book=><div className=" col-md-12 col-sm-12"><BookManage book={book}> </BookManage></div>)
            }
        </div>
        
    );
};

export default ManageProduct;
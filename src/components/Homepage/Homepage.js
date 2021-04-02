import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';


const Homepage = () => {
    const [books ,setBooks] = useState([])
    useEffect(()=>{
        fetch(`https://secure-bastion-32393.herokuapp.com/events`)
        .then(res =>res.json())
        .then(data => setBooks(data))
    },[])

    const spinnerStyle = {
        width : '100px',
        marginLeft : '550px',
        marginTop: '100px'
    }
    return (
        
        <div className="row mx-auto container mt-5 text-white">
            {
                books.length ? "" : <img style={spinnerStyle} src="https://gifimage.net/wp-content/uploads/2017/11/fidget-spinner-gif-transparent-8.gif" alt=""/>
            }
            {
                books.map(book=><div className=" col-md-4 col-sm-12"><Books book={book}> </Books></div>)
            }
        </div>
    );
};
export default Homepage;
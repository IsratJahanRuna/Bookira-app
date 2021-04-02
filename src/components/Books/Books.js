import React from 'react';
import { useHistory } from 'react-router';

const Books = ({book}) => {
        const history = useHistory()
        const handleCheckOut = (_id) =>{
            history.push(`/events/${_id}`)
        
    }
    return (
        <div>
        <div className="card mb-4" style={{width: "19.1rem",height:"26rem",backgroundColor:"lightblue"}}>
          <img src={book.imageURL} className="card-img-top" style={{width: "19rem",height:"16rem"}} alt=""/>
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          <p className="card-text">{book.writer}</p>
        <div className="card-footer d-flex justify-content-between ">
          <h3>${book.price}</h3>
          <button onClick={() =>handleCheckOut(book._id)} className="btn btn-primary">Buy Now</button>
        </div>
        </div>
        </div>
    </div>
    );
};

export default Books;
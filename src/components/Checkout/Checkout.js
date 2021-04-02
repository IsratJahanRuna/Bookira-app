import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';

const Checkout = () => {
   
    const {id} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
       buyDate : new Date(),
    });
    const [books,setBooks] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:4200/events/${id}`)
        .then(res=> res.json())
        .then(data => setBooks(data))
        console.log(books)
    },[id])
    
    const handleBuyDate = (date) => {
        const newDates = {...selectedDate}
        newDates.buyDate = date;
        setSelectedDate(newDates);
    };
    const{name,imageURL,price,_id,writer} = books;

    const handleCheckOut = () => {
        const bookInfo = {
            email: loggedInUser.email,
            displayName: loggedInUser.displayName,
            photoURL: loggedInUser.photoURL,
            date: selectedDate.buyDate,
            id: _id,
            price:price,
            writer:writer,
            name: name,
            imageURL:imageURL
        }
      fetch(`http://localhost:4200/buyBook`,{
          method: "POST",
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(bookInfo)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
      })
  }
    return (
        <div className='container'>
            <h1 className="text-center m-5">Checkout</h1>

            <div style={{ textAlign: 'center' }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Order Date"
                            value={selectedDate.buyDate}
                            onChange={handleBuyDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>

            <table class="table border rounded mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book name</th>
                        <th scope="col">Book Image</th>
                        <th scope="col">Book Writer</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{name}</td>
                        <td><img src={imageURL} style={{ width: '70px', height: '70px' }} alt="" /></td>
                        <td>{writer}</td>
                        <td>1</td>
                        <td>${price}</td>
                        
                    </tr>
                </tbody>
            </table>
            <div style={{ float: 'right' }} >
                <Link to ="/thankYou">
                    <button onClick={handleCheckOut} className="btn btn-primary">Add To Cart</button>
                </Link>
                <Link to="/order">
                    <button className="btn btn-primary ml-3">Preview Order</button>
                </Link>
            </div>
        </div>
    );
};

export default Checkout;
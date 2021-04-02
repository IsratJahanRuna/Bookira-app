import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:4200/allOrders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])

    return (
        <div className="mt-2 container" >
            <div className="row mx-auto">
                <div className="col-md-12 col-sm-12">
                    <h2 className="m-5 text-success" style={{ textAlign: "center" }}>Thank You for ordering. Stay connected</h2>
                    <h4 className="m-3"> You have ordered total {orders.length} products.</h4>

                </div>
               
                {
                    
                    orders.map(order =>
                        <table className="table table-primary">
                            <tbody>
                               
                                <tr>
                                    <td style={{ width: "10%" }}>{order.name}</td>
                                    <td style={{ width: "10%" }}>{order.price}</td>
                                    <td style={{ width: "10%" }}><img src={order.imageURL} style={{ width: "80px", height: "80px" }} alt="" /></td>
                                    <td style={{ width: "10%" }}>{(new Date(order.date).toDateString("dd/MM/yyyy"))}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }
            </div>
        </div>
    );
};

export default Orders;
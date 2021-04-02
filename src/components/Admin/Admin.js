import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import Slider from '../Slider/Slider';



const Admin = () => {
    return (
        
        <div className="row mr-0">
            <Router>
                 <div className="col-md-3">
                <Slider></Slider>
            </div>
            <div className="col-md-9">
                <Switch>
                    <Route path='/manageProduct'>
                        <ManageProduct></ManageProduct>
                    </Route>
                    <Route path='/addProduct'>
                        <AddProduct></AddProduct>
                    </Route>

                </Switch>

            </div>
            </Router>

        </div>
    );
};

export default Admin;
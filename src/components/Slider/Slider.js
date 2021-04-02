import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Side = props => {
    return (
        <div>
             <>
            <Nav className="col-md-8 col-lg-12 col-sm-3 d-md-block bg-dark sidebar "
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item className="p-3  m-4  ">
                    <Link to="/manageProduct" className="text-white  text-decoration-none ">Manage Product</Link>
                </Nav.Item>
                <Nav.Item className="p-3  m-4  ">
                    <Link to="/addProduct"  className="text-white  text-decoration-none ">Add Product</Link>
                </Nav.Item>
            </Nav>
        </>
        </div>
    );
};
const Slider = withRouter(Side);
export default Slider;
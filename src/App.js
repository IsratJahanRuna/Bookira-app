
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nomatch from './components/Nomatch/Nomatch';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import Homepage from './components/Homepage/Homepage';
import Admin from './components/Admin/Admin';
// import Destination from './components/Destination/Destination';
// import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import Checkout from './components/Checkout/Checkout';
import ThankYou from './components/ThankYou/ThankYou';
// import SelectRide from './components/Login/SelectRide/SelectRide';
// import Blog from './components/Blog/Blog';
// import Contact from './components/Contact/Contact';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Homepage></Homepage>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/events/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="/thankYou">
            <ThankYou></ThankYou>
          </Route>
          <PrivateRoute path="/order">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>

      </Router>
    </UserContext.Provider>
  );
}


export default App;

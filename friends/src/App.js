import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import axiosWithAuth from './api/axiosWithAuth';
import PrivateRoute from './api/PrivateRoute';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
          <li>
              <Link to='/login'>Login Page</Link>
          </li>
          <li>
              <Link to='/FriendsList'>Friends List</Link>
          </li>
          <li>
              <Link to='/AddFriend'>Add Friend</Link>
          </li>
      </ul>

      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/FriendsList' component={FriendsList} />
        <PrivateRoute path='/AddFriend' component={AddFriend} />
        <Route><Login /></Route>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import Signin from './components/screens/Signin'
import CreatePost from './components/screens/CreatePost'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Route exact path="/" >
      <Home/>
    </Route>
    <Route path="/signin">
      <Signin/>
    </Route>
    <Route path="/profile">
      <Profile/>
    </Route>
    <Route path="/signup">
      <Signup/>
    </Route>
    <Route path="/create">
      <CreatePost/>
    </Route>
    </BrowserRouter>
  );
}

export default App;

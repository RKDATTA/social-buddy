import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PostDetail from "./components/PostDetail/PostDetail";


function App() {
  return (
    <div className="App">
      <h1>Hello   </h1>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/Home">Home2</Link>
          </li>
        </ul>
        <hr />    
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/dashboard">
          </Route>

          <Route path="/Home">
           <Home></Home>   
          </Route>

          <Route path ="/post/:id">
            <PostDetail></PostDetail>
          </Route>
                      
        </Switch>
      </div>
    </Router>
    
    </div>
  );
}

export default App;

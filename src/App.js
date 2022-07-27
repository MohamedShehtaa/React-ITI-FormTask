import React from "react";
// import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from './componant/utlites/NavBar';

import Login from './pages/Login';
import Register from './pages/Register';
// import Notfound from './pages/Notfound';
import ApiResponse from "./network/configapi";

function App() {

  return (
    <Router>
      <Navbar />
      <Switch >
        <div className="container my-5">
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/api" component={ApiResponse} />
          {/* <Route path='*' component={Notfound} /> */}

        </div>

      </Switch>

    </Router>


  )

}

export default App;

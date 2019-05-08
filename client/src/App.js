import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <body className="App-body">
          {/* <Router>
            <Switch>
              <Route exact path="/" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/contact" Component={Contact} />
              <Route component={noMatch} />
            </Switch>
          </Router> */}
          <h1>APP</h1>
        </body>
      </div>
    );
  }
}

export default App;

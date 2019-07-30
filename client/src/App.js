import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Question from "./pages/Question"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Question} />
      </div>
    </Router>
  );
}

export default App;

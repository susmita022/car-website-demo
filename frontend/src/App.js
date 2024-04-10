import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import BookShowRoom from "./components/pages/BookShowRoom";
import SignUp from "./components/pages/SignUp";
import ContactUs from "./components/pages/ContactUs";
//bugs start
let myObject = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
};

// Incorrect usage of 'in' with an object
for (let key in myObject) {
    console.log(key + ': ' + myObject[key]);
}
let result = 10 / "hello";

if (result === NaN) {
    console.log("Result is NaN");
} else {
    console.log("Result is not NaN");
}
let symbol = new Symbol('foo');

//bugs end
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/bookShowroom" component={BookShowRoom} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/ContactUs" component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

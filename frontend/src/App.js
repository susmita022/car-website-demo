import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import BookShowRoom from "./components/pages/BookShowRoom";
import Ebook from "./components/pages/Ebook";
import SignUp from "./components/pages/SignUp";
import Invicto from "./components/pages/Invicto";
import Ignis from "./components/pages/Ignis";
import GV from "./components/pages/GV";
import Jimny from "./components/pages/Jimny";
import ContactUs from "./components/pages/ContactUs";
import Baleno from "./components/pages/Baleno";

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
          <Route path="/ebook" component={Ebook} />
          <Route path="/invicto" component={Invicto} />
          <Route path="/ignis" component={Ignis} />
          <Route path="/GV" component={GV} />
          <Route path="/jimny" component={Jimny} />
          <Route path="/Baleno" component={Baleno} />
          <Route path="/ContactUs" component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

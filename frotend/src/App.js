import React from "react";
import Footer from "./component/layouts/Footer/Footer";
import Header from "./component/layouts/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import "./App.css"
import Products from "./component/Product/Products";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/product/:id">
            <ProductDetails />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:keyword">
            <Products />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

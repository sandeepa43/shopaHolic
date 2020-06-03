import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom'; 
import { Provider } from "react-redux";
import Products from "./components/Products";
import Basket from "./components/Basket";
import store from "./store/store";
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import "./App.css";
import WishList from "./components/WishList";

class App extends Component {
  render() {
    return (
    
      <Provider store={store}>
       <Navbar/>
        <Switch >
          <Route exact path="/" component={Products}/>
          <Route path="/details" component={ProductDetail}/>
          <Route path="/cart" component={Basket}/>
          <Route path="/wish" component={WishList}/>

        </Switch>
              {/* <Filter />
              <hr />
              <Products />
       
              <Basket /> */}
     
      </Provider>
    );
  }
}

export default App;
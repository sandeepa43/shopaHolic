import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import {Link} from 'react-router-dom';
import { addToCart } from "../action/cartActions";
import {addToWishList} from "../action/wishListActions";
import { fetchProducts } from "../action/productAction";
import Filter from './filter';
import '../index.css';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.getState();
  }
  getState(){
    console.log(this.props,'state');
  
  }
 
  render() {
    const productItems = this.props.products.map((product) => (

              <div className="box" key={product.id}>
                {console.log(this.props,'cart')}
                
        
        <div className="thumbnail text-center">
     <Link to={{
       pathname:'/details',
       aboutProps:{
         id:product.id
       }
     }}>
              <div className="card-content">
            <img className="card-image" src={`products/${product.img}.jpg`} alt={product.title} />
            <p className="card-title">{product.title}</p>
            </div>
          
          <b style={{marginLeft:'2rem'}}>{util.formalCurrency(product.price)}</b>
          </Link>
          {/* <a
            href={`#${product.id}`}
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          > */}
          <button
            className="shopButton"
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >
            Add to cart
          </button>
          <button
            className="shopButton"
            onClick={(e) => this.props.addToWishList(this.props.WishListItem, product)}
          >
            Add to WishList
          </button>
          {/* </a> */}
        </div>
      </div>
    
    
    ));

    return <div className="container">
        <Filter/>
     <div> {productItems}</div>   
        </div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
  // WishListItem: state.products.wishList,
  WishListItem: state.cart.items,
});

export default connect(mapStateToProps, { fetchProducts, addToCart ,addToWishList})(Products);
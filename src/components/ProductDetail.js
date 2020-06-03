import React,{Component} from 'react';
import {connect} from 'react-redux';
import { fetchProducts } from "../action/productAction";
import { addToCart } from "../action/cartActions";
import '../index.css';
class ProductDetail extends Component {
state={
    product:''
};
componentDidMount() {
    this.props.fetchProducts();
    const productItems = this.props.products;
    const detailId =this.props.location.aboutProps? this.props.location.aboutProps.id - 1: null;
    
         console.log(productItems[detailId],productItems[1],detailId);
         this.setState(
             productItems[detailId] ?
             {
             product : productItems[detailId]
            }
             :null
         );
  }
    render() {
   console.log(this.state.product,'ll')
        return (
<div>
    {this.state.product?
<img className="detail-image" src={`products/${this.state.product.img}.jpg`} />:null}
<p className="card-title">
    {this.state.product.description}<br/>
    {this.state.product.price}
</p>


<button className="shopButton"
  onClick={(e) => this.props.addToCart(this.props.cartItems, this.state.product)}>
    Add To Cart
</button>
</div>

        );
    }
}
const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items,
});


export default connect(mapStateToProps,{fetchProducts, addToCart})(ProductDetail);
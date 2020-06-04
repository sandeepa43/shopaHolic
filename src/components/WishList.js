import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import '../index.css';
import { addToWishList, removeFromWishList } from "../action/wishListActions";
class WishList extends Component {
  render() {
    const { WishListItem } = this.props;
console.log(WishListItem,'wishlist');
    return (
    
      <div className="alert alert-info">
        {WishListItem.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>
            You have {WishListItem.length} items in the basket. <hr />
          </div>
        )}
        {WishListItem.length > 0 && (
          <div>
            <ul style={{ marginLeft: -25 }}>
              {WishListItem.map((item) => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button
                    style={{ float: "right" }}
                    className="btn btn-danger btn-xs"
                    onClick={(e) =>
                      this.props.removeFromWishList(this.props.WishListItem, item)
                    }
                  >
                    X
                  </button>
                  <br />
              
                </li>
              ))}
            </ul>

    
            <button
              onClick={() => alert("Todo: Implement checkout page.")}
              className="btn"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => (
  console.log(state,'wwmap'),
  {
    WishListItem: state.WishList.list,

});
export default connect(mapStateToProps, { addToWishList, removeFromWishList })(WishList);
import { Link } from "react-router-dom";
import { deleteItemById, increase, substractItem } from "../store/cartSlice";

import { useDispatch, useSelector } from "react-redux";
import Order from "./Order";
import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function SelectedItemCart() {
  const { cartArray } = useSelector((store) => store.cart);
  const { userId } = useSelector((store) => store.firebaseAuth);
  const dispatch = useDispatch();
  const [checkout, setCheckout] = useState(false);

  console.log(userId);
  if (cartArray.length < 1) {
    return (
      <>
        <p>Nothing has been added </p> <Link to="/products">Back to Items</Link>
      </>
    );
  }

  return (
    <>
      {/* <Nav /> */}
      <div className="selectItem">
        <div className="selectItem-con">
          <div className="product-div">
            {
              <div className="product-con">
                {cartArray.map((product) => {
                  return (
                    <div key={product.id} className="product-details">
                      <ul className="product-ul">
                        <li className="product-li">
                          <div className="div-img">
                            <img
                              src={product.thumbnail}
                              alt={product.description}
                            />
                          </div>

                          <p className="product-description">
                            {product.description}
                          </p>
                          <p className="product-price">
                            Price: ${product.price}
                          </p>
                          <p className="product-price">
                            Quantity: {product.quantity}
                          </p>
                        </li>
                      </ul>

                      <div className="product-btn">
                        <span
                          onClick={() => dispatch(substractItem(product.id))}>
                          -
                        </span>

                        <button
                          onClick={() => dispatch(deleteItemById(product.id))}>
                          Remove
                        </button>

                        <span onClick={() => dispatch(increase(product.id))}>
                          +
                        </span>
                        {/* {cartArray.find(arr => arr.id === product.id)} */}
                      </div>
                    </div>
                  );
                })}
              </div>
            }
            <div className="btn">
              <button onClick={() => setCheckout(true)}>CHECKOUT</button>
            </div>
          </div>
          {checkout && (
            <div className="order-in-selectItem-con">
              <Order setCheckout={setCheckout} />
            </div>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default SelectedItemCart;

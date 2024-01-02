// import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import Star from "./Star";

import warranty from "../img/no-warranty.png";
import cod from "../img/cod.png";
import returnable from "../img/returnable.png";
import cancelable from "../img/cancelable1.png";

import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { increase, selectItem, substractItem } from "../store/cartSlice";
import Back from "./Back";
import Footer from "./Footer";
import Nav from "./Nav";

function ProductsDetails() {
  const { data } = useQuery(["products"], {
    fetchPolicy: "cache-only"
  });

  const products = data?.products;

  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const { cartArray } = useSelector((store) => store.cart);
  console.log(cartArray);

  const obj = cartArray.find((arr) => arr.id === Number(id));

  const toGetQuantity = obj?.quantity;

  // useEffect(()=>{

  //   if (toGetQuantity < 1) {
  //     setDisable(true);
  //   }
  // },[toGetQuantity])

  console.log(toGetQuantity);

  //  const details = products?.find((item) =>{
  //   if(item.id === Number(id)){
  //     return {...item}

  //   }
  // });
  // console.log(details) This method works, just the way I did it in the cartSlice to add a property to the object.

  const details = products?.find((item) => item.id === Number(id));

  const stars = Array.from({ length: details.rating }, (_, i) => i + 1);

  const style = {
    backgroundColor: toGetQuantity > 0 ? "red" : "green"
  };

  return (
    <>
      {/* <Nav /> */}
      <main className="dyn-prod-con">
        <div>
          <div key={details.id} className="detail-grid">
            <div className="dyn-img">
              <Back />
              <div>
                <img src={details.images[0]} alt={details.title} />
              </div>
              <img src={details.images[1]} alt={details.title} />
            </div>

            <div className="dyn-details">
              <div>
                <h5>Catergory: {details.category}</h5>
                <p className="title">Title: {details.title}</p>

                <ul>
                  {stars.map((star, i) => (
                    <li key={i}>
                      <Star />
                    </li>
                  ))}
                </ul>

                <p className="price">${details.price}</p>
                <p className="tax">(Inclusive of all taxes)</p>
                <p className="desc">{details.description}</p>
                <div className="img-det">
                  <div>
                    <img src={warranty} />
                    <p>No warranty</p>
                  </div>
                  <div>
                    <img src={cod} />
                    <p>COD available</p>
                  </div>
                  <div>
                    <img src={returnable} />
                    <p>Returnable</p>
                  </div>
                  <div>
                    <img src={cancelable} />
                    <p>Cancelable</p>
                  </div>
                </div>
                <div className="social">
                  <p>Share:</p>
                  <Link to="#">
                    <TiSocialFacebook className="r-icon" />
                  </Link>
                  <Link to="#">
                    <TiSocialLinkedin className="r-icon" />
                  </Link>
                  <Link to="#">
                    <TiSocialTwitter className="r-icon" />
                  </Link>
                  <Link to="#">
                    <TiSocialInstagram className="r-icon" />
                  </Link>
                </div>
              </div>

              <div className="btn-quantity">
                <button
                  onClick={() => dispatch(substractItem(details.id))}
                  disabled={toGetQuantity ? false : true}>
                  -
                </button>
                {/* <p>{toGetQuantity}</p> */}
                {toGetQuantity > 0 ? <p>{toGetQuantity}</p> : <p>0</p>}
                <button
                  onClick={() => dispatch(increase(details.id))}
                  disabled={toGetQuantity > 0 ? false : true}>
                  +
                </button>
              </div>
              <button
                className="add"
                style={style}
                onClick={() => dispatch(selectItem(details))}
                disabled={toGetQuantity > 0 ? true : false}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default ProductsDetails;

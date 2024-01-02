import { useQuery } from "@tanstack/react-query";

import { useDispatch } from "react-redux";

import "../App.css";
import { selectItem } from "../store/cartSlice";

import { Link } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  // const {uid} = useSelector(store=> store.firebaseAuth)

  const { data } = useQuery({
    queryKey: ["products"]
  });

  // console.log(uid);
  // console.log(data);

  return (
    <div className="product-div">
      <main>
        <div className="product-con">
          {data?.products.map((product) => {
            return (
              <div key={product.id} className="product-details">
                <Link key={product.id} to={"/product-details/" + product.id}>
                  <ul className="product-ul">
                    <li className="product-li">
                      <div className="div-img">
                        <img
                          src={product.thumbnail}
                          alt={product.description}
                        />
                      </div>

                      <p className="product-description">{product.title}</p>
                      <p className="product-price">${product.price}</p>
                    </li>
                  </ul>
                </Link>
                <div className="product-btn">
                  <button onClick={() => dispatch(selectItem(product))}>
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Products;

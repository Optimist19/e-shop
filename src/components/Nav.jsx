// import { useSelector } from "react-redux";

// function Nav() {
//   const { cartArray } = useSelector((store) => store.cart);

//   let itemTotalPrice;
//   // console.log(first)
//   if (cartArray) {
//     const initialValue = 0;
//     itemTotalPrice = cartArray.reduce((acc, cum) => {
//       return acc + cum.price;
//     }, initialValue);
//   }

//   return (
//     <div>Nav</div>
//     // <div>Nav {itemTotalPrice}</div>
//   );
// }

// export default Nav;

// import { useSelector } from "react-redux";


import { LuLogIn } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";

import { SlOptionsVertical } from "react-icons/sl";


import logo from "../img/es.jpg";
// import { signout } from "../store/authSlice";
import { useSelector } from "react-redux";
// import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function Nav() {
  // const dispatch = useDispatch();
  const uid = useSelector((store) => store.firebaseAuth.uid);
  const { cartArray } = useSelector((store) => store.cart);
  // console.log(uid);

  let totalItem;

  if (cartArray && cartArray.length > 0) {
    const initialValue = 0;
    totalItem = cartArray.reduce((acc, cum) => {
      // console.log(acc,"acc")
      // console.log(cum,"cum")
      return acc + cum.quantity;
    }, initialValue);
  }

  // const totalItems = cartArray.length

  const style = {
    color: totalItem > 1 ? "red" : ""
  };

  return (
    <nav>
      <div className="nav-con">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="input">{uid && <input type="text" />}</div>
        <ul>
          <li>
            <div>
              <Link to="/products">Home
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/about">About</Link>
            </div>
          </li>

          {uid ? (
            <>
              <li>
                <Link to="/cartlist" className="cart">
                  <TiShoppingCart style={style} />
                  <span className="totalItem">{totalItem}</span>

                </Link>
              </li>
              <li>
                <Logout />
              </li>
            </>
          ) : (
            <>
              <li>
                <div>
                  <Link to="/login">Log in</Link>
                  <LuLogIn />
                </div>
              </li>
              <li>
                <div>
                  <Link to="/signup">Sign up</Link> <CgProfile />
                </div>
              </li>
            </>
          )}

          <li className="three-dot">
            <SlOptionsVertical />
          </li>
        </ul>
        {/* <span className="totalItem">{totalItem}</span> */}
      </div>
    </nav>
  );
}

export default Nav;

// const { cartArray } = useSelector((store) => store.cart);
// let itemTotalPrice;

// if (cartArray) {
//   const initialValue = 0;
//   itemTotalPrice = cartArray.reduce((acc, cum) => {
//     return acc + cum.price; // Corrected syntax
//   }, initialValue);
// }

// {uid ? "" :(
//   <>

//    <li>
//      <div>
//        <Link to="/login">Log in</Link>
//        <LuLogIn />
//      </div>
//    </li>

//    <li>
//      <div>
//        <Link to="/signup">Sign up</Link> <CgProfile />
//      </div>
//    </li>
//   </>
//  )}


import { useSelector } from "react-redux";
import swal from 'sweetalert';


function Order({setCheckout}) {
  const { cartArray } = useSelector((store) => store.cart);



  const totalQuantity = cartArray.reduce((acc, cum) => {
    return acc + cum.quantity;
  }, 0);

  const totalPrice = cartArray.reduce((acc, cum) => acc + cum.price, 0);


  // genRandomString()

function order(){

  let result = "";
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  let charLength = chars.length;
  for (var i = 0; i < 10; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  // setRandom(result);

  swal({
    title: `${result}`,
    text: "Order recieved, please check your email",
    icon: "success",
    button: "OK",
  })
}

  return (
    <div className="order-con">
      <div className="order-p-btn">
      <p onClick={()=>setCheckout(false)}>X</p>
        <p>Total Item(s): {totalQuantity}</p>
        <p>Total Price: {totalPrice}</p>
        <button onClick={()=>order()}>Order</button>
      </div>
    </div>
  );
}

export default Order;

import { RiLogoutCircleLine } from "react-icons/ri";
import { signout } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout() {
  const uid = useSelector((store) => store.firebaseAuth.uid);
  // console.log(uid);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (uid === null) {
      navigate("/public");
    }
  }, [uid, navigate]);

  return (
    <div>
      <span onClick={() => dispatch(signout())}>Log out</span>{" "}
      <RiLogoutCircleLine />
    </div>
  );
}

export default Logout;

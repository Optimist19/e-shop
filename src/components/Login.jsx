import { Form, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { firebaseLoginDetails } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Back from "./Back";

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { uid } = useSelector((store) => store.firebaseAuth);

  //console.log(uid); //null but later changed when the firebase completes it work.

  useEffect(() => {
    if (uid) {
      navigate("/");
    }
  }, [uid, navigate]);

  const loginDetails = (data) => {
    dispatch(firebaseLoginDetails(data));

    // console.log(uid); //null but later changed when the firebase completes it work.
  };

  //console.log(uid); //null but later changed when the firebase completes it work.

  return (
    <form className="form" onSubmit={handleSubmit(loginDetails)}>
      <div className="form-input-con">
        <div>
          <input {...register("email")} placeholder="Email" />
          <input
            {...register("password", { required: true })}
            placeholder="Password"
          />
          <input type="submit" className="btn" />
          <Link to="/signup">Sign up</Link>
          <div className="back">
            <Back />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;

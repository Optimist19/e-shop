import { Form, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Back from "./Back";

function Signup() {
  const { register, handleSubmit } = useForm();
  const status = useSelector((store) => store.firebaseAuth.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(status);

  function signupDetails(data) {
    // console.log(data);
    dispatch(signup(data));

    navigate("/login");

  }

  return (
    <form className="form" onSubmit={handleSubmit(signupDetails)}>
      <div className="form-input-con">
        <div>
          <input {...register("email")} placeholder="Email"/>
          <input {...register("password", { required: true })}  placeholder="Password"/>
          <input type="submit" className="btn" />
          <Link to="/login">Sign up</Link>
          <div className="back">
            <Back />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;

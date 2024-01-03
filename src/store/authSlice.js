import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {auth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword,} from "../Api/firebase";



const initialState = {
  email: "",
  password: "",
  uid: null //The value here is coming from firebaseAuth serving as auth.
};


const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(firebaseLoginDetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(firebaseLoginDetails.fulfilled, (state, action) => {
        // if(action.payload){

        // 	state.email = action.payload.email;
        // 	state.password = action.payload.password;
        // 	state.status = "idle";
        // }
        state.email = action.payload?.email;
        state.password = action.payload?.password;
        state.uid = action.payload?.uid;
        state.status = "idle";
        state.userId = action.payload?.userId
      })
      .addCase(firebaseLoginDetails.rejected, (state, action) => {
        state.status = "error";
        state.error = "Sign up please"
      }) //
      .addCase(signout.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signout.fulfilled, (state, action) => {
        state.uid = null;
        state.status = "idle";
      })
      .addCase(signout.rejected, (state, action) => {
        state.status = "error";
        state.error = "Sorry, there is a problem";
      }) //
      .addCase(signup.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, action) => {})
      .addCase(signup.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload.errorMessage;
      })
});


export const firebaseLoginDetails = createAsyncThunk(
  "firebaseAuth/firebaseLoginDetails",
  async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      // console.log(user, "user");
      // console.log(user.uid, "user Uid");
      const userId = user.uid
      const uid = user.providerId; 

      const payload = { email, password, uid, userId };
      // console.log(uid); 
      // console.log("Async Thunk Payload:", payload);
      return payload;
    } catch (error) {
   
      console.log(error);
      // toast.error("Kindly sign up");
    }
  }
);


export const signup = createAsyncThunk(
  "firebaseAuth/signup",
  ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        const payload = {
          email,
          password
        };
        return payload;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const payload = { errorMessage };
        return payload;
        // ..
      });
  }
);

export const signout = createAsyncThunk("firebaseAuth/signout", function () {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out successful");
      toast("Sign-out successful");
    })
    .catch((error) => {
      // An error happened.
    });
});


export default authSlice.reducer;

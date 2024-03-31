import React from "react";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../components/Firebase/firebase.init'

function SignUp() {


  const handleSignUp = e => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    console.log('form Submited!', email, password);

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  };
  return (
    <>
      <div className="text-center text-3xl my-6">Sign Up Now</div>

      <div className="mx-auto">
        <form onSubmit={handleSignUp} className=" w-full h-full text-center">
          <input
            type="email"
            name="email"
            className="mb-5 py-4 w-1/3 rounded"
            placeholder=" Enter your email"
          />
          <br />
          <input
            type="password"
            name="password"
            className="mb-5 py-4 w-1/3 rounded"
            placeholder=" Enter your new password"
          />
          <br />
          <input
            type="submit"
            value="Submit"
            className="mb-5 py-4 w-1/3 rounded btn btn-success"
          />
        </form>
      </div>
      <h1 className="text-center text-xl mt-6">
        Already have an account?{" "}
        <NavLink to="/SignIn" className="text-purple-500">
          Sign In Now!
        </NavLink>
      </h1>
    </>
  );
}

export default SignUp;

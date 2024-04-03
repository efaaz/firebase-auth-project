import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authProvider } from "../AuthProvider";

function SignUp() {
  const { signUp } = useContext(authProvider);
  const [errorMsg, seterrorMsg] = useState("");
  const [submitMsg, setSubmitMsg] = useState("");
  const [showPass, setshowPass] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Reset message
    seterrorMsg("");
    setSubmitMsg("");

    if (password.length < 6) {
      seterrorMsg("Please enter a password of at least 6 characters");
      return;
    }

    signUp(email, password)
      .then(() => {
        // Signed up
        e.target.reset();
        navigate("/SignIn");
        setSubmitMsg("Form Submited!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMsg(errorMessage);
      });
  };
  return (
    <>
      <div className="text-center text-3xl my-6">Sign Up Now</div>

      <div className="mx-auto">
        <form
          onSubmit={handleSignUp}
          className=" w-full h-full mx-auto container"
        >
          <input
            type="email"
            name="email"
            className="mb-5 py-4 w-1/3 rounded pl-2"
            placeholder="Enter your email"
            required
          />
          <br />
          <input
            type={showPass ? "text" : "password"}
            name="password"
            className="mb-5 py-4 w-1/3 rounded  pl-2"
            placeholder=" Enter your new password"
            required
          />
          <span
            className="cursor-pointer"
            onClick={() => setshowPass(!showPass)}
          >
            show pass
          </span>
          <br />
          <input
            type="submit"
            value="Submit"
            className="mb-5 py-4 w-1/3 rounded btn btn-success"
          />
        </form>
        {errorMsg && <p className="text-red-600 text-center">{errorMsg}</p>}
        {submitMsg && <p className="text-green-600 text-center">{submitMsg}</p>}
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

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase";
import { useForm } from "react-hook-form";

function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
      navigate("/dashboard");
    } catch (error) {

      setError(error.message);
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="container w-50 mt-5 pt-5 ">
        <form onSubmit={handleSubmit(onSubmit)} className="form_main">
          <p className="heading">Sign In</p>

          {error && <p className="text-danger">{error}</p>}

          <div className="inputContainer">
            <input
              placeholder="Email"
              type="email"
              className="inputField fs-5"
              {...register("email", { required: "Email is required" })}
            />
          </div>

          <div className="inputContainer">
            <input
              placeholder="Password"
              type="password"
              className="inputField fs-5"
              {...register("password", { required: "Password is required" })}
            />
          </div>

          <button id='button' className="form-btn mb-3" type="submit">
            Sign In
          </button>

          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

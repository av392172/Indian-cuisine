import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        navigate("/login");
        setPassword("");
        setEmail("");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error in signup", errorCode, errorMessage);
        // ..
      });
  };
  const isDisabled = !email.length || !password.length ? true : false;

  return (
    <main className="h-[100vh] flexCenter">
      <section className="bg-gray-200 rounded-lg py-5 px-2 h-[400px] min-w-[400px] flex flex-col gap-5">
        <h4 className="text-2xl font-bold text-green-50 text-center">
          Indian Cuisine
        </h4>
        <form className="flexCenter flex-col">
          <div className="flex w-full justify-between py-2 my-2">
            <label
              htmlFor="email-address"
              className="mt-2 text-gray-800 text-lg"
            >
              Email address
            </label>
            <input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-lg block p-2"
              placeholder="Email address"
            />
          </div>

          <div className="flex w-full justify-between py-2 my-2">
            <label htmlFor="password" className="mt-2 text-gray-800 text-lg">
              Password
            </label>
            <input
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 rounded-lg block p-2"
              placeholder="Password"
            />
          </div>

          <div className="mt-5">
            <button
              type="submit"
              onClick={onSubmit}
              disabled={isDisabled}
              className={`inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 ${
                isDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-green-50"
              }`}
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-500 font-bold">
            Sign in
          </NavLink>
        </p>
      </section>
    </main>
  );
};

export default Signup;

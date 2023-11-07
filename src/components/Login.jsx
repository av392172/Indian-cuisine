import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    console.log("test", email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log("user", user);
        setPassword("");
        setEmail("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorCode, errorMessage);
      });
  };
  const isDisabled = !email.length || !password.length ? true : false;
  console.log("checking", isDisabled);
  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log("data", data);
        navigate("/");
      })
      .catch((error) => {
        console.log("error in google signin", error);
      });
  };
  return (
    <>
      <main className="h-[100vh] flexCenter">
        <section className="bg-gray-200 rounded-lg py-5 px-4 h-[400px] min-w-[400px] flex flex-col gap-5">
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
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                // className="border border-gray-400 rounded-sm"
                className="border border-gray-300 rounded-lg block p-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex w-full justify-between py-2 my-2">
              <label htmlFor="password" className="mt-2 text-gray-800 text-lg">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                // className="border border-gray-400 rounded-sm"
                className="border border-gray-300 rounded-lg block p-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-5">
              <button
                className={`inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 ${
                  isDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-green-50"
                }`}
                onClick={onLogin}
                disabled={isDisabled}
                // disabled={true}
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-sm text-center">
            No account yet?{" "}
            <NavLink to="/signup" className="text-blue-500 font-bold">
              Sign up
            </NavLink>
          </p>
          <div className="w-full flexCenter">
            <button
              className={`inline-block rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600`}
              onClick={handleGoogleSignin}
            >
              Sign In with Google
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;

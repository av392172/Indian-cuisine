import React from "react";
import { Link } from "react-router-dom";

import { NAV_LINKS } from "../constants";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Navbar({ name, userPic, id }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (id) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          navigate("/");
          console.log("Signed out successfully");
        })
        .catch((error) => {
          // An error happened.
          console.log("Error in signing out!");
        });
    } else {
      navigate("/login");
    }
  };
  return (
    <nav className="py-5 flexBetween max-container padding-container relative z-30">
      <Link to="/">
        <h4 className="text-2xl font-bold text-green-50">Indian Cuisine</h4>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all
          hover:font-bold"
            to={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div
        className="hidden lg:flexCenter flex-col relative group"
        onClick={handleClick}
      >
        <Button
          type="button"
          title={id ? "Logout" : "Login"}
          icon={userPic ? userPic : "/user.svg"}
          variant="btn_dark_green"
        />
        <p className="absolute opacity-0 top-10 z-10 group-hover:opacity-100 regular-14 text-gray-90">
          {name}
        </p>
      </div>
    </nav>
  );
}

export default Navbar;

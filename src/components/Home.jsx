import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import ChefFeed from "./ChefFeed";
import Recipes from "./Recipes";
import GetApp from "./GetApp";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

function Home() {
  const [userName, setUserName] = useState("");
  const [userPic, setUserPic] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user?.uid;
        const name = user?.displayName;
        const email = user?.email;
        const pic = user?.photoURL;
        setUserName(name ? name : email);
        setUserPic(pic);
        setId(uid);
      } else {
        // User is signed out
        setUserName("");
        setUserPic("");
        setId("");
      }
    });
  }, []);
  return (
    <>
      <Navbar name={userName} profile={userPic} id={id} />
      <Banner />
      <ChefFeed />
      {/* Features/ Top Recipes */}
      <Recipes />
      <GetApp />
      <Footer />
    </>
  );
}

export default Home;

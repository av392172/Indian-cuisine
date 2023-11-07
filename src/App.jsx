import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ChefRecipe from "./components/ChefRecipe";
import Signup from "./components/Signup";
import Login from "./components/Login";
// import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chef-recipe" element={<ChefRecipe />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;

// src/components/Home.js
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { auth, logout } = useContext(AuthContext);
  //   console.log(auth);
  return (
    <div className="name">
      <h1 className="text-3xl">Welcome, {auth.user.name}</h1>
      
      <button
        onClick={logout}
        className="btn"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;

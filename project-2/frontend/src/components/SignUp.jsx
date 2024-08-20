import React, { useContext, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import BackgroundWrapper from "./BackgroundWrapper";
import '../components/sign.css'
const Signup = ({ setActivationToken }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { error, setError } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://project-nexuss.onrender.com/api/user/register",
        formData
      );
      // console.log("Signup success:", response.data.activationToken);
      setActivationToken(response.data.activationToken);
      navigate("/verify");
    } catch (error) {
      // console.error("Error during signup:", error.response);
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BackgroundWrapper>
      <div >
        {loading && <ClipLoader color="#fff" loading={loading} size={60} />}
        {!loading && (
          <form
            className="input"
            onSubmit={handleSubmit}
          >
            <p className="name">Sign Up</p>
            <div className="card">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="box"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="box"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="box"
              />
            </div>
            {error && <p style={{ color: "#c23616" }}>{error}</p>}{" "}
            <button
              type="submit"
              className="btn"
            >
              Sign Up
            </button>
            <span className="text-center text-white">
          Already have an account?
          <Link to="/login" className="text-[##ced6e0] pl-2">
            Login
          </Link>
        </span>
          </form>
        )}
       
      </div>
    </BackgroundWrapper>
  );
};

export default Signup;

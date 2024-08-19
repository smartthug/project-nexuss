import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import BackgroundWrapper from "./BackgroundWrapper";
import '../components/sign.css'
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { login, error, setError } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://project-2-signup-login-with-auth-backend.onrender.com/api/user/login",
        formData
      );

      console.log("Login success:", response.data);
      login(response.data.userDetails);
      navigate("/home");
    } catch (error) {
      // console.error("Error during login:", error.response.data);
      setError(error.response ? error.response.data.message : error.message);
      // console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BackgroundWrapper>
      <div >
        {loading && <ClipLoader color="#fff" loading={loading} size={50} />}
        {!loading && (
          <form
            onSubmit={handleSubmit}
            className="input"
          ><p className="name">Log-in</p>
            <div className="card">
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
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
              type="submit"
              className="btn">
              Login
            </button>
            <span className="text-center text-white ">
          Don't have an account?
          <Link to="/signup" className="text-[#e05653] pl-1">
            Sign Up
          </Link>
        </span>
          </form>
        )}

       
      </div>
    </BackgroundWrapper>
  );
};

export default Login;

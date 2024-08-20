import React, { useContext, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import BackgroundWrapper from "./BackgroundWrapper";
import { AuthContext } from "../context/AuthContext";

const OtpVerify = ({ activationToken }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { error, setError } = useContext(AuthContext);
  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://project-nexuss.onrender.com/api/user/verify",
        { otp, activationToken }
      );
      setError(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error("Error during verification:", error.response.data);
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BackgroundWrapper>
      <div>
        {loading && <ClipLoader color="#fff" loading={loading} size={50} />}
        {!loading && (
          <form
            onSubmit={handleSubmit}
            className="input"
          >
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              value={otp}
              onChange={handleChange}
              className="box"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="btn"
            >
              Verify OTP
            </button>
            <span className="text-center text-white ">
          Facing issues?
          <Link to="/signup" className="text-[#e05653] pl-1">
            Sign Up Again
          </Link>
        </span>
          </form>
        )}

       
      </div>
    </BackgroundWrapper>
  );
};

export default OtpVerify;

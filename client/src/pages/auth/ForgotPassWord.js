import React, { useState } from "react";
import "../../styles/authstyle.css";
import axios from "axios";
import Layout from "../../components/layout/Layout.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassWord = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [renewPassword, setrenewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, renewPassword, answer }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Forgot-Password -Ecommerce App"}>
      <div className="form-container">
        <h1>Reset Password</h1>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              id="exampleInputPassword1"
              placeholder="Who is your best friend ?"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              id="exampleInputPassword1"
              placeholder="Enter new Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              value={renewPassword}
              onChange={(e) => setrenewPassword(e.target.value)}
              id="exampleInputPassword1"
              placeholder=" Re Enter new Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassWord;

import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await api.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div className="form-container ">
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className="register-form"
      >
        <h3 className="text-center">Login From</h3>
        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <Link to="/register" className="m-2">
          Not a user Register here
        </Link>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
      <Form className="register-form">
        <h3 className="text-center">Login Instraction</h3>
        <div>
          <h5 >1- admin Interface</h5>
          <div>admin Email : admin@admin.com</div>
          <div> admin password : 123456</div>
        </div>{" "}
        <br />
        <div>
          <h5 >2- doctor Interface</h5>
          <div>doctor Email : doctor@doctor.com</div>
          <div> admin password : 123456</div>
        </div>{" "}
        <br />
        <div>
          <h5 >1- patient Interface</h5>
          <div>patient Email : patient@patient.com</div>
          <div> patient password : 123456</div>
          
        </div>{" "}
      </Form>
    </div>
  );
};

export default Login;

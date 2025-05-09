import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onSignup, onViewProfile } from "../store/actions";
import { Profile } from "./Profile";

const Login = () => {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const { token } = user;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Toggle state: true for login, false for signup

  useEffect(() => {
    if (token) {
      dispatch(onViewProfile());
    }
  }, [token, dispatch]);

  const userLogin = () => {
    dispatch(onLogin({ email, password }));
  };

  const userSignup = () => {
    dispatch(onSignup({ email, password, phone }));
  };

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup
    setEmail(""); // Clear fields when toggling
    setPassword("");
    setPhone("");
  };

  const loginForm = () => {
    return (
      <div
        className="row bg-secondary"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30rem",
        }}
      >
        <div className="col col-sm-5 col-md-4 col-lg-3 col-xl-2">
          <form>
            <div className="from-group" controlId="formBasicEmail">
              <label>Email address</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="from-group" controlId="formBasicPassword">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="row m-2 float-right">
              <button
                className="btn btn-primary mr-2"
                onClick={() => userLogin()}
                type="button"
              >
                Login
              </button>
              <button
                className="btn btn-secondary"
                onClick={toggleForm}
                type="button"
              >
                Switch to Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const signupForm = () => {
    return (
      <div
        className="row bg-secondary"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30rem",
        }}
      >
        <div className="col col-sm-5 col-md-4 col-lg-3 col-xl-2">
          <form>
            <div className="from-group" controlId="formBasicEmail">
              <label>Email address</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="from-group" controlId="formBasicPassword">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="from-group" controlId="formBasicPhone">
              <label>Phone</label>
              <input
                className="form-control"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="row m-2 float-right">
              <button
                className="btn btn-primary mr-2"
                onClick={() => userSignup()}
                type="button"
              >
                Signup
              </button>
              <button
                className="btn btn-secondary"
                onClick={toggleForm}
                type="button"
              >
                Switch to Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  if (token) {
    return <Profile />;
  } else {
    return (
      <div className="container-fluid">
        {isLogin ? loginForm() : signupForm()}
      </div>
    );
  }
};

export { Login };

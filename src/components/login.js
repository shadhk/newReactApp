import React, { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import DispatchContext from "../DispatchContext"
import logo from "../assets/images/logo.png"
import { toast } from "react-toastify"

const Login = () => {
  const appDispatch = useContext(DispatchContext)
  const history = useHistory()

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    const userStr = sessionStorage.getItem("user", { username, password })
    if (userStr) {
      appDispatch({ type: "login" })
      toast.success("You have been successfully logged in!")
      console.log("success", JSON.parse(userStr))
      history.push("/dashboard")
    } else {
      console.log("unsuccessful")
    }
  }

  return (
    <div className="splash-container">
      <div className="card m-t-100">
        <div className="card-header text-center">
          <Link to="/">
            <img className="logo-img" src={logo} alt="logo" />
          </Link>
          <span className="splash-description">Please enter your user information.</span>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                id="username"
                type="text"
                placeholder="Username"
                autoComplete="off"
                onChange={e => {
                  setUsername(e.target.value)
                }}
                value={username}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <div className="form-group">
              <label className="custom-control custom-checkbox">
                <input className="custom-control-input" type="checkbox" />
                <span className="custom-control-label">Remember Me</span>
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Sign in
            </button>
          </form>
        </div>
        <div className="card-footer bg-white p-0  ">
          <div className="card-footer-item card-footer-item-bordered">
            <Link to="/register" className="footer-link">
              Create An Account
            </Link>
          </div>
          <div className="card-footer-item card-footer-item-bordered">
            <Link to="/forget-password" className="footer-link">
              Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

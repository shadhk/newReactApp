import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import { toast } from "react-toastify"

const ForgetPassowrd = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (email === "") {
      toast.info("Check Again. Email should be correct.")
    } else {
      toast.success("Sent Successfully. Please check inbox.")
      setEmail("")
    }
  }

  return (
    <div>
      <div className="splash-container">
        <div className="card m-t-100">
          <div className="card-header text-center">
            <img className="logo-img" src={logo} alt="logo" />
            <span className="splash-description">Please enter your user information.</span>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <p>Don't worry, we'll send you an email to reset your password.</p>
              <div className="form-group">
                <input className="form-control form-control-lg" type="email" name="email" required="" placeholder="Your Email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="form-group pt-1">
                <button className="btn btn-block btn-primary btn-xl">Reset Password</button>
              </div>
            </form>
          </div>
          <div className="card-footer text-center">
            <span>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassowrd

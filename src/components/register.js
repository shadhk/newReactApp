import React, { useEffect, useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { useImmerReducer } from "use-immer"
import { CSSTransition } from "react-transition-group"
import { toast } from "react-toastify"
import DispatchContext from "../DispatchContext"

const RegisterUser = () => {
  const history = useHistory()
  const appDispatch = useContext(DispatchContext)

  const initialState = {
    username: {
      value: "",
      hasErrors: false,
      message: "",
      isUnique: false
    },
    email: {
      value: "",
      hasErrors: false,
      message: "",
      isUnique: false
    },
    password: {
      value: "",
      hasErrors: false,
      message: ""
    },
    confirmPassword: {
      value: "",
      hasErrors: false,
      message: ""
    },
    submitCount: 0
  }

  const ourReducer = (draft, action) => {
    switch (action.type) {
      case "usernameImmediately":
        draft.username.hasErrors = false
        draft.username.value = action.value
        if (draft.username.value.length > 30) {
          draft.username.hasErrors = true
          draft.username.message = "Username cannot exceed 30 characters."
        }
        if (draft.username.value && !/^([a-zA-Z0-9]+)$/.test(draft.username.value)) {
          draft.username.hasErrors = true
          draft.username.message = "Username can only contain letters and numbers."
        }
        return
      case "usernameAfterDelay":
        if (draft.username.value.length < 3) {
          draft.username.hasErrors = true
          draft.username.message = "Username must be at least 3 characters."
        }
        if (!draft.hasErrors && !action.noRequest) {
          draft.username.checkCount++
        }
        return
      case "usernameUniqueResults":
        if (action.value) {
          draft.username.hasErrors = true
          draft.username.isUnique = false
          draft.username.message = "Sorry, that username is already exist."
        } else {
          draft.username.isUnique = true
        }
        return
      case "emailImmediately":
        draft.email.hasErrors = false
        draft.email.value = action.value
        return
      case "emailAfterDelay":
        if (!/^\S+@\S+$/.test(draft.email.value)) {
          draft.email.hasErrors = true
          draft.email.message = "You must provide a valid email address."
        }
        if (!draft.email.hasErrors && !action.noRequest) {
          draft.email.checkCount++
        }
        return
      case "emailUniqueResults":
        if (action.value) {
          draft.email.hasErrors = true
          draft.email.isUnique = false
          draft.email.message = "That email is already being used."
        } else {
          draft.email.isUnique = true
        }
        return
      case "passwordImmediately":
        draft.password.hasErrors = false
        draft.password.value = action.value
        if (draft.password.value.length > 50) {
          draft.password.hasErrors = true
          draft.password.message = "Password cannot exceed 50 characters."
        }
        return
      case "passwordAfterDelay":
        if (draft.password.value.length < 8) {
          draft.password.hasErrors = true
          draft.password.message = "Password must be at least 8 characters."
        }
        return
      case "passwordConfirmationImmediately":
        draft.confirmPassword.hasErrors = false
        draft.confirmPassword.value = action.value
        if (draft.password.value.length > 50) {
          draft.confirmPassword.hasErrors = true
          draft.confirmPassword.message = "Password cannot exceed 50 characters."
        }
        return
      case "passwordConfirmationAfterDelay":
        if (draft.confirmPassword.value !== draft.password.value) {
          draft.confirmPassword.hasErrors = true
          draft.confirmPassword.message = "Password did not match, check again!"
        } else {
          draft.confirmPassword.hasErrors = false
          draft.confirmPassword.message = ""
        }
      case "submitForm":
        if (!draft.username.hasErrors && draft.username.isUnique && !draft.email.hasErrors && draft.email.isUnique && !draft.password.hasErrors && !draft.confirmPassword.hasErrors) {
          draft.submitCount++
        }
        return
      default:
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.username.value) {
      const delay = setTimeout(() => dispatch({ type: "usernameAfterDelay" }), 800)
      return () => clearTimeout(delay)
    }
  }, [state.username.value, dispatch])

  useEffect(() => {
    if (state.email.value) {
      const delay = setTimeout(() => dispatch({ type: "emailAfterDelay" }), 800)
      return () => clearTimeout(delay)
    }
  }, [state.email.value, dispatch])

  useEffect(() => {
    if (state.password.value) {
      const delay = setTimeout(() => dispatch({ type: "passwordAfterDelay" }), 800)
      return () => clearTimeout(delay)
    }
  }, [state.password.value, dispatch])

  useEffect(() => {
    if (state.confirmPassword.value) {
      const delay = setTimeout(() => dispatch({ type: "passwordConfirmationAfterDelay" }), 800)
      return () => clearTimeout(delay)
    }
  }, [state.confirmPassword.value, dispatch])

  function handleSubmit(e) {
    e.preventDefault()
    try {
      dispatch({ type: "usernameImmediately", value: state.username.value })
      dispatch({ type: "usernameAfterDelay", value: state.username.value, noRequest: true })
      dispatch({ type: "emailImmediately", value: state.email.value })
      dispatch({ type: "emailAfterDelay", value: state.email.value, noRequest: true })
      dispatch({ type: "passwordImmediately", value: state.password.value })
      dispatch({ type: "passwordAfterDelay", value: state.password.value })
      dispatch({ type: "passwordConfirmationImmediately", value: state.password.value })
      dispatch({ type: "passwordConfirmationAfterDelay", value: state.confirmPassword.value })
      dispatch({ type: "submitForm" })

      const user = {
        username: state.username.value,
        email: state.email.value,
        password: state.password.value
      }

      if (user.username === "" && user.email === "" && user.password === "") {
        toast.error("Something is missing")
      } else {
        sessionStorage.setItem("user", JSON.stringify(user))
        appDispatch({ type: "login" })

        // Success Message
        toast.success("Registration Successful. Please Login.")
        history.push("/login")
      }
    } catch (err) {
      toast.error(err.response.user)
    }
  }

  return (
    <form className="splash-container" onSubmit={handleSubmit}>
      <div className="card m-t-100">
        <div className="card-header">
          <h3 className="mb-1">Registrations Form</h3>
          <p>Please enter your user information.</p>
        </div>
        <div className="card-body">
          <div className="form-group">
            <input className="form-control form-control-lg" type="text" name="nick" required="" placeholder="Username" autoComplete="off" onChange={e => dispatch({ type: "usernameImmediately", value: e.target.value })} />
            <CSSTransition in={state.username.hasErrors} timeout={330} classNames="liveValidateMessage" unmountOnExit>
              <div className="alert alert-danger small liveValidateMessage">{state.username.message}</div>
            </CSSTransition>
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg" type="email" name="email" required="" placeholder="E-mail" autoComplete="off" onChange={e => dispatch({ type: "emailImmediately", value: e.target.value })} />
            <CSSTransition in={state.email.hasErrors} timeout={330} classNames="liveValidateMessage" unmountOnExit>
              <div className="alert alert-danger small liveValidateMessage">{state.email.message}</div>
            </CSSTransition>
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg" id="pass1" type="password" required="" placeholder="Password" onChange={e => dispatch({ type: "passwordImmediately", value: e.target.value })} />
            <CSSTransition in={state.password.hasErrors} timeout={330} classNames="liveValidateMessage" unmountOnExit>
              <div className="alert alert-danger small liveValidateMessage">{state.password.message}</div>
            </CSSTransition>
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg" required="" placeholder="Confirm" type="password" onChange={e => dispatch({ type: "passwordConfirmationImmediately", value: e.target.value })} />
            <CSSTransition in={state.confirmPassword.hasErrors} timeout={330} classNames="liveValidateMessage" unmountOnExit>
              <div className="alert alert-danger small liveValidateMessage">{state.confirmPassword.message}</div>
            </CSSTransition>
          </div>
          <div className="form-group pt-2">
            <button className="btn btn-block btn-primary" type="submit">
              Register My Account
            </button>
          </div>
          <div className="form-group">
            <label className="custom-control custom-checkbox">
              <input className="custom-control-input" type="checkbox" />
              <span className="custom-control-label">
                By creating an account, you agree the <Link to="#">terms and conditions</Link>
              </span>
            </label>
          </div>
          <div className="form-group row pt-0">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
              <button className="btn btn-block btn-social btn-facebook " type="button">
                Facebook
              </button>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <button className="btn  btn-block btn-social btn-twitter" type="button">
                Twitter
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer bg-white">
          <p>
            Already member?{" "}
            <Link to="/login" className="text-secondary">
              Login Here.
            </Link>
          </p>
        </div>
      </div>
    </form>
  )
}

export default RegisterUser

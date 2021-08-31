import React, { useEffect } from "react"
import { useImmerReducer } from "use-immer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Login from "./components/login"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import RegisterUser from "./components/register"
import ForgetPassowrd from "./components/forget-password"
import Header from "./header"
import Sidebar from "./Sidebar"
import MainBody from "./main-body"
import Dashboard from "./components/dashboard"

function App() {
  const initialState = {
    loggedIn: Boolean(sessionStorage.getItem("users")),
    user: {
      username: sessionStorage.getItem("username"),
      password: sessionStorage.getItem("password")
    }
  }

  const ourReducer = (draft, action) => {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.data
        return
      case "logout":
        draft.loggedIn = false
        return
      default:
        return draft
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.loggedIn) {
      sessionStorage.setItem("user", state.user.username)
    } else {
      sessionStorage.removeItem("user")
    }
  }, [state.loggedIn])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <ToastContainer position="top-center" />
          <Header />

          <Switch>
            <Route path="/" exact>
              <MainBody />
            </Route>
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <RegisterUser />
            </Route>
            <Route path="/forget-password">
              <ForgetPassowrd />
            </Route>
            <Route path="/sidebar">
              <Sidebar />
            </Route>
          </Switch>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App

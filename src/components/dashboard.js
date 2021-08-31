import React from "react"
import Header from "../header"
import Sidebar from "../Sidebar"
import Content from "./content"
import Footer from "./footer"

const Dashboard = () => {
  return (
    <div className="dashboard-main-wrapper">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  )
}

export default Dashboard

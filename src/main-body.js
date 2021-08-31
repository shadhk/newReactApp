import React from "react"
import { Link } from "react-router-dom"

const MainBody = () => {
  return (
    <div>
      <div className="container-fluid dashboard-content mt-5">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card" id="pro-bars">
                  <h5 className="card-header">Welcome to my app.</h5>
                  <Link className="btn btn-md btn-primary" to={!sessionStorage.getItem("user") ? "/" : "/dashboard"}>
                    Dashboard
                  </Link>
                  <div className="card-body">
                    <div className="progress mb-3">
                      <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                        65%
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-3">
                      <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="card-body border-top">
                    <div className="row"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBody

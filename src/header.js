import React from "react"
import { Link, useHistory } from "react-router-dom"
import { toast } from "react-toastify"

const Header = () => {
  const history = useHistory()

  const handleLogout = e => {
    e.preventDefault()
    sessionStorage.clear("user")
    toast.info("Successfully logout.")
    history.push("/register")
    // window.location.href = '/'
  }

  return (
    <div className="dashboard-header">
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <Link className="navbar-brand" to="/">
          Concept
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right-top">
            <li className="nav-item">
              <div id="custom-search" className="top-search-bar">
                <input className="form-control" type="text" placeholder="Search.." />
              </div>
            </li>
            <li className="nav-item dropdown notification">
              <Link className="nav-link nav-icons" to="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-fw fa-bell"></i> <span className="indicator"></span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                <li>
                  <div className="notification-title"> Notification</div>
                  <div className="notification-list">
                    <div className="list-group">
                      <Link to="#" className="list-group-item list-group-item-action active">
                        <div className="notification-info">
                          <div className="notification-list-user-img">
                            <img src="src/assets/images/avatar-2.jpg" alt="" className="user-avatar-md rounded-circle" />
                          </div>
                          <div className="notification-list-user-block">
                            <span className="notification-list-user-name">Jeremy Rakestraw</span>accepted your invitation to join the team.
                            <div className="notification-date">2 min ago</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="list-group-item list-group-item-action">
                        <div className="notification-info">
                          <div className="notification-list-user-img">
                            <img src="src/assets/images/avatar-3.jpg" alt="" className="user-avatar-md rounded-circle" />
                          </div>
                          <div className="notification-list-user-block">
                            <span className="notification-list-user-name">John Abraham </span>is now following you
                            <div className="notification-date">2 days ago</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="list-group-item list-group-item-action">
                        <div className="notification-info">
                          <div className="notification-list-user-img">
                            <img src="assets/images/avatar-4.jpg" alt="" className="user-avatar-md rounded-circle" />
                          </div>
                          <div className="notification-list-user-block">
                            <span className="notification-list-user-name">Monaan Pechi</span> is watching your main repository
                            <div className="notification-date">2 min ago</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="#" className="list-group-item list-group-item-action">
                        <div className="notification-info">
                          <div className="notification-list-user-img">
                            <img src="assets/images/avatar-5.jpg" alt="" className="user-avatar-md rounded-circle" />
                          </div>
                          <div className="notification-list-user-block">
                            <span className="notification-list-user-name">Jessica Caruso</span>accepted your invitation to join the team.
                            <div className="notification-date">2 min ago</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list-footer">
                    {" "}
                    <Link to="#">View all notifications</Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown connection">
              <Link className="nav-link" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {" "}
                <i className="fas fa-fw fa-th"></i>{" "}
              </Link>
              <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
                <li className="connection-list">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                      <Link to="#" className="connection-item">
                        <img src="assets/images/github.png" alt="" /> <span>Github</span>
                      </Link>
                    </div>
                    <div clLinkssName="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                      <Link to="#" className="connection-item">
                        <img src="assets/images/dribbble.png" alt="" /> <span>Dribbble</span>
                      </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                      <Link to="#" className="connection-item">
                        <img src="assets/images/dropbox.png" alt="" /> <span>Dropbox</span>
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                      <Link to="#" className="connection-item">
                        <img src="assets/images/bitbucket.png" alt="" /> <span>Bitbucket</span>
                      </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                      <Link to="#" className="connection-item">
                        <img src="assets/images/mail_chimp.png" alt="" />
                        <span>Mail chimp</span>
                      </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                      <Link to="#" className="connection-item">
                        <img src="assets/images/slack.png" alt="" /> <span>Slack</span>
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="conntection-footer">
                    <Link to="#">More</Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown nav-user">
              {sessionStorage.getItem("user") ? (
                <Link onClick={handleLogout} className="nav-link" to="#">
                  <i className="fas fa-power-off mr-2"></i>Logout
                </Link>
              ) : (
                <Link className="nav-link" to="/register" id="" data-toggle="" aria-haspopup="false" aria-expanded="true">
                  Sign up
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header

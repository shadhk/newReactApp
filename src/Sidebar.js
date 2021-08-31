import React from "react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="nav-left-sidebar sidebar-dark">
      <div className="menu-list">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="d-xl-none d-lg-none" to="/dashboard">
            Dashboard
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li className="nav-divider">Menu</li>
              <li className="nav-item ">
                <Link className="nav-link active" to="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1">
                  <i className="fa fa-fw fa-user-circle"></i>Dashboard <span className="badge badge-success">6</span>
                </Link>
                <div id="submenu-1" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="index.html" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1-2" aria-controls="submenu-1-2">
                        E-Commerce
                      </Link>
                      <div id="submenu-1-2" className="collapse submenu">
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <Link className="nav-link" to="../index.html">
                              E Commerce Dashboard
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="../ecommerce-product.html">
                              Product List
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="../ecommerce-product-single.html">
                              Product Single
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="../ecommerce-product-checkout.html">
                              Product Checkout
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="../dashboard-finance.html">
                        Finance
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="../dashboard-sales.html">
                        Sales
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1-1" aria-controls="submenu-1-1">
                        Infulencer
                      </Link>
                      <div id="submenu-1-1" className="collapse submenu">
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <Link className="nav-link" to="../dashboard-influencer.html">
                              Influencer
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="../influencer-finder.html">
                              Influencer Finder
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="../influencer-profile.html">
                              Influencer Profile
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2">
                  <i className="fa fa-fw fa-rocket"></i>UI Elements
                </Link>
                <div id="submenu-2" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="cards.html">
                        Cards <span className="badge badge-secondary">New</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="general.html">
                        General
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="carousel.html">
                        Carousel
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="listgroup.html">
                        List Group
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="typography.html">
                        Typography
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="accordions.html">
                        Accordions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="tabs.html">
                        Tabs
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3">
                  <i className="fas fa-fw fa-chart-pie"></i>Chart
                </Link>
                <div id="submenu-3" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="chart-c3.html">
                        C3 Charts
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="chart-chartist.html">
                        Chartist Charts
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="chart-charts.html">
                        Chart
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="chart-morris.html">
                        Morris
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="chart-sparkline.html">
                        Sparkline
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="chart-gauge.html">
                        Guage
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4">
                  <i className="fab fa-fw fa-wpforms"></i>Forms
                </Link>
                <div id="submenu-4" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="form-elements.html">
                        Form Elements
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="form-validation.html">
                        Parsely Validations
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="multiselect.html">
                        Multiselect
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5">
                  <i className="fas fa-fw fa-table"></i>Tables
                </Link>
                <div id="submenu-5" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="general-table.html">
                        General Tables
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="data-tables.html">
                        Data Tables
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-divider">Features</li>
              <li className="nav-item">
                <Link className="nav-link" to="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-6" aria-controls="submenu-6">
                  <i className="fas fa-fw fa-file"></i>Pages
                </Link>
                <div id="submenu-6" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="invoice.html">
                        Invoice
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="blank-page.html">
                        Blank Page
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="blank-page-header.html">
                        Blank Page Header
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="login.html">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="404-page.html">
                        404 page
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="sign-up.html">
                        Sign up Page
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="forgot-password.html">
                        Forgot Password
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="pricing.html">
                        Pricing Tables
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="timeline.html">
                        Timeline
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="calendar.html">
                        Calendar
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="sortable-nestable-lists.html">
                        Sortable/Nestable List
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="widgets.html">
                        Widgets
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="media-object.html">
                        Media Objects
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="cropper-image.html">
                        Cropper
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="color-picker.html">
                        Color Picker
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-7" aria-controls="submenu-7">
                  <i className="fas fa-fw fa-inbox"></i>Apps <span className="badge badge-secondary">New</span>
                </Link>
                <div id="submenu-7" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="inbox.html">
                        Inbox
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="email-details.html">
                        Email Detail
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="email-compose.html">
                        Email Compose
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="message-chat.html">
                        Message Chat
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-8" aria-controls="submenu-8">
                  <i className="fas fa-fw fa-columns"></i>Icons
                </Link>
                <div id="submenu-8" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="icon-fontawesome.html">
                        FontAwesome Icons
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="icon-material.html">
                        Material Icons
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="icon-simple-lineicon.html">
                        Simpleline Icon
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="icon-themify.html">
                        Themify Icon
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="icon-flag.html">
                        Flag Icons
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="icon-weather.html">
                        Weather Icon
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-9" aria-controls="submenu-9">
                  <i className="fas fa-fw fa-map-marker-alt"></i>Maps
                </Link>
                <div id="submenu-9" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="map-google.html">
                        Google Maps
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="map-vector.html">
                        Vector Maps
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-10" aria-controls="submenu-10">
                  <i className="fas fa-f fa-folder"></i>Menu Level
                </Link>
                <div id="submenu-10" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Level 1
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-11" aria-controls="submenu-11">
                        Level 2
                      </Link>
                      <div id="submenu-11" className="collapse submenu">
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <Link className="nav-link" to="#">
                              Level 1
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="#">
                              Level 2
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Level 3
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar

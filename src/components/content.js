import React from "react"

const Content = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-ecommerce">
        <div className="container-fluid dashboard-content ">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-header">
                <h2 className="pageheader-title">E-commerce Dashboard Template </h2>
                <p className="pageheader-text">Nulla euismod urna eros, sit amet scelerisque torton lectus vel mauris facilisis faucibus at enim quis massa lobortis rutrum.</p>
                <div className="page-breadcrumb">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#" className="breadcrumb-link">
                          Dashboard
                        </a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        E-Commerce Dashboard Template
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="text-muted">Total Revenue</h5>
                  <div className="metric-value d-inline-block">
                    <h1 className="mb-1">$12099</h1>
                  </div>
                  <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                    <span>
                      <i className="fa fa-fw fa-arrow-up"></i>
                    </span>
                    <span>5.86%</span>
                  </div>
                </div>
                <div id="sparkline-revenue"></div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="text-muted">Affiliate Revenue</h5>
                  <div className="metric-value d-inline-block">
                    <h1 className="mb-1">$12099</h1>
                  </div>
                  <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                    <span>
                      <i className="fa fa-fw fa-arrow-up"></i>
                    </span>
                    <span>5.86%</span>
                  </div>
                </div>
                <div id="sparkline-revenue2"></div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="text-muted">Refunds</h5>
                  <div className="metric-value d-inline-block">
                    <h1 className="mb-1">0.00</h1>
                  </div>
                  <div className="metric-label d-inline-block float-right text-primary font-weight-bold">
                    <span>N/A</span>
                  </div>
                </div>
                <div id="sparkline-revenue3"></div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="text-muted">Avg. Revenue Per User</h5>
                  <div className="metric-value d-inline-block">
                    <h1 className="mb-1">$28000</h1>
                  </div>
                  <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                    <span>-2.00%</span>
                  </div>
                </div>
                <div id="sparkline-revenue4"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-12 col-md-6 col-sm-12 col-12">
              <div className="card">
                <h5 className="card-header">Recent Orders</h5>
                <div className="card-body p-0">
                  <div className="table-responsive"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card">
                <h5 className="card-header">Customer Acquisition</h5>
                <div className="card-body">
                  <div className="ct-chart ct-golden-section" style={{ height: "354px" }}></div>
                  <div className="text-center">
                    <span className="legend-item mr-2">
                      <span className="fa-xs text-primary mr-1 legend-tile">
                        <i className="fa fa-fw fa-square-full"></i>
                      </span>
                      <span className="legend-text">Returning</span>
                    </span>
                    <span className="legend-item mr-2">
                      <span className="fa-xs text-secondary mr-1 legend-tile">
                        <i className="fa fa-fw fa-square-full"></i>
                      </span>
                      <span className="legend-text">First Time</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card">
                <h5 className="card-header"> Product Category</h5>
                <div className="card-body">
                  <div className="ct-chart-category ct-golden-section" style={{ height: "315px" }}></div>
                  <div className="text-center m-t-40">
                    <span className="legend-item mr-3">
                      <span className="fa-xs text-primary mr-1 legend-tile">
                        <i className="fa fa-fw fa-square-full "></i>
                      </span>
                      <span className="legend-text">Man</span>
                    </span>
                    <span className="legend-item mr-3">
                      <span className="fa-xs text-secondary mr-1 legend-tile">
                        <i className="fa fa-fw fa-square-full"></i>
                      </span>
                      <span className="legend-text">Woman</span>
                    </span>
                    <span className="legend-item mr-3">
                      <span className="fa-xs text-info mr-1 legend-tile">
                        <i className="fa fa-fw fa-square-full"></i>
                      </span>
                      <span className="legend-text">Accessories</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="card">
                <div className="card-header">
                  <div className="float-right">
                    <select className="custom-select">
                      <option selected>Today</option>
                      <option value="1">Weekly</option>
                      <option value="2">Monthly</option>
                      <option value="3">Yearly</option>
                    </select>
                  </div>
                  <h5 className="mb-0"> Product Sales</h5>
                </div>
                <div className="card-body">
                  <div className="ct-chart-product ct-golden-section"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card border-3 border-top border-top-primary">
            <div className="card-body">
              <h5 className="text-muted">Sales</h5>
              <div className="metric-value d-inline-block">
                <h1 className="mb-1">$12099</h1>
              </div>
              <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                <span className="icon-circle-small icon-box-xs text-success bg-success-light">
                  <i className="fa fa-fw fa-arrow-up"></i>
                </span>
                <span className="ml-1">5.86%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
          <div className="card border-3 border-top border-top-primary">
            <div className="card-body">
              <h5 className="text-muted">New Customer</h5>
              <div className="metric-value d-inline-block">
                <h1 className="mb-1">1245</h1>
              </div>
              <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                <span className="icon-circle-small icon-box-xs text-success bg-success-light">
                  <i className="fa fa-fw fa-arrow-up"></i>
                </span>
                <span className="ml-1">10%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
          <div className="card border-3 border-top border-top-primary">
            <div className="card-body">
              <h5 className="text-muted">Visitor</h5>
              <div className="metric-value d-inline-block">
                <h1 className="mb-1">13000</h1>
              </div>
              <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                <span className="icon-circle-small icon-box-xs text-success bg-success-light">
                  <i className="fa fa-fw fa-arrow-up"></i>
                </span>
                <span className="ml-1">5%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
          <div className="card border-3 border-top border-top-primary">
            <div className="card-body">
              <h5 className="text-muted">Total Orders</h5>
              <div className="metric-value d-inline-block">
                <h1 className="mb-1">1340</h1>
              </div>
              <div className="metric-label d-inline-block float-right text-danger font-weight-bold">
                <span className="icon-circle-small icon-box-xs text-danger bg-danger-light bg-danger-light ">
                  <i className="fa fa-fw fa-arrow-down"></i>
                </span>
                <span className="ml-1">4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
          <div className="card">
            <h5 className="card-header">Revenue by Category</h5>
            <div className="card-body">
              <div id="c3chart_category" style={{ height: "420px" }}></div>
            </div>
          </div>
        </div>

        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
          <div className="card">
            <h5 className="card-header"> Total Revenue</h5>
            <div className="card-body">
              <div id="morris_totalrevenue"></div>
            </div>
            <div className="card-footer">
              <p className="display-7 font-weight-bold">
                <span className="text-primary d-inline-block">$26,000</span>
                <span className="text-success float-right">+9.45%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <h5 className="card-header"> Sales By Social Source</h5>
            <div className="card-body p-0">
              <ul className="social-sales list-group list-group-flush">
                <li className="list-group-item social-sales-content">
                  <span className="social-sales-icon-circle facebook-bgcolor mr-2">
                    <i className="fab fa-facebook-f"></i>
                  </span>
                  <span className="social-sales-name">Facebook</span>
                  <span className="social-sales-count text-dark">120 Sales</span>
                </li>
                <li className="list-group-item social-sales-content">
                  <span className="social-sales-icon-circle twitter-bgcolor mr-2">
                    <i className="fab fa-twitter"></i>
                  </span>
                  <span className="social-sales-name">Twitter</span>
                  <span className="social-sales-count text-dark">99 Sales</span>
                </li>
                <li className="list-group-item social-sales-content">
                  <span className="social-sales-icon-circle instagram-bgcolor mr-2">
                    <i className="fab fa-instagram"></i>
                  </span>
                  <span className="social-sales-name">Instagram</span>
                  <span className="social-sales-count text-dark">76 Sales</span>
                </li>
                <li className="list-group-item social-sales-content">
                  <span className="social-sales-icon-circle pinterest-bgcolor mr-2">
                    <i className="fab fa-pinterest-p"></i>
                  </span>
                  <span className="social-sales-name">Pinterest</span>
                  <span className="social-sales-count text-dark">56 Sales</span>
                </li>
                <li className="list-group-item social-sales-content">
                  <span className="social-sales-icon-circle googleplus-bgcolor mr-2">
                    <i className="fab fa-google-plus-g"></i>
                  </span>
                  <span className="social-sales-name">Google Plus</span>
                  <span className="social-sales-count text-dark">36 Sales</span>
                </li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn-primary-link">
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <h5 className="card-header"> Sales By Traffic Source</h5>
            <div className="card-body p-0">
              <ul className="traffic-sales list-group list-group-flush">
                <li className="traffic-sales-content list-group-item ">
                  <span className="traffic-sales-name">Direct</span>
                  <span className="traffic-sales-amount">
                    $4000.00{" "}
                    <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light">
                      <i className="fa fa-fw fa-arrow-up"></i>
                    </span>
                    <span className="ml-1 text-success">5.86%</span>
                  </span>
                </li>
                <li className="traffic-sales-content list-group-item">
                  <span className="traffic-sales-name">
                    Search
                    <span className="traffic-sales-amount">
                      $3123.00{" "}
                      <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light">
                        <i className="fa fa-fw fa-arrow-up"></i>
                      </span>
                      <span className="ml-1 text-success">5.86%</span>
                    </span>
                  </span>
                </li>
                <li className="traffic-sales-content list-group-item">
                  <span className="traffic-sales-name">
                    Social
                    <span className="traffic-sales-amount ">
                      $3099.00{" "}
                      <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light">
                        <i className="fa fa-fw fa-arrow-up"></i>
                      </span>
                      <span className="ml-1 text-success">5.86%</span>
                    </span>
                  </span>
                </li>
                <li className="traffic-sales-content list-group-item">
                  <span className="traffic-sales-name">
                    Referrals
                    <span className="traffic-sales-amount ">
                      $2220.00{" "}
                      <span className="icon-circle-small icon-box-xs text-danger ml-4 bg-danger-light">
                        <i className="fa fa-fw fa-arrow-down"></i>
                      </span>
                      <span className="ml-1 text-danger">4.02%</span>
                    </span>
                  </span>
                </li>
                <li className="traffic-sales-content list-group-item ">
                  <span className="traffic-sales-name">
                    Email
                    <span className="traffic-sales-amount">
                      $1567.00{" "}
                      <span className="icon-circle-small icon-box-xs text-danger ml-4 bg-danger-light">
                        <i className="fa fa-fw fa-arrow-down"></i>
                      </span>
                      <span className="ml-1 text-danger">3.86%</span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn-primary-link">
                View Details
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-12 col-md-6 col-sm-12 col-12">
          <div className="card">
            <h5 className="card-header">Sales By Country Traffic Source</h5>
            <div className="card-body p-0">
              <ul className="country-sales list-group list-group-flush">
                <li className="country-sales-content list-group-item">
                  <span className="mr-2">
                    <i className="flag-icon flag-icon-us" title="us" id="us"></i>{" "}
                  </span>
                  <span className="">United States</span>
                  <span className="float-right text-dark">78%</span>
                </li>
                <li className="list-group-item country-sales-content">
                  <span className="mr-2">
                    <i className="flag-icon flag-icon-ca" title="ca" id="ca"></i>
                  </span>
                  <span className="">Canada</span>
                  <span className="float-right text-dark">7%</span>
                </li>
                <li className="list-group-item country-sales-content">
                  <span className="mr-2">
                    <i className="flag-icon flag-icon-ru" title="ru" id="ru"></i>
                  </span>
                  <span className="">Russia</span>
                  <span className="float-right text-dark">4%</span>
                </li>
                <li className="list-group-item country-sales-content">
                  <span className=" mr-2">
                    <i className="flag-icon flag-icon-in" title="in" id="in"></i>
                  </span>
                  <span className="">India</span>
                  <span className="float-right text-dark">12%</span>
                </li>
                <li className="list-group-item country-sales-content">
                  <span className=" mr-2">
                    <i className="flag-icon flag-icon-fr" title="fr" id="fr"></i>
                  </span>
                  <span className="">France</span>
                  <span className="float-right text-dark">16%</span>
                </li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn-primary-link">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content

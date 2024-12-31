import React from "react";
const Dashboard = () => {
  return (
    <div className="container-fluid about  py-5">
      <h1 className="text-center">Protect Environment</h1>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-xl-5">
            <div className="h-100">
              <img src="/about-1.ico" className="img-fluid w-100 h-100" alt="Image" />
            </div>
          </div>
          <div className="col-xl-7">
            <h5 className="text-uppercase text-primary">About Us</h5>
            <h1 className="mb-4">Our main goal is to protect environment</h1>
            <p className="fs-5 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
            </p>
            <div className="tab-className bg-secondary p-4">
              <ul className="nav d-flex mb-2">
                <li className="nav-item mb-3">
                  <a className="d-flex py-2 text-center bg-white active" data-bs-toggle="pill">
                    <span className="text-dark" style={{ width: '150px' }}>About</span>
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a className="d-flex py-2 mx-3 text-center bg-white" data-bs-toggle="pill">
                    <span className="text-dark" style={{ width: '150px' }}>Mission</span>
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a className="d-flex py-2 text-center bg-white" data-bs-toggle="pill">
                    <span className="text-dark" style={{ width: '150px' }}>Vision</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex">
                        <div className="text-start my-auto">
                          <h5 className="text-uppercase mb-3">Lorem Ipsum 1</h5>
                          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has
                          </p>
                          <div className="d-flex align-items-center justify-content-start">
                            <a className="btn-hover-bg btn btn-primary text-white py-2 px-4"
                              href="https://oceanservice.noaa.gov/ocean/earthday.html">Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

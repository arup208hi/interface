import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <section className="vh-100" style={{backgroundImage: "url('./images/bi6.jpg')", backgroundSize: "cover"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: "1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{borderRadius: "1rem 0 0 1rem"}}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{color: "#ff6219"}}
                          ></i>
                          <span class="h1 fw-bold mb-0" style={{color: "#9A616D"}}>Kriova</span>
                        </div>

                        <h5
                          class="fw-normal mb-3 pb-3"
                          style={{letterSpacing: "1px"}}
                        >
                          Sign into your account
                        </h5>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            class="form-control form-control-lg"
                          />
                          <label class="form-label" for="form2Example27">
                            Password
                          </label>
                        </div>

                        <div class="pt-1 mb-4">
                          <button
                            class="btn btn-dark btn-lg btn-block"
                            type="button"
                          >
                            <NavLink to="/home">Login</NavLink>
                          </button>
                        </div>

                        <NavLink class="small text-muted" to="/forget">
                          Forgot password?
                        </NavLink>
                        <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>
                          Don't have an account?
                          <NavLink to="/" style={{color: "#393f81"}}>
                            Register here
                          </NavLink>
                        </p>
                        <a href="#!" class="small text-muted mr-2">
                          Terms of use.
                        </a>
                        <a href="#!" class="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;

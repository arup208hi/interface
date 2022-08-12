import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info text-center px-4">
        <div className="container">
          <h1 className="navbar-brand">Kriova</h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/signin">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row px-2">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 pt-5">
            <div
              className="carousel slide pt-5"
              data-bs-ride="carousel"
              id="carouselExampleControls"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h1
                    className="animated fadeInDown"
                    style={{ animationDelay: "1s" }}
                  >
                    Website <span className="text-info">Development</span>
                  </h1>
                  <p
                    className="animated fadeInUp"
                    style={{ animationDelay: "2s" }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illum facilis quam corporis ab deserunt natus sit fugit sint beatae veniam voluptatum tempora ad iusto at et officiis fuga reiciendis fugiat, consequuntur possimus? Magni suscipit error culpa amet quo laboriosam consequuntur quibusdam aliquid? Ad laudantium vitae deleniti reprehenderit pariatur consequuntur ipsa ullam ratione? Ipsum, facilis. Ipsum est earum eveniet expedita!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <img alt="" className="img-fluid" src="./images/2.png" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div class="card col-sm" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src="./images/card1.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, similique, mollitia incidunt corporis unde eligendi assumenda odit eveniet est deleniti cupiditate corrupti ullam tenetur cum amet deserunt expedita sequi et quo aut culpa officia.
              </p>
            </div>
          </div>
          <div class="card col-sm mx-5 " style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src="./images/card2.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe recusandae quae necessitatibus quia placeat nemo numquam corporis itaque consequatur! Odit?
              </p>
            </div>
          </div>
          <div class="card col-sm" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src="./images/card3.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nam commodi non aperiam minima cumque accusamus nemo sapiente odio atque, at, numquam illo quos ducimus rem sed fuga iusto veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

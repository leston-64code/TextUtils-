import React, { useState } from "react";

export default function Navbar(props) {
  const [mode, setMode] = useState("light");
  const changerdark = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const [modetext, setModetext] = useState("dark");
  const textcolorchanger = () => {
    if (modetext === "dark") {
      setModetext("light");
    } else {
      setModetext("dark");
    }
  };

  const [pertext, setPertext] = useState("Enable Darkmode");
  const perchanger = () => {
    if (pertext === "Enable Darkmode") {
      setPertext("Disable Darkmode");
    } else {
      setPertext("Enable Darkmode");
    }
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  {props.about}
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <div
              className="form-check form-switch mx-2"
              onClick={() => {
                changerdark();
                textcolorchanger();
                perchanger();
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${modetext}`}
                htmlFor="flexSwitchCheckDefault"
              >
                {pertext}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}


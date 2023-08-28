import { useContext } from "react";
import { useCallback, useState, useSyncExternalStore } from "react";

export default function NavBar(prop) {

  const[colorMode,SetcolorMode]=useState("")

const colorvalue = (event) => {
   let newValue = event.target.value
   SetcolorMode(newValue);
   prop.toggelColorMode(colorMode);
}


  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${prop.Mode} navbar-${prop.Mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {prop.Title}
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
                <a className="nav-link active" aria-current="page" href="/">
                  {prop.Home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">
                  {prop.Abot}
                </a>
              </li>
            </ul>

            {/* color pallet */}

            <div>
              <label for="colorselect" style={{ color: prop.textColor }}>
                color mode </label>
              <input
              
              className="colorCode btn "
                type="color"
                id="colorselector"
                value={colorvalue}
                name="colorselect"
                onChange={colorvalue}
              />
            </div>

            {/* switch button */}

            <div className="form-check form-switch">
              <input
              value="1"
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={prop.toggeldarkmode}/>

              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault">
                {prop.text}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

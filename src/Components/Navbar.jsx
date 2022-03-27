import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
    return(
        <div className="pt-5">
            <div className="container">
            <ul>
                <li className="d-lg-inline pb-4">
                    <NavLink to="/" className="text-link nav-card me-3" activeClassName="active">
                    All
                    </NavLink>
                </li>
                <li className="d-lg-inline pb-4">
                    <NavLink to="/tech" className="text-link nav-card me-3" activeClassName="active">
                    Tech
                    </NavLink>
                </li>
                <li className="d-lg-inline pb-4">
                    <NavLink to="/politics" className="text-link nav-card me-3" activeClassName="active">
                    Politics
                    </NavLink>
                </li>
                <li className="d-lg-inline pb-4">
                    <NavLink to="/entertainment" className="text-link nav-card me-3" activeClassName="active">
                    Entertainment
                    </NavLink>
                </li>
                <li className="d-lg-inline pb-4">
                    <NavLink to="/fashion" className="text-link nav-card me-3" activeClassName="active">
                    Fashion
                    </NavLink>
                </li>
                <li className="d-lg-inline pb-4">
                    <NavLink to="/sport" className="text-link nav-card me-3" activeClassName="active">
                    Sports
                    </NavLink>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
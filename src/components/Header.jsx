import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserData } from "../UserContext";
 
 

export const Header = () => {

  const { searchQuery, setSearchQuery } = UserData();

   
  const active = "text-primary";
  const inactive = "text-danger";

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">HSBC Bank Account</Link>
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
                <NavLink className={({ isActive }) => (isActive ? active : inactive)} to="/" end>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? active : inactive)} to="/products/categories">Category</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? active : inactive)} to="/movie/top">Top Rated</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? active : inactive)} to="/movie/upcoming">Upcoming</NavLink>
              </li>
            </ul>
             <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery (e.target.value)} placeholder="enter the search" />
          </div>
        </div>
      </nav>
    </header>
  );
};

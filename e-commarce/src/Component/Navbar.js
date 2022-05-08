import React from "react";
import { BsCartCheck, BsFillPersonFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Product from "./Product";

export default function Navbar() {
  return (
    <div className="nav-section">
      <img src="./images/Logo.png" width="180px" alt="logo" />
      {/* <div className="search-box">
        <input placeholder="Search Your Favriate" />
        <button>
          <BsSearch width="16px" />
        </button>
      </div> */}

      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Your Favourite"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          <BsSearch />
        </button>
      </form>

      <nav>
        <ul>
          <li>
            <Link to="/" className="menu-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="menu-item">
              Product{Product}
            </Link>
          </li>
          <li>
            <Link to="/prime" className="menu-item">
              Prime
            </Link>
          </li>
        </ul>
      </nav>

      <div className="`icons"></div>
      <p
        className="icon--title
      "
      >
        <BsCartCheck />{" "}
        <Link to="/Cart" className="menu-item">
          Cart {Cart}
        </Link>
      </p>
      <p
        className="icon--title
      "
      >
        <BsFillPersonFill />{" "}
        <Link to="/login" className="menu-item">
          Login
        </Link>
      </p>
    </div>
  );
}

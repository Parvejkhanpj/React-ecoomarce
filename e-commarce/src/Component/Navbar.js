import React from "react";
import { BsCartCheck, BsFillPersonFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-section">
      <img src="./images/Logo.png" width="180px" />
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
          Search
        </button>
      </form>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/product">Product</Link>
          </li>
          <li>
            {" "}
            <Link to="/prime">Prime</Link>
          </li>
        </ul>
      </nav>

      <div className="`icons"></div>
      <p
        className="icon--title
      "
      >
        <BsCartCheck /> <Link to="/Cart">Cart</Link>
      </p>
      <p
        className="icon--title
      "
      >
        <BsFillPersonFill /> <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

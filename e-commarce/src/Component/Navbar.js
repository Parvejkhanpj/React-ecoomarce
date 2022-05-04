import React from "react";
import { BsCartCheck, BsFillPersonFill, BsSearch } from "react-icons/bs";

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
          <li>Home</li>
          <li>Products</li>
          <li>Login</li>
        </ul>
      </nav>

      <div className="`icons"></div>
      <p
        className="icon--title
      "
      >
        <BsCartCheck /> Cart
      </p>
      <p
        className="icon--title
      "
      >
        <BsFillPersonFill /> Login
      </p>
    </div>
  );
}

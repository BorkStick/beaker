import React from "react";
import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Portal
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/installs" class="nav-link">
                  Installs
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/users" class="nav-link">
                  Users
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2 rounded-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-light rounded-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

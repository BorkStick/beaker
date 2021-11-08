import React from "react";

export default function SearchUser() {
  return (
    <div>
          <h3>Search User</h3>
    <div className="input-group mb-3">
        <input type="text" className="form-control rounded-0" placeholder="Username" />
        <div className="input-group-append">
          <button
            className="btn btn-dark rounded-0"
            type="button"
            id="button-addon2"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

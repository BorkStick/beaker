import React from "react";
import { Link } from "react-router-dom";

export default function AddUser() {
  return (
    <div>
      <h3>Add User</h3>
      <div className="input-group mb-3">
      <Link to="/add/user">
          <button
            className="btn btn-dark rounded-0"
            type="button"
            id="button-addon2"
          >
            <i className="fas fa-plus"></i>
          </button>
          </Link>
        
      </div>
    </div>
  );
}

import React from "react";

export default function AddInstall() {
  return (
    <div>
      <h3>Add Install</h3>
      <div className="input-group mb-3">
        <input type="text" className="form-control rounded-0" placeholder="Install Name" />
        <div className="input-group-append">
          <button
            className="btn btn-dark rounded-0"
            type="button"
            id="button-addon2"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

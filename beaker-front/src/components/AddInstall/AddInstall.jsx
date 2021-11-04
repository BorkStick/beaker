import React from "react";

export default function AddInstall() {
  return (
    <div>
        <h3>Add Install</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">
            Install Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

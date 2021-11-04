import React from "react";

export default function SearchInstall() {
  return (
    <div>
        <h3>Search Install</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">
            Search Install
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

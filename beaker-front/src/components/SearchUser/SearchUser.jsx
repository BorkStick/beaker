import React from "react";

export default function SearchUser() {
  return (
    <div>
      <h3>Search User</h3>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Search Users
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

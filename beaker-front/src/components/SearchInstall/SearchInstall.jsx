import React from "react";

export default function SearchInstall() {
  return (
    <div>
        <h3>Search Install</h3>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Search Install
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

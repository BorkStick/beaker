import React from "react";

export default function SearchUser() {
  return (
    <div>
      <h3>Search User</h3>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Search Users
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

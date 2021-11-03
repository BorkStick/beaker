import React from "react";

export default function AddInstall() {
  return (
    <div>
        <h3>Add Install</h3>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Install Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          
        </div>
        
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

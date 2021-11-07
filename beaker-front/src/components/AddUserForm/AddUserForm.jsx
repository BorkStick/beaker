import React from "react";

export default function AddUserForm() {
  return (
    <div>
      <form>
        <div class="form-group">
          <label>User Name</label>
          <input
            type="text"
            class="form-control rounded-0"
            placeholder="username"
            required
          />
        </div>
        <div class="form-group">
          <label>First Name</label>
          <input
            type="text"
            class="form-control rounded-0"
            placeholder="Terry"
            required
          />
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control rounded-0"
            placeholder="Fromit"
            required
          />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control rounded-0"
            placeholder="terry.fromit@bork.host"
            required
          />
        </div>

        <button type="submit" class="btn btn-dark rounded-0">
          Add
        </button>
      </form>
    </div>
  );
}

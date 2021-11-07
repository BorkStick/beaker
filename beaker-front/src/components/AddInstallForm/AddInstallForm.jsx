import React from "react";

export default function AddInstallForm() {
  return (
    <div>
      <form>
        <div class="form-group">
          <label>Install Name</label>
          <input
            type="text"
            class="form-control rounded-0"
            placeholder="install name"
            required
          />
        </div>
        <div class="form-group">
          <label>Temp Domain</label>
          <input
            type="text"
            class="form-control rounded-0"
            placeholder="installname.bork.host"
          />
        </div>
        <div class="form-group">
          <label>Domain</label>
          <input
            type="text"
            class="form-control rounded-0"
            placeholder="domain.com"
          />
        </div>

        <button type="submit" class="btn btn-dark rounded-0">
          Add
        </button>
      </form>
    </div>
  );
}

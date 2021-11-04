import React from "react";

export default function DangerButton(props) {
  return (
    <button
      type="button"
      className="btn btn-danger col-3 rounded-0"
      data-bs-toggle="button"
      autocomplete="off"
    >
      {props.button_text}
    </button>
  );
}

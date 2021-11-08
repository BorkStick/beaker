import React from "react";
import { Link } from "react-router-dom";

export default function EditButton(props) {

  return (
    <Link to={props.linkTo}>
    <button
      className="btn btn-dark rounded-0"
      type="button"
      id="button-addon2"
    >
      {props.button_text}
    </button>
  </Link>
  );
}

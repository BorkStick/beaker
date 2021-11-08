import React from "react";
import { Link } from "react-router-dom";

export default function AddButton(props) {

  return (
    <Link to={props.linkTo}>
    <button
      className="btn btn-dark rounded-0"
      type="button"
      id="button-addon2"
    >
      <i className="fas fa-plus"></i>
    </button>
  </Link>
  );
}

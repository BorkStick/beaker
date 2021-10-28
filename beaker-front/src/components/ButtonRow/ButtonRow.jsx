import React from "react";
import Button from "../Button/Button";

export default function ButtonRow() {
  return (
    <div className="d-flex gap-5 justify-content-center mx-auto">
      <Button button_text="Reset"/>
      <Button button_text="Disable"/>
      <Button button_text="Delete"/>
    </div>
  );
}
